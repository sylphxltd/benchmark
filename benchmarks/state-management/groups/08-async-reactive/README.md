# Reactive Async

Async atoms/computations.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [Reactive Async Read](#reactive-async-read)
  - [Reactive Async Chained](#reactive-async-chained)
  - [Reactive Async Complex](#reactive-async-complex)
  - [Reactive Async Concurrent](#reactive-async-concurrent)
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
| 🥇 1 | [**Jotai**](https://github.com/pmndrs/jotai) | 👑 726 |

---

## Detailed Results

### Reactive Async Read

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       872 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 872 | ±1.48% | 1.1468ms | 1.2682ms | 437 |

### Reactive Async Chained

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       433 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 433 | ±2.19% | 2.3112ms | 2.9319ms | 217 |

### Reactive Async Complex

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       863 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 863 | ±1.01% | 1.1581ms | 1.2342ms | 432 |

### Reactive Async Concurrent

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       854 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 854 | ±0.95% | 1.1714ms | 1.2563ms | 427 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:async-reactive

# Or run specific test file
npx vitest bench groups/08-async-reactive/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.563Z*
