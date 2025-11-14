/**
 * Joi Validation Library Benchmarks
 *
 * Joi is a powerful schema description and data validation library.
 * Key features:
 * - Rich validation rules
 * - Detailed error messages
 * - Both sync and async validation
 * - Part of the Hapi ecosystem
 */

import * as Joi from 'joi';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'joi',
  displayName: 'Joi',
  githubUrl: 'https://github.com/hapijs/joi',
  packageName: 'joi',
  version: '^18.0.1',
  description: 'Powerful schema description and data validation library',
});


// ============================================================================
// Schema Definitions (Created once, reused in tests)
// ============================================================================

// Simple schemas for primitive validation
const stringSchema = Joi.string().min(3).max(50).required();
const numberSchema = Joi.number().min(0).max(100).required();
const emailSchema = Joi.string().email().required();
const dateSchema = Joi.date().required();
const booleanSchema = Joi.boolean().required();

// Flat object schema
const userSchema = Joi.object({
  id: Joi.number().positive().required(),
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).max(120).required(),
  active: Joi.boolean().required(),
});

// Nested object schema
const addressSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  zipCode: Joi.string().pattern(/^\d{5}$/).required(),
});

const profileSchema = Joi.object({
  user: userSchema,
  address: addressSchema,
  preferences: Joi.object({
    theme: Joi.string().valid('light', 'dark').required(),
    notifications: Joi.boolean().required(),
    language: Joi.string().required(),
  }),
  tags: Joi.array().items(Joi.string()).required(),
  metadata: Joi.object().required(),
});

// Array schema
const itemSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().min(0).required(),
});

const itemsArraySchema = Joi.array().items(itemSchema).required();

// Complex nested schema with custom validation
const transformSchema = Joi.object({
  date: Joi.string().custom((value, helpers) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return helpers.error('any.invalid');
    }
    return date;
  }).required(),
  number: Joi.string().custom((value) => parseInt(value, 10)).required(),
  trimmed: Joi.string().custom((value) => value.trim()).required(),
  upper: Joi.string().custom((value) => value.toUpperCase()).required(),
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
  name: 'joi',
  fn() {
    // Schema creation - demonstrating that schemas are created in setup
    const schema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().required(),
      email: Joi.string().email().required(),
    });
    return schema;
  },
});

library.addTest(tests.createComplexSchema, {
  name: 'joi',
  fn() {
    // Complex schema creation
    const schema = Joi.object({
      user: Joi.object({
        id: Joi.number().required(),
        profile: Joi.object({
          bio: Joi.string().required(),
          avatar: Joi.string().uri().required(),
        }),
      }),
      settings: Joi.array().items(
        Joi.object({
          key: Joi.string().required(),
          value: Joi.any().required(),
        })
      ),
    });
    return schema;
  },
});

// Primitive Validation Tests
library.addTest(tests.validateString, {
  name: 'joi',
  setup() {
    return {
      schema: stringSchema,
      validData: 'Hello World',
      invalidData: 'Hi', // too short
    };
  },
  run(ctx) {
    // Test both success and failure paths
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);
    return { valid: !valid.error, invalid: !!invalid.error };
  },
});

library.addTest(tests.validateNumber, {
  name: 'joi',
  setup() {
    return {
      schema: numberSchema,
      validData: 42,
      invalidData: 150, // exceeds max
    };
  },
  run(ctx) {
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);
    return { valid: !valid.error, invalid: !!invalid.error };
  },
});

library.addTest(tests.validateEmail, {
  name: 'joi',
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
      const result = ctx.schema.validate(email);
      if (!result.error) validCount++;
    }

    for (const email of ctx.invalidEmails) {
      const result = ctx.schema.validate(email);
      if (result.error) invalidCount++;
    }

    return { validCount, invalidCount };
  },
});

// Object Validation Tests
library.addTest(tests.validateFlatObject, {
  name: 'joi',
  setup() {
    return {
      schema: userSchema,
      validData: validUser,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test object validation performance
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);
    return {
      valid: !valid.error,
      invalid: !!invalid.error,
      validData: valid.value || null,
    };
  },
});

