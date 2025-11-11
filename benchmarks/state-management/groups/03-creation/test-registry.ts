/**
 * Test registry for 03-creation group
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
  STORE_CREATION: {
    name: 'Store Creation',
    data: {
      iterations: 1,
    },
    code: `// Store creation is handled by setup/initialization
    // This test measures the overhead of store access
    return store;`
  },
} as const satisfies Record<string, TestDefinition>;

export type CreationTestKey = keyof typeof TESTS;
