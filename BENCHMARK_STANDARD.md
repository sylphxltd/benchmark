# Benchmark Architecture Standard

**Version:** 1.0.0
**Status:** Active
**Last Updated:** 2024-11-10

---

## Executive Summary

This document defines the authoritative standard for all benchmark implementations in this repository. Following these standards ensures:

- **Fair Comparison** - Libraries compete only when they have native support for tested features
- **Reproducibility** - Consistent methodology across all categories
- **Credibility** - Benchmarks reflect real-world performance, not synthetic constructs
- **Maintainability** - Clear organization enables long-term evolution

**Core Mandate:** Test capabilities, not implementations. Never use placeholder or fake implementations.

---

## Why This Standard Exists

### The Problem

Without standardization, benchmarks suffer from:

1. **Placeholder Implementations** - Testing string concatenation instead of actual framework APIs
2. **Unfair Comparisons** - Libraries with different capabilities forced into the same tests
3. **Misleading Results** - All libraries showing similar performance because tests don't use real APIs
4. **Inconsistent Structure** - Each category organized differently, reducing clarity

### Real-World Example: The CSS Framework Anti-Pattern

**❌ What NOT to do:**

```typescript
// This benchmark is MEANINGLESS
describe('Style Application', () => {
  bench('Framework A', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`class-${i}`);  // Just string concatenation!
    }
    return styles.join(' ');
  });

  bench('Framework B', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`other-${i}`);  // Also just string concatenation!
    }
    return styles.join(' ');
  });
});
```

**Why this is wrong:**
- Not using any actual framework APIs
- Only measuring JavaScript string operations
- All frameworks will perform identically
- Results are meaningless for decision-making

**✅ What TO do:**

```typescript
// Use real framework APIs
describe('Style Application', () => {
  bench('Silk', () => {
    silk({
      color: 'red',
      padding: 4,
      // ... actual API calls
    });
  });

  bench('Panda CSS', () => {
    css({
      color: 'red',
      padding: 4,
      // ... actual API calls
    });
  });
});
```

---

## Core Principles

### 1. Test Capabilities, Not Implementations

**Principle:** Only test libraries on features they natively support.

**Rationale:** Libraries have different architectures and capabilities. Forcing all libraries to participate in every test creates unfair comparisons and necessitates fake implementations.

**Example:**
- ✅ Jotai participates in "Reactive Async" tests (native support)
- ❌ Redux does NOT participate in "Reactive Async" (no native support)
- ✅ Redux participates in "Async State Management" (can manage async state manually)

### 2. Universal vs Feature Tests

**Universal Tests:**
- All libraries participate equally
- Test fundamental capabilities all libraries share
- Used to calculate overall performance scores
- Examples: read, write, creation, subscription

**Feature Tests:**
- Only libraries with native support participate
- Grouped by capability, not by library
- Show performance within architectural approach
- Examples: native computed, reactive async, batching

### 3. Zero Tolerance for Placeholders

**Principle:** If a library doesn't support a feature, it DOES NOT participate in that test.

**Rationale:** Placeholder implementations (empty functions, fake operations) produce meaningless results that mislead users.

**Rule:** Better to show absence (library not in results) than fake presence (library with placeholder).

### 4. Architectural Fairness

**Principle:** Compare like with like.

**Implementation:**
- Native computed (automatic dependency tracking) → One test group
- Selector pattern (manual derived state) → Separate test group
- These groups don't compete with each other

---

## Directory Structure Standards

### Simple Categories (All Tests Universal)

**Use when:** All libraries can participate in all tests equally.

**Examples:** Immutability libraries, simple router matching.

```
benchmarks/[category-name]/
├── README.md                    # Main documentation
├── features.json                # Feature support matrix
├── library-metadata.json        # Library information
├── versions.json                # Version tracking + bundle sizes
├── src/
│   ├── benchmark.bench.ts       # Main universal tests (all libraries)
│   ├── benchmark-[feature].bench.ts  # Feature tests (subset of libraries)
│   └── [implementations]/       # Library-specific code (if needed)
├── results/                     # Historical benchmark results
│   ├── latest.json
│   └── [dated-results]/
├── charts/                      # Performance visualizations
└── vitest.config.ts             # Vitest configuration
```

