/**
 * read - Moderate Load
 * Generated comparison test for all libraries
 * Scale: Moderate read load (100 operations)
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

describe('read - Moderate Load', () => {
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

  bench('jotai - read (Moderate read load (100 operations))', () => {
    const store = libraries['jotai'].store;

    // Read operations test
    for (let i = 0; i < 100; i++) {
      store.count || store.getCount();;
    }
  });

  bench('redux-toolkit - read (Moderate read load (100 operations))', () => {
    const store = libraries['redux-toolkit'].store;

    // Read operations test
    for (let i = 0; i < 100; i++) {
      store.count || store.getCount();;
    }
  });

  bench('zustand - read (Moderate read load (100 operations))', () => {
    const store = libraries['zustand'].store;

    // Read operations test
    for (let i = 0; i < 100; i++) {
      store.count || store.getCount();;
    }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});