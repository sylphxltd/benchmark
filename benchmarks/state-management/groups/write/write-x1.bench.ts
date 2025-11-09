/**
 * Write Tests - Scale x1
 * Tests basic state writing performance
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Write Operations - x1', () => {
  // Simple increment test
  bench('Simple Increment - Redux Toolkit', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    store.increment();
  });

  bench('Simple Increment - Zustand', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    store.increment();
  });

  bench('Simple Increment - Jotai', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    store.increment();
  });

  bench('Simple Increment - MobX', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    store.increment();
  });

  bench('Simple Increment - Valtio', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    store.increment();
  });

  bench('Simple Increment - Preact Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    store.increment();
  });

  bench('Simple Increment - Solid Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    store.increment();
  });

  bench('Simple Increment - Zen', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    store.increment();
  });

  // Burst updates test
  bench('Burst Updates - Redux Toolkit', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Zustand', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Jotai', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - MobX', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Valtio', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Preact Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Solid Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });

  bench('Burst Updates - Zen', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });
});