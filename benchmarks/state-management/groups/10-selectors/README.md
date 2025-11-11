# Selectors

Manual selector pattern.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/10-selectors/selectors.bench.ts > Simple Selector](#groups10-selectorsselectorsbenchts-simple-selector)
  - [groups/10-selectors/selectors.bench.ts > Chained Selectors](#groups10-selectorsselectorsbenchts-chained-selectors)
  - [groups/10-selectors/selectors.bench.ts > Selector Repeated Access](#groups10-selectorsselectorsbenchts-selector-repeated-access)
  - [groups/10-selectors/selectors.bench.ts > Selector with Updates](#groups10-selectorsselectorsbenchts-selector-with-updates)
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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 913K |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 166K |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 137K |

---

## Detailed Results

### groups/10-selectors/selectors.bench.ts > Simple Selector

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      5.3M ops/sec
🥈   Redux Toolkit      █████                                         597K ops/sec
🥉   Zustand            ███                                           365K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,282,459 | ±0.44% | 0.1893ms | 0.2500ms | 0 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 597,077 | ±1.86% | 1.6748ms | 2.2500ms | 0 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 365,422 | ±0.16% | 2.7366ms | 3.4160ms | 0 |

**Key Insight:** Valtio is 14.46x faster than Zustand in this test.

### groups/10-selectors/selectors.bench.ts > Chained Selectors

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      4.8M ops/sec
🥈   Redux Toolkit      ███                                           385K ops/sec
🥉   Zustand            ███                                           371K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,756,206 | ±0.17% | 0.2103ms | 0.2500ms | 0 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 384,802 | ±2.87% | 2.5987ms | 3.5420ms | 0 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 371,291 | ±0.25% | 2.6933ms | 3.3340ms | 0 |

**Key Insight:** Valtio is 12.81x faster than Zustand in this test.

### groups/10-selectors/selectors.bench.ts > Selector Repeated Access

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████      705K ops/sec
🥈   Redux Toolkit      ████████████████████████████████              563K ops/sec
🥉   Valtio             ████████████████████████████                  487K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 704,667 | ±0.14% | 1.4191ms | 1.7920ms | 0 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 562,733 | ±0.35% | 1.7770ms | 2.2500ms | 0 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 486,966 | ±0.16% | 2.0535ms | 3.0830ms | 0 |

**Key Insight:** Zustand is 1.45x faster than Valtio in this test.

### groups/10-selectors/selectors.bench.ts > Selector with Updates

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████       57K ops/sec
🥈   Redux Toolkit      ████                                            6K ops/sec
🥉   Zustand            ███                                             4K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 56,829 | ±0.44% | 17.5966ms | 43.3330ms | 0 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 5,806 | ±2.55% | 172.2408ms | 317.0410ms | 0 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,701 | ±0.43% | 270.1700ms | 389.5000ms | 0 |

**Key Insight:** Valtio is 15.35x faster than Zustand in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:selectors

# Or run specific test file
npx vitest bench groups/10-selectors/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.642Z*
