/**
 * 01-read - Valtio
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { valtioActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = valtioActionsV2;

describe('01-read - Valtio', () => {
  bench(TESTS.SIMPLE_READ.name, () => {
    store.increment();
        return store.getCount();
  });

  bench(TESTS.HIGH_FREQ_READ_X10.name, () => {
    for (let i = 0; i < 10; i++) {
          store.getCount();
        }
  });

  bench(TESTS.HIGH_FREQ_READ_X100.name, () => {
    for (let i = 0; i < 100; i++) {
          store.getCount();
        }
  });

  bench(TESTS.HIGH_FREQ_READ_X1000.name, () => {
    for (let i = 0; i < 1000; i++) {
          store.getCount();
        }
  });

  bench(TESTS.HIGH_FREQ_READ_X10000.name, () => {
    for (let i = 0; i < 10000; i++) {
          store.getCount();
        }
  });
});
