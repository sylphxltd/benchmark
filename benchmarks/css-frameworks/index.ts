/**
 * CSS Frameworks Category
 *
 * Build-time performance and CSS output size benchmarks for utility-first CSS frameworks.
 *
 * Measures:
 * - Build time (cold build)
 * - CSS output size (minified + gzipped)
 *
 * NOTE: Runtime tests were removed as they measured meaningless string concatenation.
 * Utility-first CSS frameworks (Tailwind, UnoCSS, Panda) are build-time tools.
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category with Build Metrics
// ============================================================================

export const category = createCategory({
  id: 'css-frameworks',
  name: 'CSS Frameworks',
  description: 'Build-time performance and CSS output size benchmarks',
  emoji: '🎨',

  // Primary metric: Build time (lower is better)
  // Secondary metric: CSS output size (lower is better)
  metrics: {
    primary: {
      type: 'speed',
      name: 'Build Time',
      unit: 'ms',
      lowerIsBetter: true,
    },
    secondary: [
      {
        type: 'size',
        name: 'CSS Output',
        unit: 'bytes',
        lowerIsBetter: true,
      },
    ],
  },

  performanceTiers: [
    {
      name: 'Blazing Fast (Tier S)',
      threshold: 700,
      description: 'Sub-700ms build time',
    },
    {
      name: 'Fast (Tier A)',
      threshold: 900,
      description: '700-900ms build time',
    },
    {
      name: 'Standard (Tier B)',
      threshold: 1200,
      description: '900-1200ms build time',
    },
    {
      name: 'Slow (Tier C)',
      threshold: 0,
      description: 'Above 1200ms build time',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  buildPerformance: category.createGroup({
    id: '01-build-performance',
    title: 'Build Performance',
    description: 'Cold build time and CSS output size for small apps',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // Build Performance
  smallAppBuild: groups.buildPerformance.createTest({
    name: 'Small App Build',
    description: 'Build a small app (10 components) and measure build time + CSS output',
    testType: 'build',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/silk');
  await import('./libraries/tailwind');
  await import('./libraries/panda');
  await import('./libraries/unocss');

  // Print summary
  category.printSummary();

  // Validate
  const validation = category.validate();
  if (!validation.valid) {
    console.error('\n❌ Validation failed:\n');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ Validation passed\n');

  // Run benchmarks
  const results = await category.run();

  console.log('\n✅ Benchmarks completed\n');
  console.log('Results summary:');
  console.log(`  Total tests run: ${results.results.length}`);
  console.log(`  Timestamp: ${results.timestamp}`);

  // Save results
  console.log('\n📝 Saving results...\n');
  await category.saveResults(results);
  console.log('✅ Results saved\n');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
