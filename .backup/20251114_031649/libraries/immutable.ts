/**
 * Immutable.js Library Implementation
 */

import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const immutable = category.registerLibrary<any>({
  id: 'immutable',
  displayName: 'Immutable.js',
  packageName: 'immutable',
  githubUrl: 'https://github.com/immutable-js/immutable-js',
  description: 'Immutable persistent data collections for JavaScript',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
immutable.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const map = ImmutableMap(simpleObject);
  const result = map.set('count', (map.get('count') as number) + 1);
});

// Nested Updates
immutable.implement(tests.nestedObjectUpdate, () => {
  const nestedObject = {
    user: {
      profile: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          country: 'USA',
        },
      },
    },
  };
  const map = fromJS(nestedObject);
  const result = map.setIn(
    ['user', 'profile', 'age'],
    map.getIn(['user', 'profile', 'age']) + 1
  );
});

// Array Operations
immutable.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const list = ImmutableList(arr);
  const result = list.push(6);
});

immutable.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const list = ImmutableList(arr);
  const result = list.delete(2);
});

immutable.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const list = fromJS(arr);
  const result = list.setIn([1, 'value'], 25);
});

// Deep Operations
immutable.implement(tests.deepNestedUpdate, () => {
  const deepObject = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              value: 0,
            },
          },
        },
      },
    },
  };
  const map = fromJS(deepObject);
  const result = map.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'], 42);
});

immutable.implement(tests.multipleUpdates, () => {
  const nestedObject = {
    user: {
      profile: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          country: 'USA',
        },
      },
    },
  };
  const map = fromJS(nestedObject);
  const result = map
    .setIn(['user', 'profile', 'name'], 'Jane')
    .setIn(['user', 'profile', 'age'], 25)
    .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
});

// Large Scale
immutable.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const list = fromJS(largeArray);
  const result = list.setIn([500, 'value'], list.getIn([500, 'value']) + 1);
});
