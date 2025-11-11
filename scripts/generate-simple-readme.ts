#!/usr/bin/env bun
/**
 * Simple README Generator for New Framework
 * Generates README from per-library benchmark JSON files
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

interface BenchmarkResult {
  test: string;
  group: string;
  opsPerSecond: number;
  meanTime: number;
  variance: number;
  p99: number;
  samples: number;
}

interface LibraryBenchmark {
  library: string;
  libraryId: string;
  version: string;
  timestamp: string;
  results: BenchmarkResult[];
}

// Get category path
const categoryPath = process.argv[2] || 'benchmarks/state-management';
const resultsPath = join(categoryPath, 'results');

console.log(`📝 Generating README for: ${categoryPath}\n`);

// Load all library results
const resultFiles = readdirSync(resultsPath)
  .filter(f => f.endsWith('-benchmark.json'))
  .sort();

if (resultFiles.length === 0) {
  console.error('❌ No benchmark results found');
  process.exit(1);
}

const libraries: LibraryBenchmark[] = resultFiles.map(file =>
  JSON.parse(readFileSync(join(resultsPath, file), 'utf-8'))
);

console.log(`📊 Loaded ${libraries.length} libraries\n`);

// Group results by group and test
const groupedByGroup = new Map<string, Map<string, Map<string, BenchmarkResult>>>();

for (const lib of libraries) {
  for (const result of lib.results) {
    if (!groupedByGroup.has(result.group)) {
      groupedByGroup.set(result.group, new Map());
    }
    const groupData = groupedByGroup.get(result.group)!;

    if (!groupData.has(result.test)) {
      groupData.set(result.test, new Map());
    }
    const testData = groupData.get(result.test)!;
    testData.set(lib.libraryId, result);
  }
}

// Calculate overall scores
const overallScores = new Map<string, number>();

for (const lib of libraries) {
  const scores: number[] = [];

  for (const result of lib.results) {
    // Find max ops/sec for this test across all libraries
    const testResults = Array.from(groupedByGroup.values())
      .flatMap(g => Array.from(g.values()))
      .filter(tests => tests.has(lib.libraryId))
      .flatMap(tests => Array.from(tests.values()))
      .filter(r => r.test === result.test);

    const maxOps = Math.max(...testResults.map(r => r.opsPerSecond));
    const score = (result.opsPerSecond / maxOps) * 100;
    scores.push(score);
  }

  // Geometric mean
  if (scores.length > 0) {
    const product = scores.reduce((acc, s) => acc * s, 1);
    const geometricMean = Math.pow(product, 1 / scores.length);
    overallScores.set(lib.libraryId, geometricMean);
  }
}

// Sort libraries by score
const sortedLibs = [...libraries].sort((a, b) => {
  const scoreA = overallScores.get(a.libraryId) || 0;
  const scoreB = overallScores.get(b.libraryId) || 0;
  return scoreB - scoreA;
});

// Helper functions
function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toFixed(0);
}

function getMedal(rank: number): string {
  if (rank === 0) return '🥇';
  if (rank === 1) return '🥈';
  if (rank === 2) return '🥉';
  return '';
}

function formatGroupName(groupId: string): string {
  const names: Record<string, string> = {
    '01-basic-read': 'Basic Read Operations',
    '02-basic-write': 'Basic Write Operations',
    '03-advanced-operations': 'Advanced Operations',
    '04-async-operations': 'Async Operations',
    '05-real-world': 'Real-World Scenarios',
    '06-performance-stress': 'Performance Stress Tests',
  };
  return names[groupId] || groupId;
}

// Generate README
let readme = `# State Management Benchmarks

Comprehensive performance benchmarks for React state management libraries.

> **Latest Update**: ${new Date(libraries[0].timestamp).toLocaleDateString('en-US', {
  year: 'numeric', month: 'short', day: 'numeric'
})}

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all ${libraries[0].results.length} tests.

| Rank | Library | Overall Score | Relative Performance |
|:----:|---------|--------------|---------------------|
`;

sortedLibs.forEach((lib, i) => {
  const score = overallScores.get(lib.libraryId) || 0;
  const topScore = overallScores.get(sortedLibs[0].libraryId) || 100;
  const relative = (score / topScore * 100).toFixed(0);
  const medal = getMedal(i);
  const rank = i + 1;

  readme += `| ${medal} ${rank} | **${lib.library}** | ${score.toFixed(1)}/100 | ${relative}% of fastest |\n`;
});

readme += `\n---\n\n## 📈 Performance by Test Group\n\n`;

// Sort groups
const sortedGroups = Array.from(groupedByGroup.entries()).sort((a, b) =>
  a[0].localeCompare(b[0])
);

for (const [groupId, testsMap] of sortedGroups) {
  readme += `### ${formatGroupName(groupId)}\n\n`;

  for (const [testName, libResults] of testsMap.entries()) {
    readme += `#### ${testName}\n\n`;

    // Sort by ops/sec
    const sorted = Array.from(libResults.entries())
      .map(([libId, result]) => ({
        libId,
        lib: libraries.find(l => l.libraryId === libId)!,
        result
      }))
      .sort((a, b) => b.result.opsPerSecond - a.result.opsPerSecond);

    const maxOps = sorted[0].result.opsPerSecond;

    // Bar chart
    readme += '```\n';
    sorted.forEach(({ lib, result }, i) => {
      const percentage = result.opsPerSecond / maxOps;
      const barLength = Math.round(percentage * 40);
      const bar = '█'.repeat(barLength);
      const medal = getMedal(i);

      readme += `${medal} ${lib.library.padEnd(18)} ${bar.padEnd(42)} ${formatNumber(result.opsPerSecond)} ops/sec\n`;
    });
    readme += '```\n\n';

    // Table
    readme += '| Library | ops/sec | Mean Time | P99 | Samples |\n';
    readme += '|---------|---------|-----------|-----|----------|\n';

    sorted.forEach(({ lib, result }) => {
      readme += `| ${lib.library} | ${formatNumber(result.opsPerSecond)} | ${result.meanTime.toFixed(3)}ms | ${result.p99.toFixed(3)}ms | ${result.samples} |\n`;
    });

    readme += '\n';
  }
}

readme += `---

## 🔬 Methodology

- **Warmup**: 100 iterations
- **Measurement**: 1000 iterations per test
- **Metrics**: Operations per second, mean time, variance, P99 latency
- **Environment**: Bun runtime
- **Scoring**: Geometric mean of normalized performance indices

## 📦 Test Coverage

- **Basic Operations**: ${Array.from(groupedByGroup.get('01-basic-read')?.keys() || []).length + Array.from(groupedByGroup.get('02-basic-write')?.keys() || []).length} tests
- **Advanced Operations**: ${Array.from(groupedByGroup.get('03-advanced-operations')?.keys() || []).length} tests
- **Async Operations**: ${Array.from(groupedByGroup.get('04-async-operations')?.keys() || []).length} tests
- **Real-World Scenarios**: ${Array.from(groupedByGroup.get('05-real-world')?.keys() || []).length} tests
- **Stress Tests**: ${Array.from(groupedByGroup.get('06-performance-stress')?.keys() || []).length} tests

**Total**: ${libraries[0].results.length} tests × ${libraries.length} libraries = ${libraries[0].results.length * libraries.length} benchmark runs

---

## 🚀 Libraries Tested

${sortedLibs.map(lib => `- **${lib.library}** (\`${lib.version}\`)`).join('\n')}

---

*Generated on ${new Date().toISOString()}*
`;

// Write README
const readmePath = join(categoryPath, 'README.md');
writeFileSync(readmePath, readme);

console.log(`✅ Generated ${readmePath}\n`);
console.log(`📊 Summary:`);
console.log(`   - ${libraries.length} libraries`);
console.log(`   - ${groupedByGroup.size} test groups`);
console.log(`   - ${libraries[0].results.length} tests per library`);
console.log(`   - ${libraries[0].results.length * libraries.length} total benchmark runs`);
