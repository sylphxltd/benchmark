/**
 * async - Sequential Async
 * Generated comparison test for all libraries
 * Complexity: Sequential async operations
 */

import { bench, describe, afterAll } from 'vitest';
import * as jotai from '../libraries/jotai/store.ts';
import * as redux_toolkit from '../libraries/redux-toolkit/store.ts';
import * as zustand from '../libraries/zustand/store.ts';

// Initialize all libraries
const libraries = {
  'jotai': jotai,
  'redux-toolkit': redux_toolkit,
  'zustand': zustand,
};

describe('async - Sequential Async', () => {
  // Setup data for async
  const setup = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.initialize === 'function') {
        store.initialize();
      }
    });
  };

  // Teardown all libraries
  const teardown = () => {
    Object.values(libraries).forEach(({ store }) => {
      if (typeof store?.cleanup === 'function') {
        store.cleanup();
      }
    });
  };

  setup();

  bench('jotai - async (Sequential async operations)', () => {
    const store = libraries['jotai'].store;

    // async test logic
    
        // Simplified async operations test
        store.setLoading(true);
        store.setAsyncData({ id: 1, data: 'test' });
        store.setLoading(false);
        store.getLoading();
        store.getAsyncData();
  });

  bench('redux-toolkit - async (Sequential async operations)', () => {
    const store = libraries['redux-toolkit'].store;

    // async test logic
    
        // Simplified async operations test
        store.setLoading(true);
        store.setAsyncData({ id: 1, data: 'test' });
        store.setLoading(false);
        store.getLoading();
        store.getAsyncData();
  });

  bench('zustand - async (Sequential async operations)', () => {
    const store = libraries['zustand'].store;

    // async test logic
    
        // Simplified async operations test
        store.setLoading(true);
        store.setAsyncData({ id: 1, data: 'test' });
        store.setLoading(false);
        store.getLoading();
        store.getAsyncData();
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});