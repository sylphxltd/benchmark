# Batching Native

Built-in batching.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [11-batching-native - MobX](#11-batching-native---mobx)
  - [11-batching-native - Solid Signals](#11-batching-native---solid-signals)
  - [11-batching-native - Valtio](#11-batching-native---valtio)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 37.8M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.6M |

---

## Detailed Results

### 11-batching-native - MobX

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████      1.6M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 1,591,403 | ±0.61% | 1.8500ms | 7.6000ms | 5292938 |

### 11-batching-native - Solid Signals

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     37.8M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 37,849,602 | ±0.46% | N/A | 0.1000ms | 76864518 |

### 11-batching-native - Valtio

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      1.7M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,657,338 | ±0.17% | 3.8500ms | 17.4000ms | 7257614 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:batching-native

# Or run specific test file
npx vitest bench groups/11-batching-native/*.bench.ts
```

---
*Last generated: 2025-11-11T04:55:50.406Z*
