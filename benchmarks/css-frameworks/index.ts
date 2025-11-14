/**
 * CSS Frameworks Category
 *
 * Comprehensive benchmarks for modern CSS frameworks measuring:
 * - Build performance (cold, incremental, watch mode)
 * - Bundle size optimization (raw, minified, gzipped)
 * - CSS generation efficiency
 * - PurgeCSS/tree-shaking effectiveness
 *
 * Frameworks tested:
 * - Tailwind CSS: Utility-first CSS framework
 * - UnoCSS: Instant on-demand atomic CSS engine
 * - Panda CSS: Type-safe CSS-in-JS with build-time extraction
 * - Silk UI: Modern component-based styling solution
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category with Comprehensive Metrics
// ============================================================================

export const category = createCategory({
  id: 'css-frameworks',
  name: 'CSS Frameworks',
  description: 'Comprehensive CSS framework build performance and optimization benchmarks',
  emoji: '🎨',

  // Multi-metric approach for CSS frameworks
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
        name: 'CSS Output (Gzipped)',
        unit: 'bytes',
        lowerIsBetter: true,
      },
      {
        type: 'size',
        name: 'CSS Output (Raw)',
        unit: 'bytes',
        lowerIsBetter: true,
      },
      {
        type: 'quality',
        name: 'Tree-shaking Efficiency',
        unit: '%',
      },
    ],
  },

  performanceTiers: [
    {
      name: 'Lightning Fast (Tier S)',
      threshold: 500,
      description: 'Sub-500ms cold build time',
    },
    {
      name: 'Fast (Tier A)',
      threshold: 800,
      description: '500-800ms cold build time',
    },
    {
      name: 'Standard (Tier B)',
      threshold: 1200,
      description: '800-1200ms cold build time',
    },
    {
      name: 'Slow (Tier C)',
      threshold: 0,
      description: 'Above 1200ms cold build time',
    },
  ],
});

// ============================================================================
// 2. Create Comprehensive Test Groups
// ============================================================================

export const groups = {
  buildPerformance: category.createGroup({
    id: '01-build-performance',
    title: 'Build Performance',
    description: 'Cold and incremental build performance metrics',
    type: 'universal',
  }),

  bundleOptimization: category.createGroup({
    id: '02-bundle-optimization',
    title: 'Bundle Size Optimization',
    description: 'CSS output size and compression efficiency',
    type: 'universal',
  }),

  scalability: category.createGroup({
    id: '03-scalability',
    title: 'Scalability',
    description: 'Performance with increasing component complexity',
    type: 'universal',
  }),

  developmentExperience: category.createGroup({
    id: '04-development-experience',
    title: 'Development Experience',
    description: 'Watch mode, HMR, and development workflow performance',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Comprehensive Tests
// ============================================================================

export const tests = {
  // Build Performance Tests
  coldBuildSmall: groups.buildPerformance.createTest({
    name: 'Cold Build - Small App',
    description: 'Build time for a small app (10 components, 50 unique utilities)',
    testType: 'build',
  }),

  coldBuildMedium: groups.buildPerformance.createTest({
    name: 'Cold Build - Medium App',
    description: 'Build time for a medium app (50 components, 200 unique utilities)',
    testType: 'build',
  }),

  coldBuildLarge: groups.buildPerformance.createTest({
    name: 'Cold Build - Large App',
    description: 'Build time for a large app (200 components, 1000 unique utilities)',
    testType: 'build',
  }),

  incrementalBuild: groups.buildPerformance.createTest({
    name: 'Incremental Build',
    description: 'Rebuild time after single file change',
    testType: 'build',
  }),

  // Bundle Optimization Tests
  minimalCSS: groups.bundleOptimization.createTest({
    name: 'Minimal CSS Generation',
    description: 'CSS size for minimal component (button only)',
    testType: 'build',
  }),

  treeShakingEfficiency: groups.bundleOptimization.createTest({
    name: 'Tree-shaking Efficiency',
    description: 'Unused CSS elimination effectiveness (used vs available utilities)',
    testType: 'build',
  }),

  compressionRatio: groups.bundleOptimization.createTest({
    name: 'Compression Ratio',
    description: 'Gzip compression efficiency (raw vs gzipped size)',
    testType: 'build',
  }),

  // Scalability Tests
  utilityGrowth: groups.scalability.createTest({
    name: 'Utility Class Growth',
    description: 'CSS size growth with increasing unique utilities (10, 100, 1000)',
    testType: 'build',
  }),

  componentScaling: groups.scalability.createTest({
    name: 'Component Scaling',
    description: 'Build time scaling with component count (10, 50, 200)',
    testType: 'build',
  }),

  // Development Experience Tests
  watchModeStartup: groups.developmentExperience.createTest({
    name: 'Watch Mode Startup',
    description: 'Time to start development server with file watching',
    testType: 'build',
  }),

  hotReload: groups.developmentExperience.createTest({
    name: 'Hot Reload Speed',
    description: 'CSS regeneration time on file change in watch mode',
    testType: 'build',
  }),

  configChangeRebuild: groups.developmentExperience.createTest({
    name: 'Config Change Rebuild',
    description: 'Rebuild time after configuration change',
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
