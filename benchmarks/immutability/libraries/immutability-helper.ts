/**
 * Immutability Helper Library Benchmark
 *
 * Using MongoDB-style update syntax for immutable updates
 * Supports: Basic operations with $set, $push, $splice syntax
 */

import update from 'immutability-helper';
import { category, tests } from '../index';

// Register library
const immutabilityHelper = category.registerLibrary({
  id: 'immutability-helper',
  displayName: 'Immutability Helper',
  packageName: 'immutability-helper',
  githubUrl: 'https://github.com/kolodny/immutability-helper',
  description: 'MongoDB-style update patterns for immutable updates',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// Test Data Setup (reused across tests for consistency)
// ============================================================================

const simpleObject = { name: 'John', age: 30, active: true };
const nestedObject = {
  user: {
    profile: {
      details: {
        name: 'John',
        age: 30,
      },
    },
  },
};
const arrayOfObjects = Array.from({ length: 10 }, (_, i) => ({ id: i, value: `item-${i}` }));
const deepObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            value: 42,
          },
        },
      },
    },
  },
};
const largeArray = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `item-${i}` }));

// ============================================================================
// Simple Updates
// ============================================================================

immutabilityHelper.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return update(state, {
    age: { $set: 31 }
  });
});

// ============================================================================
// Nested Updates
// ============================================================================

immutabilityHelper.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return update(state, {
    user: {
      profile: {
        details: {
          age: { $set: 31 }
        }
      }
    }
  });
});

// ============================================================================
// Array Operations
// ============================================================================

immutabilityHelper.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return update(state, {
    $push: [{ id: state.length, value: `item-${state.length}` }]
  });
});

immutabilityHelper.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return update(state, {
    $splice: [[5, 1]]
  });
});

immutabilityHelper.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return update(state, {
    5: {
      value: { $set: 'updated' }
    }
  });
});

// ============================================================================
// Deep Operations
// ============================================================================

immutabilityHelper.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return update(state, {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              value: { $set: 100 }
            }
          }
        }
      }
    }
  });
});

immutabilityHelper.implement(tests.multipleUpdates, () => {
  const state = { a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } };
  return update(state, {
    a: { $set: 10 },
    b: { $set: 20 },
    nested: {
      x: { $set: 100 }
    }
  });
});

// ============================================================================
// Large Scale
// ============================================================================

immutabilityHelper.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return update(state, {
    500: {
      value: { $set: 'updated' }
    }
  });
});

// ============================================================================
// Patches (Not supported by immutability-helper)
// ============================================================================

// immutability-helper doesn't support JSON patches

// ============================================================================
// Map & Set Operations (Limited support)
// ============================================================================

// immutability-helper has limited Map/Set support, skipping these tests