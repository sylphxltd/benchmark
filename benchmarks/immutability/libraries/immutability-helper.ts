/**
 * Immutability Helper Library Implementation
 */

import update from 'immutability-helper';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const immutabilityHelper = category.registerLibrary<any>({
  id: 'immutability-helper',
  displayName: 'Immutability Helper',
  packageName: 'immutability-helper',
  githubUrl: 'https://github.com/kolodny/immutability-helper',
  description: 'Mutate a copy of data without changing the original source',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
immutabilityHelper.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const result = update(simpleObject, {
    count: { $set: simpleObject.count + 1 },
  });
});

// Nested Updates
immutabilityHelper.implement(tests.nestedObjectUpdate, () => {
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
  const result = update(nestedObject, {
    user: {
      profile: {
        age: { $set: nestedObject.user.profile.age + 1 },
      },
    },
  });
});

// Array Operations
immutabilityHelper.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = update(arr, {
    $push: [6],
  });
});

immutabilityHelper.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = update(arr, {
    $splice: [[2, 1]],
  });
});

immutabilityHelper.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const result = update(arr, {
    1: {
      value: { $set: 25 },
    },
  });
});

// Deep Operations
immutabilityHelper.implement(tests.deepNestedUpdate, () => {
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
  const result = update(deepObject, {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              value: { $set: 42 },
            },
          },
        },
      },
    },
  });
});

immutabilityHelper.implement(tests.multipleUpdates, () => {
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
  const result = update(nestedObject, {
    user: {
      profile: {
        name: { $set: 'Jane' },
        age: { $set: 25 },
        address: {
          city: { $set: 'San Francisco' },
        },
      },
    },
  });
});

// Large Scale
immutabilityHelper.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const result = update(largeArray, {
    500: {
      value: { $set: largeArray[500].value + 1 },
    },
  });
});
