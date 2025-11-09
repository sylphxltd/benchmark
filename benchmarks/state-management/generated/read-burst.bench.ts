/**
 * read - Burst Read
 * Generated comparison test for all libraries
 * Scale: Quick burst of 10 reads
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

describe('read - Burst Read', () => {
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

  bench('jotai - read (Quick burst of 10 reads)', () => {
    const store = libraries['jotai'].store;

    // Read operations test
    for (let i = 0; i < 10; i++) {
      store.count || store.getCount();;
    }
  });

  bench('redux-toolkit - read (Quick burst of 10 reads)', () => {
    const store = libraries['redux-toolkit'].store;

    // Read operations test
    for (let i = 0; i < 10; i++) {
      store.count || store.getCount();;
    }
  });

  bench('zustand - read (Quick burst of 10 reads)', () => {
    const store = libraries['zustand'].store;

    // Read operations test
    for (let i = 0; i < 10; i++) {
      store.count || store.getCount();;
    }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});