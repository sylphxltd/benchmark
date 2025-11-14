/**
 * Craft Library Benchmark
 *
 * Lightweight immutability library with simple API
 * Supports: Basic operations (no patches or Map/Set)
 */

import { produce } from '@sylphx/craft';
import { category, tests } from '../index';

// Register library
const craft = category.registerLibrary({
  id: 'craft',
  displayName: 'Craft',
  packageName: '@sylphx/craft',
  githubUrl: 'https://github.com/sylphx/craft',
  description: 'Lightweight immutability library with focus on simplicity',
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

// ============================================================================
// Simple Updates
// ============================================================================

craft.implement(tests.simpleObjectUpdate, () => {
  const state = simpleObject;
  return produce(state, draft => {
    draft.age = 31;
  });
});

// ============================================================================
// Nested Updates
// ============================================================================

craft.implement(tests.nestedObjectUpdate, () => {
  const state = nestedObject;
  return produce(state, draft => {
    draft.user.profile.details.age = 31;
  });
});

// ============================================================================
// Array Operations
// ============================================================================

craft.implement(tests.arrayPush, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft.push({ id: draft.length, value: `item-${draft.length}` });
  });
});

craft.implement(tests.arrayRemove, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft.splice(5, 1);
  });
});

craft.implement(tests.arrayUpdate, () => {
  const state = arrayOfObjects;
  return produce(state, draft => {
    draft[5].value = 'updated';
  });
});

// ============================================================================
// Deep Operations
// ============================================================================

craft.implement(tests.deepNestedUpdate, () => {
  const state = deepObject;
  return produce(state, draft => {
    draft.level1.level2.level3.level4.level5.value = 100;
  });
});

craft.implement(tests.multipleUpdates, () => {
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

craft.implement(tests.largeArrayUpdate, () => {
  const state = largeArray;
  return produce(state, draft => {
    draft[500].value = 'updated';
  });
});

// ============================================================================
// Patches (Not supported by Craft)
// ============================================================================

// Craft doesn't support patches, so these tests are skipped

// ============================================================================
// Map & Set Operations (Not supported by Craft)
// ============================================================================

// Craft doesn't have built-in Map/Set support, so these tests are skipped