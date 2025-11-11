/**
 * 06-memory - Zen
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { zenActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = zenActionsV2;

describe('06-memory - Zen', () => {
  bench(TESTS.LARGE_STATE_READ.name, () => {
    return store.getCount();
  });

  bench(TESTS.LARGE_STATE_UPDATE.name, () => {
    store.increment();
  });
});
