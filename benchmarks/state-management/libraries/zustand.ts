/**
 * Zustand (Store-based) Implementation
 * Uses Zustand's simple store-based state management
 */

import { create } from 'zustand';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'zustand',
  displayName: 'Zustand',
  packageName: 'zustand',
  githubUrl: 'https://github.com/pmndrs/zustand',
  description: 'Simple store-based state management',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

interface CounterStore {
  counter: number;
  increment: () => void;
  setCounter: (value: number) => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  setCounter: (value: number) => set({ counter: value }),
}));

interface NestedStore {
  nestedObject: {
    level1: {
      level2: {
        level3: {
          value: number;
        };
      };
    };
  };
  updateNested: () => void;
}

const useNestedStore = create<NestedStore>((set) => ({
  nestedObject: {
    level1: {
      level2: {
        level3: {
          value: 0,
        },
      },
    },
  },
  updateNested: () =>
    set((state) => ({
      nestedObject: {
        ...state.nestedObject,
        level1: {
          ...state.nestedObject.level1,
          level2: {
            ...state.nestedObject.level1.level2,
            level3: {
              value: state.nestedObject.level1.level2.level3.value + 1,
            },
          },
        },
      },
    })),
}));

interface ArrayStore {
  items: Array<{ id: number; name: string; value: number }>;
  pushItem: () => void;
  updateItem: () => void;
  setItems: (items: Array<{ id: number; name: string; value: number }>) => void;
}

const useArrayStore = create<ArrayStore>((set, get) => ({
  items: [],
  pushItem: () =>
    set((state) => ({
      items: [
        ...state.items,
        { id: state.items.length, name: `item-${state.items.length}`, value: Math.random() },
      ],
    })),
  updateItem: () =>
    set((state) => {
      if (state.items.length > 0) {
        const index = Math.floor(state.items.length / 2);
        return {
          items: state.items.map((item, i) =>
            i === index ? { ...item, value: item.value + 1 } : item
          ),
        };
      }
      return state;
    }),
  setItems: (items) => set({ items }),
}));

// Computed value using selector
const selectDoubledCounter = (state: CounterStore) => state.counter * 2;

interface FormStore {
  username: string;
  email: string;
  age: number;
  profile: {
    bio: string;
    interests: string[];
  };
  updateSimpleForm: () => void;
  updateComplexForm: () => void;
}

const useFormStore = create<FormStore>((set) => ({
  username: '',
  email: '',
  age: 0,
  profile: {
    bio: '',
    interests: [],
  },
  updateSimpleForm: () =>
    set({
      username: 'user123',
      email: 'user@example.com',
      age: 25,
    }),
  updateComplexForm: () =>
    set({
      username: 'complexUser',
      email: 'complex@example.com',
      age: 30,
      profile: {
        bio: 'A detailed bio text',
        interests: ['coding', 'music', 'gaming'],
      },
    }),
}));

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, {
  fn: () => {
    return useCounterStore.getState().counter;
  },
});

library.implement(tests.moderateRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += useCounterStore.getState().counter;
    }
    return sum;
  },
});

library.implement(tests.highFrequencyRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += useCounterStore.getState().counter;
    }
    return sum;
  },
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    useCounterStore.getState().increment();
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    for (let i = 0; i < 10; i++) {
      useCounterStore.getState().increment();
    }
  },
});

library.implement(tests.burstWrite, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    for (let i = 0; i < 100; i++) {
      useCounterStore.getState().increment();
    }
  },
});

library.implement(tests.heavyWrite, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    for (let i = 0; i < 1000; i++) {
      useCounterStore.getState().increment();
    }
  },
});

// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    useNestedStore.setState({
      nestedObject: {
        level1: {
          level2: {
            level3: {
              value: 0,
            },
          },
        },
      },
    });
  },
  fn: () => {
    useNestedStore.getState().updateNested();
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    useArrayStore.getState().setItems([]);
  },
  fn: () => {
    useArrayStore.getState().pushItem();
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    useArrayStore.getState().setItems([{ id: 0, name: 'item-0', value: 0 }]);
  },
  fn: () => {
    useArrayStore.getState().updateItem();
  },
});

library.implement(tests.computedValue, {
  fn: () => {
    return selectDoubledCounter(useCounterStore.getState());
  },
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.asyncThroughput, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: async () => {
    const promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        new Promise<void>((resolve) => {
          setTimeout(() => {
            useCounterStore.getState().increment();
            resolve();
          }, 0);
        })
      );
    }
    await Promise.all(promises);
  },
});

library.implement(tests.concurrentUpdates, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        useCounterStore.getState().setCounter(i);
      })
    );
    await Promise.all(promises);
  },
});

// ============================================================================
// REAL-WORLD SCENARIOS
// ============================================================================

library.implement(tests.simpleForm, {
  beforeEach: () => {
    useFormStore.setState({
      username: '',
      email: '',
      age: 0,
      profile: {
        bio: '',
        interests: [],
      },
    });
  },
  fn: () => {
    useFormStore.getState().updateSimpleForm();
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    useFormStore.setState({
      username: '',
      email: '',
      age: 0,
      profile: {
        bio: '',
        interests: [],
      },
    });
  },
  fn: () => {
    useFormStore.getState().updateComplexForm();
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    // Update base value which should invalidate computed cache
    useCounterStore.getState().increment();
    // Access computed to trigger recomputation
    return selectDoubledCounter(useCounterStore.getState());
  },
});

library.implement(tests.memoryUsage, {
  fn: () => {
    const subscriptions: Array<() => void> = [];

    // Create 100 subscribers
    for (let i = 0; i < 100; i++) {
      const unsubscribe = useCounterStore.subscribe(() => {
        // Subscriber callback
      });
      subscriptions.push(unsubscribe);
    }

    // Cleanup all subscribers
    subscriptions.forEach((unsub) => unsub());
  },
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += useCounterStore.getState().counter;
    }
    return sum;
  },
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    useCounterStore.getState().setCounter(0);
  },
  fn: () => {
    for (let i = 0; i < 10000; i++) {
      useCounterStore.getState().increment();
    }
  },
});

library.implement(tests.largeArray, {
  beforeEach: () => {
    useArrayStore.getState().setItems(Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `item-${i}`,
      value: i,
    })));
  },
  fn: () => {
    // Perform operation on large array
    useArrayStore.getState().updateItem();
  },
});

// ============================================================================
// REACTIVITY PATTERNS - NOT APPLICABLE
// ============================================================================
// Zustand is a non-reactive store-based library without reactive dependency
// graphs or automatic propagation. Reactivity pattern tests (diamond, chains,
// fanout, etc.) are designed to measure reactive graph efficiency, which
// Zustand doesn't implement. These tests would measure manual getter calls,
// not reactive propagation, making comparison unfair.
//
// Removed tests: diamondPattern, deepDiamondPattern, deepChain, veryDeepChain,
//                wideFanout, massiveFanout, dynamicDependencies, repeatedDiamonds