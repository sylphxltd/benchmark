/**
 * Memory Usage Test Configuration
 * Tests memory consumption, garbage collection, and object retention
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  objectCount: number;
  objectSize: 'small' | 'medium' | 'large';
  retentionTime: number; // ms
  measurementCycles: number;
  timeout?: number;
}

export interface TestConfig {
  name: string;
  description: string;
  scales: TestScale[];
  requiredMethods: string[];
  setup?: string;
  teardown?: string;
}

export const config: TestConfig = {
  name: 'Memory Usage',
  description: 'Memory consumption and object retention tests',
  requiredMethods: ['addUser', 'getUsers', 'createDeepObject'],
  setup: 'initializeMemoryTest()',
  teardown: 'forceGarbageCollection()',
  scales: [
    {
      id: 'light-usage',
      name: 'Light Memory Usage',
      description: 'Small object creation and cleanup',
      objectCount: 100,
      objectSize: 'small',
      retentionTime: 1000,
      measurementCycles: 5,
      timeout: 8000
    },
    {
      id: 'moderate-usage',
      name: 'Moderate Memory Usage',
      description: 'Medium object creation with nested structures',
      objectCount: 500,
      objectSize: 'medium',
      retentionTime: 2000,
      measurementCycles: 3,
      timeout: 12000
    },
    {
      id: 'heavy-usage',
      name: 'Heavy Memory Usage',
      description: 'Large object creation and memory pressure',
      objectCount: 1000,
      objectSize: 'large',
      retentionTime: 5000,
      measurementCycles: 2,
      timeout: 20000
    }
  ]
};