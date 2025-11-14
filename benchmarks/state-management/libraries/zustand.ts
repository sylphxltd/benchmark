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
// REACTIVITY PATTERNS
// ============================================================================

// For reactivity patterns, we create specialized stores

// Diamond pattern store
interface DiamondStore {
  a: number;
  incrementA: () => void;
  getB: () => number;
  getC: () => number;
  getD: () => number;
}

const useDiamondStore = create<DiamondStore>((set, get) => ({
  a: 1,
  incrementA: () => set((state) => ({ a: state.a + 1 })),
  getB: () => get().a * 2,
  getC: () => get().a * 3,
  getD: () => get().getB() + get().getC(),
}));

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    useDiamondStore.setState({ a: 1 });
  },
  fn: () => {
    useDiamondStore.getState().incrementA();
    return useDiamondStore.getState().getD();
  },
});

// Deep diamond pattern store
interface DeepDiamondStore {
  a: number;
  incrementA: () => void;
  getB1: () => number;
  getB2: () => number;
  getC1: () => number;
  getC2: () => number;
  getD1: () => number;
  getD2: () => number;
  getE: () => number;
}

const useDeepDiamondStore = create<DeepDiamondStore>((set, get) => ({
  a: 1,
  incrementA: () => set((state) => ({ a: state.a + 1 })),
  getB1: () => get().a * 2,
  getB2: () => get().a * 3,
  getC1: () => get().getB1() + get().getB2(),
  getC2: () => get().getB1() - get().getB2(),
  getD1: () => get().getC1() * get().getC2(),
  getD2: () => get().getC1() + get().getC2(),
  getE: () => get().getD1() + get().getD2(),
}));

library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    useDeepDiamondStore.setState({ a: 1 });
  },
  fn: () => {
    useDeepDiamondStore.getState().incrementA();
    return useDeepDiamondStore.getState().getE();
  },
});

// Deep chain store
const chainGetters: Array<() => number> = [];
interface ChainStore {
  value: number;
  increment: () => void;
  [key: string]: any;
}

const useChainStore = create<ChainStore>((set, get) => {
  const store: any = {
    value: 1,
    increment: () => set((state) => ({ value: state.value + 1 })),
  };

  // Create 10 chained getters
  for (let i = 0; i < 10; i++) {
    const key = `get${i}`;
    if (i === 0) {
      store[key] = () => get().value + 1;
    } else {
      store[key] = () => get()[`get${i - 1}`]() + 1;
    }
  }

  return store;
});

library.implement(tests.deepChain, {
  beforeEach: () => {
    useChainStore.setState({ value: 1 });
  },
  fn: () => {
    useChainStore.getState().increment();
    return useChainStore.getState().get9();
  },
});

// Very deep chain store
interface VeryDeepChainStore {
  value: number;
  increment: () => void;
  [key: string]: any;
}

const useVeryDeepChainStore = create<VeryDeepChainStore>((set, get) => {
  const store: any = {
    value: 1,
    increment: () => set((state) => ({ value: state.value + 1 })),
  };

  // Create 100 chained getters
  for (let i = 0; i < 100; i++) {
    const key = `get${i}`;
    if (i === 0) {
      store[key] = () => get().value + 1;
    } else {
      store[key] = () => get()[`get${i - 1}`]() + 1;
    }
  }

  return store;
});

library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    useVeryDeepChainStore.setState({ value: 1 });
  },
  fn: () => {
    useVeryDeepChainStore.getState().increment();
    return useVeryDeepChainStore.getState().get99();
  },
});

// Wide fanout store
interface FanoutStore {
  source: number;
  increment: () => void;
  [key: string]: any;
}

const useFanoutStore = create<FanoutStore>((set, get) => {
  const store: any = {
    source: 1,
    increment: () => set((state) => ({ source: state.source + 1 })),
  };

  // Create 100 computed values
  for (let i = 0; i < 100; i++) {
    store[`get${i}`] = () => get().source * (i + 1);
  }

  return store;
});

library.implement(tests.wideFanout, {
  beforeEach: () => {
    useFanoutStore.setState({ source: 1 });
  },
  fn: () => {
    const state = useFanoutStore.getState();
    state.increment();
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += state[`get${i}`]();
    }
    return sum;
  },
});

// Massive fanout store
const useMassiveFanoutStore = create<FanoutStore>((set, get) => {
  const store: any = {
    source: 1,
    increment: () => set((state) => ({ source: state.source + 1 })),
  };

  // Create 1000 computed values
  for (let i = 0; i < 1000; i++) {
    store[`get${i}`] = () => get().source * (i + 1);
  }

  return store;
});

library.implement(tests.massiveFanout, {
  beforeEach: () => {
    useMassiveFanoutStore.setState({ source: 1 });
  },
  fn: () => {
    const state = useMassiveFanoutStore.getState();
    state.increment();
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += state[`get${i}`]();
    }
    return sum;
  },
});

// Dynamic dependencies store
interface DynamicStore {
  condition: boolean;
  a: number;
  b: number;
  toggleCondition: () => void;
  incrementA: () => void;
  incrementB: () => void;
  getComputed: () => number;
}

const useDynamicStore = create<DynamicStore>((set, get) => ({
  condition: true,
  a: 1,
  b: 2,
  toggleCondition: () => set((state) => ({ condition: !state.condition })),
  incrementA: () => set((state) => ({ a: state.a + 1 })),
  incrementB: () => set((state) => ({ b: state.b + 1 })),
  getComputed: () => {
    const state = get();
    if (state.condition) {
      return state.a * 2;
    } else {
      return state.b * 3;
    }
  },
}));

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    useDynamicStore.setState({
      condition: true,
      a: 1,
      b: 2,
    });
  },
  fn: () => {
    const state = useDynamicStore.getState();
    state.toggleCondition();
    state.incrementA();
    state.incrementB();
    return state.getComputed();
  },
});

// Repeated diamonds store
const repeatedDiamondStores: any[] = [];
for (let i = 0; i < 5; i++) {
  const store = create<any>((set, get) => ({
    source: 1,
    increment: () => set((state: any) => ({ source: state.source + 1 })),
    getB: () => get().source * 2,
    getC: () => get().source * 3,
    getD: () => get().getB() + get().getC(),
  }));
  repeatedDiamondStores.push(store);
}

library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    repeatedDiamondStores[0].setState({ source: 1 });
  },
  fn: () => {
    repeatedDiamondStores[0].getState().increment();
    // Propagate through all diamonds
    for (let i = 1; i < 5; i++) {
      const prevValue = repeatedDiamondStores[i - 1].getState().getD();
      repeatedDiamondStores[i].setState({ source: prevValue });
    }
    return repeatedDiamondStores[4].getState().getD();
  },
});