#!/usr/bin/env node
/**
 * Intelligent Test Generator
 * Generates benchmark tests based on discovered libraries and test configurations
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { AutoDiscovery } from './auto-discover.js';

interface TestTemplate {
  library: string;
  testType: string;
  scale: any;
  filename: string;
  testName: string;
}

export class TestGenerator {
  private basePath: string;
  private outputDir: string;

  constructor(basePath: string = process.cwd(), outputDir: string = 'generated') {
    this.basePath = basePath;
    this.outputDir = outputDir;
    this.ensureOutputDir();
  }

  private ensureOutputDir() {
    const outputPath = join(this.basePath, this.outputDir);
    if (!existsSync(outputPath)) {
      mkdirSync(outputPath, { recursive: true });
    }
  }

  /**
   * 生成基於迭代次數的測試 (read/write) - 包含所有庫
   */
  private generateIterationTest(templates: TestTemplate[]): string {
    const testType = templates[0].testType;
    const scale = templates[0].scale;
    const filename = `${testType}-${scale.id}.bench.ts`;

    const libraryBenchmarks = templates.map(template => {
      return `  bench('${template.library} - ${testType} (${scale.description})', () => {
    const store = libraries['${template.library}'].store;

    // ${testType === 'read' ? 'Read operations' : 'Write operations'} test
    for (let i = 0; i < ${scale.iterations}; i++) {
      ${this.getTestLogic(testType, template.library)};
    }
  });`;
    }).join('\n\n');

    return `/**
 * ${testType} - ${scale.name}
 * Generated comparison test for all libraries
 * Scale: ${scale.description}
 */

import { bench, describe, afterAll } from 'vitest';
${templates.map(t => {
    const importName = t.library.replace(/-/g, '_');
    return `import * as ${importName} from '../libraries/${t.library}/store.ts';`;
  }).join('\n')}

// Initialize all libraries
const libraries = {
${templates.map(t => {
    const importName = t.library.replace(/-/g, '_');
    return `  '${t.library}': ${importName},`;
  }).join('\n')}
};

describe('${testType} - ${scale.name}', () => {
  // Setup all libraries
  const setup = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.initialize === 'function') {
        store.initialize();
      }
    });
  };

  // Teardown all libraries
  const teardown = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.cleanup === 'function') {
        store.cleanup();
      }
    });
  };

  setup();

${libraryBenchmarks}

  // Global teardown
  afterAll(() => {
    teardown();
  });
});`;
  }

  /**
   * 生成基於複雜度的測試 (form, cache, async, memory) - 包含所有庫
   */
  private generateComplexityTest(templates: TestTemplate[]): string {
    const testType = templates[0].testType;
    const scale = templates[0].scale;

    const libraryBenchmarks = templates.map(template => {
      return `  bench('${template.library} - ${testType} (${scale.description})', () => {
    const store = libraries['${template.library}'].store;

    // ${testType} test logic
${this.getComplexTestLogic(testType, scale).split('\n').map(line => `    ${line}`).join('\n')}
  });`;
    }).join('\n\n');

    return `/**
 * ${testType} - ${scale.name}
 * Generated comparison test for all libraries
 * Complexity: ${scale.description}
 */

import { bench, describe, afterAll } from 'vitest';
${templates.map(t => {
    const importName = t.library.replace(/-/g, '_');
    return `import * as ${importName} from '../libraries/${t.library}/store.ts';`;
  }).join('\n')}

// Initialize all libraries
const libraries = {
${templates.map(t => {
    const importName = t.library.replace(/-/g, '_');
    return `  '${t.library}': ${importName},`;
  }).join('\n')}
};

describe('${testType} - ${scale.name}', () => {
  // Setup data for ${testType}
  const setup = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.initialize === 'function') {
        store.initialize();
      }
    });
  };

  // Teardown all libraries
  const teardown = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.cleanup === 'function') {
        store.cleanup();
      }
    });
  };

  setup();

${libraryBenchmarks}

  // Global teardown
  afterAll(() => {
    teardown();
  });
});`;
  }

  /**
   * 獲取測試邏輯
   */
  private getTestLogic(testType: string, library: string): string {
    switch (testType) {
      case 'read':
        return 'store.count || store.getCount();';
      case 'write':
        return 'store.increment();';
      default:
        return '// Custom test logic needed';
    }
  }

  /**
   * 獲取設置數據
   */
  private getSetupData(testType: string, scale: any): string {
    switch (testType) {
      case 'form':
        return `{
          fieldCount: ${scale.fieldCount || 10},
          complexity: '${scale.complexity || 'simple'}'
        }`;
      case 'cache':
        return `{
          accessCount: ${scale.accessCount || 100},
          complexity: '${scale.computationComplexity || 'medium'}'
        }`;
      case 'async':
        return `{
          promiseCount: ${scale.promiseCount || 10},
          concurrency: ${scale.concurrency || 1}
        }`;
      case 'memory':
        return `{
          objectCount: ${scale.objectCount || 100},
          objectSize: '${scale.objectSize || 'medium'}'
        }`;
      default:
        return '{}';
    }
  }

  /**
   * 獲取複雜測試邏輯
   */
  private getComplexTestLogic(testType: string, scale: any): string {
    switch (testType) {
      case 'form':
        return `
    // Form operations
    store.setNested(Math.random() * 100);
    store.addUser({
      id: Math.floor(Math.random() * 1000),
      name: 'Test User',
      email: 'test@example.com'
    });

    // Read operations
    store.getNested();
    store.getUsers();`;

      case 'cache':
        return `
    // Cache performance test
    for (let i = 0; i < ${scale.accessCount || 100}; i++) {
      store.getDoubled();
      store.getNested();
      store.getUsers();
    }`;

      case 'async':
        return `
    // Simplified async operations test
    store.setLoading(true);
    store.setAsyncData({ id: 1, data: 'test' });
    store.setLoading(false);
    store.getLoading();
    store.getAsyncData();`;

      case 'memory':
        return `
    // Memory test operations
    for (let i = 0; i < ${scale.objectCount || 100}; i++) {
      store.addUser({
        id: i,
        data: new Array(${scale.objectSize === 'large' ? 100 : scale.objectSize === 'medium' ? 50 : 10}).fill(0)
      });
    }

    // Access all objects to prevent premature GC
    store.getUsers();

    // Create deep objects
    for (let i = 0; i < 10; i++) {
      store.createDeepObject();
    }`;

      default:
        return '// Test logic not implemented';
    }
  }

  /**
   * 按測試類型和 scale 組合生成測試文件
   */
  async generateAllTests(category: string): Promise<void> {
    console.log(`🔧 Generating tests for ${category}...`);

    const discovery = new AutoDiscovery(category, this.basePath);
    const matrix = await discovery.buildTestMatrix();

    console.log(`📋 Found ${matrix.libraries.length} libraries and ${matrix.testTypes.length} test types`);

    // 按測試類型和 scale 組合
    for (const testType of matrix.testTypes) {
      for (const scale of testType.config.scales) {
        // 找到支持這個測試類型的所有庫
        const supportingLibraries = matrix.libraries.filter(
          lib => lib.metadata.supports?.[testType.id] ?? false
        );

        if (supportingLibraries.length === 0) {
          console.log(`⚪️  Skipping ${testType.id}-${scale.id} (no supporting libraries)`);
          continue;
        }

        const templates = supportingLibraries.map(lib => ({
          library: lib.dir,
          testType: testType.id,
          scale,
          filename: `${testType.id}-${scale.id}.bench.ts`,
          testName: `${lib.dir} - ${testType.id} - ${scale.name}`
        }));

        try {
          let content: string;
          if (scale.iterations !== undefined) {
            content = this.generateIterationTest(templates);
          } else {
            content = this.generateComplexityTest(templates);
          }

          const filename = `${testType.id}-${scale.id}.bench.ts`;
          const outputPath = join(this.basePath, this.outputDir, filename);

          writeFileSync(outputPath, content);
          console.log(`✅ Generated: ${filename} (${supportingLibraries.length} libraries)`);
        } catch (error) {
          console.error(`❌ Failed to generate ${testType.id}-${scale.id}:`, error.message);
        }
      }
    }

    console.log(`✅ Test generation complete!`);
  }
}

// CLI 接口
if (import.meta.url === `file://${process.argv[1]}`) {
  const category = process.argv[2];

  if (!category) {
    console.error('Usage: node test-generator.ts <category>');
    process.exit(1);
  }

  const generator = new TestGenerator();
  generator.generateAllTests(category)
    .then(() => {
      console.log('🎉 All tests generated successfully!');
    })
    .catch(error => {
      console.error('❌ Generation failed:', error);
      process.exit(1);
    });
}