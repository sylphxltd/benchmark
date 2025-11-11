/**
 * 06-memory - MobX
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('06-memory - MobX', () => {
  bench(TEST_NAMES.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
