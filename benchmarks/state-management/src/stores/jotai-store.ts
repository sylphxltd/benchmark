import { atom, createStore } from 'jotai';

export const jotaiStore = createStore();
export const jotaiCountAtom = atom(0);
export const jotaiDoubledAtom = atom(get => get(jotaiCountAtom) * 2);

// Chained computed (3 levels)
export const jotaiLevel1Computed = atom(get => get(jotaiCountAtom) * 2);
export const jotaiLevel2Computed = atom(get => get(jotaiLevel1Computed) + 10);
export const jotaiLevel3Computed = atom(get => get(jotaiLevel2Computed) * 3);

export const jotaiNestedAtom = atom({ value: 0 });
export const jotaiUsersAtom = atom([]);
export const jotaiLoadingAtom = atom(false);
export const jotaiAsyncDataAtom = atom(null);

// Native async atom - reactive async support
export const jotaiAsyncAtom = atom(async (get) => {
  const count = get(jotaiCountAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return { count, timestamp: Date.now() };
});
// Deep nesting for 5-level test
export const jotaiDeepNestedAtom = atom({
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
export const jotaiItemsAtom = atom(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i })));

export const jotaiActions = {
  increment: () => jotaiStore.set(jotaiCountAtom, c => c + 1),
  setNested: (value: number) => jotaiStore.set(jotaiNestedAtom, { value }),
  addUser: (user: any) => jotaiStore.set(jotaiUsersAtom, users => [...users, user]),
  getDoubled: () => jotaiStore.get(jotaiDoubledAtom),
  getNested: () => jotaiStore.get(jotaiNestedAtom),
  getUsers: () => jotaiStore.get(jotaiUsersAtom),
  // Async actions
  setLoading: (loading: boolean) => jotaiStore.set(jotaiLoadingAtom, loading),
  setAsyncData: (data: any) => jotaiStore.set(jotaiAsyncDataAtom, data),
  getLoading: () => jotaiStore.get(jotaiLoadingAtom),
  getAsyncData: () => jotaiStore.get(jotaiAsyncDataAtom),
  fetchData: async (data: any) => {
    jotaiStore.set(jotaiLoadingAtom, true);
    await new Promise(resolve => setTimeout(resolve, 0));
    jotaiStore.set(jotaiAsyncDataAtom, data);
    jotaiStore.set(jotaiLoadingAtom, false);
  },
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => {
    jotaiStore.set(jotaiCountAtom, count);
    jotaiStore.set(jotaiNestedAtom, { value: nestedValue });
    jotaiStore.set(jotaiLoadingAtom, loading);
  },
  filterUsers: (id: number) =>
    jotaiStore.set(jotaiUsersAtom, users => users.filter((u: any) => u.id !== id)),
  removeUser: (id: number) => {
    const users = jotaiStore.get(jotaiUsersAtom);
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      jotaiStore.set(jotaiUsersAtom, newUsers);
    }
  },
  updateUser: (id: number, data: any) =>
    jotaiStore.set(jotaiUsersAtom, users =>
      users.map((u: any) => u.id === id ? { ...u, ...data } : u)
    ),
  setDeepNested: (value: number) =>
    jotaiStore.set(jotaiDeepNestedAtom, {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    }),
  updateLargeState: (id: number, value: number) =>
    jotaiStore.set(jotaiItemsAtom, items =>
      items.map((i: any) => i.id === id ? { ...i, value } : i)
    ),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = jotaiStore.sub(jotaiCountAtom, () => {
        // Simulate component reading state
        jotaiStore.get(jotaiCountAtom);
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  },
  // Reactive async atom access
  getAsyncAtom: async () => jotaiStore.get(jotaiAsyncAtom),

  // New comprehensive benchmark tests

  // Creation test - create a new atom and store
  createStore: () => {
    const newStore = createStore();
    const newAtom = atom(0);
    return { store: newStore, atom: newAtom };
  },

  // Read test - read count 1000 times
  readBatch: () => {
    for (let i = 0; i < 1000; i++) {
      jotaiStore.get(jotaiCountAtom);
    }
  },

  // Write with no listeners
  writeNoListeners: () => jotaiStore.set(jotaiCountAtom, c => c + 1),

  // Write with N subscribers
  writeWithSubscribers: (subscriberCount: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < subscriberCount; i++) {
      const unsub = jotaiStore.sub(jotaiCountAtom, () => {
        jotaiStore.get(jotaiCountAtom);
      });
      unsubscribers.push(unsub);
    }
    jotaiStore.set(jotaiCountAtom, c => c + 1);
    unsubscribers.forEach(u => u());
  },

  // Computed cached read
  readComputedCached: () => jotaiStore.get(jotaiDoubledAtom),

  // Computed update (trigger recomputation)
  updateComputed: () => {
    jotaiStore.set(jotaiCountAtom, c => c + 1);
    jotaiStore.get(jotaiDoubledAtom);
  },

  // Chained computed read
  readChainedComputed: () => jotaiStore.get(jotaiLevel3Computed),

  // Batching 100 updates
  batch100Updates: () => {
    for (let i = 0; i < 100; i++) {
      jotaiStore.set(jotaiCountAtom, i);
    }
  },

  // Subscribe/Unsubscribe test
  subscribeUnsubscribe: () => {
    const unsub = jotaiStore.sub(jotaiCountAtom, () => {});
    unsub();
  }
};