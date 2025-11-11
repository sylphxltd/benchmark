/**
 * Test registry for 02-write group
 * Centralized test definitions ensure consistency across all libraries
 */

export interface TestDefinition {
  name: string;
  data: {
    iterations: number;
    warmup?: number;
    timeout?: number;
  };
  // Code as string template for better formatting control
  code: string;
}

export const TESTS = {
  SINGLE_UPDATE: {
    name: 'Single Update',
    data: {
      iterations: 1,
    },
    code: `store.increment();`
  },
  BATCH_UPDATE_X10: {
    name: 'Batch Update (x10)',
    data: {
      iterations: 10,
    },
    code: `for (let i = 0; i < 10; i++) {
      store.increment();
    }`
  },
  BATCH_UPDATE_X100: {
    name: 'Batch Update (x100)',
    data: {
      iterations: 100,
    },
    code: `for (let i = 0; i < 100; i++) {
      store.increment();
    }`
  },
  BATCH_UPDATE_X1000: {
    name: 'Batch Update (x1000)',
    data: {
      iterations: 1000,
    },
    code: `for (let i = 0; i < 1000; i++) {
      store.increment();
    }`
  },
  BATCH_UPDATE_X10000: {
    name: 'Batch Update (x10000)',
    data: {
      iterations: 10000,
    },
    code: `for (let i = 0; i < 10000; i++) {
      store.increment();
    }`
  },
} as const satisfies Record<string, TestDefinition>;

export type WriteTestKey = keyof typeof TESTS;
