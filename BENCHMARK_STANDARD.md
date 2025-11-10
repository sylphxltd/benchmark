# Benchmark Architecture Standard

This document defines the **unified standard** for all benchmark categories in this repository. Every category MUST follow this standard for consistency, maintainability, and comparability.

---

## 📐 Directory Structure

Every benchmark category MUST follow this structure:

```
benchmarks/[category-name]/
├── README.md                    # Main category README (auto-generated)
├── package.json                 # Category dependencies
├── vitest.config.ts            # Vitest configuration
│
├── features.json                # ✨ Feature support matrix
├── library-metadata.json        # Library metadata (URLs, descriptions)
├── versions.json                # Tracked library versions (auto-generated)
│
├── src/                         # Source code
│   ├── implementations/         # Library-specific implementations
│   │   ├── [library-1]/
│   │   ├── [library-2]/
│   │   └── ...
│   └── tests/                   # Shared test utilities (optional)
│
├── groups/                      # Test groups (modular structure)
│   ├── 01-[group-name]/
│   │   ├── README.md           # Group README (auto-generated)
│   │   ├── [test-name].bench.ts
│   │   └── results.json        # Group results (auto-generated)
│   ├── 02-[group-name]/
│   └── .../
│
├── results/                     # Historical results (auto-generated)
│   ├── latest.json             # Latest benchmark results
│   ├── 2025-11-10.json        # Daily snapshots
│   └── .../
│
├── charts/                      # Visual charts (auto-generated)
│   ├── performance.svg
│   ├── bundle-size.svg
│   └── .../
│
└── scripts/                     # Category-specific scripts
    ├── generate-readme.cjs     # README generator
    └── .../
```

---

## 🧪 Test Organization

### **Principle: Universal vs Feature Tests**

Tests are categorized into two types:

#### **1. Universal Tests** (All libraries participate equally)

Tests that measure basic capabilities all libraries have:

```typescript
// Example: groups/01-read/simple-read.bench.ts
describe('Simple Read', () => {
  bench('Library A', () => { /* read operation */ })
  bench('Library B', () => { /* read operation */ })
  bench('Library C', () => { /* read operation */ })
})
```

**Characteristics:**
- ✅ All libraries participate
- ✅ Tests basic functionality
- ✅ Fair comparison
- ✅ Used for **Overall Performance Score**

**Examples:**
- Read operations
- Write operations
- Basic array/object operations
- Store creation

---

#### **2. Feature Tests** (Libraries grouped by capability)

Tests for advanced features that only some libraries support:

```typescript
// Example: groups/08-computed-native/native-computed.bench.ts
describe('Native Computed', () => {
  // Only libraries with native computed values
  bench('Jotai', () => { /* computed atom */ })
  bench('MobX', () => { /* computed value */ })
  bench('Solid Signals', () => { /* createMemo */ })
  // Libraries without native computed DON'T participate
})

// Example: groups/09-selectors/selector-pattern.bench.ts
describe('Selector Pattern', () => {
  // Only libraries using selector pattern
  bench('Redux', () => { /* reselect selector */ })
  bench('Zustand', () => { /* selector */ })
  // Others DON'T participate
})
```

**Characteristics:**
- ⚠️ Only libraries with native support participate
- ⚠️ No fake/placeholder implementations
- ⚠️ NOT used for Overall Performance Score
- ✅ Used for **Feature Comparison Matrix**

**Examples:**
- Native computed values vs Selector pattern
- Reactive async vs Manual async
- Native batching vs No batching
- Proxy-based tracking
- Middleware systems

---

### **Test Group Naming Convention**

```
groups/
├── 01-[category]/              # Universal test (all libraries)
├── 02-[category]/              # Universal test
├── ...
├── 07-[feature]-native/        # Feature test (subset A)
├── 08-[feature]-alternative/   # Feature test (subset B)
├── ...
```

**Rules:**
- Use 2-digit prefix for ordering
- Universal tests: `01-06` range
- Feature tests: `07-20` range
- Use descriptive names: `computed-native`, `async-reactive`, `batching-native`

---

## 📊 Results Format

### **results.json Structure**

```json
{
  "files": [
    {
      "filepath": "groups/01-read/simple-read.bench.ts",
      "groups": [
        {
          "fullName": "Simple Read",
          "benchmarks": [
            {
              "name": "Simple Read - Library A",
              "library": "library-a",
              "hz": 1234567.89,
              "mean": 0.00000081,
              "p99": 0.00000123,
              "rme": 0.5,
              "samples": 1234567
            }
          ]
        }
      ]
    }
  ]
}
```

