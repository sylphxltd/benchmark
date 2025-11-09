# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 8, 2025
- **Last Run:** 12:14:41 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 9, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 9, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 9, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.3/100 | 13.3% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.00M
🥈 Wouter               █████████ 1.56M
🥉 React Router         █ 30.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.00M | ±0.59% | 0.1428ms | 0.2200ms | 3.50M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.56M | ±0.73% | 0.6425ms | 0.9520ms | 778.27K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 30.32K | ±0.73% | 32.9854ms | 75.0700ms | 15.16K |

**Key Insight:** Zen Router is **230.99x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.83M
🥈 Wouter               ██████ 912.41K
🥉 React Router         █ 35.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.83M | ±0.71% | 0.1715ms | 0.2810ms | 2.92M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 912.41K | ±0.65% | 1.0960ms | 1.3420ms | 456.21K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.42K | ±0.81% | 28.2306ms | 42.8500ms | 17.71K |

**Key Insight:** Zen Router is **164.62x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.26M
🥈 Wouter               █████ 306.79K
🥉 React Router         █ 39.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.26M | ±0.82% | 0.4423ms | 0.8320ms | 1.13M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 306.79K | ±0.65% | 3.2596ms | 5.3100ms | 153.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.21K | ±1.51% | 25.5007ms | 44.7930ms | 19.61K |

**Key Insight:** Zen Router is **57.65x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.53M
🥈 Wouter               █████ 187.81K
🥉 React Router         █ 54.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.53M | ±0.10% | 0.6554ms | 0.8020ms | 762.91K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 187.81K | ±0.61% | 5.3245ms | 9.5380ms | 93.91K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.18K | ±0.73% | 18.4581ms | 36.7420ms | 27.09K |

**Key Insight:** Zen Router is **28.16x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 188.37K
🥉 React Router         █ 26.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.10% | 0.6283ms | 1.0830ms | 795.74K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 188.37K | ±0.50% | 5.3086ms | 6.2920ms | 94.19K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.89K | ±0.80% | 37.1898ms | 58.8900ms | 13.45K |

**Key Insight:** Zen Router is **59.19x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 146.91K
🥉 React Router         █ 41.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.15% | 0.8741ms | 1.0720ms | 572.00K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.91K | ±0.37% | 6.8071ms | 11.5110ms | 73.45K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.85K | ±0.57% | 23.8941ms | 37.7110ms | 20.93K |

**Key Insight:** Zen Router is **27.34x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.37M
🥈 Wouter               ████ 146.74K
🥉 React Router         █ 34.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.37M | ±0.21% | 0.7279ms | 0.8920ms | 686.87K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.74K | ±0.58% | 6.8146ms | 11.2510ms | 73.37K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.74K | ±0.98% | 28.7863ms | 51.3050ms | 17.37K |

**Key Insight:** Zen Router is **39.54x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 356.58K
🥈 Wouter               ████ 38.21K
🥉 React Router         █ 5.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 356.58K | ±0.45% | 2.8044ms | 3.6170ms | 178.29K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.21K | ±0.56% | 26.1681ms | 38.3520ms | 19.11K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.36K | ±1.02% | 186.6034ms | 451.0340ms | 2.68K |

**Key Insight:** Zen Router is **66.54x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 147.18K
🥉 React Router         █ 42.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.28% | 0.8879ms | 1.1520ms | 563.13K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.18K | ±0.38% | 6.7943ms | 12.8040ms | 73.59K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.13K | ±0.55% | 23.7348ms | 36.5780ms | 21.07K |

**Key Insight:** Zen Router is **26.73x faster** than React Router in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-09T00:17:15.691Z*
