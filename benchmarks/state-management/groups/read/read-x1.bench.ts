/**
 * Read Tests - Scale x1
 * Tests basic state reading performance
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Read Operations - x1', () => {
  // Simple read test
  bench('Simple Read - Redux Toolkit', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Zustand', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Jotai', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - MobX', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Valtio', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Preact Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Solid Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('Simple Read - Zen', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    store.increment();
    return store.getCount();
  });

  // High frequency read test
  bench('High Frequency Read - Redux Toolkit', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Zustand', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Jotai', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - MobX', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Valtio', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Preact Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Solid Signals', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });

  bench('High Frequency Read - Zen', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });
});