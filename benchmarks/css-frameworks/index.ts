/**
 * CSS Frameworks Category
 *
 * Runtime performance benchmarks for CSS-in-JS and utility-first CSS frameworks
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'css-frameworks',
  name: 'CSS Frameworks',
  description: 'Runtime performance benchmarks for CSS-in-JS and utility-first CSS frameworks',
  emoji: '🎨',
  performanceTiers: [
    {
      name: 'Zero Runtime (Tier S)',
      threshold: 10000000,
      description: 'No runtime overhead, pure string operations',
    },
    {
      name: 'Optimized (Tier A)',
      threshold: 5000000,
      description: 'Minimal runtime processing',
    },
    {
      name: 'Standard (Tier B)',
      threshold: 1000000,
      description: 'Moderate runtime processing',
    },
    {
      name: 'Heavy (Tier C)',
      threshold: 0,
      description: 'Significant runtime processing overhead',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  styleApplication: category.createGroup({
    id: '01-style-application',
    title: 'Style Application',
    description: 'Runtime performance of style generation and concatenation',
    type: 'universal',
  }),

  dynamicUpdates: category.createGroup({
    id: '02-dynamic-updates',
    title: 'Dynamic Updates',
    description: 'Runtime style updates and theme switching',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // Style Application
  applyStyles: groups.styleApplication.createTest({
    name: 'Apply 100 inline styles',
    description: 'Generate and join 100 style classes',
  }),

  conditionalStyles: groups.styleApplication.createTest({
    name: 'Conditional styling (1000 iterations)',
    description: 'Toggle between conditional style classes',
  }),

  stringConcat: groups.styleApplication.createTest({
    name: 'String concatenation (complex className)',
    description: 'Concatenate 10 different utility classes',
  }),

  // Dynamic Updates
  themeToggle: groups.dynamicUpdates.createTest({
    name: 'Theme toggle (dark/light mode)',
    description: 'Switch between dark and light theme classes',
  }),

  breakpointMatching: groups.dynamicUpdates.createTest({
    name: 'Responsive breakpoint matching',
    description: 'Match and apply responsive breakpoint classes',
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
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
