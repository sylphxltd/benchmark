# Memory Allocation

Large state allocation performance.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [06-memory - Jotai](#06-memory---jotai)
  - [06-memory - MobX](#06-memory---mobx)
  - [06-memory - Preact Signals](#06-memory---preact-signals)
  - [06-memory - Redux Toolkit](#06-memory---redux-toolkit)
  - [06-memory - Solid Signals](#06-memory---solid-signals)
  - [06-memory - Valtio](#06-memory---valtio)
  - [06-memory - Zen](#06-memory---zen)
  - [06-memory - Zustand](#06-memory---zustand)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**:
- Each library's raw performance (ops/sec) is measured for each test in this group
- The group score is calculated using geometric mean of all test results
- Formula: `Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)`
- Geometric mean gives balanced weight to all tests regardless of their magnitude

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | [**Zustand**](https://github.com/pmndrs/zustand) | 👑 900 |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 898 |
| 🥉 3 | [**Jotai**](https://github.com/pmndrs/jotai) | 892 |
|  4 | [**Valtio**](https://github.com/pmndrs/valtio) | 892 |
|  5 | [**Preact Signals**](https://github.com/preactjs/signals) | 888 |
|  6 | [**Solid Signals**](https://github.com/solidjs/solid) | 885 |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 884 |
|  8 | [**Zen**](https://github.com/SylphxAI/zen) | 869 |

---

## Detailed Results

### 06-memory - Jotai

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       892 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 892 | ±2.05% | 1120.5000ms | 1640.5000ms | 447 |

### 06-memory - MobX

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████       884 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 884 | ±1.96% | 1130.7000ms | 1911.1000ms | 443 |

### 06-memory - Preact Signals

**Performance Comparison:**

```
🥇   Preact Signals     ████████████████████████████████████████       888 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 888 | ±1.67% | 1126.7000ms | 1859.8000ms | 444 |

### 06-memory - Redux Toolkit

**Performance Comparison:**

```
🥇   Redux Toolkit      ████████████████████████████████████████       898 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 898 | ±1.38% | 1113.2000ms | 1699.5000ms | 450 |

### 06-memory - Solid Signals

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████       885 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 885 | ±2.21% | 1130.2000ms | 1905.3000ms | 443 |

### 06-memory - Valtio

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████       892 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 892 | ±1.56% | 1121.3000ms | 1751.5000ms | 446 |

### 06-memory - Zen

**Performance Comparison:**

```
🥇   Zen                ████████████████████████████████████████       869 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 869 | ±1.65% | 1151.2000ms | 1902.9000ms | 435 |

### 06-memory - Zustand

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████       900 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 900 | ±1.24% | 1111.5000ms | 1570.5000ms | 450 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:memory

# Or run specific test file
npx vitest bench groups/06-memory/*.bench.ts
```

---
*Last generated: 2025-11-11T04:55:50.253Z*