### Complex Categories (Multiple Test Groups)

**Use when:** Many distinct test dimensions with feature variations.

**Examples:** State management with 10+ test groups.

```
benchmarks/[category-name]/
├── README.md
├── features.json
├── library-metadata.json
├── versions.json
├── src/
│   ├── stores/                  # Library implementations
│   └── [shared-utilities]/
├── groups/
│   ├── 01-read/                 # Universal test group
│   │   ├── read-x1.bench.ts
│   │   ├── read-x1000.bench.ts
│   │   ├── results.json
│   │   └── README.md
│   ├── 02-write/                # Universal test group
│   ├── 03-creation/             # Universal test group
│   ├── 04-subscribers/          # Universal test group
│   ├── 05-array-ops/            # Universal test group
│   ├── 06-map-ops/              # Universal test group
│   ├── 07-computed-native/      # Feature test (5 libraries)
│   ├── 08-selectors/            # Feature test (3 libraries)
│   ├── 09-async-reactive/       # Feature test (1 library)
│   └── 10-batching-native/      # Feature test (3 libraries)
├── results/
└── charts/
```

**Numbering Convention:**
- `01-06`: Universal tests (all libraries participate)
- `07-20`: Feature tests (libraries with native support only)
- Use descriptive names after numbers: `07-computed-native`, not just `07-computed`

---

## Test Classification

### Universal Tests (01-06 range)

**Definition:** Tests where all libraries in the category can participate equally.

**Characteristics:**
- Test fundamental operations
- All libraries have equivalent capabilities
- Used for "Overall Performance Score"
- Must use real library APIs

**Examples:**
```typescript
// ✅ Universal Test - All libraries can read state
describe('Simple Read', () => {
  bench('Library A', () => {
    libraryA.get(store);  // Real API
  });
  bench('Library B', () => {
    libraryB.getState();  // Real API
  });
  // All libraries participate
});
```

**Categories of Universal Tests:**
- Basic CRUD operations (create, read, update, delete)
- State initialization
- Subscription/notification
- Array/object operations (using basic APIs)
- Performance at scale (10x, 100x, 1000x)

### Feature Tests (07-20 range)

**Definition:** Tests for capabilities only supported by subset of libraries.

**Characteristics:**
- Only libraries with native support participate
- Grouped by capability/architecture
- Separate performance rankings
- Show feature completeness

**Examples:**
```typescript
// ✅ Feature Test - Only libraries with native computed
describe('Native Computed Values', () => {
  bench('Jotai', () => {
    // Native automatic dependency tracking
    const doubled = atom((get) => get(baseAtom) * 2);
  });
  bench('MobX', () => {
    // Native automatic dependency tracking
    get doubled() { return this.value * 2; }
  });
  // ONLY Jotai, MobX, Solid, Preact Signals, Zen participate
});

// ✅ Separate Feature Test - Different architecture
describe('Selector Pattern', () => {
  bench('Redux', () => {
    // Manual selector with memoization
    createSelector([selectValue], (val) => val * 2);
  });
  bench('Zustand', () => {
    // Manual selector
    (state) => state.value * 2;
  });
  // ONLY Redux, Zustand, Valtio participate
});
```

**Feature Test Categories:**
- Architectural features (native computed vs selectors)
- Advanced capabilities (reactive async, batching)
- Data structure support (Map/Set, JSON Patches)
- Optimization features (structural sharing, memoization)

---

## Implementation Standards

### Real Implementation Requirements

**Every benchmark MUST:**

1. **Import actual library code**
   ```typescript
   ✅ import { produce } from 'immer';
   ✅ import { create } from 'mutative';
   ❌ // No imports = fake test
   ```

2. **Call real library APIs**
   ```typescript
   ✅ produce(obj, draft => { draft.count++ });
   ❌ obj.count++;  // Not using library!
   ```

