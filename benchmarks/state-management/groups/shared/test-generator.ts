/**
 * Test file generator utilities
 */

import { LIBRARIES, TestScale, getLibraryById } from './config.js';

export interface TestTemplateOptions {
  groupName: string;
  scale: TestScale;
  description?: string;
  setupCode?: string;
  testFunction: (library: any, scale: TestScale) => void | Promise<void>;
  cleanupCode?: string;
}

export function generateBenchFile(
  groupName: string,
  scale: TestScale,
  description: string,
  tests: Array<{
    name: string;
    testFn: (library: any, scale: TestScale) => void | Promise<void>;
    description?: string;
  }>
): string {
  const imports = `/**
 * ${description} - ${scale.description}
 * Generated test file for ${groupName} operations at ${scale.name} scale
 */

import { bench, describe } from 'vitest';
import { LIBRARIES, getLibraryById } from '../shared/config';
import * as StoreActions from '../../src/stores';

`;

  const benchCode = tests.map(test => {
    const testBody = `
  bench('${test.name} - ${test.description || ''}', () => {
    const library = getLibraryById('${test.id}');
    if (!library) {
      throw new Error('Library not configured: ${test.id}');
    }

    const actions = StoreActions[library.name];
    if (!actions || typeof actions.${test.testFn.name} !== 'function') {
      throw new Error(\`Test function not found: \${test.testFn.name} for \${library.name}\`);
    }

    ${test.testFn.code || ''}
  });`;
    return testBody;
  }).join('\n\n');

  return `${imports}

describe('${groupName.charAt(0).toUpperCase() + groupName.slice(1)} - ${scale.description}', () => {
${benchCode}
});`;
}

export function generateReadTest(scale: TestScale): string {
  const simpleReadTest = `
    // Simple read test - single operation
    for (let i = 0; i < ${scale.iterations}; i++) {
      actions.getCount();
    }
  `;

  const highFreqReadTest = `
    // High frequency read test
    for (let i = 0; i < ${scale.multiplier * 100}; i++) {
      actions.getCount();
    }
  `;

  return generateBenchFile('Read', scale, `Read Operations - ${scale.description}`, [
    {
      id: 'redux-toolkit',
      name: `Simple Read - Redux Toolkit`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'zustand',
      name: `Simple Read - Zustand`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'jotai',
      name: `Simple Read - Jotai`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'mobx',
      name: `Simple Read - MobX`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'valtio',
      name: `Simple Read - Valtio`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'preact-signals',
      name: `Simple Read - Preact Signals`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'solid-signals',
      name: `Simple Read - Solid Signals`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
    {
      id: 'zen',
      name: `Simple Read - Zen`,
      testFn: { name: 'simpleRead', code: simpleReadTest },
      description: `Single state read operation (${scale.iterations} iterations)`
    },
  ]);
}

export function generateWriteTest(scale: TestScale): string {
  const simpleIncrementTest = `
    // Simple increment test
    actions.increment();
  `;

  const burstUpdatesTest = `
    // Burst updates test
    for (let i = 0; i < ${Math.max(10, Math.floor(scale.multiplier / 2))}; i++) {
      actions.increment();
    }
  `;

  return generateBenchFile('Write', scale, `Write Operations - ${scale.description}`, [
    {
      id: 'redux-toolkit',
      name: `Simple Increment - Redux Toolkit`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'zustand',
      name: `Simple Increment - Zustand`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'jotai',
      name: `Simple Increment - Jotai`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'mobx',
      name: `Simple Increment - MobX`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'valtio',
      name: `Simple Increment - Valtio`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'preact-signals',
      name: `Simple Increment - Preact Signals`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'solid-signals',
      name: `Simple Increment - Solid Signals`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
    {
      id: 'zen',
      name: `Simple Increment - Zen`,
      testFn: { name: 'increment', code: simpleIncrementTest },
      description: `Single state increment (${scale.iterations} iterations)`
    },
  ]);
}

export function generateFormStateTest(): string {
  const formStateTest = `
    // Form state management test
    actions.setFormData({
      name: 'Test User',
      email: 'test@example.com',
      age: 25,
      preferences: {
        theme: 'dark',
        notifications: true
      }
    });

    actions.getFormData();
  `;

  return generateBenchFile('Form State', { name: 'simple', multiplier: 1, iterations: 1000, description: 'Simple form state' }, `Form State - Form state management patterns`, [
    {
      id: 'redux-toolkit',
      name: `Form State Update - Redux Toolkit`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'zustand',
      name: `Form State Update - Zustand`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'jotai',
      name: `Form State Update - Jotai`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'mobx',
      name: `Form State Update - MobX`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'valtio',
      name: `Form State Update - Valtio`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'preact-signals',
      name: `Form State Update - Preact Signals`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'solid-signals',
      name: `Form State Update - Solid Signals`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
    {
      id: 'zen',
      name: `Form State Update - Zen`,
      testFn: { name: 'formStateUpdate', code: formStateTest },
      description: 'Form state management with nested objects'
    },
  ]);
}

export function generateCachePerformanceTest(): string {
  const cacheTest = `
    // Cache performance test
    for (let i = 0; i < 1000; i++) {
      actions.getCachedValue(\`key_\${i}\`);
    }
  `;

  return generateBenchFile('Cache Performance', { name: 'single', multiplier: 1, iterations: 1000, description: 'Single cache operation' }, `Cache Performance - Caching patterns and memoization`, [
    {
      id: 'redux-toolkit',
      name: `Cache Access - Redux Toolkit`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'zustand',
      name: `Cache Access - Zustand`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'jotai',
      name: `Cache Access - Jotai`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'mobx',
      name: `Cache Access - MobX`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Computed value access'
    },
    {
      id: 'valtio',
      name: `Cache Access - Valtio`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'preact-signals',
      name: `Cache Access - Preact Signals`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'solid-signals',
      name: `Cache Access - Solid Signals`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
    {
      id: 'zen',
      name: `Cache Access - Zen`,
      testFn: { name: 'cacheAccess', code: cacheTest },
      description: 'Memoized value access'
    },
  ]);
}