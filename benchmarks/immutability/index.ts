/**
 * Immutability Category
 *
 * Performance benchmarks for immutable data structure libraries
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'immutability',
  name: 'Immutability',
  description: 'Performance benchmarks for immutable data structure libraries',
  emoji: '🔒',
  performanceTiers: [
    {
      name: 'High Performance (Tier S)',
      threshold: 1000000,
      description: 'Exceptional performance across all operations',
    },
    {
      name: 'Optimized (Tier A)',
      threshold: 500000,
      description: 'Fast operations with good structural sharing',
    },
    {
      name: 'Standard (Tier B)',
      threshold: 100000,
      description: 'Moderate performance with good ergonomics',
    },
    {
      name: 'Basic (Tier C)',
      threshold: 0,
      description: 'Lower performance but simple API',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  simpleUpdates: category.createGroup({
    id: '01-simple-updates',
    title: 'Simple Updates',
    description: 'Basic object property updates',
    type: 'universal',
  }),

  nestedUpdates: category.createGroup({
    id: '02-nested-updates',
    title: 'Nested Updates',
    description: 'Updates in nested object structures',
    type: 'universal',
  }),

  arrayOperations: category.createGroup({
    id: '03-array-operations',
    title: 'Array Operations',
    description: 'Common array manipulations',
    type: 'universal',
  }),

  deepOperations: category.createGroup({
    id: '04-deep-operations',
    title: 'Deep Operations',
    description: 'Deep nested updates and multiple changes',
    type: 'universal',
  }),

  largeScale: category.createGroup({
    id: '05-large-scale',
    title: 'Large Scale',
    description: 'Performance with large data structures',
    type: 'universal',
  }),

  patches: category.createGroup({
    id: '06-patches',
    title: 'JSON Patches',
    description: 'Generate and apply JSON patches for state synchronization',
    type: 'feature-specific',
  }),

  mapSet: category.createGroup({
    id: '07-map-set',
    title: 'Map & Set Operations',
    description: 'ES6 Map and Set support',
    type: 'feature-specific',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // Simple Updates
  simpleObjectUpdate: groups.simpleUpdates.createTest({
    name: 'Simple Object Update',
    description: 'Update single property in flat object',
  }),

  // Nested Updates
  nestedObjectUpdate: groups.nestedUpdates.createTest({
    name: 'Nested Object Update',
    description: 'Update property in nested object (3 levels)',
  }),

  // Array Operations
  arrayPush: groups.arrayOperations.createTest({
    name: 'Array Push',
    description: 'Add element to end of array',
  }),

  arrayRemove: groups.arrayOperations.createTest({
    name: 'Array Remove',
    description: 'Remove element from array',
  }),

  arrayUpdate: groups.arrayOperations.createTest({
    name: 'Array Update',
    description: 'Update object within array',
  }),

  // Deep Operations
  deepNestedUpdate: groups.deepOperations.createTest({
    name: 'Deep Nested Update (5 levels)',
    description: 'Update value 5 levels deep',
  }),

  multipleUpdates: groups.deepOperations.createTest({
    name: 'Multiple Updates (3 changes)',
    description: 'Three simultaneous property updates',
  }),

  // Large Scale
  largeArrayUpdate: groups.largeScale.createTest({
    name: 'Large Array Update (1000 items)',
    description: 'Update single item in 1000-element array',
  }),

  // Patches
  patchesGenerate: groups.patches.createTest({
    name: 'JSON Patches - Generate',
    description: 'Generate patches from state changes',
  }),

  patchesApply: groups.patches.createTest({
    name: 'JSON Patches - Apply',
    description: 'Apply patches to state',
  }),

  patchesRoundtrip: groups.patches.createTest({
    name: 'JSON Patches - Roundtrip',
    description: 'Full generate + apply cycle',
  }),

  undoRedo: groups.patches.createTest({
    name: 'Undo/Redo - Inverse Patches',
    description: 'Undo using inverse patches',
  }),

  // Map & Set
  mapSet: groups.mapSet.createTest({
    name: 'Map - Set Operation',
    description: 'Add entry to Map',
  }),

  mapUpdate: groups.mapSet.createTest({
    name: 'Map - Update Nested Value',
    description: 'Update nested value in Map',
  }),

  setAdd: groups.mapSet.createTest({
    name: 'Set - Add Operation',
    description: 'Add item to Set',
  }),

  setDelete: groups.mapSet.createTest({
    name: 'Set - Delete Operation',
    description: 'Remove item from Set',
  }),

  mapLarge: groups.mapSet.createTest({
    name: 'Map - Large (100 items)',
    description: 'Operations on large Map',
  }),

  setLarge: groups.mapSet.createTest({
    name: 'Set - Large (100 items)',
    description: 'Operations on large Set',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/immer');
  await import('./libraries/mutative');
  await import('./libraries/craft');
  await import('./libraries/immutable');
  await import('./libraries/immutability-helper');
  await import('./libraries/seamless-immutable');
  await import('./libraries/native-spread');

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
