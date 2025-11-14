/**
 * Immer Library Benchmark
 *
 * Using Immer's produce function for immutable updates
 * Supports: All operations including patches and Map/Set
 */

import { produce, enableMapSet, enablePatches, produceWithPatches, applyPatches } from 'immer';
import { category, tests } from '../index';

// Enable Map/Set and Patches support
enableMapSet();
enablePatches();

// Register library
const immer = category.registerLibrary({
  id: 'immer',
  displayName: 'Immer',
  packageName: 'immer',
  githubUrl: 'https://github.com/immerjs/immer',
  description: 'Popular immutability library using Proxy-based draft states',
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

immer.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return produce(state, draft => {
    draft.age = 31;
  });
});

// ============================================================================
// Nested Updates
// ============================================================================

immer.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return produce(state, draft => {
    draft.user.profile.details.age = 31;
  });
});

// ============================================================================
// Array Operations
// ============================================================================

immer.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft.push({ id: draft.length, value: `item-${draft.length}` });
  });
});

immer.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft.splice(5, 1);
  });
});

immer.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft[5].value = 'updated';
  });
});

// ============================================================================
// Deep Operations
// ============================================================================

immer.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return produce(state, draft => {
    draft.level1.level2.level3.level4.level5.value = 100;
  });
});

immer.implement(tests.multipleUpdates, () => {
  const state = { a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } };
  return produce(state, draft => {
    draft.a = 10;
    draft.b = 20;
    draft.nested.x = 100;
  });
});

// ============================================================================
// Large Scale
// ============================================================================

immer.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return produce(state, draft => {
    draft[500].value = 'updated';
  });
});

// ============================================================================
// Patches (Feature-Specific)
// ============================================================================

immer.implement(tests.patchesGenerate, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const [nextState, patches] = produceWithPatches(state, draft => {
    draft.counter++;
    draft.items.push(4);
  });
  return { nextState, patches };
});

immer.implement(tests.patchesApply, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const patches = [
    { op: 'replace', path: ['counter'], value: 1 },
    { op: 'add', path: ['items', 3], value: 4 },
  ];
  return applyPatches(state, patches);
});

immer.implement(tests.patchesRoundtrip, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const [nextState, patches, inversePatches] = produceWithPatches(state, draft => {
    draft.counter++;
    draft.items.push(4);
  });
  const reverted = applyPatches(nextState, inversePatches);
  return { nextState, reverted };
});

immer.implement(tests.undoRedo, () => {
  const state = { value: 10 };
  const [nextState, patches, inversePatches] = produceWithPatches(state, draft => {
    draft.value = 20;
  });
  const undone = applyPatches(nextState, inversePatches);
  const redone = applyPatches(undone, patches);
  return { undone, redone };
});

// ============================================================================
// Map & Set Operations (Feature-Specific)
// ============================================================================

immer.implement(tests.mapSet, () => {
  const state = mapData;
  return produce(state, draft => {
    draft.set('new-key', { value: 999 });
  });
});

immer.implement(tests.mapUpdate, () => {
  const state = mapData;
  return produce(state, draft => {
    const item = draft.get('key-5');
    if (item) {
      item.value = 999;
    }
  });
});

immer.implement(tests.setAdd, () => {
  const state = setData;
  return produce(state, draft => {
    draft.add('new-item');
  });
});

immer.implement(tests.setDelete, () => {
  const state = setData;
  return produce(state, draft => {
    draft.delete('item-5');
  });
});

immer.implement(tests.mapLarge, () => {
  const state = largeMap;
  return produce(state, draft => {
    draft.set('key-50', { value: 999 });
    const item = draft.get('key-25');
    if (item) {
      item.value = 1000;
    }
  });
});

immer.implement(tests.setLarge, () => {
  const state = largeSet;
  return produce(state, draft => {
    draft.delete('item-50');
    draft.add('new-item');
  });
});