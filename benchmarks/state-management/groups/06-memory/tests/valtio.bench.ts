/**
 * 06-memory - Valtio
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { valtioActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = valtioActionsV2;

describe('06-memory - Valtio', () => {
  bench(TESTS.LARGE_STATE_READ.name, () => {
    return store.getCount();
  });

  bench(TESTS.LARGE_STATE_UPDATE.name, () => {
    store.increment();
  });
});
