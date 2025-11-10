#!/usr/bin/env node
/**
 * Generate main README with group overview and navigation
 */

const { readFileSync, writeFileSync, existsSync, readdirSync } = require('fs');
const { join } = require('path');

const GROUPS = [
  {
    name: 'read',
    title: 'Read Operations',
    description: 'Performance of state reading operations across different scales',
    icon: '📖'
  },
  {
    name: 'write',
    title: 'Write Operations',
    description: 'Performance of state writing and update operations',
    icon: '✏️'
  },
  {
    name: 'creation',
    title: 'Store Creation',
    description: 'Performance of creating new stores and instances',
    icon: '🏗️'
  },
  {
    name: 'async',
    title: 'Reactive Async',
    description: 'Reactive async state operations with automatic dependency tracking',
    icon: '⚡'
  },
  {
    name: 'complexity',
    title: 'Complex Operations',
    description: 'Performance with complex nested state structures',
    icon: '🔧'
  },
  {
    name: 'memory',
    title: 'Memory Operations',
    description: 'Memory efficiency and large state operations',
    icon: '💾'
  }
];

function getGroupSummary(groupName, categoryPath) {
  const resultsPath = join(categoryPath, 'groups', groupName, 'results.json');

  if (!existsSync(resultsPath)) {
    return {
      status: '⚪ Not Run',
      bestLib: 'N/A',
      details: 'No results available'
    };
  }

  try {
    const results = JSON.parse(readFileSync(resultsPath, 'utf-8'));
    let bestLib = 'N/A';
    let maxHz = 0;

    results.files?.forEach(file => {
      file.groups?.forEach(group => {
        group.benchmarks?.forEach(bench => {
          if (bench.hz && bench.hz > maxHz) {
            maxHz = bench.hz;
            bestLib = bench.name;
          }
        });
      });
    });

    return {
      status: '✅ Complete',
      bestLib,
      details: `Best: ${bestLib} (${(maxHz / 1000000).toFixed(2)}M ops/sec)`
    };
  } catch (error) {
    return {
      status: '❌ Error',
      bestLib: 'N/A',
      details: 'Failed to parse results'
    };
  }
}

