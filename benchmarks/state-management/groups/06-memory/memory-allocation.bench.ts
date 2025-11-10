/**
 * Memory Allocation Tests
 * Tests memory efficiency of different state management approaches
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Memory Allocation', () => {
  bench('Large State Allocation - Redux Toolkit', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Zustand', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Jotai', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - MobX', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Valtio', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Preact Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Solid Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    actions.allocateLargeState();
  });

  bench('Large State Allocation - Zen', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    actions.allocateLargeState();
  });
});