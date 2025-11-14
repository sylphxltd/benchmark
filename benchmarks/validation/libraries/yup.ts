/**
 * Yup Validation Library Benchmarks
 *
 * Yup is a schema builder for runtime value parsing and validation.
 * Key features:
 * - Async and sync validation
 * - Extensive transformation support
 * - Rich error messages
 * - Method chaining API
 */

import * as yup from 'yup';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'yup',
  displayName: 'Yup',
  githubUrl: 'https://github.com/jquense/yup',
  packageName: 'yup',
  version: '^1.7.1',
  description: 'Schema builder for runtime value parsing and validation',
});


// ============================================================================
// Schema Definitions (Created once, reused in tests)
// ============================================================================

// Simple schemas for primitive validation
const stringSchema = yup.string().min(3).max(50).required();
const numberSchema = yup.number().min(0).max(100).required();
const emailSchema = yup.string().email().required();
const dateSchema = yup.date().required();
const booleanSchema = yup.boolean().required();

// Flat object schema
const userSchema = yup.object({
  id: yup.number().positive().required(),
  username: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  age: yup.number().min(18).max(120).required(),
  active: yup.boolean().required(),
});

// Nested object schema
const addressSchema = yup.object({
  street: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  zipCode: yup.string().matches(/^\d{5}$/).required(),
});

const profileSchema = yup.object({
  user: userSchema,
  address: addressSchema,
  preferences: yup.object({
    theme: yup.string().oneOf(['light', 'dark']).required(),
    notifications: yup.boolean().required(),
    language: yup.string().required(),
  }),
  tags: yup.array().of(yup.string().required()).required(),
  metadata: yup.object().required(),
});

// Array schema
const itemSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  quantity: yup.number().integer().min(0).required(),
});

const itemsArraySchema = yup.array().of(itemSchema).required();

// Complex nested schema with transforms
const transformSchema = yup.object({
  date: yup.string().transform((value) => new Date(value)).required(),
  number: yup.string().transform((value) => parseInt(value, 10)).required(),
  trimmed: yup.string().transform((value) => value.trim()).required(),
  upper: yup.string().transform((value) => value.toUpperCase()).required(),
});

// ============================================================================
// Test Data (Same as Zod for fair comparison)
// ============================================================================

const validUser = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  age: 30,
  active: true,
};

const validProfile = {
  user: validUser,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
    zipCode: '12345',
  },
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'en',
  },
  tags: ['developer', 'designer', 'manager'],
  metadata: {
    lastLogin: '2024-01-01',
    loginCount: '42',
  },
};

const validItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  price: Math.random() * 100,
  quantity: Math.floor(Math.random() * 100),
}));

const invalidUser = {
  id: -1, // negative, should be positive
  username: 'ab', // too short
  email: 'invalid-email', // invalid format
  age: 150, // exceeds max
  active: 'yes', // wrong type
};

const invalidProfile = {
  user: invalidUser,
  address: {
    street: '',
    city: '',
    country: '',
    zipCode: 'abc', // invalid format
  },
  preferences: {
    theme: 'blue', // invalid enum
    notifications: 'true', // wrong type
    language: 123, // wrong type
  },
  tags: [1, 2, 3], // wrong types
  metadata: null, // wrong type
};

const transformData = {
  date: '2024-01-01T00:00:00Z',
  number: '42',
  trimmed: '  hello world  ',
  upper: 'hello',
};

// ============================================================================
// Test Implementations
// ============================================================================

// Schema Creation Tests
library.addTest(tests.createSimpleSchema, {
  name: 'yup',
  fn() {
    // Schema creation - demonstrating that schemas are created in setup
    const schema = yup.object({
      name: yup.string().required(),
      age: yup.number().required(),
      email: yup.string().email().required(),
    });
    return schema;
  },
});

library.addTest(tests.createComplexSchema, {
  name: 'yup',
  fn() {
    // Complex schema creation
    const schema = yup.object({
      user: yup.object({
        id: yup.number().required(),
        profile: yup.object({
          bio: yup.string().required(),
          avatar: yup.string().url().required(),
        }),
      }),
      settings: yup.array().of(
        yup.object({
          key: yup.string().required(),
          value: yup.mixed().required(),
        })
      ),
    });
    return schema;
  },
});

