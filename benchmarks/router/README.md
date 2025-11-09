# Router Benchmark 🛤️

Performance comparison of JavaScript routing libraries and frameworks.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 9, 2025
- **Last Run:** 2:11:19 PM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.5/100 | 13.5% |
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

### 📑 Test Categories

- [Static Route Matching](#static-route-matching)
- [Simple Route Matching](#simple-route-matching)
- [Dynamic Route Matching (1 param)](#dynamic-route-matching-1-param-)
- [Nested Dynamic Routes (2 params)](#nested-dynamic-routes-2-params-)
- [Wildcard Route Matching](#wildcard-route-matching)
- [Optional Parameter Route (with param)](#optional-parameter-route-with-param-)
- [Optional Parameter Route (without param)](#optional-parameter-route-without-param-)
- [Mixed Route Matching (realistic usage)](#mixed-route-matching-realistic-usage-)
- [Sequential Route Matching (worst case)](#sequential-route-matching-worst-case-)

### Static Route Matching {#static-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.12M
🥈 Wouter               █████████ 1.58M
🥉 React Router         █ 31.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.12M | ±0.38% | 0.1404ms | 0.1800ms | 3.56M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.58M | ±0.61% | 0.6333ms | 0.8310ms | 789.50K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.11K | ±0.55% | 32.1462ms | 69.4630ms | 15.55K |

**Key Insight:** Zen Router is **229.03x faster** than React Router in this category.

### Simple Route Matching {#simple-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.85M
🥈 Wouter               ██████ 922.37K
🥉 React Router         █ 35.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.85M | ±0.36% | 0.1710ms | 0.2200ms | 2.92M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 922.37K | ±0.30% | 1.0842ms | 1.3120ms | 461.18K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.45K | ±0.53% | 28.2052ms | 39.6940ms | 17.73K |

**Key Insight:** Zen Router is **164.94x faster** than React Router in this category.

### Dynamic Route Matching (1 param) {#dynamic-route-matching-1-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.26M
🥈 Wouter               █████ 305.78K
🥉 React Router         █ 38.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.26M | ±0.38% | 0.4420ms | 0.7820ms | 1.13M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 305.78K | ±0.39% | 3.2703ms | 5.5610ms | 152.89K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.40K | ±0.55% | 26.0435ms | 50.1550ms | 19.20K |

**Key Insight:** Zen Router is **58.93x faster** than React Router in this category.

### Nested Dynamic Routes (2 params) {#nested-dynamic-routes-2-params-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 187.56K
🥉 React Router         █ 54.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.10% | 0.6287ms | 0.7110ms | 795.35K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 187.56K | ±0.35% | 5.3318ms | 9.1270ms | 93.78K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.54K | ±0.47% | 18.3367ms | 33.6130ms | 27.27K |

**Key Insight:** Zen Router is **29.17x faster** than React Router in this category.

### Wildcard Route Matching {#wildcard-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.65M
🥈 Wouter               █████ 189.53K
🥉 React Router         █ 26.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.65M | ±0.12% | 0.6070ms | 0.7120ms | 823.75K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 189.53K | ±0.29% | 5.2762ms | 5.9510ms | 94.77K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.33K | ±0.56% | 37.9857ms | 65.3210ms | 13.16K |

**Key Insight:** Zen Router is **62.58x faster** than React Router in this category.

### Optional Parameter Route (with param) {#optional-parameter-route-with-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.09M
🥈 Wouter               █████ 149.26K
🥉 React Router         ██ 41.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.09M | ±0.13% | 0.9143ms | 1.0110ms | 546.86K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.26K | ±0.26% | 6.6997ms | 8.7970ms | 74.63K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.08K | ±0.52% | 24.3446ms | 36.8490ms | 20.54K |

**Key Insight:** Zen Router is **26.63x faster** than React Router in this category.

### Optional Parameter Route (without param) {#optional-parameter-route-without-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.35M
🥈 Wouter               ████ 149.11K
🥉 React Router         █ 34.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.35M | ±0.14% | 0.7399ms | 0.8220ms | 675.73K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.11K | ±0.30% | 6.7063ms | 8.7870ms | 74.56K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.32K | ±0.74% | 29.1366ms | 60.2940ms | 17.16K |

**Key Insight:** Zen Router is **39.38x faster** than React Router in this category.

### Mixed Route Matching (realistic usage) {#mixed-route-matching-realistic-usage-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 356.30K
🥈 Wouter               ████ 38.99K
🥉 React Router         █ 5.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 356.30K | ±0.27% | 2.8066ms | 3.2460ms | 178.15K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.99K | ±0.30% | 25.6501ms | 35.8360ms | 19.49K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.31K | ±0.83% | 188.2482ms | 351.6960ms | 2.66K |

**Key Insight:** Zen Router is **67.07x faster** than React Router in this category.

### Sequential Route Matching (worst case) {#sequential-route-matching-worst-case-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.08M
🥈 Wouter               ██████ 149.24K
🥉 React Router         ██ 41.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.08M | ±0.15% | 0.9230ms | 1.0530ms | 541.73K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.24K | ±0.19% | 6.7006ms | 7.9250ms | 74.62K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.25K | ±0.45% | 24.2409ms | 35.8780ms | 20.63K |

**Key Insight:** Zen Router is **26.26x faster** than React Router in this category.

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

*Last generated: 2025-11-09T14:53:18.222Z*
