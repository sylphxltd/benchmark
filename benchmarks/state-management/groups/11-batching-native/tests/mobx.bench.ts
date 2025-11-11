/**
 * 11-batching-native - MobX
 * Manually created per-library test file
 */

import { bench, describe } from 'vitest';
import { makeAutoObservable, runInAction } from 'mobx';

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
// BENCHMARKS
// ============================================================================

describe('11-batching-native - MobX', () => {
  bench('Batched Updates', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });

  bench('Unbatched Updates', () => {
    mobxBatchStore.unbatchedUpdate(Math.random(), 'test', true);
  });

  bench('Large Batch', () => {
    runInAction(() => {
      for (let i = 0; i < 100; i++) {
        mobxBatchStore.count = i;
      }
    });
  });

  bench('Batched with Observers', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });
});
