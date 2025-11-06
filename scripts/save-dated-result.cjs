#!/usr/bin/env node
/**
 * Save a dated copy of the latest benchmark result
 */

const { copyFileSync } = require('fs');
const { join } = require('path');

const date = new Date().toISOString().split('T')[0];
const resultsDir = process.argv[2] || 'results';
const source = join(resultsDir, 'latest.json');
const dest = join(resultsDir, `${date}.json`);

try {
  copyFileSync(source, dest);
  console.log(`✅ Saved dated result: ${date}.json`);
} catch (error) {
  console.error(`❌ Failed to save dated result:`, error.message);
  process.exit(1);
}
