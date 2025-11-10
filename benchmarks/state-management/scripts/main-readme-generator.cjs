#!/usr/bin/env node
/**
 * Main README Generator
 * Generates the main README.md with performance rankings from actual results
 */

const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

class MainReadmeGenerator {
  constructor(basePath) {
    this.basePath = basePath;
    this.groupsPath = join(basePath, 'groups');
  }

  loadAllResults() {
    const categories = ['write', 'read', 'async', 'form', 'memory', 'cache'];
    const allResults = {};

    for (const category of categories) {
      const resultsPath = join(this.groupsPath, category, 'results.json');
      if (existsSync(resultsPath)) {
        try {
          const data = JSON.parse(readFileSync(resultsPath, 'utf-8'));
          allResults[category] = data;
        } catch (error) {
          console.warn(`Warning: Could not parse results for ${category}`);
        }
      }
    }

    return allResults;
  }

  extractLibraryPerformance(results) {
    const libraryStats = {};

    for (const [category, data] of Object.entries(results)) {
      if (!data.files || data.files.length === 0) continue;

      for (const file of data.files) {
        for (const group of file.groups) {
          for (const benchmark of group.benchmarks) {
            const lib = benchmark.library;

            if (!libraryStats[lib]) {
              libraryStats[lib] = {
                totalHz: 0,
                count: 0,
                maxHz: 0,
                categories: new Set()
              };
            }

            libraryStats[lib].totalHz += benchmark.hz;
            libraryStats[lib].count++;
            libraryStats[lib].maxHz = Math.max(libraryStats[lib].maxHz, benchmark.hz);
            libraryStats[lib].categories.add(category);
          }
        }
      }
    }

    // Calculate averages and sort
    const ranked = Object.entries(libraryStats)
      .map(([library, stats]) => ({
        library,
        avgHz: stats.totalHz / stats.count,
        maxHz: stats.maxHz,
        count: stats.count,
        categories: Array.from(stats.categories)
      }))
      .sort((a, b) => b.maxHz - a.maxHz);

    return ranked;
  }

  formatPerformance(hz) {
    if (hz >= 1000000) return `~${(hz / 1000000).toFixed(1)}M ops/sec`;
    else if (hz >= 1000) return `~${Math.round(hz / 1000)}K ops/sec`;
    else return `~${Math.round(hz)} ops/sec`;
  }

  getPerformanceEmoji(hz) {
    if (hz >= 10000000) return '⚡⚡⚡⚡';
    else if (hz >= 1000000) return '⚡⚡⚡';
    else if (hz >= 100000) return '⚡⚡';
    else if (hz >= 10000) return '⚡';
    else return '○';
  }

  generateCategoryRanking(category, results) {
    const categoryKey = category.key;
    const resultsPath = join(this.groupsPath, categoryKey, 'results.json');

    if (!existsSync(resultsPath)) {
      return {
        content: `### ${category.emoji} ${category.title}\n\n[📊 View Detailed Results →](groups/${categoryKey}/)\n\n| Rank | Library | ${category.metric} | Performance |\n|------|---------|----------------|-------------|\n| - | - | ⏳ Pending | - |\n\n> Run benchmarks: \`npm run benchmark:${categoryKey}\`\n\n`,
        hasData: false
      };
    }

    try {
      const data = JSON.parse(readFileSync(resultsPath, 'utf-8'));
      const benchmarks = [];

      for (const file of data.files) {
        for (const group of file.groups) {
          for (const benchmark of group.benchmarks) {
            benchmarks.push(benchmark);
          }
        }
      }

      if (benchmarks.length === 0) {
        return {
          content: `### ${category.emoji} ${category.title}\n\n[📊 View Detailed Results →](groups/${categoryKey}/)\n\n| Rank | Library | ${category.metric} | Performance |\n|------|---------|----------------|-------------|\n| - | - | ⏳ Pending | - |\n\n> Run benchmarks: \`npm run benchmark:${categoryKey}\`\n\n`,
          hasData: false
        };
      }

      // Sort by hz and take top 8
      benchmarks.sort((a, b) => b.hz - a.hz);
      const topBenchmarks = benchmarks.slice(0, 8);

      let content = `### ${category.emoji} ${category.title}\n\n[📊 View Detailed Results →](groups/${categoryKey}/)\n\n| Rank | Library | ${category.metric} | Performance |\n|------|---------|----------------|-------------|\n`;

      topBenchmarks.forEach((benchmark, index) => {
        const libraryName = this.formatLibraryName(benchmark.library);
        const perf = this.formatPerformance(benchmark.hz);
        const emoji = this.getPerformanceEmoji(benchmark.hz);
        content += `| ${index + 1} | **${libraryName}** | ${perf} | ${emoji} |\n`;
      });

      content += '\n';

      return {
        content,
        hasData: true,
        topLibraries: topBenchmarks.slice(0, 3)
      };
    } catch (error) {
      console.warn(`Warning: Could not parse results for ${categoryKey}`);
      return {
        content: `### ${category.emoji} ${category.title}\n\n[📊 View Detailed Results →](groups/${categoryKey}/)\n\n| Rank | Library | ${category.metric} | Performance |\n|------|---------|----------------|-------------|\n| - | - | ⏳ Pending | - |\n\n`,
        hasData: false
      };
    }
  }

