/**
 * cache - Light Memoization
 * Generated comparison test for all libraries
 * Complexity: Light computation with frequent cache hits
 */

import { bench, describe, afterAll } from 'vitest';
import * as jotai from '../libraries/jotai/store.ts';
import * as zustand from '../libraries/zustand/store.ts';

// Initialize all libraries
const libraries = {
  'jotai': jotai,
  'zustand': zustand,
};

describe('cache - Light Memoization', () => {
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

  bench('jotai - cache (Light computation with frequent cache hits)', () => {
    const store = libraries['jotai'].store;

    // cache test logic
    
        // Cache performance test
        for (let i = 0; i < 1000; i++) {
          store.getDoubled();
          store.getNested();
          store.getUsers();
        }
  });

  bench('zustand - cache (Light computation with frequent cache hits)', () => {
    const store = libraries['zustand'].store;

    // cache test logic
    
        // Cache performance test
        for (let i = 0; i < 1000; i++) {
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