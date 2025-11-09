/**
 * Zustand Store Implementation
 * Standardized interface for benchmark testing
 */

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

// Create Zustand store
interface CounterState {
  count: number;
  nested: { value: number };
  users: any[];
  loading: boolean;
  asyncData: any;

  // Actions
  increment: () => void;
  decrement: () => void;
  setCount: (value: number) => void;
  setNested: (value: number) => void;
  addUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
  setAsyncData: (data: any) => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>()(
  subscribeWithSelector((set, get) => ({
    count: 0,
    nested: { value: 0 },
    users: [],
    loading: false,
    asyncData: null,

    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    setCount: (value: number) => set({ count: value }),
    setNested: (value: number) => set(state => ({
      nested: { ...state.nested, value }
    })),
    addUser: (user: any) => set(state => ({
      users: [...state.users, user]
    })),
    setLoading: (loading: boolean) => set({ loading }),
    setAsyncData: (data: any) => set({ asyncData: data, loading: false }),
    reset: () => set({
      count: 0,
      nested: { value: 0 },
      users: [],
      loading: false,
      asyncData: null
    })
  }))
);

// Standardized store interface
export const storeInterface = {
  // Core state access
  get count() { return useCounterStore.getState().count; },
  get nested() { return useCounterStore.getState().nested; },
  get users() { return useCounterStore.getState().users; },
  get loading() { return useCounterStore.getState().loading; },
  get asyncData() { return useCounterStore.getState().asyncData; },

  // Computed values
  get doubled() { return useCounterStore.getState().count * 2; },
  get complexComputed() {
    const state = useCounterStore.getState();
    return state.count * 2 + state.nested.value + state.users.length;
  },

  // Write operations
  increment: () => useCounterStore.getState().increment(),
  decrement: () => useCounterStore.getState().decrement(),
  setCount: (value: number) => useCounterStore.getState().setCount(value),
  setNested: (value: number) => useCounterStore.getState().setNested(value),
  addUser: (user: any) => useCounterStore.getState().addUser(user),
  setLoading: (loading: boolean) => useCounterStore.getState().setLoading(loading),
  setAsyncData: (data: any) => useCounterStore.getState().setAsyncData(data),
  reset: () => useCounterStore.getState().reset(),

  // Complex operations
  sortUsers: (key: string) => {
    const state = useCounterStore.getState();
    const sorted = [...state.users].sort((a, b) => a[key] > b[key] ? 1 : -1);
    useCounterStore.setState({ users: sorted });
  },
  spliceUser: (index: number, deleteCount: number, item?: any) => {
    const state = useCounterStore.getState();
    const newUsers = [...state.users];
    if (item) {
      newUsers.splice(index, deleteCount, item);
    } else {
      newUsers.splice(index, deleteCount);
    }
    useCounterStore.setState({ users: newUsers });
  },

  // Async operations
  loadAsyncData: async () => {
    useCounterStore.getState().setLoading(true);
    // 模擬異步操作
    await new Promise(resolve => setTimeout(resolve, 100));
    useCounterStore.getState().setAsyncData({
      timestamp: Date.now(),
      data: 'async data'
    });
  },

  // Store management
  initialize: () => {
    useCounterStore.getState().reset();
  },
  cleanup: () => {
    useCounterStore.getState().reset();
  }
};

// Export both for compatibility
export { storeInterface as store, useCounterStore };