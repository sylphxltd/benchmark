#!/usr/bin/env node
/**
 * Script to run generated benchmark tests
 * Convenience script for running all or specific generated tests
 */

const { execSync } = require('child_process');
const { existsSync, readdirSync } = require('fs');
const { join } = require('path');

const testDir = join(process.cwd(), 'generated');

function listGeneratedTests() {
  if (!existsSync(testDir)) {
    console.log('❌ No generated tests directory found.');
    console.log('💡 Run: npx tsx scripts/test-generator.ts state-management');
    return [];
  }

  const files = readdirSync(testDir).filter(f => f.endsWith('.bench.ts'));
  return files;
}

function runSpecificTest(filename) {
  const fullPath = join(testDir, filename);

  if (!existsSync(fullPath)) {
    console.log(`❌ Test file not found: ${filename}`);
    return false;
  }

  console.log(`🚀 Running test: ${filename}`);

  try {
    execSync(`npx vitest bench --run --reporter=verbose ${fullPath}`, {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    return true;
  } catch (error) {
    console.log(`❌ Test failed: ${filename}`);
    return false;
  }
}

function runAllTests() {
  const tests = listGeneratedTests();

  if (tests.length === 0) {
    console.log('❌ No tests to run');
    return;
  }

  console.log(`🚀 Running ${tests.length} generated tests...\n`);

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    if (runSpecificTest(test)) {
      passed++;
    } else {
      failed++;
    }
    console.log(''); // Add spacing
  }

  console.log('📊 Summary:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Total: ${tests.length}`);
}

function showHelp() {
  console.log('Usage:');
  console.log('  node run-generated-tests.cjs                    # Run all tests');
  console.log('  node run-generated-tests.cjs list               # List available tests');
  console.log('  node run-generated-tests.cjs <test-file>        # Run specific test');
  console.log('  node run-generated-tests.cjs generate           # Generate tests first');
  console.log('');
  console.log('Examples:');
  console.log('  node run-generated-tests.cjs read-single.bench.ts');
  console.log('  node run-generated-tests.cjs list');
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'list':
    const tests = listGeneratedTests();
    if (tests.length > 0) {
      console.log('📋 Available generated tests:');
      tests.forEach(test => console.log(`  - ${test}`));
    } else {
      console.log('❌ No generated tests found');
    }
    break;

  case 'generate':
    console.log('🔧 Generating tests...');
    try {
      execSync('npx tsx scripts/test-generator.ts state-management', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error('❌ Test generation failed');
      process.exit(1);
    }
    break;

  case 'help':
  case '--help':
  case '-h':
    showHelp();
    break;

  case undefined:
    runAllTests();
    break;

  default:
    runSpecificTest(command);
    break;
}