3. **Measure actual library operations**
   ```typescript
   ✅ bench('Immer', () => {
     produce(data, draft => { draft.value = 1; });
   });
   ❌ bench('Immer', () => {
     data.value = 1;  // Not using Immer!
   });
   ```

### Validation Criteria

**Ask these questions for every benchmark:**

1. ✅ Does it import the library's package?
2. ✅ Does it call the library's actual API?
3. ✅ Would removing the library break this benchmark?
4. ✅ Does it test the library's unique approach/architecture?

**If any answer is NO → The test is invalid.**

### Code Examples

#### ✅ Correct: Real Implementations

```typescript
// Immutability - Real implementations
describe('Nested Update', () => {
  bench('Immer', () => {
    produce(obj, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Mutative', () => {
    create(obj, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Native Spread', () => {
    return {
      ...obj,
      user: {
        ...obj.user,
        profile: {
          ...obj.user.profile,
          age: obj.user.profile.age + 1
        }
      }
    };
  });
});
```

#### ❌ Incorrect: Placeholder Implementations

```typescript
// All these are WRONG - just testing JavaScript operations
describe('Bad Test', () => {
  bench('Library A', () => {
    const result = `class-${i}`;  // String concatenation
  });

  bench('Library B', () => {
    const result = obj.value + 1;  // Basic arithmetic
  });

  bench('Library C', () => {
    const result = [...arr];  // Native spread
  });
});
```

---

## Features Matrix Standard

### features.json Format

**Purpose:** Define which libraries support which features.

**Structure:**
```json
{
  "features": {
    "feature-key": {
      "name": "Human-Readable Feature Name",
      "description": "What this feature does and why it matters",
      "supported": ["library-1", "library-2", "library-3"]
    },
    "another-feature": {
      "name": "Another Feature",
      "description": "Description of this feature",
      "supported": ["library-1"]
    }
  }
}
```

**Example:**
```json
{
  "features": {
    "computed-native": {
      "name": "Native Computed Values",
      "description": "Automatic dependency tracking for derived values without manual selectors",
      "supported": ["jotai", "mobx", "solid-js", "@preact/signals", "@sylphx/zen"]
    },
    "selectors": {
      "name": "Selector Pattern",
      "description": "Manual derived state using selector functions",
      "supported": ["@reduxjs/toolkit", "zustand", "valtio"]
    },
    "async-reactive": {
      "name": "Reactive Async",
      "description": "Async computations that automatically recompute when dependencies change",
      "supported": ["jotai"]
    }
  }
}
```

**Rules:**
1. Use kebab-case for feature keys
2. `supported` array uses exact package names (from package.json)
3. Description should explain WHY this matters, not just WHAT it is
4. If no library supports a feature, don't include it

---

## library-metadata.json Format

**Purpose:** Store library information for display.

**Structure:**
```json
{
  "libraries": {
    "package-name": {
      "name": "Official Name",
      "displayName": "Display Name",
      "description": "One-line description of the library",
      "url": "https://github.com/...",
      "npm": "package-name",
      "color": "#HEX_COLOR"
    }
  }
}
```

**Example:**
```json
{
  "libraries": {
    "jotai": {
      "name": "Jotai",
      "displayName": "Jotai",
      "description": "Primitive and flexible state management for React",
      "url": "https://github.com/pmndrs/jotai",
      "npm": "jotai",
      "color": "#000000"
    }
  }
}
```

---

## Results Format

### Per-Test Results

**Structure:**
```json
{
  "files": [
    {
      "filepath": "groups/01-read/read-x1.bench.ts",
      "groups": [
        {
          "fullName": "Simple Read",
          "benchmarks": [
            {
              "name": "Simple Read - Jotai",
              "library": "jotai",
              "hz": 5234567.89,
              "mean": 0.000191,
              "p99": 0.000234,
              "rme": 0.89,
              "samples": 2617284
            }
          ]
        }
      ]
    }
  ]
}
```

**Required fields:**
- `library`: Package name (lowercase, matches features.json)
- `hz`: Operations per second
- `mean`: Mean time per operation (seconds)
- `p99`: 99th percentile
- `rme`: Relative margin of error (percentage)
- `samples`: Number of samples collected

