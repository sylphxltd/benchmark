/**
 * Seamless Immutable Library Benchmark
 *
 * Using seamless-immutable's methods for immutable operations
 * Supports: Basic operations with frozen objects
 */

import Immutable from 'seamless-immutable';
import { category, tests } from '../index';

// Register library
const seamlessImmutable = category.registerLibrary({
  id: 'seamless-immutable',
  displayName: 'Seamless Immutable',
  packageName: 'seamless-immutable',
  githubUrl: 'https://github.com/rtfeldman/seamless-immutable',
  description: 'Immutable data structures using Object.freeze',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// Test Data Setup (converted to immutable structures)
// ============================================================================

const simpleObject = Immutable({ name: 'John', age: 30, active: true });
const nestedObject = Immutable({
  user: {
    profile: {
      details: {
        name: 'John',
        age: 30,
      },
    },
  },
});
const arrayOfObjects = Immutable(Array.from({ length: 10 }, (_, i) => ({ id: i, value: `item-${i}` })));
const deepObject = Immutable({
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
});
const largeArray = Immutable(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `item-${i}` })));

// ============================================================================
// Simple Updates
// ============================================================================

seamlessImmutable.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return state.set('age', 31);
});

// ============================================================================
// Nested Updates
// ============================================================================

seamlessImmutable.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return state.setIn(['user', 'profile', 'details', 'age'], 31);
});

// ============================================================================
// Array Operations
// ============================================================================

seamlessImmutable.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return state.concat([{ id: state.length, value: `item-${state.length}` }]);
});

seamlessImmutable.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  // seamless-immutable doesn't have a splice method, so we use filter
  return state.filter((_, index) => index !== 5);
});

seamlessImmutable.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return state.setIn([5, 'value'], 'updated');
});

// ============================================================================
// Deep Operations
// ============================================================================

seamlessImmutable.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return state.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'], 100);
});

seamlessImmutable.implement(tests.multipleUpdates, () => {
  const state = Immutable({ a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } });
  return state
    .set('a', 10)
    .set('b', 20)
    .setIn(['nested', 'x'], 100);
});

// ============================================================================
// Large Scale
// ============================================================================

seamlessImmutable.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return state.setIn([500, 'value'], 'updated');
});

// ============================================================================
// Patches (Not supported by seamless-immutable)
// ============================================================================

// seamless-immutable doesn't support JSON patches

// ============================================================================
// Map & Set Operations (Not supported by seamless-immutable)
// ============================================================================

// seamless-immutable doesn't have Map/Set support