# Reactive Async

Native async atoms that auto-recompute when dependencies change.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
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
| 🥇 1 | [**Jotai**](https://github.com/pmndrs/jotai) | 👑 12K |

---

## Detailed Results

### Async Atom Read

```
🥇   Jotai              ████████████████████████████████████████      2.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,311,947 | ±0.15% | 0.4000ms | 0.6000ms | 1155974 |

### Async Atom with Dependency Update

```
🥇   Jotai              ████████████████████████████████████████       868 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 868 | ±1.19% | 1151.8000ms | 1237.2000ms | 435 |

### Chained Async Atoms

```
🥇   Jotai              ████████████████████████████████████████       440 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 440 | ±1.55% | 2275.3000ms | 2569.3000ms | 220 |

### Complex Async Dependencies

```
🥇   Jotai              ████████████████████████████████████████       434 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 434 | ±1.22% | 2302.5000ms | 2550.7000ms | 218 |

### Concurrent Async Reads

```
🥇   Jotai              ████████████████████████████████████████      555K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 554,977 | ±0.23% | 1.8000ms | 2.3000ms | 277489 |

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
*Last generated: 2025-11-11T11:24:49.974Z*