---

## README Format Standard

### Required Sections (in order)

```markdown
# [Category Name] Benchmarks

**Last Updated:** YYYY-MM-DD
**Libraries Tested:** N libraries
**Total Tests:** N tests across M groups

## 📊 Overall Performance Score

> **Methodology:** Geometric mean across Universal Tests (01-06)
>
> These tests measure fundamental operations that all libraries support equally.

| Rank | Library | Score | Relative Performance |
|------|---------|-------|---------------------|
| 🥇 1 | Library A | 100.0 | Baseline |
| 🥈 2 | Library B | 87.3 | 0.87x |
| 🥉 3 | Library C | 72.1 | 0.72x |

## 🎯 Feature Support Matrix

| Library | Native Computed | Reactive Async | Batching | Middleware |
|---------|----------------|----------------|----------|------------|
| Library A | ✅ | ✅ | ✅ | ❌ |
| Library B | ✅ | ❌ | ✅ | ✅ |
| Library C | ❌ (use selectors) | ❌ | ❌ | ✅ |

**Legend:**
- ✅ Native support
- ❌ Not supported
- 📝 (alternative) Alternative approach available

## 📦 Bundle Sizes

| Library | Version | Minified | Gzipped |
|---------|---------|----------|---------|
| Library A | 1.2.3 | 12.5 KB | 4.8 KB |
| Library B | 2.0.1 | 8.3 KB | 3.1 KB |

## 🧪 Test Categories

### Universal Tests (All Libraries)

All libraries participate equally in these tests.

- **[01-read](./groups/01-read/)** - State reading performance
- **[02-write](./groups/02-write/)** - State update performance
- **[03-creation](./groups/03-creation/)** - Store initialization cost
- ...

### Feature-Specific Tests

Only libraries with native support participate.

- **[07-computed-native](./groups/07-computed-native/)** - Native computed values (5 libraries)
- **[08-selectors](./groups/08-selectors/)** - Selector pattern (3 libraries)
- **[09-async-reactive](./groups/09-async-reactive/)** - Reactive async (1 library)
- ...

## 📈 Detailed Results

[Link to detailed results by test group]

## 🔬 Methodology

- **Tool:** Vitest Bench
- **Runs:** 5 iterations minimum
- **Samples:** Adaptive (until statistically significant)
- **Environment:** Node.js v20+
- **Principle:** Test capabilities, not implementations

## 📚 Related Documentation

- [Benchmark Standard](../../BENCHMARK_STANDARD.md)
- [Contributing Guidelines](../../CONTRIBUTING.md)
```

### Section Requirements

**Overall Performance Score:**
- MUST be based only on Universal Tests
- MUST use geometric mean
- MUST NOT include feature test results
- MUST show relative performance (baseline = 100)

**Feature Support Matrix:**
- MUST match features.json
- MUST use consistent symbols (✅/❌)
- MUST explain alternatives in notes

**Bundle Sizes:**
- MUST include version numbers
- MUST show both minified and gzipped
- MUST be kept up to date (automated via versions.json)

---

## Anti-Patterns

### ❌ Anti-Pattern 1: Placeholder Implementations

**Example:**
```typescript
// WRONG - Just testing string concatenation
bench('Framework A', () => {
  return `class-${i}`;
});
```

**Why wrong:** Not using framework API, meaningless results.

**Solution:** Use real framework APIs or exclude the library.

### ❌ Anti-Pattern 2: Mixing Test Types in Overall Score

**Example:**
```typescript
// WRONG - Including feature test in overall score
const overallScore = geometricMean([
  ...universalTests,
  reactiveAsyncScore  // Only Jotai supports this!
]);
```

**Why wrong:** Unfair to libraries that don't support the feature.

**Solution:** Overall score only from Universal Tests, feature tests separate.

### ❌ Anti-Pattern 3: Forcing Participation

**Example:**
```typescript
// WRONG - Zustand doesn't have native computed
bench('Zustand', () => {
  // Empty function or fake implementation
  return store.value * 2;  // Not a computed value!
});
```

