/**
 * Native Spread Baseline Benchmark
 *
 * Using pure JavaScript spread operators and destructuring
 * This serves as the baseline for comparison with library implementations
 */

import { category, tests } from '../index';

// Register library
const nativeSpread = category.registerLibrary({
  id: 'native-spread',
  displayName: 'Native Spread',
  packageName: 'native',
  githubUrl: 'https://github.com/tc39/ecma262',
  description: 'Native JavaScript spread operators and destructuring (baseline)',
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
const mapData = new Map(Array.from({ length: 10 }, (_, i) => [`key-${i}`, { value: i }]));
const setData = new Set(Array.from({ length: 10 }, (_, i) => `item-${i}`));
const largeMap = new Map(Array.from({ length: 100 }, (_, i) => [`key-${i}`, { value: i }]));
const largeSet = new Set(Array.from({ length: 100 }, (_, i) => `item-${i}`));

// ============================================================================
// Simple Updates
// ============================================================================

nativeSpread.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return { ...state, age: 31 };
});

// ============================================================================
// Nested Updates
// ============================================================================

nativeSpread.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return {
    ...state,
    user: {
      ...state.user,
      profile: {
        ...state.user.profile,
        details: {
          ...state.user.profile.details,
          age: 31,
        },
      },
    },
  };
});

// ============================================================================
// Array Operations
// ============================================================================

nativeSpread.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return [...state, { id: state.length, value: `item-${state.length}` }];
});

nativeSpread.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return [...state.slice(0, 5), ...state.slice(6)];
});

nativeSpread.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return [
    ...state.slice(0, 5),
    { ...state[5], value: 'updated' },
    ...state.slice(6),
  ];
});

// ============================================================================
// Deep Operations
// ============================================================================

nativeSpread.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return {
    ...state,
    level1: {
      ...state.level1,
      level2: {
        ...state.level1.level2,
        level3: {
          ...state.level1.level2.level3,
          level4: {
            ...state.level1.level2.level3.level4,
            level5: {
              ...state.level1.level2.level3.level4.level5,
              value: 100,
            },
          },
        },
      },
    },
  };
});

nativeSpread.implement(tests.multipleUpdates, () => {
  const state = { a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } };
  return {
    ...state,
    a: 10,
    b: 20,
    nested: {
      ...state.nested,
      x: 100,
    },
  };
});

// ============================================================================
// Large Scale
// ============================================================================

nativeSpread.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return [
    ...state.slice(0, 500),
    { ...state[500], value: 'updated' },
    ...state.slice(501),
  ];
});

// ============================================================================
// Patches (Not applicable for native spread)
// ============================================================================

// Native spread doesn't support patches

// ============================================================================
// Map & Set Operations (Native operations)
// ============================================================================

nativeSpread.implement(tests.mapSet, () => {
  const state = mapData;
  const newMap = new Map(state);
  newMap.set('new-key', { value: 999 });
  return newMap;
});

nativeSpread.implement(tests.mapUpdate, () => {
  const state = mapData;
  const newMap = new Map(state);
  const item = newMap.get('key-5');
  if (item) {
    newMap.set('key-5', { ...item, value: 999 });
  }
  return newMap;
});

nativeSpread.implement(tests.setAdd, () => {
  const state = setData;
  const newSet = new Set(state);
  newSet.add('new-item');
  return newSet;
});

nativeSpread.implement(tests.setDelete, () => {
  const state = setData;
  const newSet = new Set(state);
  newSet.delete('item-5');
  return newSet;
});

nativeSpread.implement(tests.mapLarge, () => {
  const state = largeMap;
  const newMap = new Map(state);
  newMap.set('key-50', { value: 999 });
  const item = newMap.get('key-25');
  if (item) {
    newMap.set('key-25', { ...item, value: 1000 });
  }
  return newMap;
});

nativeSpread.implement(tests.setLarge, () => {
  const state = largeSet;
  const newSet = new Set(state);
  newSet.delete('item-50');
  newSet.add('new-item');
  return newSet;
});