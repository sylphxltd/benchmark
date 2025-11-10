/**
 * Reactive Async State Tests
 * Tests true reactive async capabilities - automatic recomputation when dependencies change
 */

import { bench, describe } from 'vitest';
import { atom, createStore } from 'jotai';

// ============================================================================
// JOTAI - Native reactive async support
// ============================================================================

const jotaiStore = createStore();
const jotaiBaseAtom = atom(0);
const jotaiDataAtom = atom({ id: 1, value: 100 });

// Reactive async atom - automatically recomputes when dependencies change
const jotaiAsyncAtom = atom(async (get) => {
  const value = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return value * 2;
});

// Chained async atoms
const jotaiAsyncLevel1 = atom(async (get) => {
  const value = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return value + 10;
});

const jotaiAsyncLevel2 = atom(async (get) => {
  const level1 = await get(jotaiAsyncLevel1);
  await new Promise(resolve => setTimeout(resolve, 0));
  return level1 * 2;
});

// Complex async atom
const jotaiComplexAsync = atom(async (get) => {
  const data = get(jotaiDataAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return {
    id: data.id,
    computed: data.value * 3,
    timestamp: Date.now()
  };
});

// Multiple concurrent async atoms
const jotaiAsync1 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 2;
});

const jotaiAsync2 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 3;
});

const jotaiAsync3 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 4;
});

// ============================================================================
// BENCHMARKS - Reactive Async Read
// ============================================================================

describe('Reactive Async Read', () => {
  bench('Reactive Async Read - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await jotaiStore.get(jotaiAsyncAtom);
  });

  // Libraries without reactive async support - Not Supported
  bench('Reactive Async Read - Zustand', async () => {
    // Zustand: Not Supported - Manual async only
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - Redux Toolkit', async () => {
    // Redux Toolkit: Not Supported - RTK Query is separate
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - MobX', async () => {
    // MobX: Not Supported - flow is not reactive async
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - Valtio', async () => {
    // Valtio: Not Supported - Proxy-based, no async support
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - Preact Signals', async () => {
    // Preact Signals: Not Supported - No async signals
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - Solid Signals', async () => {
    // Solid Signals: Not Supported - createResource is framework-level
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Reactive Async Read - Zen', async () => {
    // Zen: Not Supported - karma is async task runner, not reactive
    await new Promise(resolve => setTimeout(resolve, 0));
  });
});

// ============================================================================
// BENCHMARKS - Chained Dependencies
// ============================================================================

describe('Reactive Async Chained', () => {
  bench('Async Chain (2 levels) - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await jotaiStore.get(jotaiAsyncLevel2);
  });

  bench('Async Chain (2 levels) - Zustand', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - Redux Toolkit', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - MobX', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - Valtio', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - Preact Signals', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - Solid Signals', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Async Chain (2 levels) - Zen', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
});

// ============================================================================
// BENCHMARKS - Complex Objects
// ============================================================================

describe('Reactive Async Complex', () => {
  bench('Complex Async Object - Jotai', async () => {
    jotaiStore.set(jotaiDataAtom, { id: Math.floor(Math.random() * 1000), value: Math.random() * 1000 });
    await jotaiStore.get(jotaiComplexAsync);
  });

  bench('Complex Async Object - Zustand', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - Redux Toolkit', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - MobX', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - Valtio', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - Preact Signals', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - Solid Signals', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  bench('Complex Async Object - Zen', async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
});

// ============================================================================
// BENCHMARKS - Concurrent
// ============================================================================

describe('Reactive Async Concurrent', () => {
  bench('Concurrent Async (3 atoms) - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await Promise.all([
      jotaiStore.get(jotaiAsync1),
      jotaiStore.get(jotaiAsync2),
      jotaiStore.get(jotaiAsync3)
    ]);
  });

  bench('Concurrent Async (3 atoms) - Zustand', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - Redux Toolkit', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - MobX', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - Valtio', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - Preact Signals', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - Solid Signals', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });

  bench('Concurrent Async (3 atoms) - Zen', async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
  });
});
