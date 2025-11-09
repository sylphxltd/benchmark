/**
 * Test file generator utilities - CommonJS version for Node.js execution
 */

const { LIBRARIES, READ_SCALES, WRITE_SCALES } = require('./config.ts');
const fs = require('fs');
const path = require('path');

function generateReadTest(scale) {
  return `/**
 * Read Operations - ${scale.description}
 * Generated test file for read operations at ${scale.name} scale
 */

import { bench, describe } from 'vitest';
import { LIBRARIES, getLibraryById } from '../shared/config.js';
import * as StoreActions from '../../src/stores/index.js';

describe('Read - ${scale.description}', () => {
  ${LIBRARIES.filter(lib => !('enabled' in lib) || lib.enabled).map(library => `
  bench('${library.displayName} - Simple Read (${scale.iterations} iterations)', () => {
    const libraryConfig = getLibraryById('${library.id}');
    if (!libraryConfig) {
      throw new Error('Library not configured: ${library.id}');
    }

    const actions = StoreActions[libraryConfig.name];
    if (!actions || typeof actions.getCount !== 'function') {
      throw new Error(\`Test function not found: getCount for \${libraryConfig.name}\`);
    }

    // Simple read test - single operation
    for (let i = 0; i < ${scale.iterations}; i++) {
      actions.getCount();
    }
  });`).join('')}
});`;
}

function generateWriteTest(scale) {
  return `/**
 * Write Operations - ${scale.description}
 * Generated test file for write operations at ${scale.name} scale
 */

import { bench, describe } from 'vitest';
import { LIBRARIES, getLibraryById } from '../shared/config.js';
import * as StoreActions from '../../src/stores/index.js';

describe('Write - ${scale.description}', () => {
  ${LIBRARIES.filter(lib => !('enabled' in lib) || lib.enabled).map(library => `
  bench('${library.displayName} - Simple Increment (${scale.iterations} iterations)', () => {
    const libraryConfig = getLibraryById('${library.id}');
    if (!libraryConfig) {
      throw new Error('Library not configured: ${library.id}');
    }

    const actions = StoreActions[libraryConfig.name];
    if (!actions || typeof actions.increment !== 'function') {
      throw new Error(\`Test function not found: increment for \${libraryConfig.name}\`);
    }

    // Simple increment test
    actions.increment();
  });`).join('')}
});`;
}

function generateFormStateTest() {
  return `/**
 * Form State Management
 * Generated test file for form state management patterns
 */

import { bench, describe } from 'vitest';
import { LIBRARIES, getLibraryById } from '../shared/config.js';
import * as StoreActions from '../../src/stores/index.js';

describe('Form State - Form state management', () => {
  ${LIBRARIES.filter(lib => !('enabled' in lib) || lib.enabled).map(library => `
  bench('${library.displayName} - Update Multiple Fields', () => {
    const libraryConfig = getLibraryById('${library.id}');
    if (!libraryConfig) {
      throw new Error('Library not configured: ${library.id}');
    }

    const actions = StoreActions[libraryConfig.name];
    if (!actions || typeof actions.setNested !== 'function') {
      throw new Error(\`Test function not found: setNested for \${libraryConfig.name}\`);
    }

    // Simulate form state management using nested updates
    actions.setNested(100);
    actions.addUser({
      id: Math.floor(Math.random() * 1000),
      name: 'Test User',
      email: 'test@example.com'
    });

    actions.getNested();
    actions.getUsers();
  });`).join('')}
});`;
}

function generateCachePerformanceTest() {
  return `/**
 * Cache Performance Management
 * Generated test file for caching patterns and memoization
 */

import { bench, describe } from 'vitest';
import { LIBRARIES, getLibraryById } from '../shared/config.js';
import * as StoreActions from '../../src/stores/index.js';

describe('Cache Performance - Caching patterns and memoization', () => {
  ${LIBRARIES.filter(lib => !('enabled' in lib) || lib.enabled).map(library => `
  bench('${library.displayName} - Repeated Access Pattern', () => {
    const libraryConfig = getLibraryById('${library.id}');
    if (!libraryConfig) {
      throw new Error('Library not configured: ${library.id}');
    }

    const actions = StoreActions[libraryConfig.name];
    if (!actions || typeof actions.getDoubled !== 'function') {
      throw new Error(\`Test function not found: getDoubled for \${libraryConfig.name}\`);
    }

    // Cache/memo performance test - repeated computed access
    for (let i = 0; i < 1000; i++) {
      actions.getDoubled();
      actions.getNested();
      actions.getUsers();
    }
  });`).join('')}
});`;
}

// Test generation functions
function generateAllTests() {
  const baseDir = path.join(__dirname, '..', '..');

  console.log('🔧 Generating test files...');

  // Generate read tests
  READ_SCALES.forEach(scale => {
    if (scale.name === 'x1000' || scale.name === 'x10000') {
      console.log(`📝 Generating read-${scale.name}.bench.ts`);
      const content = generateReadTest(scale);
      fs.writeFileSync(path.join(baseDir, 'groups', 'read', `read-${scale.name}.bench.ts`), content);
    }
  });

  // Generate write tests
  WRITE_SCALES.forEach(scale => {
    if (scale.name === 'x1000' || scale.name === 'x10000') {
      console.log(`📝 Generating write-${scale.name}.bench.ts`);
      const content = generateWriteTest(scale);
      fs.writeFileSync(path.join(baseDir, 'groups', 'write', `write-${scale.name}.bench.ts`), content);
    }
  });

  // Generate form state test
  console.log('📝 Generating form-state.bench.ts');
  const formContent = generateFormStateTest();
  fs.writeFileSync(path.join(baseDir, 'groups', 'form', 'form-state.bench.ts'), formContent);

  // Generate cache performance test
  console.log('📝 Generating cache-performance.bench.ts');
  const cacheContent = generateCachePerformanceTest();
  fs.writeFileSync(path.join(baseDir, 'groups', 'cache', 'cache-performance.bench.ts'), cacheContent);

  console.log('✅ Test generation complete!');
}

// CLI interface
if (require.main === module) {
  const command = process.argv[2];

  switch (command) {
    case 'all':
      generateAllTests();
      break;
    case 'read':
      const readScale = READ_SCALES.find(s => s.name === process.argv[3]);
      if (readScale) {
        console.log(`📝 Generating read test for scale: ${readScale.name}`);
        const content = generateReadTest(readScale);
        console.log('Generated content length:', content.length);
        console.log('✅ Read test generation working');
      } else {
        console.error('❌ Scale not found. Available scales:', READ_SCALES.map(s => s.name).join(', '));
      }
      break;
    case 'write':
      const writeScale = WRITE_SCALES.find(s => s.name === process.argv[3]);
      if (writeScale) {
        console.log(`📝 Generating write test for scale: ${writeScale.name}`);
        const content = generateWriteTest(writeScale);
        console.log('Generated content length:', content.length);
        console.log('✅ Write test generation working');
      } else {
        console.error('❌ Scale not found. Available scales:', WRITE_SCALES.map(s => s.name).join(', '));
      }
      break;
    case 'form':
      console.log('📝 Generating form state test');
      const formContent = generateFormStateTest();
      console.log('Generated content length:', formContent.length);
      console.log('✅ Form state test generation working');
      break;
    case 'cache':
      console.log('📝 Generating cache performance test');
      const cacheContent = generateCachePerformanceTest();
      console.log('Generated content length:', cacheContent.length);
      console.log('✅ Cache performance test generation working');
      break;
    default:
      console.log('Usage:');
      console.log('  node test-generator.cjs all                    # Generate all tests');
      console.log('  node test-generator.cjs read <scale>          # Generate read test for scale');
      console.log('  node test-generator.cjs write <scale>         # Generate write test for scale');
      console.log('  node test-generator.cjs form                  # Generate form state test');
      console.log('  node test-generator.cjs cache                 # Generate cache performance test');
      console.log('');
      console.log('Available scales for read:', READ_SCALES.map(s => s.name).join(', '));
      console.log('Available scales for write:', WRITE_SCALES.map(s => s.name).join(', '));
  }
}

module.exports = {
  generateReadTest,
  generateWriteTest,
  generateFormStateTest,
  generateCachePerformanceTest,
  READ_SCALES,
  WRITE_SCALES,
  LIBRARIES
};