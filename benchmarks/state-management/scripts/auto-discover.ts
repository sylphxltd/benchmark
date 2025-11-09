#!/usr/bin/env node
/**
 * Auto-discovery system for benchmark libraries and test configurations
 * Scans directories and builds a comprehensive test matrix
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';

interface LibraryMetadata {
  name: string;
  displayName: string;
  category: string;
  tags: string[];
  supports: Record<string, boolean>;
  performance: Record<string, string>;
}

interface TestConfig {
  name: string;
  description: string;
  scales: any[];
  requiredMethods: string[];
}

interface TestScale {
  id: string;
  name: string;
  description: string;
  [key: string]: any; // 靈活的 scale 參數
}

export class AutoDiscovery {
  private category: string;
  private basePath: string;

  constructor(category: string, basePath: string = process.cwd()) {
    this.category = category;
    this.basePath = basePath;
  }

  /**
   * 發現所有庫
   */
  async discoverLibraries(): Promise<Array<{ dir: string; metadata: LibraryMetadata }>> {
    const librariesPath = join(this.basePath, 'libraries');

    if (!existsSync(librariesPath)) {
      console.warn(`Libraries directory not found: ${librariesPath}`);
      return [];
    }

    const libraryDirs = readdirSync(librariesPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const libraries = [];

    for (const dir of libraryDirs) {
      try {
        const metaPath = join(librariesPath, dir, 'meta.ts');
        if (!existsSync(metaPath)) {
          console.warn(`Metadata not found for library: ${dir}`);
          continue;
        }

        // 動態導入元數據
        const metaModule = await import(metaPath);
        const metadata = metaModule.metadata || metaModule.default?.metadata;

        if (metadata) {
          libraries.push({ dir, metadata });
        }
      } catch (error) {
        console.warn(`Failed to load metadata for ${dir}:`, error.message);
      }
    }

    return libraries;
  }

  /**
   * 發現所有測試類型
   */
  async discoverTestTypes(): Promise<Array<{ id: string; config: TestConfig }>> {
    const testTypesPath = join(this.basePath, 'test-types');

    if (!existsSync(testTypesPath)) {
      console.warn(`Test types directory not found: ${testTypesPath}`);
      return [];
    }

    const testTypeDirs = readdirSync(testTypesPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const testTypes = [];

    for (const dir of testTypeDirs) {
      try {
        const configPath = join(testTypesPath, dir, 'config.ts');
        if (!existsSync(configPath)) {
          console.warn(`Config not found for test type: ${dir}`);
          continue;
        }

        const configModule = await import(configPath);
        const config = configModule.config || configModule.default?.config;

        if (config) {
          testTypes.push({ id: dir, config });
        }
      } catch (error) {
        console.warn(`Failed to load config for test type ${dir}:`, error.message);
      }
    }

    return testTypes;
  }

  /**
   * 構建測試矩陣
   */
  async buildTestMatrix(): Promise<{
    libraries: Array<{ dir: string; metadata: LibraryMetadata }>;
    testTypes: Array<{ id: string; config: TestConfig }>;
    combinations: Array<{
      library: string;
      testType: string;
      scales: TestScale[];
      supported: boolean;
    }>;
  }> {
    const [libraries, testTypes] = await Promise.all([
      this.discoverLibraries(),
      this.discoverTestTypes()
    ]);

    const combinations = [];

    for (const library of libraries) {
      for (const testType of testTypes) {
        const supported = library.metadata.supports?.[testType.id] ?? false;
        combinations.push({
          library: library.dir,
          testType: testType.id,
          scales: testType.config.scales,
          supported
        });
      }
    }

    return {
      libraries,
      testTypes,
      combinations
    };
  }

  /**
   * 生成可運行的測試列表
   */
  generateTestList(matrix: any): Array<{
    library: string;
    testType: string;
    scale: TestScale;
    filename: string;
    testName: string;
  }> {
    const testList = [];

    for (const combination of matrix.combinations) {
      if (!combination.supported) continue;

      for (const scale of combination.scales) {
        const filename = `${combination.testType}-${scale.id}.bench.ts`;
        const testName = `${combination.library} - ${combination.testType} - ${scale.name}`;

        testList.push({
          library: combination.library,
          testType: combination.testType,
          scale,
          filename,
          testName
        });
      }
    }

    return testList;
  }
}

// CLI 接口
if (import.meta.url === `file://${process.argv[1]}`) {
  const category = process.argv[2];

  if (!category) {
    console.error('Usage: node auto-discover.ts <category>');
    process.exit(1);
  }

  const discovery = new AutoDiscovery(category);

  discovery.buildTestMatrix()
    .then(matrix => {
      console.log(`📊 Test Matrix for ${category}:`);
      console.log(`Libraries: ${matrix.libraries.length}`);
      console.log(`Test Types: ${matrix.testTypes.length}`);
      console.log(`Supported Combinations: ${matrix.combinations.filter(c => c.supported).length}`);

      const testList = discovery.generateTestList(matrix);
      console.log(`Generated Tests: ${testList.length}`);

      console.log('\n📋 Test List:');
      testList.forEach(test => {
        console.log(`  - ${test.filename}`);
      });
    })
    .catch(error => {
      console.error('❌ Discovery failed:', error);
      process.exit(1);
    });
}