// Primitive Validation Tests
library.addTest(tests.validateString, {
  name: 'yup',
  setup() {
    return {
      schema: stringSchema,
      validData: 'Hello World',
      invalidData: 'Hi', // too short
    };
  },
  run(ctx) {
    // Use validateSync for better performance (avoid async overhead)
    let valid = false;
    let invalid = true;

    try {
      ctx.schema.validateSync(ctx.validData);
      valid = true;
    } catch {
      valid = false;
    }

    try {
      ctx.schema.validateSync(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return { valid, invalid };
  },
});

library.addTest(tests.validateNumber, {
  name: 'yup',
  setup() {
    return {
      schema: numberSchema,
      validData: 42,
      invalidData: 150, // exceeds max
    };
  },
  run(ctx) {
    let valid = false;
    let invalid = true;

    try {
      ctx.schema.validateSync(ctx.validData);
      valid = true;
    } catch {
      valid = false;
    }

    try {
      ctx.schema.validateSync(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return { valid, invalid };
  },
});

library.addTest(tests.validateEmail, {
  name: 'yup',
  setup() {
    return {
      schema: emailSchema,
      validEmails: [
        'user@example.com',
        'john.doe@company.org',
        'test+tag@domain.co.uk',
      ],
      invalidEmails: [
        'invalid',
        '@example.com',
        'user@',
        'user..name@example.com',
      ],
    };
  },
  run(ctx) {
    let validCount = 0;
    let invalidCount = 0;

    // Validate multiple emails
    for (const email of ctx.validEmails) {
      try {
        ctx.schema.validateSync(email);
        validCount++;
      } catch {
        // Invalid
      }
    }

    for (const email of ctx.invalidEmails) {
      try {
        ctx.schema.validateSync(email);
      } catch {
        invalidCount++;
      }
    }

    return { validCount, invalidCount };
  },
});

// Object Validation Tests
library.addTest(tests.validateFlatObject, {
  name: 'yup',
  setup() {
    return {
      schema: userSchema,
      validData: validUser,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test object validation performance
    let valid = false;
    let invalid = true;
    let validData = null;

    try {
      validData = ctx.schema.validateSync(ctx.validData);
      valid = true;
    } catch {
      valid = false;
    }

    try {
      ctx.schema.validateSync(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return {
      valid,
      invalid,
      validData,
    };
  },
});

library.addTest(tests.validateNestedObject, {
  name: 'yup',
  setup() {
    return {
      schema: profileSchema,
      validData: validProfile,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test complex nested validation
    let valid = false;
    let invalid = true;
    let hasData = false;

    try {
      const data = ctx.schema.validateSync(ctx.validData);
      valid = true;
      hasData = !!data;
    } catch {
      valid = false;
    }

    try {
      ctx.schema.validateSync(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return {
      valid,
      invalid,
      hasData,
    };
  },
});

library.addTest(tests.validateArray, {
  name: 'yup',
  setup() {
    return {
      schema: itemsArraySchema,
      validData: validItems,
      invalidData: [
        ...validItems.slice(0, 5),
        { id: -1, name: '', price: -10, quantity: -5 }, // invalid item
        ...validItems.slice(5),
      ],
    };
  },
  run(ctx) {
    // Test array validation
    let valid = false;
    let invalid = true;
    let itemCount = 0;

    try {
      const data = ctx.schema.validateSync(ctx.validData);
      valid = true;
      itemCount = data.length;
    } catch {
      valid = false;
    }

    try {
      ctx.schema.validateSync(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return {
      valid,
      invalid,
      itemCount,
    };
  },
});

// Error Handling Tests
library.addTest(tests.catchValidationErrors, {
  name: 'yup',
  setup() {
    return {
      schema: userSchema,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test error handling performance
    try {
      ctx.schema.validateSync(ctx.invalidData, { abortEarly: false });
      return { success: true, errorCount: 0, hasErrors: false };
    } catch (error: any) {
      const errors = error.errors || [];
      return {
        success: false,
        errorCount: errors.length,
        hasErrors: true,
        firstError: errors[0],
      };
    }
  },
});

library.addTest(tests.multipleErrors, {
  name: 'yup',
  setup() {
    return {
      schema: profileSchema,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test multiple error collection
    try {
      ctx.schema.validateSync(ctx.invalidData, { abortEarly: false });
      return { errorCount: 0, hasMultiple: false, paths: 0, types: 0 };
    } catch (error: any) {
      const errors = error.errors || [];
      const inner = error.inner || [];

      return {
        errorCount: errors.length,
        hasMultiple: errors.length > 1,
        paths: inner.length,
        types: new Set(inner.map((e: any) => e.type)).size,
      };
    }
  },
});

// Additional Performance Tests

// Batch validation test
library.addTest(tests.validateFlatObject, {
  name: 'yup-batch',
  setup() {
    // Create batch of objects for validation
    const batchData = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      username: `user${i}`,
      email: `user${i}@example.com`,
      age: 20 + (i % 50),
      active: i % 2 === 0,
    }));

    return {
      schema: userSchema,
      batchData,
    };
  },
  run(ctx) {
    // Batch validate multiple objects
    let validCount = 0;
    let invalidCount = 0;

    for (const item of ctx.batchData) {
      try {
        ctx.schema.validateSync(item);
        validCount++;
      } catch {
        invalidCount++;
      }
    }

    return { validCount, invalidCount, total: ctx.batchData.length };
  },
});

// Transform validation test
library.addTest(tests.validateNestedObject, {
  name: 'yup-transform',
  setup() {
    return {
      schema: transformSchema,
      data: transformData,
    };
  },
  run(ctx) {
    // Test transformation performance
    try {
      const result = ctx.schema.validateSync(ctx.data);

      return {
        success: true,
        transformed: true,
        hasDate: result.date instanceof Date,
        hasNumber: typeof result.number === 'number',
        hasTrimmed: result.trimmed === 'hello world',
        hasUpper: result.upper === 'HELLO',
      };
    } catch {
      return { success: false, transformed: false };
    }
  },
});

// Async validation test (Yup-specific strength)
library.addTest(tests.validateNestedObject, {
  name: 'yup-async',
  setup() {
    // Create a schema with async validation
    const asyncSchema = yup.object({
      username: yup
        .string()
        .test('async-test', 'Username check', async (value) => {
          // Simulate async validation (e.g., checking database)
          await new Promise(resolve => setTimeout(resolve, 1));
          return !!value && value.length > 3;
        }),
      email: yup.string().email().required(),
    });

    return {
      schema: asyncSchema,
      validData: { username: 'johndoe', email: 'john@example.com' },
      invalidData: { username: 'jo', email: 'invalid' },
    };
  },
  async run(ctx) {
    // Test async validation performance
    let valid = false;
    let invalid = true;

    try {
      await ctx.schema.validate(ctx.validData);
      valid = true;
    } catch {
      valid = false;
    }

    try {
      await ctx.schema.validate(ctx.invalidData);
      invalid = false;
    } catch {
      invalid = true;
    }

    return { valid, invalid, async: true };
  },
});

console.log('✅ Yup library benchmarks registered');