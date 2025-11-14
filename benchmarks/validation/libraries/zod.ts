/**
 * Zod Validation Library Benchmarks (Simplified)
 */

import { z } from 'zod';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'zod',
  displayName: 'Zod',
  packageName: 'zod',
  githubUrl: 'https://github.com/colinhacks/zod',
  description: 'TypeScript-first schema validation with static type inference',
});

// Simple string schema
const stringSchema = z.string().min(3).max(50);

// Simple user schema
const userSchema = z.object({
  id: z.number().positive(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  active: z.boolean(),
});

// Complex profile schema
const profileSchema = z.object({
  user: userSchema,
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
    zipCode: z.string().regex(/^\d{5}$/),
  }),
  preferences: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean(),
    language: z.string(),
  }),
  tags: z.array(z.string()),
  metadata: z.record(z.string(), z.any()),
});

// Test data
const validUser = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  age: 30,
  active: true,
};

const invalidUser = {
  id: -1,
  username: 'ab',
  email: 'invalid-email',
  age: 150,
  active: 'yes',
};

// Schema Creation Tests
library.implement(tests.createSimpleSchema, () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(),
  });
  return schema;
});

library.implement(tests.createComplexSchema, () => {
  const schema = z.object({
    user: z.object({
      id: z.number(),
      profile: z.object({
        bio: z.string(),
        avatar: z.string().url(),
      }),
    }),
    settings: z.array(z.object({
      key: z.string(),
      value: z.any(),
    })),
  });
  return schema;
});

// Primitive Validation Tests
library.implement(tests.validateString, () => {
  const validData = 'Hello World';
  const invalidData = 'Hi';

  const valid = stringSchema.safeParse(validData);
  const invalid = stringSchema.safeParse(invalidData);

  return { valid: valid.success, invalid: !invalid.success };
});

library.implement(tests.validateNumber, () => {
  const numberSchema = z.number().min(0).max(100);
  const validData = 42;
  const invalidData = 150;

  const valid = numberSchema.safeParse(validData);
  const invalid = numberSchema.safeParse(invalidData);

  return { valid: valid.success, invalid: !invalid.success };
});

library.implement(tests.validateEmail, () => {
  const emailSchema = z.string().email();
  const validEmails = ['user@example.com', 'john.doe@company.org', 'test+tag@domain.co.uk'];
  const invalidEmails = ['invalid', '@example.com', 'user@', 'user..name@example.com'];

  let validCount = 0;
  let invalidCount = 0;

  for (const email of validEmails) {
    if (emailSchema.safeParse(email).success) validCount++;
  }

  for (const email of invalidEmails) {
    if (!emailSchema.safeParse(email).success) invalidCount++;
  }

  return { validCount, invalidCount };
});

// Object Validation Tests
library.implement(tests.validateFlatObject, () => {
  const valid = userSchema.safeParse(validUser);
  const invalid = userSchema.safeParse(invalidUser);

  return {
    valid: valid.success,
    invalid: !invalid.success,
    validData: valid.success ? valid.data : null,
  };
});

library.implement(tests.validateNestedObject, () => {
  const validProfile = {
    user: validUser,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA',
      zipCode: '12345',
    },
    preferences: {
      theme: 'dark' as const,
      notifications: true,
      language: 'en',
    },
    tags: ['developer', 'designer', 'manager'],
    metadata: {
      lastLogin: '2024-01-01',
      loginCount: '42',
    },
  };

  const valid = profileSchema.safeParse(validProfile);

  return {
    valid: valid.success,
    hasData: valid.success ? !!valid.data : false,
  };
});

library.implement(tests.validateArray, () => {
  const itemSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().min(0),
  });

  const itemsArraySchema = z.array(itemSchema);

  const validItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    price: Math.random() * 100,
    quantity: Math.floor(Math.random() * 100),
  }));

  const valid = itemsArraySchema.safeParse(validItems);

  return {
    valid: valid.success,
    itemCount: valid.success ? valid.data.length : 0,
  };
});

// Error Handling Tests
library.implement(tests.catchValidationErrors, () => {
  const result = userSchema.safeParse(invalidUser);

  if (!result.success) {
    const errors = result.error.issues;
    return {
      success: false,
      errorCount: errors.length,
      hasErrors: true,
      firstError: errors[0]?.message,
    };
  }

  return { success: true, errorCount: 0, hasErrors: false };
});

library.implement(tests.multipleErrors, () => {
  const invalidProfile = {
    user: invalidUser,
    address: {
      street: '',
      city: '',
      country: '',
      zipCode: 'abc',
    },
    preferences: {
      theme: 'blue',
      notifications: 'true',
      language: 123,
    },
    tags: [1, 2, 3],
    metadata: null,
  };

  const result = profileSchema.safeParse(invalidProfile);

  if (!result.success) {
    const errors = result.error.issues;
    const errorPaths = errors.map(e => e.path.join('.'));
    const errorTypes = errors.map(e => e.code);

    return {
      errorCount: errors.length,
      hasMultiple: errors.length > 1,
      paths: errorPaths.length,
      types: new Set(errorTypes).size,
    };
  }

  return { errorCount: 0, hasMultiple: false, paths: 0, types: 0 };
});

console.log('✅ Zod library benchmarks registered');