/**
 * Seamless Immutable Library Implementation
 */

import Seamless from 'seamless-immutable';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const seamlessImmutable = category.registerLibrary<any>({
  id: 'seamless-immutable',
  displayName: 'Seamless Immutable',
  packageName: 'seamless-immutable',
  githubUrl: 'https://github.com/rtfeldman/seamless-immutable',
  description: 'Immutable data structures for JavaScript which are backwards-compatible with normal JS Arrays and Objects',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
seamlessImmutable.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const obj = Seamless.from(simpleObject);
  const result = obj.set('count', obj.count + 1);
});

// Nested Updates
seamlessImmutable.implement(tests.nestedObjectUpdate, () => {
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
  const obj = Seamless.from(nestedObject);
  const result = obj.setIn(['user', 'profile', 'age'], obj.user.profile.age + 1);
});

// Array Operations
seamlessImmutable.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const list = Seamless.from(arr);
  const result = list.concat([6]);
});

seamlessImmutable.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const list = Seamless.from(arr);
  const result = list.filter((_: any, i: number) => i !== 2);
});

seamlessImmutable.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const list = Seamless.from(arr);
  const result = list.setIn([1, 'value'], 25);
});

// Deep Operations
seamlessImmutable.implement(tests.deepNestedUpdate, () => {
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
  const obj = Seamless.from(deepObject);
  const result = obj.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'], 42);
});

seamlessImmutable.implement(tests.multipleUpdates, () => {
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
  const obj = Seamless.from(nestedObject);
  const result = obj
    .setIn(['user', 'profile', 'name'], 'Jane')
    .setIn(['user', 'profile', 'age'], 25)
    .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
});

// Large Scale
seamlessImmutable.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const list = Seamless.from(largeArray);
  const result = list.setIn([500, 'value'], list[500].value + 1);
});
