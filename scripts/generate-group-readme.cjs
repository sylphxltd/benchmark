#!/usr/bin/env node
/**
 * Generate README for specific test group
 */

const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

function generateGroupReadme(groupPath, groupName) {
  const resultsPath = join(groupPath, 'results.json');

  if (!existsSync(resultsPath)) {
    console.error(`❌ No results found for group: ${groupName}`);
    return;
  }

  const results = JSON.parse(readFileSync(resultsPath, 'utf-8'));
  const readmePath = join(groupPath, 'README.md');

  let readme = `# ${groupName.charAt(0).toUpperCase() + groupName.slice(1)} Tests\n\n`;
  readme += `Performance benchmarks for ${groupName} operations across state management libraries.\n\n`;

  // Generate performance table
  if (results.files && results.files.length > 0) {
    readme += `## 📊 Performance Results\n\n`;

    results.files.forEach(file => {
      file.groups?.forEach(group => {
        readme += `### ${group.fullName}\n\n`;

        if (group.benchmarks && group.benchmarks.length > 0) {
          readme += '| Library | Ops/sec | Variance | Mean |\n';
          readme += '|---------|---------|----------|------|\n';

          group.benchmarks
            .sort((a, b) => (b.hz || 0) - (a.hz || 0))
            .forEach(bench => {
              const opsPerSec = bench.hz ? bench.hz.toLocaleString() : 'N/A';
              const variance = bench.rme ? `±${bench.rme.toFixed(2)}%` : 'N/A';
              const mean = bench.mean ? `${(bench.mean * 1000).toFixed(4)}ms` : 'N/A';
              readme += `| ${bench.name} | ${opsPerSec} | ${variance} | ${mean} |\n`;
            });

          readme += '\n';
        }
      });
    });
  }

  // Add link back to main README
  readme += `## 🔗 Related\n\n`;
  readme += `- [← Back to State Management Benchmarks](../README.md)\n`;
  readme += `- [Overall Performance Rankings](../README.md#-performance-rankings)\n\n`;

  // Add how to run section
  readme += `## 🚀 Running Tests\n\n`;
  readme += `To run only ${groupName} tests:\n\n`;
  readme += `\`\`\`bash\n`;
  readme += `npm run benchmark:${groupName}\n`;
  readme += `\`\`\`\n\n`;

  readme += `To run all state management tests:\n\n`;
  readme += `\`\`\`bash\n`;
  readme += `npm run benchmark\n`;
  readme += `\`\`\`\n`;

  readme += `---\n`;
  readme += `*Last generated: ${new Date().toISOString()}*\n`;

  writeFileSync(readmePath, readme);
  console.log(`✅ Generated README for ${groupName}: ${readmePath}`);
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node generate-group-readme.cjs <group-name> [category-path]');
  process.exit(1);
}

const groupPath = join(categoryPath, 'groups', groupName);

if (!existsSync(groupPath)) {
  console.error(`❌ Group directory not found: ${groupPath}`);
  process.exit(1);
}

generateGroupReadme(groupPath, groupName);