/**
 * Redux Toolkit (Action-based) Implementation
 * Uses Redux Toolkit's slice-based state management
 */

import { configureStore, createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'redux-toolkit',
  displayName: 'Redux Toolkit',
  packageName: '@reduxjs/toolkit',
  githubUrl: 'https://github.com/reduxjs/redux-toolkit',
  description: 'Action-based state management with Redux Toolkit',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Nested object slice
const nestedSlice = createSlice({
  name: 'nested',
  initialState: {
    level1: {
      level2: {
        level3: {
          value: 0,
        },
      },
    },
  },
  reducers: {
    updateNested: (state) => {
      state.level1.level2.level3.value++;
    },
    reset: (state) => {
      state.level1.level2.level3.value = 0;
    },
  },
});

// Array slice
interface ArrayItem {
  id: number;
  name: string;
  value: number;
}

const arraySlice = createSlice({
  name: 'array',
  initialState: { items: [] as ArrayItem[] },
  reducers: {
    pushItem: (state) => {
      state.items.push({
        id: state.items.length,
        name: `item-${state.items.length}`,
        value: Math.random(),
      });
    },
    updateItem: (state) => {
      if (state.items.length > 0) {
        const index = Math.floor(state.items.length / 2);
        state.items[index].value++;
      }
    },
    setItems: (state, action: PayloadAction<ArrayItem[]>) => {
      state.items = action.payload;
    },
    reset: (state) => {
      state.items = [];
    },
  },
});

// Form slice
const formSlice = createSlice({
  name: 'form',
  initialState: {
    username: '',
    email: '',
    age: 0,
    profile: {
      bio: '',
      interests: [] as string[],
    },
  },
  reducers: {
    updateSimpleForm: (state) => {
      state.username = 'user123';
      state.email = 'user@example.com';
      state.age = 25;
    },
    updateComplexForm: (state) => {
      state.username = 'complexUser';
      state.email = 'complex@example.com';
      state.age = 30;
      state.profile.bio = 'A detailed bio text';
      state.profile.interests = ['coding', 'music', 'gaming'];
    },
    reset: (state) => {
      state.username = '';
      state.email = '';
      state.age = 0;
      state.profile.bio = '';
      state.profile.interests = [];
    },
  },
});

// Configure store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    nested: nestedSlice.reducer,
    array: arraySlice.reducer,
    form: formSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

// Selectors
const selectCounter = (state: RootState) => state.counter.value;
const selectDoubledCounter = createSelector([selectCounter], (counter) => counter * 2);

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, {
  fn: () => {
    return store.getState().counter.value;
  },
});

library.implement(tests.moderateRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += store.getState().counter.value;
    }
    return sum;
  },
});

library.implement(tests.highFrequencyRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += store.getState().counter.value;
    }
    return sum;
  },
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    for (let i = 0; i < 10; i++) {
      store.dispatch(counterSlice.actions.increment());
    }
  },
});

library.implement(tests.burstWrite, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    for (let i = 0; i < 100; i++) {
      store.dispatch(counterSlice.actions.increment());
    }
  },
});

library.implement(tests.heavyWrite, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    for (let i = 0; i < 1000; i++) {
      store.dispatch(counterSlice.actions.increment());
    }
  },
});

// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    store.dispatch(nestedSlice.actions.reset());
  },
  fn: () => {
    store.dispatch(nestedSlice.actions.updateNested());
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    store.dispatch(arraySlice.actions.reset());
  },
  fn: () => {
    store.dispatch(arraySlice.actions.pushItem());
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    store.dispatch(arraySlice.actions.setItems([{ id: 0, name: 'item-0', value: 0 }]));
  },
  fn: () => {
    store.dispatch(arraySlice.actions.updateItem());
  },
});

