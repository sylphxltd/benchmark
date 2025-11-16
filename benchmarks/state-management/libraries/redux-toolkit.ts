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
// ============================================================================
// REACTIVITY PATTERNS - NOT APPLICABLE
// ============================================================================
// Redux Toolkit is a non-reactive store-based library without reactive
// dependency graphs or automatic propagation. Reactivity pattern tests
// (diamond, chains, fanout, etc.) are designed to measure reactive graph
// efficiency, which Redux doesn't implement. These tests would only measure
// arithmetic operations, not reactivity, making comparison unfair.
//
// Removed tests: diamondPattern, deepDiamondPattern, deepChain, veryDeepChain,
//                wideFanout, massiveFanout, dynamicDependencies, repeatedDiamonds