/**
 * Calculate weighted scores for State Management benchmarks (Zen 3.1.1)
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface WeightConfig {
  categoryWeights: Record<string, { weight: number; rationale: string }>;
}

interface TestResult {
  library: string;
  libraryId: string;
  packageName: string;
  test: string;
  group: string;
  timestamp: string;
  result: {
    opsPerSecond: number;
    meanTime: number;
    variance: number;
    p99: number;
    samples: number;
  };
}

const RESULTS_DIR = '/Users/kyle/benchmark-state/benchmarks/state-management/results';
const CONFIG_PATH = '/Users/kyle/benchmark-state/benchmarks/state-management/weighting-config.json';

// Load weighting config
const config: WeightConfig = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));

// Get all libraries
const libraries = readdirSync(RESULTS_DIR).filter(name => !name.startsWith('.'));

// Calculate scores for each library
const libraryScores: Record<string, { total: number; byGroup: Record<string, number> }> = {};

for (const library of libraries) {
  const libraryPath = join(RESULTS_DIR, library);
  const testFiles = readdirSync(libraryPath).filter(f => f.endsWith('.json'));

  const groupScores: Record<string, number[]> = {};

  // Read all test results
  for (const testFile of testFiles) {
    const testResult: TestResult = JSON.parse(
      readFileSync(join(libraryPath, testFile), 'utf-8')
    );

    const groupId = testResult.group;
    const opsPerSec = testResult.result.opsPerSecond;

    if (!groupScores[groupId]) {
      groupScores[groupId] = [];
    }
    groupScores[groupId].push(opsPerSec);
  }

  // Calculate average score for each group
  const groupAverages: Record<string, number> = {};
  for (const [groupId, scores] of Object.entries(groupScores)) {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    groupAverages[groupId] = avg;
  }

  // Apply weights and calculate total
  let totalScore = 0;
  for (const [groupId, avgScore] of Object.entries(groupAverages)) {
    const weight = config.categoryWeights[groupId]?.weight || 0;
    totalScore += avgScore * weight;
  }

  libraryScores[library] = {
    total: totalScore,
    byGroup: groupAverages
  };
}

// Sort by total score
const ranked = Object.entries(libraryScores)
  .sort(([, a], [, b]) => b.total - a.total);

// Display results
console.log('\n🏆 State Management Benchmark Rankings (Zen 3.1.1)\n');
console.log('═'.repeat(80));

ranked.forEach(([library, scores], index) => {
  const rank = index + 1;
  const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
  console.log(`\n${medal} ${library.toUpperCase()}`);
  console.log(`   Weighted Score: ${scores.total.toFixed(0).toLocaleString()} ops/sec`);
  console.log('   ─'.repeat(40));

  // Show group scores
  const sortedGroups = Object.entries(scores.byGroup)
    .sort(([a], [b]) => a.localeCompare(b));

  for (const [groupId, score] of sortedGroups) {
    const weight = config.categoryWeights[groupId]?.weight || 0;
    const weightedScore = score * weight;
    const percentage = (weight * 100).toFixed(0);
    console.log(`   ${groupId.padEnd(25)} ${score.toFixed(0).padStart(12)} ops/sec  (${percentage}% weight → ${weightedScore.toFixed(0).padStart(10)} contribution)`);
  }
});

console.log('\n' + '═'.repeat(80));
console.log('\n📊 Weight Distribution:\n');
for (const [groupId, { weight, rationale }] of Object.entries(config.categoryWeights)) {
  console.log(`   ${groupId.padEnd(25)} ${(weight * 100).toFixed(0).padStart(3)}%  - ${rationale}`);
}
console.log('\n' + '═'.repeat(80) + '\n');
