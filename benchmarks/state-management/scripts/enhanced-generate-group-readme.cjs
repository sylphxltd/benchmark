#!/usr/bin/env node
/**
 * Enhanced README generator for test groups with advanced analysis
 */

const { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } = require('fs');
const { join } = require('path');

class GroupReadmeGenerator {
  constructor(groupPath, groupName) {
    this.groupPath = groupPath;
    this.groupName = groupName;
    this.resultsPath = join(groupPath, 'results.json');
    this.readmePath = join(groupPath, 'README.md');
    this.historyDir = join(groupPath, 'history');
    this.trendsDir = join(groupPath, 'trends');

    // Ensure history and trends directories exist
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!existsSync(this.historyDir)) {
      mkdirSync(this.historyDir, { recursive: true });
    }
    if (!existsSync(this.trendsDir)) {
      mkdirSync(this.trendsDir, { recursive: true });
    }
  }

  loadResults() {
    if (!existsSync(this.resultsPath)) {
      return null;
    }
    try {
      return JSON.parse(readFileSync(this.resultsPath, 'utf-8'));
    } catch (error) {
      console.error(`Failed to parse results for ${this.groupName}:`, error.message);
      return null;
    }
  }

  loadHistoricalData() {
    if (!existsSync(this.historyDir)) return [];

    const files = readdirSync(this.historyDir)
      .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.json$/))
      .sort()
      .map(file => {
        const date = file.replace('.json', '');
        const data = JSON.parse(readFileSync(join(this.historyDir, file), 'utf-8'));
        return { date, data };
      });
  }

  calculatePerformanceMetrics(results) {
    const metrics = {};
    const performanceData = [];

    results.files?.forEach(file => {
      file.groups?.forEach(group => {
        group.benchmarks?.forEach(bench => {
          if (!bench.hz) return;

          performanceData.push({
            library: bench.name,
            hz: bench.hz,
            mean: bench.mean,
            rme: bench.rme,
            group: group.fullName,
            file: file.filepath
          });
        });
      });
    });

    if (performanceData.length === 0) return metrics;

    // Group by library
    const libraryStats = {};
    performanceData.forEach(item => {
      if (!libraryStats[item.library]) {
        libraryStats[item.library] = [];
      }
      libraryStats[item.library].push(item);
    });

    // Calculate statistics for each library
    Object.entries(libraryStats).forEach(([library, data]) => {
      const hzValues = data.map(d => d.hz);
      metrics[library] = {
        avgHz: hzValues.reduce((a, b) => a + b, 0) / hzValues.length,
        maxHz: Math.max(...hzValues),
        minHz: Math.min(...hzValues),
        testCount: data.length,
        avgRME: data.reduce((a, b) => a + b.rme, 0) / data.length,
        categories: [...new Set(data.map(d => d.group))]
      };
    });

    return metrics;
  }

  calculateRankings(metrics) {
    return Object.entries(metrics)
      .sort((a, b) => b[1].avgHz - a[1].avgHz)
      .map(([library, stats], index) => ({
        rank: index + 1,
        library,
        ...stats,
        relativeSpeed: index === 0 ? 1.0 : stats.avgHz / Object.entries(metrics)[0][1].avgHz
      }));
  }

  generatePerformanceTable(results) {
    if (!results.files || results.files.length === 0) {
      return 'No performance data available.\n\n';
    }

    let table = '';

    results.files.forEach(file => {
      file.groups?.forEach(group => {
        if (!group.benchmarks || group.benchmarks.length === 0) return;

        table += `### ${group.fullName}\n\n`;

        // Create performance table
        table += '| Rank | Library | Ops/sec | Variance | Mean (ms) | p99 (ms) | Samples |\n';
        table += '|------|---------|---------|----------|-----------|-----------|----------|\n';

        const sortedBenchmarks = group.benchmarks
          .filter(bench => bench.hz)
          .sort((a, b) => b.hz - a.hz);

        sortedBenchmarks.forEach((bench, index) => {
          const rank = index + 1;
          const opsPerSec = bench.hz ? bench.hz.toLocaleString() : 'N/A';
          const variance = bench.rme ? `±${bench.rme.toFixed(2)}%` : 'N/A';
          const mean = bench.mean ? `${(bench.mean * 1000).toFixed(4)}` : 'N/A';
          const p99 = bench.p99 ? `${(bench.p99 * 1000).toFixed(4)}` : 'N/A';
          const samples = bench.sampleCount || bench.samples || 'N/A';

          table += `| ${rank} | ${bench.name} | ${opsPerSec} | ${variance} | ${mean} | ${p99} | ${samples} |\n`;
        });

        table += '\n';
      });
    });

    return table;
  }

  generateInsightsSection(metrics, historicalData) {
    if (!metrics || Object.keys(metrics).length === 0) {
      return '';
    }

    let insights = `## 🔍 Performance Insights\n\n`;

    const rankings = this.calculateRankings(metrics);

    // Winner analysis
    if (rankings.length > 0) {
      const winner = rankings[0];
      insights += `### 🏆 Top Performer\n\n`;
      insights += `**${winner.library}** leads with an average of **${winner.avgHz.toLocaleString()} ops/sec** `;
      insights += `(${(winner.relativeSpeed * 100).toFixed(1)}% faster than the baseline).\n\n`;
    }

    // Category analysis
    const categoryWinners = {};
    Object.entries(metrics).forEach(([library, stats]) => {
      stats.categories?.forEach(category => {
        if (!categoryWinners[category]) {
          categoryWinners[category] = { library, stats };
        }
      });
    });

    if (Object.keys(categoryWinners).length > 0) {
      insights += `### 📊 Category Analysis\n\n`;
      Object.entries(categoryWinners).forEach(([category, winner]) => {
        insights += `- **${category}**: ${winner.library} (${winner.avgHz.toLocaleString()} ops/sec)\n`;
      });
      insights += '\n';
    }

    // Historical trends (if available)
    if (historicalData.length > 1) {
      const latest = historicalData[historicalData.length - 1];
      const previous = historicalData[historicalData.length - 2];

      insights += `### 📈 Historical Trends\n\n`;
      insights += `Based on the last ${historicalData.length} test runs:\n`;
      insights += `- **Latest test**: ${latest.date}\n`;
      insights += `- **Previous test**: ${previous.date}\n`;
      insights += `- *Trend analysis coming soon*\n\n`;
    }

    // Recommendations
    insights += `### 💡 Recommendations\n\n`;
    insights += `- **For high-frequency reads**: Consider signal-based libraries (Preact Signals, Solid Signals)\n`;
    insights += `- **For complex state**: Traditional libraries (Redux Toolkit, Zustand) provide better tooling\n`;
    insights += `- **For memory efficiency**: Libraries with smaller bundles (Zustand, Preact Signals) load faster\n`;
    insights += `- **For team adoption**: Well-documented libraries (Redux Toolkit, Zustand) have better learning curves\n\n`;

    return insights;
  }

  generateQuickStartSection() {
    return `## 🚀 Quick Start\n\nTo run only ${this.groupName} tests:\n\n\`\`\`bash\nnpm run benchmark:${this.groupName}\n\`\`\`\n\n`;
  }

  generateExtensionsSection() {
    return `## 🔧 Extending Tests\n\nTo add new scales to ${this.groupName}:\n\n1. Update \`../shared/config.ts\` to add new scale definitions\n2. Use the test generator:\n   \`\`\`bash\n   node -e "\n   const { generateReadTest, WRITE_SCALES } = require('./shared/test-generator.cjs');\n   const content = generateReadTest(WRITE_SCALES.find(s => s.name === 'x1000'));\n   require('fs').writeFileSync('groups/read/read-x1000.bench.ts', content);\n   "\n   \`\`\`\n3. Update package.json with new command:\n   \`\`\`json\n   "scripts": {\n     "benchmark:read-x1000": "node scripts/run-group-benchmark.cjs read-x1000 ."\n   }\n   \`\`\`\n\n`;
  }

  generate() {
    const results = this.loadResults();

    if (!results) {
      console.log(`⚪️ No results available for ${this.groupName}`);
      return;
    }

    const metrics = this.calculatePerformanceMetrics(results);
    const historicalData = this.loadHistoricalData();

    let readme = `# ${this.groupName.charAt(0).toUpperCase() + this.groupName.slice(1)} Tests\n\n`;
    readme += `Performance benchmarks for ${this.groupName.toLowerCase()} operations across state management libraries.\n\n`;

    readme += this.generatePerformanceTable(results);
    readme += this.generateInsightsSection(metrics, historicalData);
    readme += this.generateQuickStartSection();
    readme += this.generateExtensionsSection();
    readme += `## 🔗 Related\n\n`;
    readme += `- [← Back to State Management Benchmarks](../README.md)\n`;
    readme += `- [Overall Performance Rankings](../README.md#-performance-rankings)\n\n`;
    readme += `---\n`;
    readme += `*Last generated: ${new Date().toISOString()}*\n`;

    writeFileSync(this.readmePath, readme);
    console.log(`✅ Generated enhanced README for ${this.groupName}`);

    // Save historical data
    this.saveHistoricalData(results);
  }

  saveHistoricalData(results) {
    const date = new Date().toISOString().split('T')[0];
    const historyPath = join(this.historyDir, `${date}.json`);
    writeFileSync(historyPath, JSON.stringify({
      date,
      results,
      timestamp: new Date().toISOString()
    }, null, 2));
  }
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node enhanced-generate-group-readme.cjs <group-name> [category-path]');
  process.exit(1);
}

const groupPath = join(categoryPath, 'groups', groupName);

if (!existsSync(groupPath)) {
  console.error(`❌ Group directory not found: ${groupPath}`);
  process.exit(1);
}

const generator = new GroupReadmeGenerator(groupPath, groupName);
generator.generate();