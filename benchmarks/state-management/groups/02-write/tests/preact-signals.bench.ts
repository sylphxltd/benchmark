/**
 * 02-write - Preact Signals
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { preactActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = preactActionsV2;

describe('02-write - Preact Signals', () => {
  bench(TEST_NAMES.SINGLE_UPDATE, () => {
    store.increment();
  });

  bench(`${TEST_NAMES.BATCH_UPDATE} (x10)`, () => {
    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.increment();
    }
  });

  bench(`${TEST_NAMES.BATCH_UPDATE} (x100)`, () => {
    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.increment();
    }
  });

  bench(`${TEST_NAMES.BATCH_UPDATE} (x1000)`, () => {
    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.increment();
    }
  });

  bench(`${TEST_NAMES.BATCH_UPDATE} (x10000)`, () => {
    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.increment();
    }
  });
});
