# Reactive Async

Async atoms/computations.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Jotai** | 2.15.1 | 👑 4.3 KB | 👑 726 | 872 | Dec 6 |

---

## Detailed Results

### Reactive Async Read

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       872 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Jotai** | 872.01 | ±1.48% | 1.1468ms | 1.2682ms | 437 |

### Reactive Async Chained

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       433 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Jotai** | 432.68 | ±2.19% | 2.3112ms | 2.9319ms | 217 |

### Reactive Async Complex

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       863 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Jotai** | 863.49 | ±1.01% | 1.1581ms | 1.2342ms | 432 |

### Reactive Async Concurrent

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████       854 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Jotai** | 853.65 | ±0.95% | 1.1714ms | 1.2563ms | 427 |

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
*Last generated: 2025-11-11T00:33:35.568Z*