**Required fields:**
- `name`: Full benchmark name (includes library)
- `library`: Library identifier (kebab-case)
- `hz`: Operations per second
- `mean`: Mean execution time (seconds)
- `p99`: 99th percentile (seconds)
- `rme`: Relative margin of error (%)
- `samples`: Number of samples collected

---

## ✨ Feature Support Matrix

### **features.json Structure**

This file defines what features each library supports:

```json
{
  "features": {
    "native-computed": {
      "name": "Native Computed Values",
      "description": "Automatic dependency tracking for derived values",
      "supported": ["jotai", "mobx", "solid-signals", "preact-signals", "zen"]
    },
    "reactive-async": {
      "name": "Reactive Async",
      "description": "Async computations that automatically recompute when dependencies change",
      "supported": ["jotai"]
    },
    "native-batching": {
      "name": "Native Batching",
      "description": "Built-in update batching to reduce notification overhead",
      "supported": ["solid-signals", "mobx", "valtio"]
    },
    "middleware": {
      "name": "Middleware System",
      "description": "Plugin system for extending functionality",
      "supported": ["redux-toolkit", "zustand"]
    }
  }
}
```

**Rules:**
- Feature key must match test group name (e.g., `native-computed` -> `groups/07-computed-native/`)
- `supported` array contains library identifiers
- Only libraries in `supported` array should participate in that feature test

---

## 📦 Library Metadata

### **library-metadata.json Structure**

```json
{
  "libraries": {
    "library-a": {
      "name": "Library A",
      "displayName": "Library A",
      "description": "Brief description of the library",
      "url": "https://github.com/org/library-a",
      "npm": "library-a",
      "color": "#FF5733"
    }
  }
}
```

---

## 📈 Bundle Size Tracking

Every category MUST track bundle sizes for comparison:

### **How to implement:**

```typescript
// scripts/track-bundle-size.ts
import { bundleSize } from '../shared/bundle-size-tracker'

const libraries = [
  { name: 'library-a', imports: ['library-a'] },
  { name: 'library-b', imports: ['library-b'] },
]

// Auto-generates bundle size data
await bundleSize(libraries)
```

### **versions.json Structure** (auto-generated)

```json
{
  "library-a": {
    "version": "1.2.3",
    "size": {
      "minified": 12345,
      "gzipped": 4567
    },
    "lastUpdated": "2025-11-10T00:00:00Z"
  }
}
```

---

## 📄 README Format

Every category README MUST include these sections in order:

### **1. Header**
- Category name and emoji
- Brief description
- Table of contents

### **2. Benchmark Information**
```markdown
## 📋 Benchmark Information
- Last Updated: [date]
- Environment: Node.js version, OS
- Test Framework: Vitest Bench
- Iterations: 3 runs averaged
```

### **3. Library Versions**
Table with:
- Library name (linked)
- Version
- Bundle size (gzipped)
- Last updated
- Update status (✅ Latest / ⚠️ Incompatible)

### **4. Bundle Size Comparison**
- Ranked table by size
- Visual comparison chart
- Size insight (smallest vs largest)

### **5. Overall Performance Score**
**Based ONLY on Universal Tests**
- Geometric mean across all universal tests
- Normalized scores (fastest = 100)
- Relative percentages

```markdown
## 🚀 Overall Performance Score

Based on **Universal Tests only** (01-06):

| Rank | Library | Score | Relative | Tests |
|------|---------|-------|----------|-------|
| 🥇 | Library A | 98.5/100 | Baseline | 12 |
| 🥈 | Library B | 85.3/100 | 86.6% | 12 |
```

### **6. Feature Support Matrix**
```markdown
## ✨ Feature Support

| Library | Native Computed | Reactive Async | Native Batching |
|---------|----------------|----------------|-----------------|
| Library A | ✅ | ✅ | ❌ |
| Library B | ❌ | ❌ | ✅ |
```

### **7. Test Categories**

#### **Universal Tests**
List all universal test groups with:
- Group name
- Description
- Link to detailed results
- Performance chart
- Top 3 performers

#### **Feature Tests**
List all feature test groups with:
- Group name
- Participating libraries only
- Link to detailed results
- Feature comparison

### **8. Detailed Results**
Link to each test group's detailed README

### **9. Running Benchmarks**
```bash
npm install
npm run benchmark
npm run generate-readme
```

### **10. About**
Category-specific notes and context

---

## 🎯 Scoring Methodology

### **Overall Performance Score**

**Formula:**
```
1. For each universal test:
   - Normalize: fastest = 100, others = (their_hz / fastest_hz) * 100

2. For each library:
   - Collect all normalized scores
   - Calculate geometric mean: (score1 * score2 * ... * scoreN)^(1/N)

3. Rank by geometric mean
```

