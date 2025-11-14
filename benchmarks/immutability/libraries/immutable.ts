/**
 * Immutable.js Library Benchmark
 *
 * Using Immutable.js's custom data structures and methods
 * Supports: Most operations except JSON patches (uses own data structures)
 */

import { Map, List, Set, fromJS, Range } from 'immutable';
import { category, tests } from '../index';

// Register library
const immutableLib = category.registerLibrary({
  id: 'immutable',
  displayName: 'Immutable.js',
  packageName: 'immutable',
  githubUrl: 'https://github.com/immutable-js/immutable-js',
  description: 'Facebook\'s immutable data structures with persistent data structures',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// Test Data Setup (converted to Immutable.js structures)
// ============================================================================

const simpleObject = Map({ name: 'John', age: 30, active: true });
const nestedObject = fromJS({
  user: {
    profile: {
      details: {
        name: 'John',
        age: 30,
      },
    },
  },
});
const arrayOfObjects = List(Range(0, 10).map(i => Map({ id: i, value: `item-${i}` })));
const deepObject = fromJS({
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
const largeArray = List(Range(0, 1000).map(i => Map({ id: i, value: `item-${i}` })));
const mapData = Map(Range(0, 10).map(i => [`key-${i}`, Map({ value: i })]).toArray());
const setData = Set(Range(0, 10).map(i => `item-${i}`));
const largeMap = Map(Range(0, 100).map(i => [`key-${i}`, Map({ value: i })]).toArray());
const largeSet = Set(Range(0, 100).map(i => `item-${i}`));

// ============================================================================
// Simple Updates
// ============================================================================

immutableLib.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return state.set('age', 31);
});

// ============================================================================
// Nested Updates
// ============================================================================

immutableLib.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return state.setIn(['user', 'profile', 'details', 'age'], 31);
});

// ============================================================================
// Array Operations
// ============================================================================

immutableLib.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return state.push(Map({ id: state.size, value: `item-${state.size}` }));
});

immutableLib.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return state.delete(5);
});

immutableLib.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return state.setIn([5, 'value'], 'updated');
});

// ============================================================================
// Deep Operations
// ============================================================================

immutableLib.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return state.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'], 100);
});

immutableLib.implement(tests.multipleUpdates, () => {
  const state = fromJS({ a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } });
  return state
    .set('a', 10)
    .set('b', 20)
    .setIn(['nested', 'x'], 100);
});

// ============================================================================
// Large Scale
// ============================================================================

immutableLib.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return state.setIn([500, 'value'], 'updated');
});

// ============================================================================
// Patches (Not supported by Immutable.js - using skip pattern)
// ============================================================================

// Immutable.js doesn't support JSON patches, so we skip these tests
// by not registering them. The framework will handle this gracefully.

// ============================================================================
// Map & Set Operations (Feature-Specific)
// ============================================================================

immutableLib.implement(tests.mapSet, () => {
  const state = mapData;
  return state.set('new-key', Map({ value: 999 }));
});

immutableLib.implement(tests.mapUpdate, () => {
  const state = mapData;
  return state.updateIn(['key-5', 'value'], () => 999);
});

immutableLib.implement(tests.setAdd, () => {
  const state = setData;
  return state.add('new-item');
});

immutableLib.implement(tests.setDelete, () => {
  const state = setData;
  return state.delete('item-5');
});

immutableLib.implement(tests.mapLarge, () => {
  const state = largeMap;
  return state
    .set('key-50', Map({ value: 999 }))
    .updateIn(['key-25', 'value'], () => 1000);
});

immutableLib.implement(tests.setLarge, () => {
  const state = largeSet;
  return state
    .delete('item-50')
    .add('new-item');
});