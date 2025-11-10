# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of operations per second across all universal tests

| Rank | Library | Score (ops/sec) | vs Leader |
|------|---------|-----------------|-----------|
| 🥇 1 | **Solid Signals** | **2,502,108** | Baseline |
| 🥈 2 | **Preact Signals** | **2,325,407** | 0.93x |
| 🥉 3 | **Zen** | **2,279,178** | 0.91x |
| 4 | **Jotai** | **1,271,186** | 0.51x |
| 5 | **Valtio** | **257,721** | 0.10x |
| 6 | **Zustand** | **188,301** | 0.08x |
| 7 | **Redux Toolkit** | **103,883** | 0.04x |
| 8 | **MobX** | **41,604** | 0.02x |

> **Note**: Groups 04 (Complexity), 05 (Cache), and 07 (Form) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

---

## Library Comparison

| Library | Version | Bundle Size (gzip) | Overall Score | Read | Write | Creation | Memory |
|---------|---------|-------------------|---------------|------|-------|----------|--------|
| Solid Signals | 1.9.10 | 4.1 KB | 2,502,108 | 39.9M | 33.1M | 32.1M | 923 |
| Preact Signals | 2.4.0 | 3.1 KB | 2,325,407 | 34.3M | 28.2M | 33.4M | 904 |
| Zen | 1.2.1 | 5.5 KB | 2,279,178 | 32.2M | 28.2M | 32.2M | 924 |
| Jotai | 2.15.1 | 4.4 KB | 1,271,186 | 36.3M | 33.9M | 2.3M | 917 |
| Valtio | 2.2.0 | 3.1 KB | 257,721 | 4.9M | 4.2M | 235K | 898 |
| Zustand | 5.0.8 | 1.2 KB | 188,301 | 363K | 351K | 10.9M | 907 |
| Redux Toolkit | 2.10.1 | 14.2 KB | 103,883 | 960K | 784K | 173K | 892 |
| MobX | 6.15.0 | 18.0 KB | 41,604 | 3.8M | 3.0M | 278 | 925 |

---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
| **Native Computed Values** | Automatic dependency tracking for derived values | Jotai, MobX, Solid Signals, Preact Signals, Zen |
| **Selector Pattern** | Manual derived state using selector functions | Redux Toolkit, Zustand, Valtio |
| **Reactive Async** | Async computations that automatically recompute | Jotai only |
| **Native Batching** | Built-in update batching to reduce overhead | Solid Signals, MobX, Valtio |
| **Middleware System** | Plugin system for extending functionality | Redux Toolkit, Zustand |

---

## Test Categories

### Universal Tests (01-06)

All 8 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Read Operations**: Simple read and high-frequency read patterns
- **02 - Write Operations**: Simple increments and burst updates
- **03 - Store Creation**: Instance creation overhead
- **04 - Complexity**: Deep nested state *(Implementation incomplete)*
- **05 - Cache Performance**: Repeated access patterns *(Implementation incomplete)*
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates *(Implementation incomplete)*

### Feature Tests (08-11)

Libraries participate only if they have native support for the tested capability.

- **08 - Reactive Async**: Async atoms/computations (Jotai only)
- **09 - Computed Native**: Native computed values (5 libraries)
- **10 - Selectors**: Manual selector pattern (3 libraries)
- **11 - Batching Native**: Built-in batching (3 libraries)

---

## Detailed Results

### 01 - Read Operations

**Simple Read** (single value access)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 39,913,249 | 1.00x (fastest) |
| Jotai | 36,293,502 | 0.91x |
| Preact Signals | 34,347,739 | 0.86x |
| Zen | 32,186,172 | 0.81x |
| Valtio | 4,920,752 | 0.12x |
| MobX | 3,831,724 | 0.10x |
| Redux Toolkit | 960,312 | 0.02x |
| Zustand | 363,178 | 0.01x |

---

### 02 - Write Operations

**Simple Increment** (single value update)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Jotai | 33,919,541 | 1.00x (fastest) |
| Solid Signals | 33,108,766 | 0.98x |
| Zen | 28,233,961 | 0.83x |
| Preact Signals | 28,203,919 | 0.83x |
| Valtio | 4,240,840 | 0.13x |
| MobX | 3,045,725 | 0.09x |
| Redux Toolkit | 784,475 | 0.02x |
| Zustand | 350,822 | 0.01x |

---

### 03 - Store Creation

**Store/Instance Creation Overhead**

