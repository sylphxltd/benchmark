/**
 * Native Spread Library Implementation
 */

import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const nativeSpread = category.registerLibrary<any>({
  id: 'native-spread',
  displayName: 'Native Spread',
  packageName: 'native',
  githubUrl: '',
  description: 'Native JavaScript spread operators',

  setup: {
    createStore: () => ({}),
  },

  features: [],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
nativeSpread.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const result = { ...simpleObject, count: simpleObject.count + 1 };
});

// Nested Updates
nativeSpread.implement(tests.nestedObjectUpdate, () => {
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
  const result = {
    ...nestedObject,
    user: {
      ...nestedObject.user,
      profile: {
        ...nestedObject.user.profile,
        age: nestedObject.user.profile.age + 1,
      },
    },
  };
});

// Array Operations
nativeSpread.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = [...arr, 6];
});

nativeSpread.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.filter((_, i) => i !== 2);
});

nativeSpread.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const result = arr.map((item, i) => (i === 1 ? { ...item, value: 25 } : item));
});

// Deep Operations
nativeSpread.implement(tests.deepNestedUpdate, () => {
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
  const result = {
    ...deepObject,
    level1: {
      ...deepObject.level1,
      level2: {
        ...deepObject.level1.level2,
        level3: {
          ...deepObject.level1.level2.level3,
          level4: {
            ...deepObject.level1.level2.level3.level4,
            level5: {
              ...deepObject.level1.level2.level3.level4.level5,
              value: 42,
            },
          },
        },
      },
    },
  };
});

nativeSpread.implement(tests.multipleUpdates, () => {
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
  const result = {
    ...nestedObject,
    user: {
      ...nestedObject.user,
      profile: {
        ...nestedObject.user.profile,
        name: 'Jane',
        age: 25,
        address: {
          ...nestedObject.user.profile.address,
          city: 'San Francisco',
        },
      },
    },
  };
});

// Large Scale
nativeSpread.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const result = largeArray.map((item, i) =>
    i === 500 ? { ...item, value: item.value + 1 } : item
  );
});
