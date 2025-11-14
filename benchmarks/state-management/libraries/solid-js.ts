/**
 * Solid.js (Reactive Primitives) Implementation
 * Uses Solid.js's fine-grained reactive system
 */

import { createSignal, createMemo, batch, createEffect, createRoot, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'solid-js',
  displayName: 'Solid.js',
  packageName: 'solid-js',
  githubUrl: 'https://github.com/solidjs/solid',
  description: 'Fine-grained reactive state management',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

// Basic counter signal
const [counter, setCounter] = createSignal(0);

// Nested object using store
const [nestedObject, setNestedObject] = createStore({
  level1: {
    level2: {
      level3: {
        value: 0,
      },
    },
  },
});

// Array for operations using store
const [itemsArray, setItemsArray] = createStore<{ items: Array<{ id: number; name: string; value: number }> }>({
  items: [],
});

// Computed value based on counter
const doubledCounter = createMemo(() => counter() * 2);

// Form state using store
const [formState, setFormState] = createStore({
  username: '',
  email: '',
  age: 0,
  profile: {
    bio: '',
    interests: [] as string[],
  },
});

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, {
  fn: () => {
    return counter();
  },
});

library.implement(tests.moderateRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += counter();
    }
    return sum;
  },
});

library.implement(tests.highFrequencyRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += counter();
    }
    return sum;
  },
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    setCounter((prev) => prev + 1);
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 10; i++) {
        setCounter((prev) => prev + 1);
      }
    });
  },
});

library.implement(tests.burstWrite, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 100; i++) {
        setCounter((prev) => prev + 1);
      }
    });
  },
});

library.implement(tests.heavyWrite, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 1000; i++) {
        setCounter((prev) => prev + 1);
      }
    });
  },
});

// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    setNestedObject({
      level1: {
        level2: {
          level3: {
            value: 0,
          },
        },
      },
    });
  },
  fn: () => {
    setNestedObject('level1', 'level2', 'level3', 'value', (v) => v + 1);
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    setItemsArray({ items: [] });
  },
  fn: () => {
    const length = itemsArray.items.length;
    setItemsArray('items', (items) => [
      ...items,
      { id: length, name: `item-${length}`, value: Math.random() },
    ]);
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    setItemsArray({ items: [{ id: 0, name: 'item-0', value: 0 }] });
  },
  fn: () => {
    if (itemsArray.items.length > 0) {
      const index = Math.floor(itemsArray.items.length / 2);
      setItemsArray('items', index, 'value', (v) => v + 1);
    }
  },
});

library.implement(tests.computedValue, {
  fn: () => {
    return doubledCounter();
  },
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.asyncThroughput, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: async () => {
    const promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setCounter((prev) => prev + 1);
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
    setCounter(0);
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        setCounter(i);
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
    setFormState({
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
    batch(() => {
      setFormState('username', 'user123');
      setFormState('email', 'user@example.com');
      setFormState('age', 25);
    });
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    setFormState({
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
    batch(() => {
      setFormState('username', 'complexUser');
      setFormState('email', 'complex@example.com');
      setFormState('age', 30);
      setFormState('profile', 'bio', 'A detailed bio text');
      setFormState('profile', 'interests', ['coding', 'music', 'gaming']);
    });
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    // Update base value which should invalidate computed cache
    setCounter((prev) => prev + 1);
    // Access computed to trigger recomputation
    return doubledCounter();
  },
});

library.implement(tests.memoryUsage, {
  fn: () => {
    const disposers: Array<() => void> = [];

    // Create 100 effects/subscribers within a root
    createRoot((dispose) => {
      for (let i = 0; i < 100; i++) {
        createEffect(() => {
          // Effect callback - access the value to create dependency
          const value = counter();
        });
      }

      // Store the root dispose function
      disposers.push(dispose);
    });

    // Cleanup all effects by disposing the root
    disposers.forEach((dispose) => dispose());
  },
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += counter();
    }
    return sum;
  },
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    setCounter(0);
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 10000; i++) {
        setCounter((prev) => prev + 1);
      }
    });
  },
});

library.implement(tests.largeArray, {
  beforeEach: () => {
    setItemsArray({
      items: Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `item-${i}`,
        value: i,
      })),
    });
  },
  fn: () => {
    // Perform operation on large array
    const middleIndex = 500;
    setItemsArray('items', middleIndex, 'value', (v) => v + 1);
  },
});

// ============================================================================
// REACTIVITY PATTERNS
// ============================================================================

// Diamond pattern: A -> B, C -> D
const [diamondA, setDiamondA] = createSignal(1);
const diamondB = createMemo(() => diamondA() * 2);
const diamondC = createMemo(() => diamondA() * 3);
const diamondD = createMemo(() => diamondB() + diamondC());

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    setDiamondA(1);
  },
  fn: () => {
    setDiamondA((prev) => prev + 1);
    return diamondD();
  },
});

