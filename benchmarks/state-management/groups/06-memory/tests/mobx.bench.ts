/**
 * 06-memory - MobX
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('06-memory - MobX', () => {
  bench(TESTS.LARGE_STATE_READ.name, () => {
    return store.getCount();
  });

  bench(TESTS.LARGE_STATE_UPDATE.name, () => {
    store.increment();
  });
});