function generateMainReadme(categoryPath) {
  const readmePath = join(categoryPath, 'README.md');

  // Collect all results for comprehensive rankings
  const allResults = {};
  const libraryStats = {};

  GROUPS.forEach(group => {
    const resultsPath = join(categoryPath, 'groups', group.name, 'results.json');
    if (existsSync(resultsPath)) {
      try {
        const results = JSON.parse(readFileSync(resultsPath, 'utf-8'));
        allResults[group.name] = results;

        // Aggregate library performance
        results.files?.forEach(file => {
          file.groups?.forEach(g => {
            g.benchmarks?.forEach(bench => {
              if (!libraryStats[bench.library]) {
                libraryStats[bench.library] = {
                  totalHz: 0,
                  count: 0,
                  maxHz: 0,
                  categories: new Set()
                };
              }
              libraryStats[bench.library].totalHz += bench.hz;
              libraryStats[bench.library].count++;
              libraryStats[bench.library].maxHz = Math.max(libraryStats[bench.library].maxHz, bench.hz);
              libraryStats[bench.library].categories.add(group.name);
            });
          });
        });
      } catch (error) {
        // Skip invalid results
      }
    }
  });

  // Calculate geometric mean score for each library
  const geometricMean = (values) => {
    if (values.length === 0) return 0;
    const product = values.reduce((a, b) => a * b, 1);
    return Math.pow(product, 1 / values.length);
  };

  const libraryScores = {};

  // For each test, normalize scores (fastest = 100)
  GROUPS.forEach(group => {
    if (!allResults[group.name]) return;

    const results = allResults[group.name];
    results.files?.forEach(file => {
      file.groups?.forEach(g => {
        // Group benchmarks by test name
        const byTest = {};
        g.benchmarks?.forEach(bench => {
          const testName = bench.name.split(' - ')[0];
          if (!byTest[testName]) byTest[testName] = [];
          byTest[testName].push(bench);
        });

        // For each test, calculate normalized scores
        Object.values(byTest).forEach(testBenches => {
          const maxHz = Math.max(...testBenches.map(b => b.hz || 0));
          if (maxHz === 0) return;

          testBenches.forEach(bench => {
            if (!libraryScores[bench.library]) {
              libraryScores[bench.library] = [];
            }
            const score = (bench.hz / maxHz) * 100;
            libraryScores[bench.library].push(score);
          });
        });
      });
    });
  });

  // Calculate final scores using geometric mean
  const comprehensiveRanking = Object.entries(libraryScores)
    .map(([library, scores]) => ({
      library,
      score: geometricMean(scores),
      testCount: scores.length
    }))
    .sort((a, b) => b.score - a.score);

  // Calculate test coverage (how many unique tests each library participates in)
  const libraryCoverage = {};
  const allUniqueTests = new Set();

  GROUPS.forEach(group => {
    if (!allResults[group.name]) return;

    const results = allResults[group.name];
    results.files?.forEach(file => {
      file.groups?.forEach(g => {
        const testNames = new Set();
        g.benchmarks?.forEach(bench => {
          const testName = `${group.name}:${bench.name.split(' - ')[0]}`;
          testNames.add(testName);
          allUniqueTests.add(testName);

          if (!libraryCoverage[bench.library]) {
            libraryCoverage[bench.library] = new Set();
          }
          libraryCoverage[bench.library].add(testName);
        });
      });
    });
  });

  const totalTests = allUniqueTests.size;
  const coverageRanking = Object.entries(libraryCoverage)
    .map(([library, tests]) => ({
      library,
      supported: tests.size,
      total: totalTests,
      percentage: Math.round((tests.size / totalTests) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Calculate overall rankings (by peak performance)
  const overallRanking = Object.entries(libraryStats)
    .map(([library, stats]) => ({
      library,
      avgHz: stats.totalHz / stats.count,
      maxHz: stats.maxHz,
      categories: Array.from(stats.categories)
    }))
    .sort((a, b) => b.maxHz - a.maxHz);

  const formatHz = (hz) => {
    if (hz >= 1000000) return `~${(hz / 1000000).toFixed(1)}M ops/sec`;
    else if (hz >= 1000) return `~${Math.round(hz / 1000)}K ops/sec`;
    else return `~${Math.round(hz)} ops/sec`;
  };

  const getPerformanceEmoji = (hz) => {
    if (hz >= 10000000) return '⚡⚡⚡⚡';
    else if (hz >= 1000000) return '⚡⚡⚡';
    else if (hz >= 100000) return '⚡⚡';
    else if (hz >= 10000) return '⚡';
    else return '○';
  };

  const formatLibraryName = (lib) => {
    const nameMap = {
      'jotai': 'Jotai',
      'zustand': 'Zustand',
      'redux': 'Redux Toolkit',
      'redux-toolkit': 'Redux Toolkit',
      'mobx': 'MobX',
      'valtio': 'Valtio',
      'preact-signals': 'Preact Signals',
      'solid-signals': 'Solid Signals',
      'zen': 'Zen'
    };
    return nameMap[lib] || lib;
  };

  let readme = `# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **${Object.keys(libraryStats).length} tested libraries** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

`;

  // Comprehensive Performance Score (using geometric mean)
  if (comprehensiveRanking.length > 0) {
    const topScore = comprehensiveRanking[0].score;

    readme += `### 🏆 Comprehensive Performance Score\n\n`;
    readme += `Based on geometric mean across all tests (normalized, fastest = 100):\n\n`;
    readme += `| Rank | Library | Score | Relative | Tests |\n`;
    readme += `|------|---------|-------|----------|-------|\n`;

    comprehensiveRanking.forEach((lib, index) => {
      const rank = index + 1;
      const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
      const rankDisplay = emoji || rank.toString();
      const libraryName = formatLibraryName(lib.library);
      const score = lib.score.toFixed(1);
      const relative = rank === 1 ? 'Baseline' : `${((lib.score / topScore) * 100).toFixed(1)}%`;

      readme += `| ${rankDisplay} | **${libraryName}** | ${score}/100 | ${relative} | ${lib.testCount} |\n`;
    });
    readme += '\n';
    readme += `> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.\n\n`;
  }

  // Peak Performance Table
  if (overallRanking.length > 0) {
    readme += `### ⚡ Peak Performance\n\n`;
    readme += `Highest recorded performance by category:\n\n`;
    readme += `| Rank | Library | Best Category | Peak Performance | Avg Performance |\n`;
    readme += `|------|---------|--------------|------------------|---------------|\n`;

    overallRanking.slice(0, 10).forEach((lib, index) => {
      const libraryName = formatLibraryName(lib.library);
      const bestCategory = lib.categories[0] || '-';
      const peakPerf = formatHz(lib.maxHz);
      const emoji = getPerformanceEmoji(lib.maxHz);
      readme += `| ${index + 1} | **${libraryName}** | ${bestCategory} | ${peakPerf} | ${emoji} |\n`;
    });
    readme += '\n';
  }

  // Test Coverage Rankings
  if (coverageRanking.length > 0) {
    readme += `### 🎯 Test Coverage Rankings\n\n`;
    readme += `Percentage of benchmark tests each library supports:\n\n`;
    readme += `| Rank | Library | Supported | Coverage |\n`;
    readme += `|------|---------|-----------|----------|\n`;

    coverageRanking.forEach((lib, index) => {
      const rank = index + 1;
      const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
      const rankDisplay = emoji || rank.toString();
      const libraryName = formatLibraryName(lib.library);

      readme += `| ${rankDisplay} | **${libraryName}** | ${lib.supported}/${lib.total} | ${lib.percentage}% |\n`;
    });
    readme += '\n';
    readme += `> 🎯 **Note:** Higher coverage means the library participates in more test categories.\n\n`;
  }

  // Category-specific rankings
  GROUPS.forEach(group => {
    const resultsPath = join(categoryPath, 'groups', group.name, 'results.json');

    readme += `### ${group.icon} ${group.title}\n\n`;
    readme += `[📊 View Detailed Results →](groups/${group.name}/)\n\n`;

    if (existsSync(resultsPath)) {
      try {
        const results = JSON.parse(readFileSync(resultsPath, 'utf-8'));

        // Group benchmarks by library and calculate scores
        const libraryPerformance = {};
        const testScores = {}; // Track max Hz per test for normalization

        results.files?.forEach(file => {
          file.groups?.forEach(g => {
            // First pass: find max Hz for each test
            const byTest = {};
            g.benchmarks?.forEach(bench => {
              const testName = bench.name.split(' - ')[0];
              if (!byTest[testName]) byTest[testName] = [];
              byTest[testName].push(bench);
            });

            // Calculate max Hz per test and library scores
            Object.values(byTest).forEach(testBenches => {
              const maxHz = Math.max(...testBenches.map(b => b.hz || 0));

              testBenches.forEach(bench => {
                if (!libraryPerformance[bench.library]) {
                  libraryPerformance[bench.library] = {
                    scores: [],
                    totalHz: 0,
                    count: 0,
                    maxHz: 0
                  };
                }

                const score = maxHz > 0 ? (bench.hz / maxHz) * 100 : 0;
                libraryPerformance[bench.library].scores.push(score);
                libraryPerformance[bench.library].totalHz += bench.hz;
                libraryPerformance[bench.library].count++;
                libraryPerformance[bench.library].maxHz = Math.max(libraryPerformance[bench.library].maxHz, bench.hz);
              });
            });
          });
        });

        if (Object.keys(libraryPerformance).length > 0) {
          // Calculate geometric mean score for each library
          const libraryRankings = Object.entries(libraryPerformance)
            .map(([library, data]) => ({
              library,
              score: geometricMean(data.scores),
              avgHz: data.totalHz / data.count,
              maxHz: data.maxHz
            }))
            .sort((a, b) => b.score - a.score);

          // Add visual chart
          const topScore = libraryRankings[0].score;
          readme += `**Performance Chart:**\n\n\`\`\`\n`;
          libraryRankings.forEach((lib, idx) => {
            const rank = idx + 1;
            const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
            const barLength = Math.round((lib.score / 100) * 30);
            const bar = '█'.repeat(barLength);
            readme += `${emoji.toString().padEnd(4)} ${formatLibraryName(lib.library).padEnd(18)} ${bar.padEnd(32)} ${lib.score.toFixed(1)}/100\n`;
          });
          readme += `\`\`\`\n\n`;

          // Add detailed table
          readme += `| Rank | Library | Score | Relative | Avg Performance |\n`;
          readme += `|------|---------|-------|----------|----------------|\n`;

          libraryRankings.forEach((lib, index) => {
            const rank = index + 1;
            const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
            const rankDisplay = emoji || rank.toString();
            const libraryName = formatLibraryName(lib.library);
            const relative = rank === 1 ? 'Baseline' : `${((lib.score / topScore) * 100).toFixed(1)}%`;
            const avgPerf = formatHz(lib.avgHz);

            readme += `| ${rankDisplay} | **${libraryName}** | ${lib.score.toFixed(1)}/100 | ${relative} | ${avgPerf} |\n`;
          });
          readme += '\n';
        } else {
          readme += `| Rank | Library | Score | Performance |\n`;
          readme += `|------|---------|-------|-------------|\n`;
          readme += `| - | - | ⏳ Pending | - |\n\n`;
          readme += `> Run benchmarks: \`npm run benchmark:${group.name}\`\n\n`;
        }
      } catch (error) {
        readme += `| Rank | Library | Score | Performance |\n`;
        readme += `|------|---------|-------|-------------|\n`;
        readme += `| - | - | ⏳ Pending | - |\n\n`;
        readme += `> Run benchmarks: \`npm run benchmark:${group.name}\`\n\n`;
      }
    } else {
      readme += `| Rank | Library | Score | Performance |\n`;
      readme += `|------|---------|-------|-------------|\n`;
      readme += `| - | - | ⏳ Pending | - |\n\n`;
      readme += `> Run benchmarks: \`npm run benchmark:${group.name}\`\n\n`;
    }
  });

  readme += `---\n\n`;

  // Test Categories Overview
  readme += `## 🗂️ Test Categories\n\nExplore detailed performance results for each category:\n\n`;
  readme += `| Category | Description | Status |\n`;
  readme += `|----------|-------------|--------|\n`;

  GROUPS.forEach(group => {
    const resultsPath = join(categoryPath, 'groups', group.name, 'results.json');
    const status = existsSync(resultsPath) ? '✅ Results Available' : '⏳ Pending';
    readme += `| [${group.icon} ${group.title}](groups/${group.name}/) | ${group.description} | ${status} |\n`;
  });

  readme += `\n> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis\n\n`;

  readme += `## 🚀 Quick Start\n\n`;
  readme += `\`\`\`bash\n# Install dependencies\nnpm install\n\n# Run all benchmarks\nnpm run benchmark\n\n# Run specific category\nnpm run benchmark:write\nnpm run benchmark:read\n\n# Generate reports\nnpm run extract-results\n\`\`\`\n\n`;

  readme += `## 📊 Library Coverage\n\n`;
  readme += `This benchmark tests the following state management libraries:\n\n`;
  readme += `- 🔄 **Redux Toolkit** - Predictable state container\n`;
  readme += `- 🎯 **Zustand** - Small, fast and scalable state management\n`;
  readme += `- ⚛️ **Jotai** - Primitive and flexible state management\n`;
  readme += `- 🌀 **MobX** - Simple, scalable state management\n`;
  readme += `- 💨 **Valtio** - Valtio is a proxy state management library\n`;
  readme += `- ⚡ **Preact Signals** - Signal-based state management\n`;
  readme += `- 🔥 **Solid Signals** - Solid.js signal library\n`;
  readme += `- 🧘 **Zen** - Minimal state management library\n\n`;

  readme += `## 📁 Project Structure\n\n`;
  readme += `\`\`\`\nbenchmarks/state-management/\n├── groups/                    # Test group directories\n│   ├── read/                 # Read operation tests\n│   ├── write/                # Write operation tests\n│   ├── creation/             # Store creation tests\n│   ├── async/                # Async operation tests\n│   ├── complexity/           # Complex operation tests\n│   └── memory/               # Memory operation tests\n├── src/                      # Shared source code\n│   ├── stores/              # Library implementations\n│   └── benchmark.bench.ts   # Legacy benchmark (deprecated)\n├── results/                  # Aggregated results\n└── README.md                 # This file\n\`\`\`\n\n`;

  readme += `## 🧪 Adding New Tests\n\n`;
  readme += `To add a new test group:\n\n1. Create a new directory in \`groups/\`\n2. Add benchmark files with the pattern \`*.bench.ts\`\n3. Use the shared test configuration from \`../shared/test-config.ts\`\n4. Update the main scripts in \`package.json\`\n\nExample new test file:\n\`\`\`typescript\nimport { bench, describe } from 'vitest';\nimport { LIBRARIES } from '../shared/test-config';\n\ndescribe('My New Test', () => {\n  LIBRARIES.forEach(library => {\n    bench(\`My Test - \${library.name}\`, () => {\n      // Your test logic here\n      library.actions.someMethod();\n    });\n  });\n});\n\`\`\`\n\n`;

  readme += `## 🔗 Navigation\n\n`;
  readme += `- [Read Operations](groups/read/) - Read performance tests\n`;
  readme += `- [Write Operations](groups/write/) - Write performance tests\n`;
  readme += `- [Store Creation](groups/creation/) - Store creation tests\n`;
  readme += `- [Async Operations](groups/async/) - Async operation tests\n`;
  readme += `- [Complex Operations](groups/complexity/) - Complex state tests\n`;
  readme += `- [Memory Operations](groups/memory/) - Memory efficiency tests\n\n`;

  readme += `## ℹ️ About\n\n`;
  readme += `This benchmark suite provides comprehensive performance analysis across multiple dimensions of state management. Each test group focuses on specific aspects to provide clear, actionable insights for library selection and optimization.\n\n`;
  readme += `The modular structure makes it easy to:\n- Add new test scenarios\n- Maintain existing tests\n- Compare specific aspects of performance\n- Extend to new libraries\n\n`;
  readme += `---\n`;
  readme += `*Last updated: ${new Date().toISOString()}*\n`;

  writeFileSync(readmePath, readme);
  console.log(`✅ Generated main README: ${readmePath}`);
}

// Main execution
const categoryPath = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');

generateMainReadme(categoryPath);