| Library | ops/sec | Relative |
|---------|---------|----------|
| Preact Signals | 33,384,299 | 1.00x (fastest) |
| Solid Signals | 32,134,156 | 0.96x |
| Zen | 32,150,344 | 0.96x |
| Zustand | 10,875,729 | 0.33x |
| Jotai | 2,312,931 | 0.07x |
| Valtio | 235,481 | 0.01x |
| Redux Toolkit | 173,331 | 0.01x |
| MobX | 278 | 0.00x |

> **Note**: MobX's low creation performance is expected due to makeAutoObservable overhead.

---

### 06 - Memory Allocation

**Large State Allocation** (1000-field objects)

| Library | ops/sec | Relative |
|---------|---------|----------|
| MobX | 925 | 1.00x (fastest) |
| Zen | 924 | 1.00x |
| Solid Signals | 923 | 1.00x |
| Jotai | 917 | 0.99x |
| Zustand | 907 | 0.98x |
| Preact Signals | 904 | 0.98x |
| Valtio | 898 | 0.97x |
| Redux Toolkit | 892 | 0.96x |

> **Note**: All libraries perform similarly for large state allocation, indicating minimal per-field overhead.

---

### 08 - Reactive Async (Feature Test)

**Participating Libraries**: Jotai only

| Benchmark | ops/sec |
|-----------|---------|
| Reactive Async Read | 859 |
| Async Chain (2 levels) | 440 |
| Complex Async Object | 878 |
| Concurrent Async (3 atoms) | 860 |

---

### 09 - Computed Native (Feature Test)

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

**Simple Computed** (value * 2)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 38,631,371 | 1.00x (fastest) |
| Zen | 36,636,862 | 0.95x |
| Jotai | 36,429,074 | 0.94x |
| Preact Signals | 36,096,886 | 0.93x |
| MobX | 3,893,734 | 0.10x |

---

### 10 - Selectors (Feature Test)

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

**Simple Selector**

| Library | ops/sec | Relative |
|---------|---------|----------|
| Valtio | 5,282,459 | 1.00x (fastest) |
| Redux Toolkit | 597,077 | 0.11x |
| Zustand | 365,422 | 0.07x |

---

### 11 - Batching Native (Feature Test)

**Participating Libraries**: Solid Signals, MobX, Valtio

**Batched Updates** (3 fields)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 39,849,314 | 1.00x (fastest) |
| Valtio | 4,819,575 | 0.12x |
| MobX | 3,262,648 | 0.08x |

**Large Batch** (100 updates)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 27,945,212 | 1.00x (fastest) |
| MobX | 146,457 | 0.01x |
| Valtio | 67,668 | 0.00x |

---

## Methodology

### Universal Test Standards

- **All libraries participate** in tests 01-07 (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: [System-dependent]
- **Iterations**: Automatically determined by Vitest for statistical significance

---

## Key Insights

### Performance Tiers

1. **Signal-based (Tier S)**: Solid Signals, Preact Signals, Zen - Exceptional performance across all operations
2. **Atom-based (Tier A)**: Jotai - Very fast but creation overhead impacts overall score
3. **Proxy-based (Tier B)**: Valtio - Moderate performance with good ergonomics
4. **Store-based (Tier C)**: Zustand, Redux Toolkit - Lower raw performance but predictable
5. **Observable-based (Tier D)**: MobX - High creation cost, moderate runtime performance

### Trade-offs

- **Solid Signals**: Fastest overall, but requires Solid.js ecosystem
- **Preact Signals**: Excellent balance of speed and bundle size (3.1 KB)
- **Zen**: Similar performance to Preact, slightly larger bundle (5.5 KB)
- **Jotai**: Very fast read/write, slower creation, unique async capabilities
- **Valtio**: Simple API, moderate performance, good for nested mutations
- **Zustand**: Minimal bundle (1.2 KB), simple API, moderate performance
- **Redux Toolkit**: Feature-rich, DevTools support, larger bundle (14.2 KB)
- **MobX**: Automatic tracking, slow creation, largest bundle (18.0 KB)

---

## Running Benchmarks

```bash
# Run all benchmarks
npm run benchmark

# Run specific groups
npm run benchmark:read
npm run benchmark:write
npm run benchmark:creation
```

---

## Compliance

This benchmark category follows [BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (01-03, 06) use real APIs for all libraries
- ✅ Feature tests (08-11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ⚠️ Groups 04, 05, 07 require implementation updates
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
