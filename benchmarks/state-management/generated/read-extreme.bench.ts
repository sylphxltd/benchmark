/**
 * read - Extreme Load
 * Generated comparison test for all libraries
 * Scale: Extreme read load (10000 ops)
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

describe('read - Extreme Load', () => {
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

  bench('jotai - read (Extreme read load (10000 ops))', () => {
    const store = libraries['jotai'].store;

    // Read operations test
    for (let i = 0; i < 10000; i++) {
      store.count || store.getCount();;
    }
  });

  bench('redux-toolkit - read (Extreme read load (10000 ops))', () => {
    const store = libraries['redux-toolkit'].store;

    // Read operations test
    for (let i = 0; i < 10000; i++) {
      store.count || store.getCount();;
    }
  });

  bench('zustand - read (Extreme read load (10000 ops))', () => {
    const store = libraries['zustand'].store;

    // Read operations test
    for (let i = 0; i < 10000; i++) {
      store.count || store.getCount();;
    }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});