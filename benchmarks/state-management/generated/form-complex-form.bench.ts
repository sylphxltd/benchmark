/**
 * form - Complex Form
 * Generated comparison test for all libraries
 * Complexity: Complex form with arrays and deep nesting
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

describe('form - Complex Form', () => {
  // Setup data for form
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

  bench('jotai - form (Complex form with arrays and deep nesting)', () => {
    const store = libraries['jotai'].store;

    // form test logic
    
        // Form operations
        store.setNested(Math.random() * 100);
        store.addUser({
          id: Math.floor(Math.random() * 1000),
          name: 'Test User',
          email: 'test@example.com'
        });
    
        // Read operations
        store.getNested();
        store.getUsers();
  });

  bench('redux-toolkit - form (Complex form with arrays and deep nesting)', () => {
    const store = libraries['redux-toolkit'].store;

    // form test logic
    
        // Form operations
        store.setNested(Math.random() * 100);
        store.addUser({
          id: Math.floor(Math.random() * 1000),
          name: 'Test User',
          email: 'test@example.com'
        });
    
        // Read operations
        store.getNested();
        store.getUsers();
  });

  bench('zustand - form (Complex form with arrays and deep nesting)', () => {
    const store = libraries['zustand'].store;

    // form test logic
    
        // Form operations
        store.setNested(Math.random() * 100);
        store.addUser({
          id: Math.floor(Math.random() * 1000),
          name: 'Test User',
          email: 'test@example.com'
        });
    
        // Read operations
        store.getNested();
        store.getUsers();
  });

  // Global teardown
  afterAll(() => {
    teardown();
  });
});