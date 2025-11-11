/**
 * Mutative Library Implementation
 */

import { create } from 'mutative';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const mutative = category.registerLibrary<any>({
  id: 'mutative',
  displayName: 'Mutative',
  packageName: 'mutative',
  githubUrl: 'https://github.com/unadlib/mutative',
  description: 'Fast immutable updates with high performance',

  setup: {
    createStore: () => ({}),
  },

  features: ['map-set'],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
mutative.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const result = create(simpleObject, (draft) => {
    draft.count += 1;
  });
});

// Nested Updates
mutative.implement(tests.nestedObjectUpdate, () => {
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
  const result = create(nestedObject, (draft) => {
    draft.user.profile.age += 1;
  });
});

// Array Operations
mutative.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = create(arr, (draft) => {
    draft.push(6);
  });
});

mutative.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = create(arr, (draft) => {
    draft.splice(2, 1);
  });
});

mutative.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const result = create(arr, (draft) => {
    draft[1].value = 25;
  });
});

// Deep Operations
mutative.implement(tests.deepNestedUpdate, () => {
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
  const result = create(deepObject, (draft) => {
    draft.level1.level2.level3.level4.level5.value = 42;
  });
});

mutative.implement(tests.multipleUpdates, () => {
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
  const result = create(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
    draft.user.profile.address.city = 'San Francisco';
  });
});

// Large Scale
mutative.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const result = create(largeArray, (draft) => {
    draft[500].value += 1;
  });
});

// Map & Set Operations
mutative.implement(tests.mapSet, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = create(mapState, (draft) => {
    draft.users.set('charlie', { name: 'Charlie', age: 35 });
  });
});

mutative.implement(tests.mapUpdate, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = create(mapState, (draft) => {
    const bob = draft.users.get('bob');
    if (bob) bob.age = 31;
  });
});

mutative.implement(tests.setAdd, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript']),
  };
  const result = create(setState, (draft) => {
    draft.tags.add('react');
  });
});

mutative.implement(tests.setDelete, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript', 'react']),
  };
  const result = create(setState, (draft) => {
    draft.tags.delete('javascript');
  });
});

mutative.implement(tests.mapLarge, () => {
  const largeMap = new Map(
    Array.from({ length: 100 }, (_, i) => [`key${i}`, { value: i }])
  );
  const mapState = { data: largeMap };
  const result = create(mapState, (draft) => {
    draft.data.set('key50', { value: 9999 });
  });
});

mutative.implement(tests.setLarge, () => {
  const largeSet = new Set(Array.from({ length: 100 }, (_, i) => i));
  const setState = { data: largeSet };
  const result = create(setState, (draft) => {
    draft.data.add(200);
  });
});
