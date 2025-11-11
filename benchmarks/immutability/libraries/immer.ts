/**
 * Immer Library Implementation
 */

import { produce, enableMapSet, enablePatches, produceWithPatches, applyPatches } from 'immer';
import { category, tests } from '../index';

// Enable Map/Set and Patches support
enableMapSet();
enablePatches();

// ============================================================================
// Define Store Types
// ============================================================================

interface SimpleObject {
  count: number;
  name: string;
  value: number;
}

interface NestedObject {
  user: {
    profile: {
      name: string;
      age: number;
      address: {
        city: string;
        country: string;
      };
    };
  };
}

interface DeepObject {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            value: number;
          };
        };
      };
    };
  };
}

// ============================================================================
// Register Library
// ============================================================================

const immer = category.registerLibrary<any>({
  id: 'immer',
  displayName: 'Immer',
  packageName: 'immer',
  githubUrl: 'https://github.com/immerjs/immer',
  description: 'Create immutable state by mutating a draft',

  setup: {
    createStore: () => ({}), // Immer is stateless, we'll use test-specific data
  },

  features: ['patches', 'map-set'],
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple Updates
immer.implement(tests.simpleObjectUpdate, () => {
  const simpleObject: SimpleObject = { count: 0, name: 'test', value: 100 };
  const result = produce(simpleObject, (draft) => {
    draft.count += 1;
  });
});

// Nested Updates
immer.implement(tests.nestedObjectUpdate, () => {
  const nestedObject: NestedObject = {
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
  const result = produce(nestedObject, (draft) => {
    draft.user.profile.age += 1;
  });
});

// Array Operations
immer.implement(tests.arrayPush, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = produce(arr, (draft) => {
    draft.push(6);
  });
});

immer.implement(tests.arrayRemove, () => {
  const arr = [1, 2, 3, 4, 5];
  const result = produce(arr, (draft) => {
    draft.splice(2, 1);
  });
});

immer.implement(tests.arrayUpdate, () => {
  const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const result = produce(arr, (draft) => {
    draft[1].value = 25;
  });
});

// Deep Operations
immer.implement(tests.deepNestedUpdate, () => {
  const deepObject: DeepObject = {
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
  const result = produce(deepObject, (draft) => {
    draft.level1.level2.level3.level4.level5.value = 42;
  });
});

immer.implement(tests.multipleUpdates, () => {
  const nestedObject: NestedObject = {
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
  const result = produce(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
    draft.user.profile.address.city = 'San Francisco';
  });
});

// Large Scale
immer.implement(tests.largeArrayUpdate, () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: i * 2,
  }));
  const result = produce(largeArray, (draft) => {
    draft[500].value += 1;
  });
});

// JSON Patches
immer.implement(tests.patchesGenerate, () => {
  const nestedObject: NestedObject = {
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
  const [, patches, inversePatches] = produceWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
});

immer.implement(tests.patchesApply, () => {
  const nestedObject: NestedObject = {
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

immer.implement(tests.patchesRoundtrip, () => {
  const nestedObject: NestedObject = {
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
  const [newState, patches] = produceWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
  const result = applyPatches(nestedObject, patches);
});

immer.implement(tests.undoRedo, () => {
  const nestedObject: NestedObject = {
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
  const [newState, , inversePatches] = produceWithPatches(nestedObject, (draft) => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });
  const undoneState = applyPatches(newState, inversePatches);
});

// Map & Set Operations
immer.implement(tests.mapSet, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = produce(mapState, (draft) => {
    draft.users.set('charlie', { name: 'Charlie', age: 35 });
  });
});

immer.implement(tests.mapUpdate, () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }],
    ]),
  };
  const result = produce(mapState, (draft) => {
    const bob = draft.users.get('bob');
    if (bob) bob.age = 31;
  });
});

immer.implement(tests.setAdd, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript']),
  };
  const result = produce(setState, (draft) => {
    draft.tags.add('react');
  });
});

immer.implement(tests.setDelete, () => {
  const setState = {
    tags: new Set(['javascript', 'typescript', 'react']),
  };
  const result = produce(setState, (draft) => {
    draft.tags.delete('javascript');
  });
});

immer.implement(tests.mapLarge, () => {
  const largeMap = new Map(
    Array.from({ length: 100 }, (_, i) => [`key${i}`, { value: i }])
  );
  const mapState = { data: largeMap };
  const result = produce(mapState, (draft) => {
    draft.data.set('key50', { value: 9999 });
  });
});

immer.implement(tests.setLarge, () => {
  const largeSet = new Set(Array.from({ length: 100 }, (_, i) => i));
  const setState = { data: largeSet };
  const result = produce(setState, (draft) => {
    draft.data.add(200);
  });
});
