/**
 * 08-async-reactive - Zen
 * Tests TRUE reactive async computed (computeAsync)
 *
 * When a dependency changes, async computed automatically re-execute.
 * This is different from manual async functions.
 */

import { bench, describe } from 'vitest';
import {
  zenCountStore,
  zenAsyncComputed,
  zenAsyncChainedComputed,
  zenAsyncComplexComputed
} from '../../../src/stores/zen-store';

describe('08-async-reactive - Zen', () => {
  bench('Async Computed Read', async () => {
    // Read async computed (auto-resolves)
    const result = await zenAsyncComputed.value;
    return result;
  });

  bench('Async Computed with Dependency Update', async () => {
    // Update dependency, then read async computed
    // The async computed will re-execute automatically
    zenCountStore.value = zenCountStore.value + 1;
    const result = await zenAsyncComputed.value;
    return result;
  });

  bench('Chained Async Computed', async () => {
    // Async computed that depends on another async computed
    zenCountStore.value = zenCountStore.value + 1;
    const result = await zenAsyncChainedComputed.value;
    return result;
  });

  bench('Complex Async Dependencies', async () => {
    // Async computed with multiple dependencies
    zenCountStore.value = zenCountStore.value + 1;
    const result = await zenAsyncComplexComputed.value;
    return result;
  });

  bench('Concurrent Async Reads', async () => {
    // Multiple async computed read concurrently
    const results = await Promise.all([
      zenAsyncComputed.value,
      zenAsyncChainedComputed.value,
      zenAsyncComplexComputed.value
    ]);
    return results;
  });
});
