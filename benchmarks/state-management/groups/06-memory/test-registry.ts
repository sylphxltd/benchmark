/**
 * Test registry for 06-memory group
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
  LARGE_STATE_READ: {
    name: 'Large State Read',
    data: {
      iterations: 1,
    },
    code: `return store.getCount();`
  },
  LARGE_STATE_UPDATE: {
    name: 'Large State Update',
    data: {
      iterations: 1,
    },
    code: `store.increment();`
  },
} as const satisfies Record<string, TestDefinition>;

export type MemoryTestKey = keyof typeof TESTS;
