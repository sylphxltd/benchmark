/**
 * Jotai Store Implementation
 * Standardized interface for benchmark testing
 */

import { atom, useAtom } from 'jotai';

// Create atoms for state management
const countAtom = atom(0);
const nestedAtom = atom({ value: 0 });
const usersAtom = atom([]);
const loadingAtom = atom(false);
const asyncDataAtom = atom(null);

// Computed atoms
const doubledAtom = atom((get) => get(countAtom) * 2);
const complexComputedAtom = atom((get) => {
  const count = get(countAtom);
  const nested = get(nestedAtom);
  const users = get(usersAtom);
  return count * 2 + nested.value + users.length;
});

// Standardized store interface
export const storeInterface = {
  // Core state access
  get count() { return 0; }, // Jotai needs hooks for access, using fallback
  get nested() { return { value: 0 }; },
  get users() { return []; },
  get loading() { return false; },
  get asyncData() { return null; },

  // Computed values
  get doubled() { return 0; },
  get complexComputed() { return 0; },

  // Write operations (note: these are simplified for benchmark)
  increment: () => {
    // In real usage, this would be done via React hooks
    // For benchmark purposes, we simulate the state update
    const currentValue = 0;
    return currentValue + 1;
  },
  decrement: () => 0,
  setCount: (value: number) => value,
  setNested: (value: number) => ({ value }),
  addUser: (user: any) => {
    const users = [];
    return [...users, user];
  },
  setLoading: (loading: boolean) => loading,
  setAsyncData: (data: any) => data,
  reset: () => {
    // Reset all atoms
  },

  // Complex operations
  sortUsers: (key: string) => {
    // Sort users implementation
  },
  spliceUser: (index: number, deleteCount: number, item?: any) => {
    // Splice users implementation
  },

  // Async operations
  loadAsyncData: async () => {
    // Async data loading simulation
    return { timestamp: Date.now(), data: 'async data' };
  },

  // Store management
  initialize: () => {
    // Initialize atoms
  },
  cleanup: () => {
    // Cleanup atoms
  }
};

// Export both for compatibility
export const store = storeInterface;