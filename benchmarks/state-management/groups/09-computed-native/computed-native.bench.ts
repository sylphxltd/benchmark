/**
 * Native Computed Values - Feature Test
 *
 * Tests libraries with native computed/memo support.
 * Only libraries with automatic dependency tracking participate.
 *
 * Participating libraries:
 * - Jotai (atom with getter)
 * - MobX (computed)
 * - Solid Signals (createMemo)
 * - Preact Signals (computed)
 * - Zen (computed)
 */

import { bench, describe } from 'vitest';
import { atom, createStore } from 'jotai';
import { makeAutoObservable, computed } from 'mobx';
import { createSignal, createMemo } from 'solid-js';
import { signal, computed as preactComputed } from '@preact/signals-core';
import { zen, get as zenGet, set as zenSet, computed as zenComputed } from '@sylphx/zen';

// ============================================================================
// JOTAI - Native Computed via Atom Getter
// ============================================================================

const jotaiStore = createStore();
const jotaiBaseAtom = atom(0);
const jotaiComputedAtom = atom((get) => get(jotaiBaseAtom) * 2);
const jotaiChainedAtom = atom((get) => get(jotaiComputedAtom) + 10);

// ============================================================================
// MOBX - Native Computed
// ============================================================================

class MobXStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get doubled() {
    return this.value * 2;
  }

  get chained() {
    return this.doubled + 10;
  }

  setValue(v: number) {
    this.value = v;
  }
}

const mobxStore = new MobXStore();

// ============================================================================
// SOLID SIGNALS - Native Computed via createMemo
// ============================================================================

const [solidValue, setSolidValue] = createSignal(0);
const solidDoubled = createMemo(() => solidValue() * 2);
const solidChained = createMemo(() => solidDoubled() + 10);

// ============================================================================
// PREACT SIGNALS - Native Computed
// ============================================================================

const preactValue = signal(0);
const preactDoubled = preactComputed(() => preactValue.value * 2);
const preactChained = preactComputed(() => preactDoubled.value + 10);

// ============================================================================
// ZEN - Native Computed
// ============================================================================

const zenValue = zen(0);
const zenDoubled = zenComputed([zenValue], (val) => val * 2);
const zenChained = zenComputed([zenDoubled], (doubled) => doubled + 10);

// ============================================================================
// BENCHMARKS
// ============================================================================

describe('Simple Computed', () => {
  bench('Native Computed - Jotai', () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    jotaiStore.get(jotaiComputedAtom);
  });

  bench('Native Computed - MobX', () => {
    mobxStore.setValue(Math.random());
    mobxStore.doubled;
  });

  bench('Native Computed - Solid Signals', () => {
    setSolidValue(Math.random());
    solidDoubled();
  });

  bench('Native Computed - Preact Signals', () => {
    preactValue.value = Math.random();
    preactDoubled.value;
  });

  bench('Native Computed - Zen', () => {
    zenSet(zenValue, Math.random());
    zenGet(zenDoubled);
  });
});

describe('Chained Computed', () => {
  bench('Chained Computed - Jotai', () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    jotaiStore.get(jotaiChainedAtom);
  });

  bench('Chained Computed - MobX', () => {
    mobxStore.setValue(Math.random());
    mobxStore.chained;
  });

  bench('Chained Computed - Solid Signals', () => {
    setSolidValue(Math.random());
    solidChained();
  });

  bench('Chained Computed - Preact Signals', () => {
    preactValue.value = Math.random();
    preactChained.value;
  });

  bench('Chained Computed - Zen', () => {
    zenSet(zenValue, Math.random());
    zenGet(zenChained);
  });
});

describe('Computed Update Performance', () => {
  bench('Computed Updates - Jotai', () => {
    for (let i = 0; i < 100; i++) {
      jotaiStore.set(jotaiBaseAtom, i);
      jotaiStore.get(jotaiComputedAtom);
    }
  });

  bench('Computed Updates - MobX', () => {
    for (let i = 0; i < 100; i++) {
      mobxStore.setValue(i);
      mobxStore.doubled;
    }
  });

  bench('Computed Updates - Solid Signals', () => {
    for (let i = 0; i < 100; i++) {
      setSolidValue(i);
      solidDoubled();
    }
  });

  bench('Computed Updates - Preact Signals', () => {
    for (let i = 0; i < 100; i++) {
      preactValue.value = i;
      preactDoubled.value;
    }
  });

  bench('Computed Updates - Zen', () => {
    for (let i = 0; i < 100; i++) {
      zenSet(zenValue, i);
      zenGet(zenDoubled);
    }
  });
});
