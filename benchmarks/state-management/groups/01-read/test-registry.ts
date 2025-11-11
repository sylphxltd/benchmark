/**
 * Test registry for 01-read group
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
  SIMPLE_READ: {
    name: 'Simple Read',
    data: {
      iterations: 1,
    },
    code: `store.increment();
    return store.getCount();`
  },
  HIGH_FREQ_READ_X10: {
    name: 'High Frequency Read (x10)',
    data: {
      iterations: 10,
    },
    code: `for (let i = 0; i < 10; i++) {
      store.getCount();
    }`
  },
  HIGH_FREQ_READ_X100: {
    name: 'High Frequency Read (x100)',
    data: {
      iterations: 100,
    },
    code: `for (let i = 0; i < 100; i++) {
      store.getCount();
    }`
  },
  HIGH_FREQ_READ_X1000: {
    name: 'High Frequency Read (x1000)',
    data: {
      iterations: 1000,
    },
    code: `for (let i = 0; i < 1000; i++) {
      store.getCount();
    }`
  },
  HIGH_FREQ_READ_X10000: {
    name: 'High Frequency Read (x10000)',
    data: {
      iterations: 10000,
    },
    code: `for (let i = 0; i < 10000; i++) {
      store.getCount();
    }`
  },
} as const satisfies Record<string, TestDefinition>;

export type ReadTestKey = keyof typeof TESTS;
