# Write Operations

Simple increments and burst updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [02-write - Jotai](#02-write---jotai)
  - [02-write - MobX](#02-write---mobx)
  - [02-write - Preact Signals](#02-write---preact-signals)
  - [02-write - Redux Toolkit](#02-write---redux-toolkit)
  - [02-write - Solid Signals](#02-write---solid-signals)
  - [02-write - Valtio](#02-write---valtio)
  - [02-write - Zen](#02-write---zen)
  - [02-write - Zustand](#02-write---zustand)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 38.2M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 22.7M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 22.0M |
|  4 | [**Zen**](https://github.com/SylphxAI/zen) | 21.2M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.2M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 303K |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 113K |

---

## Detailed Results

### 02-write - Jotai

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████     22.7M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 22,680,929 | ±0.08% | 0.0500ms | 0.1000ms | 25197114 |

### 02-write - MobX

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████      1.2M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 1,218,274 | ±0.67% | 1.3500ms | 3.0000ms | 2018977 |

### 02-write - Preact Signals

**Performance Comparison:**

```
🥇   Preact Signals     ████████████████████████████████████████     22.0M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 22,033,046 | ±0.09% | 0.0500ms | 0.1000ms | 24847612 |

### 02-write - Redux Toolkit

**Performance Comparison:**

```
🥇   Redux Toolkit      ████████████████████████████████████████      303K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 302,753 | ±0.93% | 5.7500ms | 20.5000ms | 523745 |

### 02-write - Solid Signals

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     38.2M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,210,590 | ±0.06% | N/A | N/A | 38251305 |

### 02-write - Valtio

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      1.7M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,709,398 | ±0.51% | 0.9500ms | 2.2000ms | 2823489 |

### 02-write - Zen

**Performance Comparison:**

```
🥇   Zen                ████████████████████████████████████████     21.2M ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 21,166,638 | ±0.15% | 0.0500ms | 0.1000ms | 23732777 |

### 02-write - Zustand

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████      113K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 113,440 | ±0.66% | 15.5500ms | 42.8000ms | 200347 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:write

# Or run specific test file
npx vitest bench groups/02-write/*.bench.ts
```

---
*Last generated: 2025-11-11T04:55:50.115Z*
