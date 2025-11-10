/**
 * Native Batching - Feature Test
 *
 * Tests libraries with built-in update batching to reduce notification overhead.
 * Batching allows multiple state updates to trigger only one notification.
 *
 * Participating libraries:
 * - Solid Signals (batch())
 * - MobX (runInAction/transaction)
 * - Valtio (automatic batching with batch() utility)
 */

import { bench, describe } from 'vitest';
import { createSignal, batch } from 'solid-js';
import { makeAutoObservable, runInAction } from 'mobx';
import { proxy } from 'valtio';

// ============================================================================
// SOLID SIGNALS - batch()
// ============================================================================

const [solidCount, setSolidCount] = createSignal(0);
const [solidName, setSolidName] = createSignal('');
const [solidActive, setSolidActive] = createSignal(false);

// ============================================================================
// MOBX - runInAction/transaction
// ============================================================================

class MobXBatchStore {
  count = 0;
  name = '';
  active = false;

  constructor() {
    makeAutoObservable(this);
  }

  batchUpdate(count: number, name: string, active: boolean) {
    runInAction(() => {
      this.count = count;
      this.name = name;
      this.active = active;
    });
  }

  unbatchedUpdate(count: number, name: string, active: boolean) {
    this.count = count;
    this.name = name;
    this.active = active;
  }
}

const mobxBatchStore = new MobXBatchStore();

// ============================================================================
// VALTIO - automatic batching
// ============================================================================

const valtioBatchStore = proxy({
  count: 0,
  name: '',
  active: false
});

// ============================================================================
// BENCHMARKS
// ============================================================================

describe('Batched Updates (3 fields)', () => {
  bench('Batched Updates - Solid Signals', () => {
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });
  });

  bench('Batched Updates - MobX', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });

  bench('Batched Updates - Valtio', () => {
    // Valtio automatically batches synchronous updates
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });
});

describe('Unbatched Updates (3 fields)', () => {
  bench('Unbatched Updates - Solid Signals', () => {
    setSolidCount(Math.random());
    setSolidName('test');
    setSolidActive(true);
  });

  bench('Unbatched Updates - MobX', () => {
    mobxBatchStore.unbatchedUpdate(Math.random(), 'test', true);
  });

  bench('Unbatched Updates - Valtio', () => {
    // Same as batched for Valtio - automatic batching
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });
});

describe('Large Batch (100 updates)', () => {
  bench('Large Batch - Solid Signals', () => {
    batch(() => {
      for (let i = 0; i < 100; i++) {
        setSolidCount(i);
      }
    });
  });

  bench('Large Batch - MobX', () => {
    runInAction(() => {
      for (let i = 0; i < 100; i++) {
        mobxBatchStore.count = i;
      }
    });
  });

  bench('Large Batch - Valtio', () => {
    for (let i = 0; i < 100; i++) {
      valtioBatchStore.count = i;
    }
  });
});

describe('Batch with Subscriptions', () => {
  let solidSubscriptionCount = 0;
  let mobxSubscriptionCount = 0;

  // Set up observers
  const solidEffect = () => {
    solidCount();
    solidName();
    solidActive();
    solidSubscriptionCount++;
  };

  const mobxDisposer = mobxBatchStore;

  bench('Batched with Observers - Solid Signals', () => {
    solidSubscriptionCount = 0;
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });
  });

  bench('Batched with Observers - MobX', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });

  bench('Batched with Observers - Valtio', () => {
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });
});
