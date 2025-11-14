/**
 * Superstruct Validation Library Benchmarks
 *
 * Superstruct is a lightweight validation library focused on simplicity and composability.
 * Key features:
 * - Composable validation primitives
 * - TypeScript-first design
 * - Small bundle size
 * - Synchronous validation
 */

import {
  object,
  string,
  number,
  boolean,
  array,
  date,
  validate,
  is,
  assert,
  create,
  refine,
  pattern,
  min,
  max,
  size,
  integer,
  positive,
  email,
  record,
  any,
  union,
  literal,
  coerce,
  Struct,
} from 'superstruct';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'superstruct',
  displayName: 'Superstruct',
  githubUrl: 'https://github.com/ianstormtaylor/superstruct',
  packageName: 'superstruct',
  version: '^2.0.2',
  description: 'Lightweight, composable validation library',
});


// ============================================================================
// Schema Definitions (Created once, reused in tests)
// ============================================================================

// Custom email validation
const Email: Struct<string> = refine(string(), 'email', (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
});

// Simple schemas for primitive validation
const stringSchema = size(string(), 3, 50);
const numberSchema = refine(number(), 'range', (value) => value >= 0 && value <= 100);
const emailSchema = Email;
const dateSchema = date();
const booleanSchema = boolean();

// Flat object schema
const userSchema = object({
  id: positive(number()),
  username: size(string(), 3, 20),
  email: Email,
  age: refine(number(), 'age-range', (value) => value >= 18 && value <= 120),
  active: boolean(),
});

// Nested object schema
const addressSchema = object({
  street: string(),
  city: string(),
  country: string(),
  zipCode: pattern(string(), /^\d{5}$/),
});

const profileSchema = object({
  user: userSchema,
  address: addressSchema,
  preferences: object({
    theme: union([literal('light'), literal('dark')]),
    notifications: boolean(),
    language: string(),
  }),
  tags: array(string()),
  metadata: record(string(), any()),
});

// Array schema
const itemSchema = object({
  id: number(),
  name: string(),
  price: positive(number()),
  quantity: min(integer(number()), 0),
});

const itemsArraySchema = array(itemSchema);

// Complex nested schema with coercions (transforms)
const transformSchema = object({
  date: coerce(date(), string(), (value) => new Date(value)),
  number: coerce(number(), string(), (value) => parseInt(value, 10)),
  trimmed: coerce(string(), string(), (value) => value.trim()),
  upper: coerce(string(), string(), (value) => value.toUpperCase()),
});

// ============================================================================
// Test Data (Same as other libraries for fair comparison)
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
  name: 'superstruct',
  fn() {
    // Schema creation - demonstrating that schemas are created in setup
    const schema = object({
      name: string(),
      age: number(),
      email: Email,
    });
    return schema;
  },
});

library.addTest(tests.createComplexSchema, {
  name: 'superstruct',
  fn() {
    // Complex schema creation
    const schema = object({
      user: object({
        id: number(),
        profile: object({
          bio: string(),
          avatar: string(), // Superstruct doesn't have built-in URL validation
        }),
      }),
      settings: array(
        object({
          key: string(),
          value: any(),
        })
      ),
    });
    return schema;
  },
});

// Primitive Validation Tests
library.addTest(tests.validateString, {
  name: 'superstruct',
  setup() {
    return {
      schema: stringSchema,
      validData: 'Hello World',
      invalidData: 'Hi', // too short
    };
  },
  run(ctx) {
    // Test both success and failure paths using validate
    const [validError] = validate(ctx.validData, ctx.schema);
    const [invalidError] = validate(ctx.invalidData, ctx.schema);
    return { valid: !validError, invalid: !!invalidError };
  },
});

library.addTest(tests.validateNumber, {
  name: 'superstruct',
  setup() {
    return {
      schema: numberSchema,
      validData: 42,
      invalidData: 150, // exceeds max
    };
  },
  run(ctx) {
    const [validError] = validate(ctx.validData, ctx.schema);
    const [invalidError] = validate(ctx.invalidData, ctx.schema);
    return { valid: !validError, invalid: !!invalidError };
  },
});

library.addTest(tests.validateEmail, {
  name: 'superstruct',
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
      const [error] = validate(email, ctx.schema);
      if (!error) validCount++;
    }

    for (const email of ctx.invalidEmails) {
      const [error] = validate(email, ctx.schema);
      if (error) invalidCount++;
    }

    return { validCount, invalidCount };
  },
});

