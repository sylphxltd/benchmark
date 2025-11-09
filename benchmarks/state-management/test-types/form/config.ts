/**
 * Form State Management Test Configuration
 * Tests complex form state operations and nested updates
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  fieldCount: number;
  complexity: 'simple' | 'nested' | 'complex';
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
  name: 'Form State Management',
  description: 'Complex form state operations and nested updates',
  requiredMethods: ['setNested', 'addUser', 'getNested', 'getUsers'],
  setup: 'initializeFormData()',
  teardown: 'cleanupFormData()',
  scales: [
    {
      id: 'simple-form',
      name: 'Simple Form',
      description: 'Simple form with basic fields',
      fieldCount: 5,
      complexity: 'simple',
      timeout: 3000
    },
    {
      id: 'nested-form',
      name: 'Nested Form',
      description: 'Form with nested object structures',
      fieldCount: 15,
      complexity: 'nested',
      timeout: 5000
    },
    {
      id: 'complex-form',
      name: 'Complex Form',
      description: 'Complex form with arrays and deep nesting',
      fieldCount: 30,
      complexity: 'complex',
      timeout: 8000
    }
  ]
};