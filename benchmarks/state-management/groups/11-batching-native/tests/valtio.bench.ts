/**
 * 11-batching-native - Valtio
 * Manually created per-library test file
 */

import { bench, describe } from 'vitest';
import { proxy } from 'valtio';

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

describe('11-batching-native - Valtio', () => {
  bench('Batched Updates', () => {
    // Valtio automatically batches synchronous updates
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });

  bench('Unbatched Updates', () => {
    // Same as batched for Valtio - automatic batching
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });

  bench('Large Batch', () => {
    for (let i = 0; i < 100; i++) {
      valtioBatchStore.count = i;
    }
  });

  bench('Batched with Observers', () => {
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });
});