// Object Validation Tests
library.addTest(tests.validateFlatObject, {
  name: 'superstruct',
  setup() {
    return {
      schema: userSchema,
      validData: validUser,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test object validation performance
    const [validError, validValue] = validate(ctx.validData, ctx.schema);
    const [invalidError] = validate(ctx.invalidData, ctx.schema);
    return {
      valid: !validError,
      invalid: !!invalidError,
      validData: validValue || null,
    };
  },
});

library.addTest(tests.validateNestedObject, {
  name: 'superstruct',
  setup() {
    return {
      schema: profileSchema,
      validData: validProfile,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test complex nested validation
    const [validError, validValue] = validate(ctx.validData, ctx.schema);
    const [invalidError] = validate(ctx.invalidData, ctx.schema);
    return {
      valid: !validError,
      invalid: !!invalidError,
      hasData: !!validValue,
    };
  },
});

library.addTest(tests.validateArray, {
  name: 'superstruct',
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
    const [validError, validValue] = validate(ctx.validData, ctx.schema);
    const [invalidError] = validate(ctx.invalidData, ctx.schema);
    return {
      valid: !validError,
      invalid: !!invalidError,
      itemCount: validValue ? validValue.length : 0,
    };
  },
});

// Error Handling Tests
library.addTest(tests.catchValidationErrors, {
  name: 'superstruct',
  setup() {
    return {
      schema: userSchema,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test error handling performance
    const [error] = validate(ctx.invalidData, ctx.schema);

    if (error) {
      const failures = error.failures();
      return {
        success: false,
        errorCount: failures.length,
        hasErrors: true,
        firstError: error.message,
      };
    }

    return { success: true, errorCount: 0, hasErrors: false };
  },
});

library.addTest(tests.multipleErrors, {
  name: 'superstruct',
  setup() {
    return {
      schema: profileSchema,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test multiple error collection
    const [error] = validate(ctx.invalidData, ctx.schema);

    if (error) {
      const failures = error.failures();
      const errorPaths = failures.map(f => f.path.join('.'));
      const errorTypes = failures.map(f => f.type);

      return {
        errorCount: failures.length,
        hasMultiple: failures.length > 1,
        paths: errorPaths.length,
        types: new Set(errorTypes).size,
      };
    }

    return { errorCount: 0, hasMultiple: false, paths: 0, types: 0 };
  },
});

// Additional Performance Tests

// Batch validation test
library.addTest(tests.validateFlatObject, {
  name: 'superstruct-batch',
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
      const [error] = validate(item, ctx.schema);
      if (!error) {
        validCount++;
      } else {
        invalidCount++;
      }
    }

    return { validCount, invalidCount, total: ctx.batchData.length };
  },
});

// Transform validation test
library.addTest(tests.validateNestedObject, {
  name: 'superstruct-transform',
  setup() {
    return {
      schema: transformSchema,
      data: transformData,
    };
  },
  run(ctx) {
    // Test transformation performance
    const [error, value] = validate(ctx.data, ctx.schema, { coerce: true });

    if (!error && value) {
      return {
        success: true,
        transformed: true,
        hasDate: value.date instanceof Date,
        hasNumber: typeof value.number === 'number',
        hasTrimmed: value.trimmed === 'hello world',
        hasUpper: value.upper === 'HELLO',
      };
    }

    return { success: false, transformed: false };
  },
});

// Fast check test using 'is' method
library.addTest(tests.validateFlatObject, {
  name: 'superstruct-is',
  setup() {
    return {
      schema: userSchema,
      validData: validUser,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test fast boolean check performance
    const valid = is(ctx.validData, ctx.schema);
    const invalid = is(ctx.invalidData, ctx.schema);

    return {
      valid,
      invalid: !invalid,
      fastCheck: true,
    };
  },
});

// Assert test (throws on error)
library.addTest(tests.validateFlatObject, {
  name: 'superstruct-assert',
  setup() {
    return {
      schema: userSchema,
      validData: validUser,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test assertion-based validation
    let valid = false;
    let invalid = true;

    try {
      assert(ctx.validData, ctx.schema);
      valid = true;
    } catch {
      valid = false;
    }

    try {
      assert(ctx.invalidData, ctx.schema);
      invalid = false;
    } catch {
      invalid = true;
    }

    return {
      valid,
      invalid,
      assertMode: true,
    };
  },
});

// Create test (returns validated & transformed value)
library.addTest(tests.validateNestedObject, {
  name: 'superstruct-create',
  setup() {
    // Schema with defaults
    const schemaWithDefaults = object({
      id: number(),
      name: string(),
      active: refine(boolean(), 'default', () => true),
      createdAt: coerce(date(), any(), () => new Date()),
    });

    return {
      schema: schemaWithDefaults,
      partialData: { id: 1, name: 'Test' },
    };
  },
  run(ctx) {
    // Test create method which validates and applies defaults
    try {
      const result = create(ctx.partialData, ctx.schema);
      return {
        success: true,
        hasDefaults: true,
        hasId: !!result.id,
        hasName: !!result.name,
        hasActive: result.active === true,
        hasCreatedAt: result.createdAt instanceof Date,
      };
    } catch {
      return { success: false, hasDefaults: false };
    }
  },
});

console.log('✅ Superstruct library benchmarks registered');