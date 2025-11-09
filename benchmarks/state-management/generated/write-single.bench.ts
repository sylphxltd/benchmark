/**
 * write - Single Write
 * Generated comparison test for all libraries
 * Scale: Single state mutation operation
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

describe('write - Single Write', () => {
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

  bench('jotai - write (Single state mutation operation)', () => {
    const store = libraries['jotai'].store;

    // Write operations test
    for (let i = 0; i < 1; i++) {
      store.increment();;
    }
  });

  bench('redux-toolkit - write (Single state mutation operation)', () => {
    const store = libraries['redux-toolkit'].store;

    // Write operations test
    for (let i = 0; i < 1; i++) {
      store.increment();;
    }
  });

  bench('zustand - write (Single state mutation operation)', () => {
    const store = libraries['zustand'].store;

    // Write operations test
    for (let i = 0; i < 1; i++) {
      store.increment();;
    }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});