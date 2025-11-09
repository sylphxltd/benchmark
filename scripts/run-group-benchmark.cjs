#!/usr/bin/env node
/**
 * Run benchmark for specific group and generate README
 */

const { execSync } = require('child_process');
const { join } = require('path');

function runGroupBenchmark(groupName, categoryPath) {
  const groupPath = join(categoryPath, 'groups', groupName);

  console.log(`🚀 Running ${groupName} benchmark tests...\n`);

  try {
    // Run vitest bench for the specific group
    const vitestCmd = `vitest bench --run --outputJson=${join(groupPath, 'results.json')} '${join(groupPath, '**/*.bench.ts')}'`;
    console.log(`Running: ${vitestCmd}`);

    execSync(vitestCmd, {
      stdio: 'inherit',
      cwd: categoryPath
    });

    console.log(`\n✅ ${groupName} benchmark completed successfully!`);

    // Generate README for the group
    const readmeCmd = `node generate-group-readme.cjs ${groupName} ${categoryPath}`;
    console.log(`Generating README: ${readmeCmd}`);

    execSync(readmeCmd, {
      stdio: 'inherit',
      cwd: join(__dirname, '..')
    });

    console.log(`\n📝 README generated for ${groupName} group!`);

  } catch (error) {
    console.error(`❌ Failed to run ${groupName} benchmark:`, error.message);
    process.exit(1);
  }
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node run-group-benchmark.cjs <group-name> [category-path]');
  console.error('Available groups: read, write, creation, async, complexity, memory');
  process.exit(1);
}

runGroupBenchmark(groupName, categoryPath);