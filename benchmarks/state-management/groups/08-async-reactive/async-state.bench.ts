/**
 * Reactive Async State Tests
 * Tests true reactive async capabilities - automatic recomputation when dependencies change
 *
 * Only Jotai supports reactive async - other libraries do not participate
 */

import { bench, describe } from 'vitest';
import { atom, createStore } from 'jotai';

// ============================================================================
// JOTAI - Only library with native reactive async support
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
// BENCHMARKS - Only Jotai participates
// ============================================================================

describe('Reactive Async Read', () => {
  bench('Reactive Async Read - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await jotaiStore.get(jotaiAsyncAtom);
  });
});

describe('Reactive Async Chained', () => {
  bench('Async Chain (2 levels) - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await jotaiStore.get(jotaiAsyncLevel2);
  });
});

describe('Reactive Async Complex', () => {
  bench('Complex Async Object - Jotai', async () => {
    jotaiStore.set(jotaiDataAtom, { id: Math.floor(Math.random() * 1000), value: Math.random() * 1000 });
    await jotaiStore.get(jotaiComplexAsync);
  });
});

describe('Reactive Async Concurrent', () => {
  bench('Concurrent Async (3 atoms) - Jotai', async () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    await Promise.all([
      jotaiStore.get(jotaiAsync1),
      jotaiStore.get(jotaiAsync2),
      jotaiStore.get(jotaiAsync3)
    ]);
  });
});
