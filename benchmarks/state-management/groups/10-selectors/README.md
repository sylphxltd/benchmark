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

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.2.0 | 3.1 KB | 👑 913K | 5.3M | Nov 6 |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.10.1 | 13.8 KB | 166K | 597K | Dec 6 |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 5.0.8 | 👑 1.2 KB | 137K | 705K | Nov 6 |

---

## Detailed Results

### groups/10-selectors/selectors.bench.ts > Simple Selector

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      5.3M ops/sec
🥈   Redux Toolkit      █████                                         597K ops/sec
🥉   Zustand            ███                                           365K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,282,459.007 | ±0.44% | 0.1893ms | 0.2500ms |  |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 597,077.321 | ±1.86% | 1.6748ms | 2.2500ms |  |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 365,421.797 | ±0.16% | 2.7366ms | 3.4160ms |  |

**Key Insight:** Valtio is 14.46x faster than Zustand in this category.

### groups/10-selectors/selectors.bench.ts > Chained Selectors

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      4.8M ops/sec
🥈   Redux Toolkit      ███                                           385K ops/sec
🥉   Zustand            ███                                           371K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,756,205.945 | ±0.17% | 0.2103ms | 0.2500ms |  |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 384,802.125 | ±2.87% | 2.5987ms | 3.5420ms |  |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 371,290.683 | ±0.25% | 2.6933ms | 3.3340ms |  |

**Key Insight:** Valtio is 12.81x faster than Zustand in this category.

### groups/10-selectors/selectors.bench.ts > Selector Repeated Access

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████      705K ops/sec
🥈   Redux Toolkit      ████████████████████████████████              563K ops/sec
🥉   Valtio             ████████████████████████████                  487K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 704,667.319 | ±0.14% | 1.4191ms | 1.7920ms |  |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 562,733.005 | ±0.35% | 1.7770ms | 2.2500ms |  |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 486,966.221 | ±0.16% | 2.0535ms | 3.0830ms |  |

**Key Insight:** Zustand is 1.45x faster than Valtio in this category.

### groups/10-selectors/selectors.bench.ts > Selector with Updates

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████       57K ops/sec
🥈   Redux Toolkit      ████                                            6K ops/sec
🥉   Zustand            ███                                             4K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 56,829.063 | ±0.44% | 17.5966ms | 43.3330ms |  |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 5,805.827 | ±2.55% | 172.2408ms | 317.0410ms |  |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,701.373 | ±0.43% | 270.1700ms | 389.5000ms |  |

**Key Insight:** Valtio is 15.35x faster than Zustand in this category.

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
*Last generated: 2025-11-11T01:29:45.128Z*
