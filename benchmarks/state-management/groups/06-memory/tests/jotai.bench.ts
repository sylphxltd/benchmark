/**
 * 06-memory - Jotai
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { jotaiActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = jotaiActionsV2;

describe('06-memory - Jotai', () => {
  bench(TEST_NAMES.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