**Why wrong:** Tests non-existent capability, misleading results.

**Solution:** Zustand doesn't participate in native computed tests.

### ❌ Anti-Pattern 4: Inconsistent Naming

**Example:**
```
groups/
├── read/           # No number
├── write/          # No number
├── computed/       # No number
├── 01-async/       # Has number (inconsistent)
```

**Why wrong:** Unclear which tests are universal vs feature.

**Solution:** All groups use numbered prefixes, 01-06 for universal.

---

## Migration Guide

### Updating Existing Categories

**Step 1: Audit Current Tests**

Questions to ask:
1. Do all tests use real library APIs?
2. Are placeholder implementations present?
3. Is Universal vs Feature distinction clear?
4. Does features.json use the new format?

**Step 2: Update features.json**

```json
// OLD FORMAT (array-based)
{
  "features": [
    { "id": "feature1", "label": "Feature 1" }
  ],
  "libraries": {
    "lib-a": { "feature1": true }
  }
}

// NEW FORMAT (capability-based)
{
  "features": {
    "feature1": {
      "name": "Feature 1",
      "description": "What it does",
      "supported": ["lib-a", "lib-b"]
    }
  }
}
```

**Step 3: Remove Placeholder Tests**

- Identify tests that don't use library APIs
- Remove them or implement real versions
- Update results.json to remove invalid data

**Step 4: Reorganize Test Groups** (if complex category)

- Add numbered prefixes (01-06 for universal)
- Separate feature tests (07-20)
- Update package.json scripts

**Step 5: Update README**

- Add Overall Performance Score section
- Add Feature Support Matrix
- Clarify test classification

### Creating New Categories

**Step 1: Determine Category Type**

- Simple (all tests universal) → Flat structure
- Complex (many feature variations) → Groups structure

**Step 2: Create Required Files**

```bash
mkdir -p benchmarks/[category]/src
mkdir -p benchmarks/[category]/results
mkdir -p benchmarks/[category]/charts

touch benchmarks/[category]/README.md
touch benchmarks/[category]/features.json
touch benchmarks/[category]/library-metadata.json
touch benchmarks/[category]/versions.json
touch benchmarks/[category]/vitest.config.ts
```

**Step 3: Define Feature Matrix**

Create `features.json` listing all capabilities and which libraries support them.

**Step 4: Implement Tests**

- Universal tests first (all libraries)
- Feature tests second (by capability)
- NO placeholders

**Step 5: Generate Results & README**

- Run benchmarks
- Generate README following standard format
- Include Overall Performance Score and Feature Matrix

---

## Validation Checklist

### Before Committing Benchmarks

- [ ] All tests use real library APIs (no placeholders)
- [ ] features.json uses new format
- [ ] library-metadata.json is complete
- [ ] versions.json includes bundle sizes
- [ ] README has all required sections
- [ ] Overall Performance Score only uses Universal Tests
- [ ] Feature tests grouped by capability
- [ ] Test groups numbered correctly (01-06 universal, 07+ feature)
- [ ] No library forced to participate in unsupported features
- [ ] Results.json matches actual test participation

### During Review

- [ ] Can I remove the library and the test still compiles? (If yes → placeholder)
- [ ] Are results meaningful for decision-making? (If no → investigate)
- [ ] Is the comparison fair? (Same capabilities competing)
- [ ] Is the documentation clear? (Can user understand what's tested)

---

## Conclusion

This standard ensures our benchmarks provide **credible, fair, and actionable** performance data.

**Key Takeaways:**

1. **Test capabilities, not implementations** - Only test what libraries actually support
2. **Zero tolerance for placeholders** - Absence is better than fake presence
3. **Universal vs Feature distinction** - Clear separation enables fair comparison
4. **Consistent structure** - All categories follow the same pattern

By following this standard, we create benchmarks that developers can trust and rely on for making informed library choices.

---

**Questions or Concerns?**

Open an issue in the repository or refer to existing benchmark implementations for examples.

**Standard Compliance:** All new benchmarks MUST follow this standard. Existing benchmarks should be migrated during next major update.
