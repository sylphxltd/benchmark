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
    title: 'Async Operations',
    description: 'Performance of asynchronous state operations',
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

  let readme = `# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries with **organized test groups**.

## 📑 Test Groups

This benchmark suite is organized into focused test groups for better maintainability and clarity:

`;

  // Add group overview table
  readme += `| Group | Status | Best Performing Library | Details |\n`;
  readme += '|-------|--------|------------------------|---------|\n';

  GROUPS.forEach(group => {
    const summary = getGroupSummary(group.name, categoryPath);
    readme += `| ${group.icon} [${group.title}](groups/${group.name}/) | ${summary.status} | ${summary.bestLib} | ${summary.details} |\n`;
  });

  readme += `\n## 🚀 Quick Start\n\n`;
  readme += `**Run all groups:**\n\`\`\`bash\nnpm run benchmark:all-groups\n\`\`\n\n`;

  readme += `**Run specific group:**\n\`\`\`bash\nnpm run benchmark:read    # Read operations\nnpm run benchmark:write   # Write operations\nnpm run benchmark:creation # Store creation\nnpm run benchmark:async    # Async operations\nnpm run benchmark:complexity # Complex operations\nnpm run benchmark:memory   # Memory operations\n\`\`\n\n`;

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