  formatLibraryName(library) {
    const nameMap = {
      'jotai': 'Jotai',
      'zustand': 'Zustand',
      'redux': 'Redux Toolkit',
      'redux-toolkit': 'Redux Toolkit',
      'mobx': 'MobX',
      'valtio': 'Valtio',
      'preact-signals': 'Preact Signals',
      'solid-signals': 'Solid Signals',
      'zen': 'Zen',
      'recoil': 'Recoil'
    };
    return nameMap[library] || library;
  }

  generateMainReadme() {
    console.log('📝 Generating main README...');

    const results = this.loadAllResults();
    const libraryRankings = this.extractLibraryPerformance(results);

    const categories = [
      { key: 'write', title: 'Write Operations Ranking', emoji: '✏️', metric: 'Operations/sec' },
      { key: 'read', title: 'Read Operations Ranking', emoji: '📖', metric: 'Operations/sec' },
      { key: 'async', title: 'Async Operations Ranking', emoji: '🔄', metric: 'Operations/sec' },
      { key: 'form', title: 'Form State Ranking', emoji: '📝', metric: 'Operations/sec' },
      { key: 'memory', title: 'Memory Management Ranking', emoji: '🧠', metric: 'Memory Usage' },
      { key: 'cache', title: 'Cache Performance Ranking', emoji: '💾', metric: 'Operations/sec' }
    ];

    // Generate overall ranking
    let overallContent = `### 🏆 Overall Performance\n\nBased on aggregated results across all test categories:\n\n| Rank | Library | Best Category | Peak Performance | Avg Performance |\n|------|---------|--------------|------------------|---------------|\n`;

    if (libraryRankings.length > 0) {
      libraryRankings.slice(0, 10).forEach((lib, index) => {
        const libraryName = this.formatLibraryName(lib.library);
        const bestCategory = lib.categories[0] || '-';
        const peakPerf = this.formatPerformance(lib.maxHz);
        const avgPerf = this.formatPerformance(lib.avgHz);
        const emoji = this.getPerformanceEmoji(lib.maxHz);
        overallContent += `| ${index + 1} | **${libraryName}** | ${bestCategory} | ${peakPerf} | ${emoji} |\n`;
      });
    } else {
      overallContent += `| - | - | - | - | ⏳ Pending |\n`;
    }

    overallContent += '\n';

    // Generate category rankings
    let categoryContent = '';
    const categoryStatuses = [];

    for (const category of categories) {
      const ranking = this.generateCategoryRanking(category, results);
      categoryContent += ranking.content;
      categoryStatuses.push({
        key: category.key,
        title: category.title.replace(' Ranking', ''),
        emoji: category.emoji,
        hasData: ranking.hasData
      });
    }

    // Generate test categories table
    let categoriesTable = `## 🗂️ Test Categories\n\nExplore detailed performance results for each category:\n\n| Category | Description | Status |\n|----------|-------------|--------|\n`;

    const categoryDescriptions = {
      read: 'State access performance across different scales',
      write: 'State mutation and update performance',
      form: 'Complex form state management',
      async: 'Promise handling and async patterns',
      memory: 'Memory usage and allocation patterns',
      cache: 'Memoization and caching efficiency'
    };

    for (const cat of categoryStatuses) {
      const status = cat.hasData ? '✅ Results Available' : '⏳ Pending';
      const desc = categoryDescriptions[cat.key] || '';
      categoriesTable += `| [${cat.emoji} ${cat.title}](groups/${cat.key}/) | ${desc} | ${status} |\n`;
    }

    categoriesTable += '\n> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis\n\n';

    // Count libraries
    const libraryCount = libraryRankings.length;

    // Assemble final README
    const readme = `# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **${libraryCount} tested libraries** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

${overallContent}
${categoryContent}
---

${categoriesTable}
## 🎯 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run all benchmarks
npm run benchmark

# Run specific category
npm run benchmark:write
npm run benchmark:read

# Generate reports
npm run extract-results
\`\`\`

## 📚 Libraries Tested

${libraryRankings.map(lib => `- **${this.formatLibraryName(lib.library)}**`).join('\n')}

## 🏗️ Architecture

This benchmark suite features an **auto-discovery architecture** that automatically generates tests for all available libraries:

1. **Zero Configuration**: Add a library to \`versions.json\` and it's automatically included
2. **Standardized Interface**: All libraries implement the same test interface
3. **Automated Generation**: Tests are generated dynamically for all library × test-type combinations
4. **Modular Results**: Each category has its own detailed README

## 📖 Documentation

- [📝 Test Architecture](docs/architecture.md)
- [🔧 Adding New Libraries](docs/adding-libraries.md)
- [📊 Understanding Results](docs/understanding-results.md)

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](../../CONTRIBUTING.md) for details.

---

*Last updated: ${new Date().toISOString()}*
*Generated by: main-readme-generator.cjs*
`;

    const readmePath = join(this.basePath, 'README.md');
    writeFileSync(readmePath, readme);
    console.log('✅ Generated main README');
  }
}

// CLI interface
if (require.main === module) {
  const generator = new MainReadmeGenerator(process.cwd());
  generator.generateMainReadme();
}

module.exports = MainReadmeGenerator;
