#!/usr/bin/env node
/**
 * Generate optimized per-library test files
 * - No LIBRARIES.find() lookup overhead
 * - Test names from constants
 * - Store initialized outside bench
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
      url: string;
    };
  };
}

const LIBRARY_STORE_MAP: Record<string, string> = {
  '@reduxjs/toolkit': 'reduxActionsV2',
  'zustand': 'zustandActionsV2',
  'jotai': 'jotaiActionsV2',
  'mobx': 'mobxActionsV2',
  'valtio': 'valtioActionsV2',
  '@preact/signals': 'preactActionsV2',
  'solid-js': 'solidActionsV2',
  '@sylphx/zen': 'zenActionsV2',
};

const GROUP_TESTS: Record<string, { testName: string; code: string }[]> = {
  '01-read': [
    {
      testName: 'TEST_NAMES.SIMPLE_READ',
      code: `    store.increment();
    return store.getCount();`
    },
    {
      testName: '`${TEST_NAMES.HIGH_FREQ_READ} (x10)`',
      code: `    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.getCount();
    }`
    },
    {
      testName: '`${TEST_NAMES.HIGH_FREQ_READ} (x100)`',
      code: `    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.getCount();
    }`
    },
    {
      testName: '`${TEST_NAMES.HIGH_FREQ_READ} (x1000)`',
      code: `    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.getCount();
    }`
    },
    {
      testName: '`${TEST_NAMES.HIGH_FREQ_READ} (x10000)`',
      code: `    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.getCount();
    }`
    }
  ],
  '02-write': [
    {
      testName: 'TEST_NAMES.SINGLE_UPDATE',
      code: `    store.increment();`
    },
    {
      testName: '`${TEST_NAMES.BATCH_UPDATE} (x10)`',
      code: `    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.increment();
    }`
    },
    {
      testName: '`${TEST_NAMES.BATCH_UPDATE} (x100)`',
      code: `    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.increment();
    }`
    },
    {
      testName: '`${TEST_NAMES.BATCH_UPDATE} (x1000)`',
      code: `    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.increment();
    }`
    },
    {
      testName: '`${TEST_NAMES.BATCH_UPDATE} (x10000)`',
      code: `    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.increment();
    }`
    }
  ],
  '03-creation': [
    {
      testName: 'TEST_NAMES.STORE_CREATION',
      code: `    // Store creation is handled by setup`
    }
  ],
  '06-memory': [
    {
      testName: 'TEST_NAMES.LARGE_STATE_READ',
      code: `    return store.getCount();`
    },
    {
      testName: 'TEST_NAMES.LARGE_STATE_UPDATE',
      code: `    store.increment();`
    }
  ],
};

function generateTestFile(
  groupName: string,
  libraryKey: string,
  displayName: string,
  storeVarName: string,
  tests: { testName: string; code: string }[]
): string {
  const testCases = tests.map(test => `  bench(${test.testName}, () => {
${test.code}
  });`).join('\n\n');

  return `/**
 * ${groupName} - ${displayName}
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { ${storeVarName}, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = ${storeVarName};

describe('${groupName} - ${displayName}', () => {
${testCases}
});
`;
}

async function generateAllTests(categoryPath: string) {
  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  console.log(`📝 Generating optimized test files...\n`);

  let totalGenerated = 0;

  for (const groupName of Object.keys(GROUP_TESTS)) {
    const groupPath = join(categoryPath, 'groups', groupName);
    const testsPath = join(groupPath, 'tests');

    if (!existsSync(testsPath)) {
      mkdirSync(testsPath, { recursive: true });
    }

    const tests = GROUP_TESTS[groupName];

    console.log(`📂 ${groupName}:`);

    for (const [libraryKey, libInfo] of Object.entries(metadata.libraries)) {
      const storeVarName = LIBRARY_STORE_MAP[libraryKey];

      if (!storeVarName) {
        console.log(`  ⚠️  No store mapping for ${libraryKey}, skipping`);
        continue;
      }

      const safeLibName = libraryKey.replace(/@/g, '').replace(/\//g, '-');
      const testFilePath = join(testsPath, `${safeLibName}.bench.ts`);

      const content = generateTestFile(
        groupName,
        libraryKey,
        libInfo.displayName,
        storeVarName,
        tests
      );

      writeFileSync(testFilePath, content);
      console.log(`  ✓ ${safeLibName}.bench.ts`);
      totalGenerated++;
    }

    console.log('');
  }

  console.log(`✅ Generated ${totalGenerated} optimized test files`);
}

// Main execution
const categoryPath = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');

generateAllTests(categoryPath).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
