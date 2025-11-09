import { signal, computed as preactComputed, effect } from '@preact/signals';

export const preactCountSignal = signal(0);
export const preactDoubledSignal = preactComputed(() => preactCountSignal.value * 2);

// Chained computed (3 levels)
export const preactLevel1Computed = preactComputed(() => preactCountSignal.value * 2);
export const preactLevel2Computed = preactComputed(() => preactLevel1Computed.value + 10);
export const preactLevel3Computed = preactComputed(() => preactLevel2Computed.value * 3);

export const preactNestedSignal = signal({ value: 0 });
export const preactUsersSignal = signal([]);
export const preactLoadingSignal = signal(false);
export const preactAsyncDataSignal = signal(null);
// Deep nesting for 5-level test
export const preactDeepNestedSignal = signal({
  level1: {
    level2: {
      level3: {
        level4: {
          level5: { value: 0 }
        }
      }
    }
  }
});
// Large state array
export const preactItemsSignal = signal(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i })));

export const preactActions = {
  increment: () => preactCountSignal.value++,
  setNested: (value: number) => preactNestedSignal.value = { value },
  addUser: (user: any) => preactUsersSignal.value = [...preactUsersSignal.value, user],
  getDoubled: () => preactDoubledSignal.value,
  getNested: () => preactNestedSignal.value,
  getUsers: () => preactUsersSignal.value,
  // Async actions
  setLoading: (loading: boolean) => preactLoadingSignal.value = loading,
  setAsyncData: (data: any) => {
    preactAsyncDataSignal.value = data;
    preactLoadingSignal.value = false;
  },
  getLoading: () => preactLoadingSignal.value,
  getAsyncData: () => preactAsyncDataSignal.value,
  fetchData: async (data: any) => {
    preactLoadingSignal.value = true;
    await new Promise(resolve => setTimeout(resolve, 0));
    preactAsyncDataSignal.value = data;
    preactLoadingSignal.value = false;
  },
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => {
    preactCountSignal.value = count;
    preactNestedSignal.value = { value: nestedValue };
    preactLoadingSignal.value = loading;
  },
  filterUsers: (id: number) =>
    preactUsersSignal.value = preactUsersSignal.value.filter((u: any) => u.id !== id),
  removeUser: (id: number) => {
    const users = [...preactUsersSignal.value];
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      preactUsersSignal.value = users;
    }
  },
  updateUser: (id: number, data: any) =>
    preactUsersSignal.value = preactUsersSignal.value.map((u: any) =>
      u.id === id ? { ...u, ...data } : u
    ),
  setDeepNested: (value: number) =>
    preactDeepNestedSignal.value = {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    },
  updateLargeState: (id: number, value: number) =>
    preactItemsSignal.value = preactItemsSignal.value.map((i: any) =>
      i.id === id ? { ...i, value } : i
    ),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const disposers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const dispose = effect(() => {
        // Simulate component reading state
        preactCountSignal.value;
      });
      disposers.push(dispose);
    }
    return () => disposers.forEach(d => d());
  },

  // New comprehensive benchmark tests

  // Creation test - create a new signal
  createStore: () => signal(0),

  // Read test - read count 1000 times
  readBatch: () => {
    for (let i = 0; i < 1000; i++) {
      preactCountSignal.value;
    }
  },

  // Write with no listeners
  writeNoListeners: () => preactCountSignal.value++,

  // Write with N subscribers
  writeWithSubscribers: (subscriberCount: number) => {
    const disposers: (() => void)[] = [];
    for (let i = 0; i < subscriberCount; i++) {
      const dispose = effect(() => {
        preactCountSignal.value;
      });
      disposers.push(dispose);
    }
    preactCountSignal.value++;
    disposers.forEach(d => d());
  },

  // Computed cached read
  readComputedCached: () => preactDoubledSignal.value,

  // Computed update (trigger recomputation)
  updateComputed: () => {
    preactCountSignal.value++;
    preactDoubledSignal.value;
  },

  // Chained computed read
  readChainedComputed: () => preactLevel3Computed.value,

  // Batching 100 updates
  batch100Updates: () => {
    for (let i = 0; i < 100; i++) {
      preactCountSignal.value = i;
    }
  },

  // Subscribe/Unsubscribe test
  subscribeUnsubscribe: () => {
    const dispose = effect(() => {
      preactCountSignal.value;
    });
    dispose();
  }
};