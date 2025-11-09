/**
 * Async State Tests
 * Tests asynchronous state operations performance
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Async State Loading', () => {
  bench('Async Loading - Redux Toolkit', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Zustand', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Jotai', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - MobX', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Valtio', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Preact Signals', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Solid Signals', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    await actions.loadAsyncData();
  });

  bench('Async Loading - Zen', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    await actions.loadAsyncData();
  });
});

describe('Concurrent Async Operations', () => {
  bench('Concurrent Async - Redux Toolkit', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Zustand', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Jotai', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - MobX', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Valtio', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Preact Signals', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Solid Signals', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });

  bench('Concurrent Async - Zen', async () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    await Promise.all([
      actions.loadAsyncData(),
      actions.loadAsyncData(),
      actions.loadAsyncData()
    ]);
  });
});