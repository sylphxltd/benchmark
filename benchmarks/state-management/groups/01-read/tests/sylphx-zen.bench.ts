/**
 * 01-read - Zen
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { zenActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = zenActionsV2;

describe('01-read - Zen', () => {
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
