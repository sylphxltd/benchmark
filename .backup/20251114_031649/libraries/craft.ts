/**
 * Craft Library Implementation
 */

import { craft, craftWithPatches, applyPatches } from '@sylphx/craft';
import { category, tests } from '../index';

// ============================================================================
// Register Library
// ============================================================================

const craftLib = category.registerLibrary<any>({
  id: 'craft',
  displayName: 'Craft',
  packageName: '@sylphx/craft',
  githubUrl: 'https://github.com/sylphxlai/craft',
  description: 'Fast immutable updates with patches support',

  setup: {
    createStore: () => ({}),
  },

  features: ['patches', 'map-set'],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
craftLib.implement(tests.simpleObjectUpdate, () => {
  const simpleObject = { count: 0, name: 'test', value: 100 };
  const result = craft(simpleObject, (draft) => {
    draft.count += 1;
  });
});

// Nested Updates
craftLib.implement(tests.nestedObjectUpdate, () => {
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
  const result = craft(nestedObject, (draft) => {
    draft.user.profile.age += 1;
  });
});

// Array Operations
craftLib.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = craft(arr, (draft) => {
    draft.push(6);
  });
});

craftLib.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = craft(arr, (draft) => {
    draft.splice(2, 1);
  });
});

craftLib.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const result = craft(arr, (draft) => {
    draft[1].value = 25;
  });
});

// Deep Operations
craftLib.implement(tests.deepNestedUpdate, () => {
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
  const result = craft(deepObject, (draft) => {
    draft.level1.level2.level3.level4.level5.value = 42;
  });
});

craftLib.implement(tests.multipleUpdates, () => {
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
  const result = craft(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
    draft.user.profile.address.city = 'San Francisco';
  });
});

// Large Scale
craftLib.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const result = craft(largeArray, (draft) => {
    draft[500].value += 1;
  });
});

// JSON Patches
craftLib.implement(tests.patchesGenerate, () => {
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
  const [, patches, inversePatches] = craftWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
});

craftLib.implement(tests.patchesApply, () => {
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
  const patches = [
    { op: 'replace', path: ['user', 'profile', 'name'], value: 'Jane' },
    { op: 'replace', path: ['user', 'profile', 'age'], value: 25 },
  ];
  const result = applyPatches(nestedObject, patches as any);
});

craftLib.implement(tests.patchesRoundtrip, () => {
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
  const [newState, patches] = craftWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
  const result = applyPatches(nestedObject, patches);
});

craftLib.implement(tests.undoRedo, () => {
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
  const [newState, , inversePatches] = craftWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
  const undoneState = applyPatches(newState, inversePatches);
});

// Map & Set Operations
craftLib.implement(tests.mapSet, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = craft(mapState, (draft) => {
    draft.users.set('charlie', { name: 'Charlie', age: 35 });
  });
});

craftLib.implement(tests.mapUpdate, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = craft(mapState, (draft) => {
    const bob = draft.users.get('bob');
    if (bob) bob.age = 31;
  });
});

craftLib.implement(tests.setAdd, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript']),
  };
  const result = craft(setState, (draft) => {
    draft.tags.add('react');
  });
});

craftLib.implement(tests.setDelete, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript', 'react']),
  };
  const result = craft(setState, (draft) => {
    draft.tags.delete('javascript');
  });
});

craftLib.implement(tests.mapLarge, () => {
  const largeMap = new Map(
    Array.from({ length: 100 }, (_, i) => [`key${i}`, { value: i }])
  );
  const mapState = { data: largeMap };
  const result = craft(mapState, (draft) => {
    draft.data.set('key50', { value: 9999 });
  });
});

craftLib.implement(tests.setLarge, () => {
  const largeSet = new Set(Array.from({ length: 100 }, (_, i) => i));
  const setState = { data: largeSet };
  const result = craft(setState, (draft) => {
    draft.data.add(200);
  });
});
