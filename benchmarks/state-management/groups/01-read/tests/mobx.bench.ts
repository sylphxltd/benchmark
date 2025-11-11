/**
 * 01-read - MobX
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('01-read - MobX', () => {
  bench(TEST_NAMES.SIMPLE_READ, () => {
    store.increment();
    return store.getCount();
  });

  bench(`${TEST_NAMES.HIGH_FREQ_READ} (x10)`, () => {
    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.getCount();
    }
  });

  bench(`${TEST_NAMES.HIGH_FREQ_READ} (x100)`, () => {
    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.getCount();
    }
  });

  bench(`${TEST_NAMES.HIGH_FREQ_READ} (x1000)`, () => {
    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.getCount();
    }
  });

  bench(`${TEST_NAMES.HIGH_FREQ_READ} (x10000)`, () => {
    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.getCount();
    }
  });
});
