// Calculate Overall Performance Scores from benchmark results
import fs from 'fs';
import path from 'path';

// Library ID to display name mapping
const libraryNames = {
  'redux-toolkit': 'Redux Toolkit',
  'zustand': 'Zustand',
  'jotai': 'Jotai',
  'mobx': 'MobX',
  'valtio': 'Valtio',
  'preact-signals': 'Preact Signals',
  'solid-signals': 'Solid Signals',
  'zen': 'Zen'
};

// Read results from groups 01, 02, 03, 06 (valid universal tests)
const group01 = JSON.parse(fs.readFileSync('groups/01-read/results.json', 'utf8'));
const group02 = JSON.parse(fs.readFileSync('groups/02-write/results.json', 'utf8'));
const group03 = JSON.parse(fs.readFileSync('groups/03-creation/results.json', 'utf8'));
const group06 = JSON.parse(fs.readFileSync('groups/06-memory/results.json', 'utf8'));

// Extract hz values for each library from "Simple Read", "Simple Increment", "Store Creation", "Large State Allocation"
const scores = {};

// Helper to extract hz by library name pattern
function extractHz(group, benchmarkName) {
  const benchmarks = group.files[0].groups[0].benchmarks;
  const results = {};

  benchmarks.forEach(bench => {
    if (bench.name.includes(benchmarkName) && bench.hz) {
      // Extract library name from benchmark name
      const match = bench.name.match(/(Redux Toolkit|Zustand|Jotai|MobX|Valtio|Preact Signals|Solid Signals|Zen)/);
      if (match) {
        results[match[1]] = bench.hz;
      }
    }
  });

  return results;
}

// Get hz for each test
const readScores = extractHz(group01, 'Simple Read');
const writeScores = extractHz(group02, 'Simple Increment');
const creationScores = extractHz(group03, 'Store Creation');
const memoryScores = extractHz(group06, 'Large State Allocation');

// Calculate geometric mean for each library
const libraries = Object.keys(readScores);

libraries.forEach(lib => {
  const values = [
    readScores[lib] || 0,
    writeScores[lib] || 0,
    creationScores[lib] || 0,
    memoryScores[lib] || 0
  ];

  // Only calculate if all values exist
  if (values.every(v => v > 0)) {
    // Geometric mean = (v1 * v2 * v3 * v4)^(1/4)
    const product = values.reduce((acc, val) => acc * val, 1);
    const geometricMean = Math.pow(product, 1 / values.length);

    scores[lib] = {
      read: readScores[lib],
      write: writeScores[lib],
      creation: creationScores[lib],
      memory: memoryScores[lib],
      overall: geometricMean
    };
  }
});

// Sort by overall score (descending)
const sorted = Object.entries(scores)
  .sort((a, b) => b[1].overall - a[1].overall)
  .map(([lib, data]) => ({ library: lib, ...data }));

// Output results
console.log('\n=== Overall Performance Scores (Geometric Mean) ===\n');
console.log('Based on: Read, Write, Creation, Memory (groups 01, 02, 03, 06)\n');

sorted.forEach((entry, index) => {
  console.log(`${index + 1}. ${entry.library.padEnd(20)} ${entry.overall.toLocaleString('en-US', { maximumFractionDigits: 0 })} ops/sec`);
  console.log(`   Read: ${entry.read.toLocaleString('en-US', { maximumFractionDigits: 0 })}, Write: ${entry.write.toLocaleString('en-US', { maximumFractionDigits: 0 })}, Creation: ${entry.creation.toLocaleString('en-US', { maximumFractionDigits: 0 })}, Memory: ${entry.memory.toLocaleString('en-US', { maximumFractionDigits: 0 })}`);
});

// Write to JSON for README generation
fs.writeFileSync('overall-scores.json', JSON.stringify(sorted, null, 2));
console.log('\n✓ Scores written to overall-scores.json');
