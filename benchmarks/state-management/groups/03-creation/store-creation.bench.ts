/**
 * Store Creation Tests
 * Tests the performance of creating new stores/instances
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Store Creation', () => {
  bench('Store Creation - Redux Toolkit', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Zustand', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Jotai', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.createStore();
  });

  bench('Store Creation - MobX', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Valtio', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Preact Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Solid Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    actions.createStore();
  });

  bench('Store Creation - Zen', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    actions.createStore();
  });
});