/**
 * Redux Toolkit Store Implementation
 * Standardized interface for benchmark testing
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';

// 創建 Redux slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, nested: { value: 0 }, users: [], loading: false, asyncData: null },
  reducers: {
    increment: state => { state.count += 1; },
    decrement: state => { state.count -= 1; },
    setCount: (state, action) => { state.count = action.payload; },
    setNested: (state, action) => { state.nested.value = action.payload; },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setLoading: (state, action) => { state.loading = action.payload; },
    setAsyncData: (state, action) => {
      state.asyncData = action.payload;
      state.loading = false;
    },
    reset: state => {
      state.count = 0;
      state.nested.value = 0;
      state.users = [];
      state.loading = false;
      state.asyncData = null;
    }
  }
});

const internalStore = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Standardized store interface
export const storeInterface = {
  // Core state access
  get count() { return internalStore.getState().counter.count; },
  get nested() { return internalStore.getState().counter.nested; },
  get users() { return internalStore.getState().counter.users; },
  get loading() { return internalStore.getState().counter.loading; },
  get asyncData() { return internalStore.getState().counter.asyncData; },

  // Computed values
  get doubled() { return internalStore.getState().counter.count * 2; },
  get complexComputed() {
    const state = internalStore.getState().counter;
    return state.count * 2 + state.nested.value + state.users.length;
  },

  // Write operations
  increment: () => internalStore.dispatch(counterSlice.actions.increment()),
  decrement: () => internalStore.dispatch(counterSlice.actions.decrement()),
  setCount: (value: number) => internalStore.dispatch(counterSlice.actions.setCount(value)),
  setNested: (value: number) => internalStore.dispatch(counterSlice.actions.setNested(value)),
  addUser: (user: any) => internalStore.dispatch(counterSlice.actions.addUser(user)),
  setLoading: (loading: boolean) => internalStore.dispatch(counterSlice.actions.setLoading(loading)),
  setAsyncData: (data: any) => internalStore.dispatch(counterSlice.actions.setAsyncData(data)),
  reset: () => internalStore.dispatch(counterSlice.actions.reset()),

  // Complex operations
  sortUsers: (key: string) => {
    const state = internalStore.getState().counter;
    const sorted = [...state.users].sort((a, b) => a[key] > b[key] ? 1 : -1);
    internalStore.dispatch(counterSlice.actions.setLoading(false));
  },
  spliceUser: (index: number, deleteCount: number, item?: any) => {
    const state = internalStore.getState().counter;
    const newUsers = [...state.users];
    if (item) {
      newUsers.splice(index, deleteCount, item);
    } else {
      newUsers.splice(index, deleteCount);
    }
    // 在實際應用中，這裡應該更新 users 數組
  },

  // Async operations
  loadAsyncData: async () => {
    internalStore.dispatch(counterSlice.actions.setLoading(true));
    // 模擬異步操作
    await new Promise(resolve => setTimeout(resolve, 100));
    internalStore.dispatch(counterSlice.actions.setAsyncData({
      timestamp: Date.now(),
      data: 'async data'
    }));
  },

  // Store management
  initialize: () => {
    // 確保 store 初始化
    internalStore.dispatch(counterSlice.actions.reset());
  },
  cleanup: () => {
    // 清理操作
    internalStore.dispatch(counterSlice.actions.reset());
  }
};

// Export store interface for the benchmark system
export const store = storeInterface;