library.implement(tests.computedValue, {
  fn: () => {
    return selectDoubledCounter(store.getState());
  },
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.asyncThroughput, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: async () => {
    const promises = [];
    for (let i = 0; i < 20; i++) {
      promises.push(
        new Promise<void>((resolve) => {
          setTimeout(() => {
            store.dispatch(counterSlice.actions.increment());
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
    store.dispatch(counterSlice.actions.reset());
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        store.dispatch(counterSlice.actions.setCounter(i));
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
    store.dispatch(formSlice.actions.reset());
  },
  fn: () => {
    store.dispatch(formSlice.actions.updateSimpleForm());
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    store.dispatch(formSlice.actions.reset());
  },
  fn: () => {
    store.dispatch(formSlice.actions.updateComplexForm());
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    // Update base value which should invalidate computed cache
    store.dispatch(counterSlice.actions.increment());
    // Access computed to trigger recomputation
    return selectDoubledCounter(store.getState());
  },
});

library.implement(tests.memoryUsage, {
  fn: () => {
    const unsubscribers: Array<() => void> = [];

    // Create 100 subscribers
    for (let i = 0; i < 100; i++) {
      const unsubscribe = store.subscribe(() => {
        // Subscriber callback
      });
      unsubscribers.push(unsubscribe);
    }

    // Cleanup all subscribers
    unsubscribers.forEach((unsub) => unsub());
  },
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, {
  fn: () => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += store.getState().counter.value;
    }
    return sum;
  },
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.reset());
  },
  fn: () => {
    for (let i = 0; i < 10000; i++) {
      store.dispatch(counterSlice.actions.increment());
    }
  },
});

library.implement(tests.largeArray, {
  beforeEach: () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `item-${i}`,
      value: i,
    }));
    store.dispatch(arraySlice.actions.setItems(largeArray));
  },
  fn: () => {
    // Perform operation on large array
    store.dispatch(arraySlice.actions.updateItem());
  },
});

// ============================================================================
// REACTIVITY PATTERNS (Redux doesn't have computed values like reactive libraries)
// We'll simulate patterns using selectors and multiple slices
// ============================================================================

// Diamond pattern slices
const diamondASlice = createSlice({
  name: 'diamondA',
  initialState: { value: 1 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

// Add to store
const diamondStore = configureStore({
  reducer: {
    ...store.getState() as any,
    diamondA: diamondASlice.reducer,
  },
});

// Diamond pattern selectors
const selectDiamondA = (state: any) => state.diamondA?.value || 1;
const selectDiamondB = createSelector([selectDiamondA], (a) => a * 2);
const selectDiamondC = createSelector([selectDiamondA], (a) => a * 3);
const selectDiamondD = createSelector([selectDiamondB, selectDiamondC], (b, c) => b + c);

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    // Since Redux doesn't have reactive computeds, we just compute the value
    const state = store.getState();
    const a = state.counter.value;
    const b = a * 2;
    const c = a * 3;
    const d = b + c;
    return d;
  },
});

// Deep diamond pattern
library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    const a = state.counter.value;
    const b1 = a * 2;
    const b2 = a * 3;
    const c1 = b1 + b2;
    const c2 = b1 - b2;
    const d1 = c1 * c2;
    const d2 = c1 + c2;
    const e = d1 + d2;
    return e;
  },
});

// Deep chain
library.implement(tests.deepChain, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    let value = state.counter.value;
    for (let i = 0; i < 10; i++) {
      value = value + 1;
    }
    return value;
  },
});

// Very deep chain
library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    let value = state.counter.value;
    for (let i = 0; i < 100; i++) {
      value = value + 1;
    }
    return value;
  },
});

// Wide fanout
library.implement(tests.wideFanout, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    const source = state.counter.value;
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += source * (i + 1);
    }
    return sum;
  },
});

// Massive fanout
library.implement(tests.massiveFanout, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    const source = state.counter.value;
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += source * (i + 1);
    }
    return sum;
  },
});

// Dynamic dependencies
const dynamicSlice = createSlice({
  name: 'dynamic',
  initialState: {
    condition: true,
    a: 1,
    b: 2,
  },
  reducers: {
    toggleCondition: (state) => {
      state.condition = !state.condition;
    },
    incrementA: (state) => {
      state.a++;
    },
    incrementB: (state) => {
      state.b++;
    },
    reset: (state) => {
      state.condition = true;
      state.a = 1;
      state.b = 2;
    },
  },
});

// Add dynamic slice to store
const dynamicStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    nested: nestedSlice.reducer,
    array: arraySlice.reducer,
    form: formSlice.reducer,
    dynamic: dynamicSlice.reducer,
  },
});

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    dynamicStore.dispatch(dynamicSlice.actions.reset());
  },
  fn: () => {
    dynamicStore.dispatch(dynamicSlice.actions.toggleCondition());
    dynamicStore.dispatch(dynamicSlice.actions.incrementA());
    dynamicStore.dispatch(dynamicSlice.actions.incrementB());
    const state = dynamicStore.getState().dynamic;
    if (state.condition) {
      return state.a * 2;
    } else {
      return state.b * 3;
    }
  },
});

// Repeated diamonds
library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    store.dispatch(counterSlice.actions.setCounter(1));
  },
  fn: () => {
    store.dispatch(counterSlice.actions.increment());
    const state = store.getState();
    let value = state.counter.value;

    // Simulate 5 diamond patterns in sequence
    for (let i = 0; i < 5; i++) {
      const b = value * 2;
      const c = value * 3;
      const d = b + c;
      value = d;
    }

    return value;
  },
});