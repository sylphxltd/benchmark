/**
 * cache - Heavy Computation
 * Generated comparison test for all libraries
 * Complexity: Heavy computation that benefits from caching
 */

import { bench, describe, afterAll } from 'vitest';
import * as jotai from '../libraries/jotai/store.ts';
import * as zustand from '../libraries/zustand/store.ts';

// Initialize all libraries
const libraries = {
  'jotai': jotai,
  'zustand': zustand,
};

describe('cache - Heavy Computation', () => {
  // Setup data for cache
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

  bench('jotai - cache (Heavy computation that benefits from caching)', () => {
    const store = libraries['jotai'].store;

    // cache test logic
    
        // Cache performance test
        for (let i = 0; i < 500; i++) {
          store.getDoubled();
          store.getNested();
          store.getUsers();
        }
  });

  bench('zustand - cache (Heavy computation that benefits from caching)', () => {
    const store = libraries['zustand'].store;

    // cache test logic
    
        // Cache performance test
        for (let i = 0; i < 500; i++) {
          store.getDoubled();
          store.getNested();
          store.getUsers();
        }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});