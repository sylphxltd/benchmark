/**
 * 11-batching-native - Solid Signals
 * Manually created per-library test file
 */

import { bench, describe } from 'vitest';
import { createSignal, batch } from 'solid-js';

// ============================================================================
// SOLID SIGNALS - batch()
// ============================================================================

const [solidCount, setSolidCount] = createSignal(0);
const [solidName, setSolidName] = createSignal('');
const [solidActive, setSolidActive] = createSignal(false);

// ============================================================================
// BENCHMARKS
// ============================================================================

describe('11-batching-native - Solid Signals', () => {
  bench('Batched Updates', () => {
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });
  });

  bench('Unbatched Updates', () => {
    setSolidCount(Math.random());
    setSolidName('test');
    setSolidActive(true);
  });

  bench('Large Batch', () => {
    batch(() => {
      for (let i = 0; i < 100; i++) {
        setSolidCount(i);
      }
    });
  });

  bench('Batched with Observers', () => {
    let solidSubscriptionCount = 0;
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });
  });
});
