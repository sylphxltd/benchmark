/**
 * Joi Library Implementation
 */

import Joi from 'joi';
import { category, tests } from '../index';

const joiLib = category.registerLibrary({
  id: 'joi',
  displayName: 'Joi',
  packageName: 'joi',
  githubUrl: 'git://github.com/hapijs/joi',
  description: 'Object schema validation',

  setup: {
    createStore: () => {
      return null;
    },
  },
});

// ============================================================================
// Schema Creation Tests
// ============================================================================

joiLib.implement(tests.createSimpleSchema, async () => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    isActive: Joi.boolean().required(),
  });
  return schema !== null;
});

joiLib.implement(tests.createComplexSchema, async () => {
  const schema = Joi.object({
    user: Joi.object({
      profile: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
      }),
      settings: Joi.object({
        notifications: Joi.boolean().required(),
        theme: Joi.string().valid('light', 'dark').required(),
      }),
    }),
    tags: Joi.array().items(Joi.string()).required(),
    metadata: Joi.object().required(),
  });
  return schema !== null;
});

// ============================================================================
// Primitive Validation Tests
// ============================================================================

joiLib.implement(tests.validateString, async () => {
  const schema = Joi.string().min(3).max(50);
  const result = schema.validate('Hello World');
  return !result.error;
});

joiLib.implement(tests.validateNumber, async () => {
  const schema = Joi.number().min(0).max(100);
  const result = schema.validate(42);
  return !result.error;
});

joiLib.implement(tests.validateEmail, async () => {
  const schema = Joi.string().email();
  const result = schema.validate('test@example.com');
  return !result.error;
});

// ============================================================================
// Object Validation Tests
// ============================================================================

joiLib.implement(tests.validateFlatObject, async () => {
  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(0).required(),
    isActive: Joi.boolean().required(),
  });

  const data = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isActive: true,
  };

  const result = schema.validate(data);
  return !result.error;
});

joiLib.implement(tests.validateNestedObject, async () => {
  const schema = Joi.object({
    user: Joi.object({
      id: Joi.number().required(),
      profile: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        address: Joi.object({
          street: Joi.string().required(),
          city: Joi.string().required(),
          country: Joi.string().required(),
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

  const result = schema.validate(data);
  return !result.error;
});

joiLib.implement(tests.validateArray, async () => {
  const schema = Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      tags: Joi.array().items(Joi.string()).required(),
    })
  );

  const data = [
    { id: 1, name: 'Item 1', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'Item 2', tags: ['tag3', 'tag4'] },
    { id: 3, name: 'Item 3', tags: ['tag5', 'tag6'] },
  ];

  const result = schema.validate(data);
  return !result.error;
});

// ============================================================================
// Error Handling Tests
// ============================================================================

joiLib.implement(tests.catchValidationErrors, async () => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  });

  const result = schema.validate({
    name: 'John',
    age: 'invalid', // Wrong type
  });

  return !!result.error;
});

joiLib.implement(tests.multipleErrors, async () => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18).required(),
  });

  const result = schema.validate(
    {
      name: 'ab', // Too short
      email: 'invalid-email', // Invalid format
      age: 10, // Too young
    },
    { abortEarly: false }
  );

  return !!result.error && result.error.details.length >= 3;
});
