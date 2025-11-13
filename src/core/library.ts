/**
 * Library class - represents a library being benchmarked
 * Supports both legacy TestFunction and new multi-metric TestImplementation
 */

import type {
  LibraryConfig,
  TestFunction,
  TestContext,
  TestImplementation as TestImplementationType,
} from './types';
import type { Category } from './category';
import type { Test } from './test';

interface StoredTestImplementation<TStore = any> {
  test: Test;
  implementation: TestImplementationType<TStore>;
}

export class Library<TStore = any> {
  public readonly id: string;
  public readonly displayName: string;
  public readonly packageName: string;
  public readonly githubUrl: string;
  public readonly description?: string;
  public readonly category: Category;
  public readonly setup: LibraryConfig<TStore>['setup'];
  public readonly features: string[];

  private implementations: Map<string, StoredTestImplementation<TStore>> = new Map();

  constructor(category: Category, config: LibraryConfig<TStore>) {
    this.category = category;
    this.id = config.id;
    this.displayName = config.displayName;
    this.packageName = config.packageName;
    this.githubUrl = config.githubUrl;
    this.description = config.description;
    this.setup = config.setup;
    this.features = config.features || [];
  }

  /**
   * Implement a test for this library
   * Supports both legacy TestFunction and new TestImplementation types
   *
   * @param test - Test to implement
   * @param implementation - Either a plain function (legacy) or TestImplementation object (new)
   */
  implement(test: Test, implementation: TestFunction<TStore> | TestImplementationType<TStore>): void {
    // Validate test belongs to same category
    if (test.group.category.id !== this.category.id) {
      throw new Error(
        `Test '${test.name}' belongs to category '${test.group.category.id}', ` +
        `but library '${this.id}' belongs to '${this.category.id}'`
      );
    }

    if (this.implementations.has(test.id)) {
      console.warn(`  ⚠️  Test '${test.name}' already implemented for '${this.id}', overwriting`);
    }

    // Store implementation (supports both old and new types)
    this.implementations.set(test.id, {
      test,
      implementation: implementation as TestImplementationType<TStore>,
    });
    console.log(`  ✓ Implemented: ${this.id}.${test.name}`);
  }

  /**
   * Get implementation for a specific test (legacy - returns just function)
   * @deprecated Use getTestImplementation() for new code
   */
  getImplementation(test: Test): TestFunction<TStore> | undefined {
    const stored = this.implementations.get(test.id);
    if (!stored) return undefined;

    // If it's a plain function, return it
    if (typeof stored.implementation === 'function') {
      return stored.implementation;
    }

    // If it's a performance test object, return the run function
    if ('type' in stored.implementation && stored.implementation.type === 'performance') {
      return stored.implementation.run;
    }

    // For other types (size, memory, build, custom), return undefined
    // These need to be handled by the new runner
    return undefined;
  }

  /**
   * Get full test implementation (new API)
   */
  getTestImplementation(test: Test): TestImplementationType<TStore> | undefined {
    return this.implementations.get(test.id)?.implementation;
  }

  /**
   * Get all implemented tests
   */
  getImplementedTests(): Test[] {
    return Array.from(this.implementations.values()).map((stored) => stored.test);
  }

  /**
   * Check if a test is implemented
   */
  hasImplementation(test: Test): boolean {
    return this.implementations.has(test.id);
  }

  /**
   * Execute a test with this library
   * @deprecated Use runner.runTest() for new code. This is kept for backward compatibility.
   */
  async execute(test: Test): Promise<void> {
    const implementation = this.getTestImplementation(test);
    if (!implementation) {
      throw new Error(`Test '${test.name}' not implemented for library '${this.id}'`);
    }

    // Only support function-based tests in this legacy method
    if (typeof implementation !== 'function' &&
        (!('type' in implementation) || implementation.type !== 'performance')) {
      throw new Error(
        `Test '${test.name}' uses new implementation type '${(implementation as any).type}' ` +
        `which must be executed via runner.runTest()`
      );
    }

    // Get the actual function to execute
    const fn = typeof implementation === 'function'
      ? implementation
      : implementation.run;

    // Initialize if needed
    if (this.setup.init) {
      await this.setup.init();
    }

    // Create store
    const store = await this.setup.createStore();

    // Create context
    const ctx: TestContext<TStore> = {
      library: {
        id: this.id,
        displayName: this.displayName,
        packageName: this.packageName,
        githubUrl: this.githubUrl,
      },
      store,
      cleanup: this.setup.cleanup ? () => this.setup.cleanup!(store) : undefined,
    };

    // Execute test
    await fn(ctx);

    // Cleanup
    if (ctx.cleanup) {
      await ctx.cleanup();
    }
  }

  toString(): string {
    return `${this.displayName} (${this.id})`;
  }
}
