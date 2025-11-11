/**
 * Zen Store Implementation
 * Using @sylphx/zen v2.0.0
 * Real implementation with computedAsync for reactive async operations
 */

import { zen, computed, computedAsync } from '@sylphx/zen';

// Basic stores
export const zenCountStore = zen(0);
export const zenNestedStore = zen({ value: 0 });
export const zenUsersStore = zen<any[]>([]);

// Deep nested state (5-level)
export const zenDeepNestedStore = zen({
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
export const zenItemsStore = zen(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i })));

// Computed value - explicit dependency array
export const zenDoubledStore = computed([zenCountStore], (count) => count * 2);

// Chained computed (3 levels) - explicit dependencies
export const zenLevel1Computed = computed([zenCountStore], (count) => count * 2);
export const zenLevel2Computed = computed([zenLevel1Computed], (doubled) => doubled + 10);
export const zenLevel3Computed = computed([zenLevel2Computed], (result) => result * 3);

// Native reactive async using computedAsync - explicit dependencies
export const zenAsyncComputed = computedAsync([zenCountStore], async (count) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return { count, timestamp: Date.now() };
});

// Chained async computed - depends on another async computed
export const zenAsyncChainedComputed = computedAsync([zenAsyncComputed], async (asyncResult) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return asyncResult.count * 2;
});

// Complex async computed - multiple dependencies
export const zenAsyncComplexComputed = computedAsync([zenCountStore, zenAsyncComputed], async (count, asyncData) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return {
    count,
    asyncCount: asyncData.count,
    combined: count + asyncData.count
  };
});

export const zenActions = {
  // Basic operations
  increment: () => { zenCountStore.value = zenCountStore.value + 1; },
  setNested: (value: number) => { zenNestedStore.value = { value }; },
  addUser: (user: any) => { zenUsersStore.value = [...zenUsersStore.value, user]; },

  // Getters
  getDoubled: () => zenDoubledStore.value,
  getNested: () => zenNestedStore.value,
  getUsers: () => zenUsersStore.value,

  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => {
    zenCountStore.value = count;
    zenNestedStore.value = { value: nestedValue };
  },

  // Array operations
  filterUsers: (id: number) => {
    const users = zenUsersStore.value;
    zenUsersStore.value = users.filter((u: any) => u.id !== id);
  },

  removeUser: (id: number) => {
    const users = zenUsersStore.value;
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      zenUsersStore.value = newUsers;
    }
  },

  updateUser: (id: number, data: any) => {
    const users = zenUsersStore.value;
    const user = users.find((u: any) => u.id === id);
    if (user) {
      const newUsers = users.map((u: any) =>
        u.id === id ? { ...u, ...data } : u
      );
      zenUsersStore.value = newUsers;
    }
  },

  // Deep nested update
  setDeepNested: (value: number) => {
    zenDeepNestedStore.value = {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    };
  },

  // Large state update
  updateLargeState: (id: number, value: number) => {
    const items = zenItemsStore.value;
    const item = items.find((i: any) => i.id === id);
    if (item) {
      const newItems = items.map((i: any) =>
        i.id === id ? { ...i, value } : i
      );
      zenItemsStore.value = newItems;
    }
  },

  // Multiple subscriptions test
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = zenCountStore.subscribe(() => {
        // Simulate component reading state
        zenCountStore.value;
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  },

  // Creation test - create a new store
  createStore: () => zen(0),

  // Read test - read count 1000 times
  readBatch: () => {
    for (let i = 0; i < 1000; i++) {
      zenCountStore.value;
    }
  },

  // Write with no listeners
  writeNoListeners: () => { zenCountStore.value = zenCountStore.value + 1; },

  // Write with N subscribers
  writeWithSubscribers: (subscriberCount: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < subscriberCount; i++) {
      const unsub = zenCountStore.subscribe(() => {
        zenCountStore.value;
      });
      unsubscribers.push(unsub);
    }
    zenCountStore.value = zenCountStore.value + 1;
    unsubscribers.forEach(u => u());
  },

  // Computed cached read
  readComputedCached: () => zenDoubledStore.value,

  // Computed update (trigger recomputation)
  updateComputed: () => {
    zenCountStore.value = zenCountStore.value + 1;
    zenDoubledStore.value;
  },

  // Chained computed read
  readChainedComputed: () => zenLevel3Computed.value,

  // Batching 100 updates
  batch100Updates: () => {
    for (let i = 0; i < 100; i++) {
      zenCountStore.value = i;
    }
  },

  // Subscribe/Unsubscribe test
  subscribeUnsubscribe: () => {
    const unsub = zenCountStore.subscribe(() => {});
    unsub();
  }
};
