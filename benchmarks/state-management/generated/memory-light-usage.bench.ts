/**
 * memory - Light Memory Usage
 * Generated comparison test for all libraries
 * Complexity: Small object creation and cleanup
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

describe('memory - Light Memory Usage', () => {
  // Setup data for memory
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

  bench('jotai - memory (Small object creation and cleanup)', () => {
    const store = libraries['jotai'].store;

    // memory test logic
    
        // Memory test operations
        for (let i = 0; i < 100; i++) {
          store.addUser({
            id: i,
            data: new Array(10).fill(0)
          });
        }
    
        // Access all objects to prevent premature GC
        store.getUsers();
    
        // Create deep objects
        for (let i = 0; i < 10; i++) {
          store.createDeepObject();
        }
  });

  bench('redux-toolkit - memory (Small object creation and cleanup)', () => {
    const store = libraries['redux-toolkit'].store;

    // memory test logic
    
        // Memory test operations
        for (let i = 0; i < 100; i++) {
          store.addUser({
            id: i,
            data: new Array(10).fill(0)
          });
        }
    
        // Access all objects to prevent premature GC
        store.getUsers();
    
        // Create deep objects
        for (let i = 0; i < 10; i++) {
          store.createDeepObject();
        }
  });

  bench('zustand - memory (Small object creation and cleanup)', () => {
    const store = libraries['zustand'].store;

    // memory test logic
    
        // Memory test operations
        for (let i = 0; i < 100; i++) {
          store.addUser({
            id: i,
            data: new Array(10).fill(0)
          });
        }
    
        // Access all objects to prevent premature GC
        store.getUsers();
    
        // Create deep objects
        for (let i = 0; i < 10; i++) {
          store.createDeepObject();
        }
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});