#!/usr/bin/env node
/**
 * Main README Generator for State Management
 * Creates overview README with category rankings and links to detailed results
 */

const { writeFileSync, readFileSync, existsSync, readdirSync } = require('fs');
const { join } = require('path');

class MainReadmeGenerator {
  constructor(basePath) {
    this.basePath = basePath;
    this.groupsPath = join(basePath, 'groups');
  }

  generate() {
    let readme = this.generateHeader();
    readme += this.generatePerformanceRankings();
    readme += this.generateTestCategories();
    readme += this.generateQuickStart();
    readme += this.generateArchitecture();
    readme += this.generateStats();
    readme += this.generateDocumentation();
    readme += this.generateFooter();

    const readmePath = join(this.basePath, 'README.md');
    writeFileSync(readmePath, readme);
    console.log('✅ Generated main README.md');
  }

  generateHeader() {
    return `# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **60+ generated benchmarks** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

`;
  }

  generatePerformanceRankings() {
    let content = `## 📊 Performance Rankings

### 🏆 Overall Performance

Based on aggregated results across all test categories:

| Rank | Library | Best Category | Peak Performance | Avg Performance |
|------|---------|--------------|------------------|-----------------|
`;

    // Load all results and calculate overall ranking
    const allResults = this.loadAllResults();
    const overallRanking = this.calculateOverallRanking(allResults);

    overallRanking.forEach((item, index) => {
      content += `| ${index + 1} | **${item.library}** | ${item.bestCategory} | ${item.peakPerf} | ${item.avgPerf} |\n`;
    });

    content += '\n';

    // Generate category-specific rankings
    const categories = [
      { key: 'write', title: '✏️ Write Operations', metric: 'Operations/sec' },
      { key: 'read', title: '📖 Read Operations', metric: 'Operations/sec' },
      { key: 'async', title: '🔄 Async Operations', metric: 'Operations/sec' },
      { key: 'form', title: '📝 Form State', metric: 'Operations/sec' },
      { key: 'memory', title: '🧠 Memory Management', metric: 'Memory Usage' },
      { key: 'cache', title: '💾 Cache Performance', metric: 'Operations/sec' },
    ];

    categories.forEach(category => {
      content += this.generateCategoryRanking(category);
    });

    content += '---\n\n';
    return content;
  }

