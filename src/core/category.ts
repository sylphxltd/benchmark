/**
 * Category class - top-level container for benchmarks
 */

import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import type { CategoryConfig, GroupConfig, LibraryConfig, RunOptions, CategoryResults } from './types';
import { Group } from './group';
import { Library } from './library';
import { BenchmarkRunner } from './runner';

export class Category {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly emoji?: string;
  public readonly performanceTiers: CategoryConfig['performanceTiers'];

  private groups: Map<string, Group> = new Map();
  private libraries: Map<string, Library> = new Map();
  private runner: BenchmarkRunner;

  constructor(config: CategoryConfig) {
    this.id = config.id;
    this.name = config.name;
    this.description = config.description;
    this.emoji = config.emoji;
    this.performanceTiers = config.performanceTiers || [];

    this.runner = new BenchmarkRunner(this);

    console.log(`✓ Created category: ${this.name} (${this.id})`);
  }

  /**
   * Create a new group in this category
   */
  createGroup(config: GroupConfig): Group {
    if (this.groups.has(config.id)) {
      throw new Error(`Group '${config.id}' already exists in category '${this.id}'`);
    }

    const group = new Group(this, config);
    this.groups.set(config.id, group);

    console.log(`✓ Created group: ${group.title} (${config.id})`);

    return group;
  }

  /**
   * Register a library in this category
   */
  registerLibrary<TStore = any>(config: LibraryConfig<TStore>): Library<TStore> {
    if (this.libraries.has(config.id)) {
      throw new Error(`Library '${config.id}' already registered in category '${this.id}'`);
    }

    const library = new Library<TStore>(this, config);
    this.libraries.set(config.id, library as unknown as Library);

    console.log(`✓ Registered library: ${library.displayName} (${config.id})`);

    return library;
  }

  /**
   * Get all groups
   */
  getGroups(): Group[] {
    return Array.from(this.groups.values());
  }

  /**
   * Get a specific group
   */
  getGroup(id: string): Group | undefined {
    return this.groups.get(id);
  }

  /**
   * Get all libraries
   */
  getLibraries(): Library[] {
    return Array.from(this.libraries.values());
  }

  /**
   * Get a specific library
   */
  getLibrary(id: string): Library | undefined {
    return this.libraries.get(id);
  }

  /**
   * Validate the category structure
   */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check if there are libraries
    if (this.libraries.size === 0) {
      errors.push(`Category '${this.id}' has no registered libraries`);
    }

    // Check if there are groups
    if (this.groups.size === 0) {
      errors.push(`Category '${this.id}' has no groups`);
    }

    // Check each group has tests
    for (const group of this.groups.values()) {
      const tests = group.getTests();
      if (tests.length === 0) {
        errors.push(`Group '${group.id}' has no tests`);
      }

      // Check if all tests are implemented by at least one library
      for (const test of tests) {
        const implementedBy = Array.from(this.libraries.values()).filter((lib) =>
          lib.hasImplementation(test)
        );

        if (implementedBy.length === 0) {
          errors.push(`Test '${test.name}' in group '${group.id}' has no implementations`);
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Print summary of this category
   */
  printSummary(): void {
    console.log(`\n${this.emoji || '📦'} ${this.name}`);
    console.log(`   Libraries: ${this.libraries.size}`);
    console.log(`   Groups: ${this.groups.size}`);

    let totalTests = 0;
    for (const group of this.groups.values()) {
      totalTests += group.getTests().length;
    }
    console.log(`   Tests: ${totalTests}\n`);
  }

  /**
   * Run all benchmarks in this category
   */
  async run(options?: RunOptions): Promise<CategoryResults> {
    console.log(`\n🚀 Running benchmarks for: ${this.name}\n`);

    // Validate first
    const validation = this.validate();
    if (!validation.valid) {
      console.error('❌ Validation failed:\n');
      validation.errors.forEach((error) => console.error(`  - ${error}`));
      throw new Error('Category validation failed');
    }

    // Run benchmarks
    return await this.runner.run(options);
  }

  /**
   * Save benchmark results to files
   */
  async saveResults(results: CategoryResults): Promise<void> {
    const baseDir = process.cwd();
    const resultsDir = join(baseDir, 'results');

    // Helper function to slugify test names for filenames
    const slugify = (str: string): string => {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    };

    // Group results by library
    const resultsByLibrary = new Map<string, any[]>();

    for (const result of results.results) {
      if (!resultsByLibrary.has(result.library)) {
        resultsByLibrary.set(result.library, []);
      }
      resultsByLibrary.get(result.library)!.push(result);
    }

    let totalFiles = 0;

    // Save per-test files organized by library folders
    for (const [libraryId, libResults] of resultsByLibrary) {
      const library = this.getLibrary(libraryId);
      if (!library) continue;

      // Create library directory
      const libraryDir = join(resultsDir, libraryId);
      mkdirSync(libraryDir, { recursive: true });

      // Save each test result as a separate file
      for (const result of libResults) {
        const testSlug = slugify(result.test);
        const testFile = join(libraryDir, `${testSlug}.json`);

        const testData = {
          library: library.displayName,
          libraryId: libraryId,
          packageName: library.packageName,
          test: result.test,
          group: result.group,
          timestamp: results.timestamp,
          result: {
            opsPerSecond: result.result.opsPerSecond,
            meanTime: result.result.meanTime,
            variance: result.result.variance,
            p99: result.result.p99,
            samples: result.result.samples,
          },
        };

        writeFileSync(testFile, JSON.stringify(testData, null, 2));
        totalFiles++;
      }

      console.log(`  ✓ Saved ${libResults.length} test results for ${libraryId}`);
    }

    console.log(`\n✓ Saved ${totalFiles} test result files for ${resultsByLibrary.size} libraries`);
  }

  toString(): string {
    return `${this.name} (${this.id})`;
  }
}

/**
 * Factory function to create a new category
 */
export function createCategory(config: CategoryConfig): Category {
  return new Category(config);
}
