/**
 * Mutative Library Benchmark
 *
 * High-performance alternative to Immer with similar API
 * Supports: All operations including patches and Map/Set
 */

import { create, apply } from 'mutative';
import { category, tests } from '../index';

// Register library
const mutative = category.registerLibrary({
  id: 'mutative',
  displayName: 'Mutative',
  packageName: 'mutative',
  githubUrl: 'https://github.com/unadlib/mutative',
  description: 'High-performance immutability library, faster alternative to Immer',
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

mutative.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return create(state, draft => {
    draft.age = 31;
  });
});

// ============================================================================
// Nested Updates
// ============================================================================

mutative.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return create(state, draft => {
    draft.user.profile.details.age = 31;
  });
});

// ============================================================================
// Array Operations
// ============================================================================

mutative.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return create(state, draft => {
    draft.push({ id: draft.length, value: `item-${draft.length}` });
  });
});

mutative.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return create(state, draft => {
    draft.splice(5, 1);
  });
});

mutative.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return create(state, draft => {
    draft[5].value = 'updated';
  });
});

// ============================================================================
// Deep Operations
// ============================================================================

mutative.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return create(state, draft => {
    draft.level1.level2.level3.level4.level5.value = 100;
  });
});

mutative.implement(tests.multipleUpdates, () => {
  const state = { a: 1, b: 2, c: 3, nested: { x: 10, y: 20 } };
  return create(state, draft => {
    draft.a = 10;
    draft.b = 20;
    draft.nested.x = 100;
  });
});

// ============================================================================
// Large Scale
// ============================================================================

mutative.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return create(state, draft => {
    draft[500].value = 'updated';
  });
});

// ============================================================================
// Patches (Feature-Specific)
// ============================================================================

mutative.implement(tests.patchesGenerate, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const [nextState, patches] = create(
    state,
    draft => {
      draft.counter++;
      draft.items.push(4);
    },
    { enablePatches: true }
  );
  return { nextState, patches };
});

mutative.implement(tests.patchesApply, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const patches = [
    { op: 'replace', path: ['counter'], value: 1 },
    { op: 'add', path: ['items', 3], value: 4 },
  ];
  return apply(state, patches);
});

mutative.implement(tests.patchesRoundtrip, () => {
  const state = { counter: 0, items: [1, 2, 3] };
  const [nextState, patches, inversePatches] = create(
    state,
    draft => {
      draft.counter++;
      draft.items.push(4);
    },
    { enablePatches: true }
  );
  const reverted = apply(nextState, inversePatches);
  return { nextState, reverted };
});

mutative.implement(tests.undoRedo, () => {
  const state = { value: 10 };
  const [nextState, patches, inversePatches] = create(
    state,
    draft => {
      draft.value = 20;
    },
    { enablePatches: true }
  );
  const undone = apply(nextState, inversePatches);
  const redone = apply(undone, patches);
  return { undone, redone };
});

// ============================================================================
// Map & Set Operations (Feature-Specific)
// ============================================================================

mutative.implement(tests.mapSet, () => {
  const state = mapData;
  return create(state, draft => {
    draft.set('new-key', { value: 999 });
  });
});

mutative.implement(tests.mapUpdate, () => {
  const state = mapData;
  return create(state, draft => {
    const item = draft.get('key-5');
    if (item) {
      item.value = 999;
    }
  });
});

mutative.implement(tests.setAdd, () => {
  const state = setData;
  return create(state, draft => {
    draft.add('new-item');
  });
});

mutative.implement(tests.setDelete, () => {
  const state = setData;
  return create(state, draft => {
    draft.delete('item-5');
  });
});

mutative.implement(tests.mapLarge, () => {
  const state = largeMap;
  return create(state, draft => {
    draft.set('key-50', { value: 999 });
    const item = draft.get('key-25');
    if (item) {
      item.value = 1000;
    }
  });
});

mutative.implement(tests.setLarge, () => {
  const state = largeSet;
  return create(state, draft => {
    draft.delete('item-50');
    draft.add('new-item');
  });
});