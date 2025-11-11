/**
 * 06-memory - Zen
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { zenActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = zenActionsV2;

describe('06-memory - Zen', () => {
  bench(TEST_NAMES.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
