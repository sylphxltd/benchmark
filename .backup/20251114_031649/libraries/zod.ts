/**
 * Zod Library Implementation
 */

import { z } from 'zod';
import { category, tests } from '../index';

const zodLib = category.registerLibrary({
  id: 'zod',
  displayName: 'Zod',
  packageName: 'zod',
  githubUrl: 'https://github.com/colinhacks/zod',
  description: 'TypeScript-first schema declaration and validation library with static type inference',

  setup: {
    createStore: () => {
      return null;
    },
  },
});

// ============================================================================
// Schema Creation Tests
// ============================================================================

zodLib.implement(tests.createSimpleSchema, async () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
    isActive: z.boolean(),
  });
  return schema !== null;
});

zodLib.implement(tests.createComplexSchema, async () => {
  const schema = z.object({
    user: z.object({
      profile: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
      settings: z.object({
        notifications: z.boolean(),
        theme: z.enum(['light', 'dark']),
      }),
    }),
    tags: z.array(z.string()),
    metadata: z.record(z.string()),
  });
  return schema !== null;
});

// ============================================================================
// Primitive Validation Tests
// ============================================================================

zodLib.implement(tests.validateString, async () => {
  const schema = z.string().min(3).max(50);
  const result = schema.safeParse('Hello World');
  return result.success;
});

zodLib.implement(tests.validateNumber, async () => {
  const schema = z.number().min(0).max(100);
  const result = schema.safeParse(42);
  return result.success;
});

zodLib.implement(tests.validateEmail, async () => {
  const schema = z.string().email();
  const result = schema.safeParse('test@example.com');
  return result.success;
});

// ============================================================================
// Object Validation Tests
// ============================================================================

zodLib.implement(tests.validateFlatObject, async () => {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    age: z.number().min(0),
    isActive: z.boolean(),
  });

  const data = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isActive: true,
  };

  const result = schema.safeParse(data);
  return result.success;
});

zodLib.implement(tests.validateNestedObject, async () => {
  const schema = z.object({
    user: z.object({
      id: z.number(),
      profile: z.object({
        name: z.string(),
        email: z.string().email(),
        address: z.object({
          street: z.string(),
          city: z.string(),
          country: z.string(),
        }),
      }),
    }),
  });

  const data = {
    user: {
      id: 1,
      profile: {
        name: 'John Doe',
        email: 'john@example.com',
        address: {
          street: '123 Main St',
          city: 'New York',
          country: 'USA',
        },
      },
    },
  };

  const result = schema.safeParse(data);
  return result.success;
});

zodLib.implement(tests.validateArray, async () => {
  const schema = z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      tags: z.array(z.string()),
    })
  );

  const data = [
    { id: 1, name: 'Item 1', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'Item 2', tags: ['tag3', 'tag4'] },
    { id: 3, name: 'Item 3', tags: ['tag5', 'tag6'] },
  ];

  const result = schema.safeParse(data);
  return result.success;
});

// ============================================================================
// Error Handling Tests
// ============================================================================

zodLib.implement(tests.catchValidationErrors, async () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
  });

  const result = schema.safeParse({
    name: 'John',
    age: 'invalid', // Wrong type
  });

  return !result.success && result.error.issues.length > 0;
});

zodLib.implement(tests.multipleErrors, async () => {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    age: z.number().min(18),
  });

  const result = schema.safeParse({
    name: 'ab', // Too short
    email: 'invalid-email', // Invalid format
    age: 10, // Too young
  });

  return !result.success && result.error.issues.length >= 3;
});