  generateCategoryRanking(category) {
    const resultsPath = join(this.groupsPath, category.key, 'results.json');
    let content = `### ${category.title} Ranking

[📊 View Detailed Results →](groups/${category.key}/)

| Rank | Library | ${category.metric} | Performance |
|------|---------|----------------|-------------|
`;

    if (existsSync(resultsPath)) {
      try {
        const results = JSON.parse(readFileSync(resultsPath, 'utf8'));

        if (results.files && results.files.length > 0 &&
            results.files[0].groups && results.files[0].groups.length > 0 &&
            results.files[0].groups[0].benchmarks && results.files[0].groups[0].benchmarks.length > 0) {

          const benchmarks = results.files[0].groups[0].benchmarks;
          const sortedBenchmarks = benchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0));

          sortedBenchmarks.forEach((benchmark, index) => {
            const library = this.capitalizeLibrary(benchmark.library);
            const perf = this.formatPerformance(benchmark.hz);
            const indicator = this.getPerformanceIndicator(benchmark.hz);
            content += `| ${index + 1} | **${library}** | ${perf} | ${indicator} |\n`;
          });
        } else {
          content += this.generatePendingRanking(category.key);
        }
      } catch (error) {
        console.warn(`Warning: Could not load results for ${category.key}:`, error.message);
        content += this.generatePendingRanking(category.key);
      }
    } else {
      content += this.generatePendingRanking(category.key);
    }

    content += '\n';
    return content;
  }

  generatePendingRanking(categoryKey) {
    return `| - | - | ⏳ Pending | - |

> Run benchmarks: \`npm run benchmark:${categoryKey}\`

`;
  }

  capitalizeLibrary(library) {
    const map = {
      'redux': 'Redux Toolkit',
      'zustand': 'Zustand',
      'jotai': 'Jotai'
    };
    return map[library] || library.charAt(0).toUpperCase() + library.slice(1);
  }

  formatPerformance(hz) {
    if (!hz || hz === 0) return '⏳ Pending';

    if (hz >= 1000000) {
      return `~${(hz / 1000000).toFixed(1)}M ops/sec`;
    } else if (hz >= 1000) {
      return `~${(hz / 1000).toFixed(0)}K ops/sec`;
    } else {
      return `~${hz.toFixed(0)} ops/sec`;
    }
  }

  getPerformanceIndicator(hz) {
    if (!hz || hz === 0) return '-';

    if (hz >= 5000000) return '⚡⚡⚡';
    if (hz >= 1000000) return '⚡⚡';
    if (hz >= 100000) return '⚡';
    return '○';
  }

  loadAllResults() {
    const results = {};
    const categories = ['write', 'read', 'async', 'form', 'memory', 'cache'];

    categories.forEach(category => {
      const resultsPath = join(this.groupsPath, category, 'results.json');
      if (existsSync(resultsPath)) {
        try {
          results[category] = JSON.parse(readFileSync(resultsPath, 'utf8'));
        } catch (error) {
          console.warn(`Warning: Could not load ${category} results:`, error.message);
        }
      }
    });

    return results;
  }

  calculateOverallRanking(allResults) {
    const libraryStats = {};

    // Collect all performance data for each library
    Object.entries(allResults).forEach(([category, results]) => {
      if (results.files && results.files.length > 0 &&
          results.files[0].groups && results.files[0].groups.length > 0) {

        const benchmarks = results.files[0].groups[0].benchmarks;
        benchmarks.forEach(benchmark => {
          const lib = benchmark.library;
          if (!libraryStats[lib]) {
            libraryStats[lib] = {
              library: this.capitalizeLibrary(lib),
              performances: [],
              bestCategory: '',
              bestPerf: 0
            };
          }

          libraryStats[lib].performances.push(benchmark.hz || 0);

          if (benchmark.hz > libraryStats[lib].bestPerf) {
            libraryStats[lib].bestPerf = benchmark.hz;
            libraryStats[lib].bestCategory = category.charAt(0).toUpperCase() + category.slice(1) + ' Operations';
          }
        });
      }
    });

    // Calculate rankings
    const rankings = Object.values(libraryStats).map(stats => {
      const avg = stats.performances.length > 0
        ? stats.performances.reduce((a, b) => a + b, 0) / stats.performances.length
        : 0;

      return {
        library: stats.library,
        bestCategory: stats.bestCategory || '-',
        peakPerf: this.formatPerformance(stats.bestPerf),
        avgPerf: this.getPerformanceIndicator(avg) + ' ' + this.getPerformanceLabel(avg)
      };
    });

    // Sort by best performance
    rankings.sort((a, b) => {
      const aHz = this.extractHz(a.peakPerf);
      const bHz = this.extractHz(b.peakPerf);
      return bHz - aHz;
    });

    // Add pending libraries
    const testedLibs = rankings.map(r => r.library);
    const allLibs = ['Zustand', 'Redux Toolkit', 'Jotai'];

    allLibs.forEach(lib => {
      if (!testedLibs.includes(lib)) {
        rankings.push({
          library: lib,
          bestCategory: '-',
          peakPerf: '-',
          avgPerf: '⏳ Pending'
        });
      }
    });

    return rankings;
  }

  extractHz(perfString) {
    if (!perfString || perfString === '-') return 0;
    const match = perfString.match(/([\d.]+)([MK]?)/);
    if (!match) return 0;

    const value = parseFloat(match[1]);
    const unit = match[2];

    if (unit === 'M') return value * 1000000;
    if (unit === 'K') return value * 1000;
    return value;
  }

  getPerformanceLabel(hz) {
    if (hz >= 5000000) return 'Excellent';
    if (hz >= 1000000) return 'Very Good';
    if (hz >= 100000) return 'Good';
    if (hz > 0) return 'Fair';
    return '';
  }

  generateTestCategories() {
    return `## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [📖 Read Operations](groups/read/) | State access performance across different scales | ${this.getCategoryStatus('read')} |
| [✏️ Write Operations](groups/write/) | State mutation and update performance | ${this.getCategoryStatus('write')} |
| [📝 Form State](groups/form/) | Complex form state management | ${this.getCategoryStatus('form')} |
| [🔄 Async Operations](groups/async/) | Promise handling and async patterns | ${this.getCategoryStatus('async')} |
| [🧠 Memory Management](groups/memory/) | Memory usage and allocation patterns | ${this.getCategoryStatus('memory')} |
| [💾 Cache Performance](groups/cache/) | Memoization and caching efficiency | ${this.getCategoryStatus('cache')} |

> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis

---

`;
  }

  getCategoryStatus(category) {
    const resultsPath = join(this.groupsPath, category, 'results.json');
    if (existsSync(resultsPath)) {
      try {
        const results = JSON.parse(readFileSync(resultsPath, 'utf8'));
        if (results.files && results.files.length > 0 &&
            results.files[0].groups && results.files[0].groups.length > 0 &&
            results.files[0].groups[0].benchmarks && results.files[0].groups[0].benchmarks.length > 0) {
          return '✅ Results Available';
        }
      } catch (error) {
        // Fall through to pending
      }
    }
    return '⏳ Pending';
  }

  generateQuickStart() {
    return `## 🚀 Quick Start

### Run All Benchmarks

\`\`\`bash
# Run all benchmarks and generate results
npm run benchmark:all-groups

# Run specific category
npm run benchmark:read
npm run benchmark:write
npm run benchmark:form
npm run benchmark:async
npm run benchmark:memory
npm run benchmark:cache

# Interactive developer dashboard
node scripts/dev-dashboard.cjs
\`\`\`

### Extract and View Results

\`\`\`bash
# Extract results from all benchmarks
node scripts/extract-results.cjs

# Generate updated READMEs with results
node main-readme-generator.cjs
node scripts/group-readme-generator.cjs
\`\`\`

### Add New Library

\`\`\`bash
# 1. Create library directory
mkdir libraries/your-library

# 2. Add implementation files
touch libraries/your-library/meta.ts
touch libraries/your-library/store.ts

# 3. Auto-generate tests
npx tsx scripts/test-generator.ts state-management
\`\`\`

---

`;
  }

  generateArchitecture() {
    return `## 🏗️ Architecture

This benchmark suite uses a **revolutionary auto-discovery architecture**:

- **Zero Configuration**: Add libraries without modifying core code
- **Automatic Discovery**: Libraries and test types are auto-detected
- **Type Safe**: Full TypeScript support with automatic validation
- **Modular Design**: Each component can be developed independently

### Directory Structure

\`\`\`
benchmarks/state-management/
├── README.md               # This file - overview and rankings
├── groups/                 # Test categories with detailed results
│   ├── read/              # 📖 Read operation benchmarks + results
│   ├── write/             # ✏️ Write operation benchmarks + results
│   ├── form/              # 📝 Form state benchmarks + results
│   ├── async/             # 🔄 Async operation benchmarks + results
│   ├── memory/            # 🧠 Memory management benchmarks + results
│   └── cache/             # 💾 Cache performance benchmarks + results
├── libraries/             # Self-describing library implementations
├── test-types/            # Test type configurations
├── generated/             # Auto-generated comparison tests
└── scripts/               # Automation and generation tools
    ├── extract-results.cjs       # Extract benchmark results
    ├── main-readme-generator.cjs # Generate this README
    └── group-readme-generator.cjs # Generate group READMEs
\`\`\`

---

`;
  }

  generateStats() {
    return `## 📊 Stats

- **3 Libraries Tested**: Redux Toolkit, Zustand, Jotai
- **6 Test Categories**: Read, Write, Form, Async, Memory, Cache
- **60+ Generated Tests**: Automatically created comparison benchmarks
- **Multiple Scales**: Single, Burst, Batch, Heavy, Extreme

---

`;
  }

  generateDocumentation() {
    return `## 📚 Documentation

- **[Architecture](docs/architecture.md)** - Deep dive into the auto-discovery system
- **[Methodology](docs/methodology.md)** - How benchmarks are measured
- **[Contributing](docs/contributing.md)** - Add new libraries or test types

---

`;
  }

  generateFooter() {
    return `Made with ⚡ by the Benchmark Team | [Report Issues](https://github.com/sylphxltd/benchmark/issues)
`;
  }
}

// Run the generator
const basePath = process.cwd();
const generator = new MainReadmeGenerator(basePath);
generator.generate();