// Deep diamond pattern (5 layers)
const [deepDiamondA, setDeepDiamondA] = createSignal(1);
const deepDiamondB1 = createMemo(() => deepDiamondA() * 2);
const deepDiamondB2 = createMemo(() => deepDiamondA() * 3);
const deepDiamondC1 = createMemo(() => deepDiamondB1() + deepDiamondB2());
const deepDiamondC2 = createMemo(() => deepDiamondB1() - deepDiamondB2());
const deepDiamondD1 = createMemo(() => deepDiamondC1() * deepDiamondC2());
const deepDiamondD2 = createMemo(() => deepDiamondC1() + deepDiamondC2());
const deepDiamondE = createMemo(() => deepDiamondD1() + deepDiamondD2());

library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    setDeepDiamondA(1);
  },
  fn: () => {
    setDeepDiamondA((prev) => prev + 1);
    return deepDiamondE();
  },
});

// Deep chain (10 layers)
const [chainSignal, setChainSignal] = createSignal(1);
const chainMemos: ReturnType<typeof createMemo>[] = [];
let prevMemo: any = chainSignal;
for (let i = 0; i < 10; i++) {
  const current = prevMemo;
  const memo = createMemo(() => current() + 1);
  chainMemos.push(memo);
  prevMemo = memo;
}

library.implement(tests.deepChain, {
  beforeEach: () => {
    setChainSignal(1);
  },
  fn: () => {
    setChainSignal((prev) => prev + 1);
    return chainMemos[9]();
  },
});

// Very deep chain (100 layers)
const [veryDeepChainSignal, setVeryDeepChainSignal] = createSignal(1);
const veryDeepChainMemos: ReturnType<typeof createMemo>[] = [];
let veryDeepPrevMemo: any = veryDeepChainSignal;
for (let i = 0; i < 100; i++) {
  const current = veryDeepPrevMemo;
  const memo = createMemo(() => current() + 1);
  veryDeepChainMemos.push(memo);
  veryDeepPrevMemo = memo;
}

library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    setVeryDeepChainSignal(1);
  },
  fn: () => {
    setVeryDeepChainSignal((prev) => prev + 1);
    return veryDeepChainMemos[99]();
  },
});

// Wide fanout (1 -> 100)
const [fanoutSource, setFanoutSource] = createSignal(1);
const fanoutMemos = Array.from({ length: 100 }, (_, i) =>
  createMemo(() => fanoutSource() * (i + 1))
);

library.implement(tests.wideFanout, {
  beforeEach: () => {
    setFanoutSource(1);
  },
  fn: () => {
    setFanoutSource((prev) => prev + 1);
    let sum = 0;
    for (const memo of fanoutMemos) {
      sum += memo();
    }
    return sum;
  },
});

// Massive fanout (1 -> 1000)
const [massiveFanoutSource, setMassiveFanoutSource] = createSignal(1);
const massiveFanoutMemos = Array.from({ length: 1000 }, (_, i) =>
  createMemo(() => massiveFanoutSource() * (i + 1))
);

library.implement(tests.massiveFanout, {
  beforeEach: () => {
    setMassiveFanoutSource(1);
  },
  fn: () => {
    setMassiveFanoutSource((prev) => prev + 1);
    let sum = 0;
    for (const memo of massiveFanoutMemos) {
      sum += memo();
    }
    return sum;
  },
});

// Dynamic dependencies
const [dynamicCondition, setDynamicCondition] = createSignal(true);
const [dynamicA, setDynamicA] = createSignal(1);
const [dynamicB, setDynamicB] = createSignal(2);
const dynamicComputed = createMemo(() => {
  if (dynamicCondition()) {
    return dynamicA() * 2;
  } else {
    return dynamicB() * 3;
  }
});

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    setDynamicCondition(true);
    setDynamicA(1);
    setDynamicB(2);
  },
  fn: () => {
    setDynamicCondition((prev) => !prev);
    setDynamicA((prev) => prev + 1);
    setDynamicB((prev) => prev + 1);
    return dynamicComputed();
  },
});

// Repeated diamonds (5 sequential diamond patterns)
const repeatedDiamonds: any[] = [];
let prevDiamondSignal = createSignal(1);

for (let i = 0; i < 5; i++) {
  const [source, setSource] = i === 0 ? prevDiamondSignal : createSignal(1);
  const b = createMemo(() => source() * 2);
  const c = createMemo(() => source() * 3);
  const d = createMemo(() => b() + c());
  repeatedDiamonds.push({ source, setSource, b, c, d });
  if (i < 4) {
    prevDiamondSignal = createSignal(1);
  }
}

library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    repeatedDiamonds[0].setSource(1);
  },
  fn: () => {
    repeatedDiamonds[0].setSource((prev: number) => prev + 1);
    // Propagate through all diamonds
    for (let i = 1; i < 5; i++) {
      const prevValue = repeatedDiamonds[i - 1].d();
      repeatedDiamonds[i].setSource(prevValue);
    }
    return repeatedDiamonds[4].d();
  },
});