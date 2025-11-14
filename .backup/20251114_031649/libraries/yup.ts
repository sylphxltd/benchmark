/**
 * Yup Library Implementation
 */

import * as yup from 'yup';
import { category, tests } from '../index';

const yupLib = category.registerLibrary({
  id: 'yup',
  displayName: 'Yup',
  packageName: 'yup',
  githubUrl: 'https://github.com/jquense/yup',
  description: 'Dead simple Object schema validation',

  setup: {
    createStore: () => {
      return null;
    },
  },
});

// ============================================================================
// Schema Creation Tests
// ============================================================================

yupLib.implement(tests.createSimpleSchema, async () => {
  const schema = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
    isActive: yup.boolean().required(),
  });
  return schema !== null;
});

yupLib.implement(tests.createComplexSchema, async () => {
  const schema = yup.object({
    user: yup.object({
      profile: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
      }),
      settings: yup.object({
        notifications: yup.boolean().required(),
        theme: yup.string().oneOf(['light', 'dark']).required(),
      }),
    }),
    tags: yup.array(yup.string()).required(),
    metadata: yup.object().required(),
  });
  return schema !== null;
});

// ============================================================================
// Primitive Validation Tests
// ============================================================================

yupLib.implement(tests.validateString, async () => {
  const schema = yup.string().min(3).max(50);
  try {
    await schema.validate('Hello World');
    return true;
  } catch {
    return false;
  }
});

yupLib.implement(tests.validateNumber, async () => {
  const schema = yup.number().min(0).max(100);
  try {
    await schema.validate(42);
    return true;
  } catch {
    return false;
  }
});

yupLib.implement(tests.validateEmail, async () => {
  const schema = yup.string().email();
  try {
    await schema.validate('test@example.com');
    return true;
  } catch {
    return false;
  }
});

// ============================================================================
// Object Validation Tests
// ============================================================================

yupLib.implement(tests.validateFlatObject, async () => {
  const schema = yup.object({
    id: yup.number().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(0).required(),
    isActive: yup.boolean().required(),
  });

  const data = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    isActive: true,
  };

  try {
    await schema.validate(data);
    return true;
  } catch {
    return false;
  }
});

yupLib.implement(tests.validateNestedObject, async () => {
  const schema = yup.object({
    user: yup.object({
      id: yup.number().required(),
      profile: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.object({
          street: yup.string().required(),
          city: yup.string().required(),
          country: yup.string().required(),
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

  try {
    await schema.validate(data);
    return true;
  } catch {
    return false;
  }
});

yupLib.implement(tests.validateArray, async () => {
  const schema = yup.array(
    yup.object({
      id: yup.number().required(),
      name: yup.string().required(),
      tags: yup.array(yup.string()).required(),
    })
  );

  const data = [
    { id: 1, name: 'Item 1', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'Item 2', tags: ['tag3', 'tag4'] },
    { id: 3, name: 'Item 3', tags: ['tag5', 'tag6'] },
  ];

  try {
    await schema.validate(data);
    return true;
  } catch {
    return false;
  }
});

// ============================================================================
// Error Handling Tests
// ============================================================================

yupLib.implement(tests.catchValidationErrors, async () => {
  const schema = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
  });

  try {
    await schema.validate({
      name: 'John',
      age: 'invalid', // Wrong type
    });
    return false;
  } catch (error) {
    return true;
  }
});

yupLib.implement(tests.multipleErrors, async () => {
  const schema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).required(),
  });

  try {
    await schema.validate(
      {
        name: 'ab', // Too short
        email: 'invalid-email', // Invalid format
        age: 10, // Too young
      },
      { abortEarly: false }
    );
    return false;
  } catch (error: any) {
    return error.inner && error.inner.length >= 3;
  }
});
