/**
 * Jotai Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { atom, createStore } from 'jotai';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
  nestedAtom: ReturnType<typeof atom<{ nested: { value: number } }>>;
  usersAtom: ReturnType<typeof atom<Array<{ id: number; name: string }>>>;
  doubledAtom: ReturnType<typeof atom<number>>;
  formAtom: ReturnType<typeof atom<{ name: string; email: string; age: number }>>;
  complexFormAtom: ReturnType<typeof atom<{ profile: { name: string }; tags: string[] }>>;
  largeArrayAtom: ReturnType<typeof atom<number[]>>;
}

// ============================================================================
// Register Library
// ============================================================================

const jotai = category.registerLibrary<JotaiStore>({
  id: 'jotai',
  displayName: 'Jotai',
  packageName: 'jotai',
  githubUrl: 'https://github.com/pmndrs/jotai',
  description: 'Primitive and flexible state management for React',

  setup: {
    createStore: () => {
      const store = createStore();
      const counterAtom = atom(0);
      const nestedAtom = atom({ nested: { value: 0 } });
      const usersAtom = atom<Array<{ id: number; name: string }>>([]);

      // Computed atom (derived value)
      const doubledAtom = atom((get) => get(counterAtom) * 2);

      const formAtom = atom({ name: '', email: '', age: 0 });
      const complexFormAtom = atom({ profile: { name: '' }, tags: [] as string[] });
      const largeArrayAtom = atom<number[]>([]);

      return {
        store,
        counterAtom,
        nestedAtom,
        usersAtom,
        doubledAtom,
        formAtom,
        complexFormAtom,
        largeArrayAtom,
      };
    },
  },

  features: ['computed-native', 'async-reactive'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

jotai.implement(tests.singleRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const value = store.get(counterAtom);
});

jotai.implement(tests.moderateRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += store.get(counterAtom);
  }
  return sum;
});

jotai.implement(tests.highFrequencyRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += store.get(counterAtom);
  }
  return sum;
});

// ========== BASIC WRITE TESTS ==========

jotai.implement(tests.singleWrite, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, (prev) => prev + 1);
  }
});

jotai.implement(tests.batchWrite, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 10; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
  }
});

jotai.implement(tests.burstWrite, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 100; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
  }
});

jotai.implement(tests.heavyWrite, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 1000; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
  }
});

// ========== ADVANCED OPERATIONS ==========

jotai.implement(tests.nestedUpdate, {
  beforeEach: (ctx) => {
    const { store, nestedAtom } = ctx.store;
    store.set(nestedAtom, { nested: { value: 0 } });
  },
  fn: (ctx) => {
    const { store, nestedAtom } = ctx.store;
    store.set(nestedAtom, (prev) => ({
      ...prev,
      nested: {
        ...prev.nested,
        value: prev.nested.value + 1,
      },
    }));
  }
});

jotai.implement(tests.arrayPush, {
  beforeEach: (ctx) => {
    const { store, usersAtom } = ctx.store;
    store.set(usersAtom, []);
  },
  fn: (ctx) => {
    const { store, usersAtom } = ctx.store;
    store.set(usersAtom, (prev) => [
      ...prev,
      { id: prev.length + 1, name: `User ${prev.length + 1}` },
    ]);
  }
});

jotai.implement(tests.arrayUpdate, {
  beforeEach: (ctx) => {
    const { store, usersAtom } = ctx.store;
    store.set(usersAtom, [{ id: 1, name: 'User 1' }]);
  },
  fn: (ctx) => {
    const { store, usersAtom } = ctx.store;
    // Update the first user
    store.set(usersAtom, (prev) => [
      { ...prev[0], name: 'Updated User' },
      ...prev.slice(1),
    ]);
  }
});

jotai.implement(tests.computedValue, (ctx) => {
  const { store, doubledAtom } = ctx.store;
  const value = store.get(doubledAtom);
});

// ========== ASYNC OPERATIONS ==========

jotai.implement(tests.asyncThroughput, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: async (ctx) => {
    const { store, counterAtom } = ctx.store;

    // Simulate rapid async operations
    for (let i = 0; i < 20; i++) {
      await Promise.resolve();
      store.set(counterAtom, i);
    }
  }
});

jotai.implement(tests.concurrentUpdates, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: async (ctx) => {
    const { store, counterAtom } = ctx.store;

    // Test concurrent async updates
    const operations = [];

    for (let i = 0; i < 50; i++) {
      operations.push(
        Promise.resolve().then(() => {
          store.set(counterAtom, (prev) => prev + 1);
        })
      );
    }

    await Promise.all(operations);
  }
});

// ========== REAL-WORLD SCENARIOS ==========

jotai.implement(tests.simpleForm, {
  beforeEach: (ctx) => {
    const { store, formAtom } = ctx.store;
    store.set(formAtom, { name: '', email: '', age: 0 });
  },
  fn: (ctx) => {
    const { store, formAtom } = ctx.store;
    store.set(formAtom, (prev) => ({
      ...prev,
      name: 'John Doe',
    }));
    store.set(formAtom, (prev) => ({
      ...prev,
      email: 'john@example.com',
    }));
    store.set(formAtom, (prev) => ({
      ...prev,
      age: 30,
    }));
  }
});

jotai.implement(tests.complexForm, {
  beforeEach: (ctx) => {
    const { store, complexFormAtom } = ctx.store;
    store.set(complexFormAtom, { profile: { name: '' }, tags: [] });
  },
  fn: (ctx) => {
    const { store, complexFormAtom } = ctx.store;
    // Update nested object
    store.set(complexFormAtom, (prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        name: 'John Doe',
      },
    }));
    // Update array
    store.set(complexFormAtom, (prev) => ({
      ...prev,
      tags: [...prev.tags, 'developer', 'react'],
    }));
  }
});

jotai.implement(tests.cacheInvalidation, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom, doubledAtom } = ctx.store;
    // Update source data
    store.set(counterAtom, (prev) => prev + 1);
    // Access computed value (should reflect new value)
    const doubled = store.get(doubledAtom);
  }
});

jotai.implement(tests.memoryUsage, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    const unsub = store.sub(counterAtom, () => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

jotai.implement(tests.extremeRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += store.get(counterAtom);
  }
  return sum;
});

jotai.implement(tests.extremeWrite, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 10000; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
  }
});

jotai.implement(tests.largeArray, {
  beforeEach: (ctx) => {
    const { store, largeArrayAtom } = ctx.store;
    const items = Array.from({ length: 1000 }, (_, i) => i);
    store.set(largeArrayAtom, items);
  },
  fn: (ctx) => {
    const { store, largeArrayAtom } = ctx.store;
    // Read the array
    const array = store.get(largeArrayAtom);

    // Update one item
    store.set(largeArrayAtom, (prev) => {
      const newArray = [...prev];
      newArray[500] = 999;
      return newArray;
    });
  }
});

// ========== REACTIVITY PATTERNS ==========

jotai.implement(tests.diamondPattern, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom, doubledAtom } = ctx.store;
    store.set(counterAtom, (prev) => prev + 1);
    const result = store.get(doubledAtom);
  }
});

jotai.implement(tests.deepDiamondPattern, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom, doubledAtom } = ctx.store;
    for (let i = 0; i < 5; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
    const result = store.get(doubledAtom);
  }
});

jotai.implement(tests.deepChain, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 1);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 10; i++) {
      store.set(counterAtom, (prev) => prev * 2);
    }
    const result = store.get(counterAtom);
  }
});

jotai.implement(tests.veryDeepChain, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 1);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 100; i++) {
      store.set(counterAtom, (prev) => prev * 1.01);
    }
    const result = store.get(counterAtom);
  }
});

jotai.implement(tests.wideFanout, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, (prev) => prev + 1);
    for (let i = 0; i < 100; i++) {
      const v = store.get(counterAtom);
    }
  }
});

jotai.implement(tests.massiveFanout, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, (prev) => prev + 1);
    for (let i = 0; i < 1000; i++) {
      const v = store.get(counterAtom);
    }
  }
});

jotai.implement(tests.dynamicDependencies, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom } = ctx.store;
    const toggle = store.get(counterAtom) % 2 === 0;
    store.set(counterAtom, (prev) => prev + (toggle ? 1 : 2));
    const result = store.get(counterAtom);
  }
});

jotai.implement(tests.repeatedDiamonds, {
  beforeEach: (ctx) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, 0);
  },
  fn: (ctx) => {
    const { store, counterAtom, doubledAtom } = ctx.store;
    for (let i = 0; i < 5; i++) {
      store.set(counterAtom, (prev) => prev + 1);
      const a = store.get(counterAtom);
      const b = store.get(doubledAtom);
    }
  }
});
