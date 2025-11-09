/**
 * write - Batch Operations
 * Generated comparison test for all libraries
 * Scale: Batch write operations (100 ops)
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

describe('write - Batch Operations', () => {
  // Setup all libraries
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

  bench('jotai - write (Batch write operations (100 ops))', () => {
    const store = libraries['jotai'].store;

    // Write operations test
    for (let i = 0; i < 100; i++) {
      store.increment();;
    }
  });

  bench('redux-toolkit - write (Batch write operations (100 ops))', () => {
    const store = libraries['redux-toolkit'].store;

    // Write operations test
    for (let i = 0; i < 100; i++) {
      store.increment();;
    }
  });

  bench('zustand - write (Batch write operations (100 ops))', () => {
    const store = libraries['zustand'].store;

    // Write operations test
    for (let i = 0; i < 100; i++) {
      store.increment();;
    }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});