library.addTest(tests.validateNestedObject, {
  name: 'joi',
  setup() {
    return {
      schema: profileSchema,
      validData: validProfile,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test complex nested validation
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);
    return {
      valid: !valid.error,
      invalid: !!invalid.error,
      hasData: !!valid.value,
    };
  },
});

library.addTest(tests.validateArray, {
  name: 'joi',
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
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);
    return {
      valid: !valid.error,
      invalid: !!invalid.error,
      itemCount: valid.value ? valid.value.length : 0,
    };
  },
});

// Error Handling Tests
library.addTest(tests.catchValidationErrors, {
  name: 'joi',
  setup() {
    return {
      schema: userSchema,
      invalidData: invalidUser,
    };
  },
  run(ctx) {
    // Test error handling performance
    const result = ctx.schema.validate(ctx.invalidData, { abortEarly: false });

    if (result.error) {
      const details = result.error.details;
      return {
        success: false,
        errorCount: details.length,
        hasErrors: true,
        firstError: details[0]?.message,
      };
    }

    return { success: true, errorCount: 0, hasErrors: false };
  },
});

library.addTest(tests.multipleErrors, {
  name: 'joi',
  setup() {
    return {
      schema: profileSchema,
      invalidData: invalidProfile,
    };
  },
  run(ctx) {
    // Test multiple error collection
    const result = ctx.schema.validate(ctx.invalidData, { abortEarly: false });

    if (result.error) {
      const details = result.error.details;
      const errorPaths = details.map(d => d.path.join('.'));
      const errorTypes = details.map(d => d.type);

      return {
        errorCount: details.length,
        hasMultiple: details.length > 1,
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
  name: 'joi-batch',
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
      const result = ctx.schema.validate(item);
      if (!result.error) {
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
  name: 'joi-transform',
  setup() {
    return {
      schema: transformSchema,
      data: transformData,
    };
  },
  run(ctx) {
    // Test transformation performance
    const result = ctx.schema.validate(ctx.data);

    if (!result.error && result.value) {
      return {
        success: true,
        transformed: true,
        hasDate: result.value.date instanceof Date,
        hasNumber: typeof result.value.number === 'number',
        hasTrimmed: result.value.trimmed === 'hello world',
        hasUpper: result.value.upper === 'HELLO',
      };
    }

    return { success: false, transformed: false };
  },
});

// Strict mode validation test (Joi-specific feature)
library.addTest(tests.validateNestedObject, {
  name: 'joi-strict',
  setup() {
    // Create a strict schema that doesn't allow unknown keys
    const strictSchema = Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }).options({ allowUnknown: false, stripUnknown: false });

    return {
      schema: strictSchema,
      validData: { id: 1, name: 'John', email: 'john@example.com' },
      invalidData: { id: 1, name: 'John', email: 'john@example.com', extra: 'field' },
    };
  },
  run(ctx) {
    // Test strict validation performance
    const valid = ctx.schema.validate(ctx.validData);
    const invalid = ctx.schema.validate(ctx.invalidData);

    return {
      valid: !valid.error,
      invalid: !!invalid.error,
      strictMode: true,
    };
  },
});

// Conditional validation test
library.addTest(tests.validateNestedObject, {
  name: 'joi-conditional',
  setup() {
    // Create a schema with conditional validation
    const conditionalSchema = Joi.object({
      type: Joi.string().valid('personal', 'business').required(),
      email: Joi.when('type', {
        is: 'business',
        then: Joi.string().email().domain({ minDomainSegments: 2 }).required(),
        otherwise: Joi.string().email().required(),
      }),
      taxId: Joi.when('type', {
        is: 'business',
        then: Joi.string().required(),
        otherwise: Joi.optional(),
      }),
    });

    return {
      schema: conditionalSchema,
      personalData: { type: 'personal', email: 'user@example.com' },
      businessData: { type: 'business', email: 'contact@company.com', taxId: '12-3456789' },
    };
  },
  run(ctx) {
    // Test conditional validation performance
    const personal = ctx.schema.validate(ctx.personalData);
    const business = ctx.schema.validate(ctx.businessData);

    return {
      personalValid: !personal.error,
      businessValid: !business.error,
      conditional: true,
    };
  },
});

console.log('✅ Joi library benchmarks registered');