**Why geometric mean?**
- Prevents extreme outliers from skewing results
- A library must be consistently good, not just excel in one test
- More representative of overall performance

### **Feature-Specific Scores**

Calculated separately for each feature test group, not included in overall score.

---

## 🔧 Test Implementation Guidelines

### **1. Test Naming**

```typescript
// ✅ Good: Includes library name
bench('Simple Read - Jotai', () => { ... })
bench('Simple Read - Zustand', () => { ... })

// ❌ Bad: No library name
bench('Jotai', () => { ... })
bench('Test 1', () => { ... })
```

### **2. Test Fairness**

```typescript
// ✅ Good: Each library uses its native approach
bench('Computed - Jotai', () => {
  const computed = atom((get) => get(source) * 2)  // Native
})

bench('Computed - Zustand', () => {
  const computed = useStore((state) => state.value * 2)  // Native
})

// ❌ Bad: Forcing one pattern on all libraries
bench('Computed - Zustand', () => {
  // Zustand doesn't have native computed, don't fake it!
  // DON'T participate if not supported
})
```

### **3. Scale Tests**

When testing at scale, use these standard sizes:

```typescript
// Small scale
const sizes = {
  tiny: 1,
  small: 10,
  medium: 100,
  large: 1000,
  xlarge: 10000,
  xxlarge: 100000,
}

// Example
describe('Read - Small Scale', () => {
  bench('Read 1 value', ...)        // tiny
  bench('Read 100 values', ...)     // medium
})

describe('Read - Large Scale', () => {
  bench('Read 10K values', ...)     // xlarge
  bench('Read 100K values', ...)    // xxlarge
})
```

### **4. Test Data**

```typescript
// Create standard test data
const testData = {
  simpleObject: { count: 0, name: 'test' },
  nestedObject: { user: { profile: { name: 'John' } } },
  deepObject: { a: { b: { c: { d: { e: { value: 42 } } } } } },
  smallArray: Array.from({ length: 100 }, (_, i) => i),
  largeArray: Array.from({ length: 10000 }, (_, i) => ({ id: i, value: i })),
}
```

---

## 🚫 Anti-Patterns

### **DON'T: Fake implementations**

```typescript
// ❌ BAD: Placeholder for unsupported feature
bench('Reactive Async - Zustand', async () => {
  await new Promise(resolve => setTimeout(resolve, 0))
  // This is not reactive async! Don't do this!
})
```

**Instead:** Only libraries with real support participate.

### **DON'T: Mix universal and feature tests**

```typescript
// ❌ BAD: Mixing in same group
describe('Read Operations', () => {
  bench('Simple Read - All Libraries', ...)  // Universal
  bench('Computed Read - Some Libraries', ...)  // Feature-specific
})
```

**Instead:** Separate into different groups.

### **DON'T: Include feature tests in overall score**

```typescript
// ❌ BAD: Including reactive-async in comprehensive score
// This is unfair because only Jotai supports it
comprehensiveScore = geometricMean([
  ...universalTests,
  reactiveAsyncScore  // DON'T!
])
```

**Instead:** Feature tests have separate rankings.

---

## ✅ Checklist for New Categories

When creating a new benchmark category:

- [ ] Follow directory structure exactly
- [ ] Create `features.json` with feature matrix
- [ ] Create `library-metadata.json`
- [ ] Implement bundle size tracking
- [ ] Separate universal vs feature tests
- [ ] Number groups with 2-digit prefix
- [ ] All universal tests include all libraries
- [ ] Feature tests only include supporting libraries
- [ ] Generate README with all required sections
- [ ] Overall score based ONLY on universal tests
- [ ] Feature comparison matrix shows support
- [ ] Historical results saved by date
- [ ] Charts auto-generated

---

## 📚 Examples

See existing categories for reference:
- **Good examples:** `immutability`, `router`, `css-frameworks` (flat structure, features.json, bundle tracking)
- **Being refactored:** `state-management` (will follow this standard)

---

## 🔄 Migration Guide

For existing categories that don't follow this standard:

### **Phase 1: Structure**
1. Add `features.json`
2. Add `library-metadata.json`
3. Reorganize into `groups/` with numbered prefixes
4. Add bundle size tracking

### **Phase 2: Tests**
1. Separate universal vs feature tests
2. Remove placeholder implementations
3. Ensure consistent naming

### **Phase 3: Results**
1. Regenerate with new structure
2. Update README format
3. Add feature comparison matrix

---

**Version:** 1.0.0
**Last Updated:** 2025-11-10
**Status:** ✅ Active Standard
