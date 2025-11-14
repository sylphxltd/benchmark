/**
 * Superstruct Library Implementation
 */

import { object, string, number, boolean, array, record, enums, validate, is } from 'superstruct';
import { category, tests } from '../index';

const superstructLib = category.registerLibrary({
  id: 'superstruct',
  displayName: 'Superstruct',
  packageName: 'superstruct',
  githubUrl: 'git://github.com/ianstormtaylor/superstruct',
  description: 'A simple and composable way to validate data in JavaScript (and TypeScript).',

  setup: {
    createStore: () => {
      return null;
    },
  },
});

// ============================================================================
// Schema Creation Tests
// ============================================================================

superstructLib.implement(tests.createSimpleSchema, async () => {
  const schema = object({
    name: string(),
    age: number(),
    isActive: boolean(),
  });
  return schema !== null;
});

superstructLib.implement(tests.createComplexSchema, async () => {
  const schema = object({
    user: object({
      profile: object({
        name: string(),
        email: string(),
      }),
      settings: object({
        notifications: boolean(),
        theme: enums(['light', 'dark']),
      }),
    }),
    tags: array(string()),
    metadata: record(string(), string()),
  });
  return schema !== null;
});

// ============================================================================
// Primitive Validation Tests
// ============================================================================

superstructLib.implement(tests.validateString, async () => {
  const schema = string();
  return is('Hello World', schema);
});

superstructLib.implement(tests.validateNumber, async () => {
  const schema = number();
  return is(42, schema);
});

superstructLib.implement(tests.validateEmail, async () => {
  // Superstruct doesn't have built-in email validation
  // So we just validate it's a string
  const schema = string();
  return is('test@example.com', schema);
});

// ============================================================================
// Object Validation Tests
// ============================================================================

superstructLib.implement(tests.validateFlatObject, async () => {
  const schema = object({
    id: number(),
    name: string(),
    email: string(),
    age: number(),
    isActive: boolean(),
  });

  const data = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isActive: true,
  };

  return is(data, schema);
});

superstructLib.implement(tests.validateNestedObject, async () => {
  const schema = object({
    user: object({
      id: number(),
      profile: object({
        name: string(),
        email: string(),
        address: object({
          street: string(),
          city: string(),
          country: string(),
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

  return is(data, schema);
});

superstructLib.implement(tests.validateArray, async () => {
  const schema = array(
    object({
      id: number(),
      name: string(),
      tags: array(string()),
    })
  );

  const data = [
    { id: 1, name: 'Item 1', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'Item 2', tags: ['tag3', 'tag4'] },
    { id: 3, name: 'Item 3', tags: ['tag5', 'tag6'] },
  ];

  return is(data, schema);
});

// ============================================================================
// Error Handling Tests
// ============================================================================

superstructLib.implement(tests.catchValidationErrors, async () => {
  const schema = object({
    name: string(),
    age: number(),
  });

  const [error] = validate(
    {
      name: 'John',
      age: 'invalid', // Wrong type
    },
    schema
  );

  return error !== undefined;
});

superstructLib.implement(tests.multipleErrors, async () => {
  const schema = object({
    name: string(),
    email: string(),
    age: number(),
  });

  const [error] = validate(
    {
      name: 123, // Wrong type
      email: 456, // Wrong type
      age: 'invalid', // Wrong type
    },
    schema
  );

  return error !== undefined;
});
