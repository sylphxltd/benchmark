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
- **Last Run:** 6:16:23 AM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 12.9/100 | 12.9% |
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
🥇 Zen Router           ████████████████████████████████████████ 7.37M
🥈 Wouter               ████████ 1.55M
🥉 React Router         █ 31.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.37M | ±0.39% | 0.1357ms | 0.1800ms | 3.69M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.60% | 0.6433ms | 0.9310ms | 777.24K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.10K | ±0.97% | 32.1517ms | 69.2100ms | 15.55K |

**Key Insight:** Zen Router is **236.97x faster** than React Router in this category.

### Simple Route Matching {#simple-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.06M
🥈 Wouter               ██████ 914.33K
🥉 React Router         █ 35.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.06M | ±0.32% | 0.1651ms | 0.2000ms | 3.03M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 914.33K | ±0.29% | 1.0937ms | 1.2930ms | 457.17K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.96K | ±0.44% | 27.8097ms | 40.7160ms | 17.98K |

**Key Insight:** Zen Router is **168.45x faster** than React Router in this category.

### Dynamic Route Matching (1 param) {#dynamic-route-matching-1-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.30M
🥈 Wouter               █████ 306.37K
🥉 React Router         █ 39.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.30M | ±0.32% | 0.4352ms | 0.5310ms | 1.15M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 306.37K | ±0.30% | 3.2640ms | 5.3700ms | 153.19K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.62K | ±0.45% | 25.2381ms | 45.3050ms | 19.81K |

**Key Insight:** Zen Router is **57.99x faster** than React Router in this category.

### Nested Dynamic Routes (2 params) {#nested-dynamic-routes-2-params-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.56M
🥈 Wouter               █████ 189.64K
🥉 React Router         █ 55.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.56M | ±0.10% | 0.6396ms | 1.2230ms | 781.76K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 189.64K | ±0.31% | 5.2731ms | 9.2070ms | 94.82K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 55.14K | ±0.47% | 18.1357ms | 37.2390ms | 27.57K |

**Key Insight:** Zen Router is **28.36x faster** than React Router in this category.

### Wildcard Route Matching {#wildcard-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.58M
🥈 Wouter               █████ 184.68K
🥉 React Router         █ 26.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.58M | ±0.61% | 0.6318ms | 1.0520ms | 791.38K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 184.68K | ±0.30% | 5.4149ms | 9.3370ms | 92.34K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.44K | ±0.50% | 37.8148ms | 65.9630ms | 13.22K |

**Key Insight:** Zen Router is **59.85x faster** than React Router in this category.

### Optional Parameter Route (with param) {#optional-parameter-route-with-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.18M
🥈 Wouter               █████ 147.84K
🥉 React Router         █ 41.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.18M | ±0.14% | 0.8475ms | 0.9420ms | 589.95K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.84K | ±0.21% | 6.7643ms | 12.0120ms | 73.92K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.42K | ±0.66% | 24.1449ms | 42.3690ms | 20.71K |

**Key Insight:** Zen Router is **28.49x faster** than React Router in this category.

### Optional Parameter Route (without param) {#optional-parameter-route-without-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.49M
🥈 Wouter               ████ 148.20K
🥉 React Router         █ 35.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.49M | ±0.10% | 0.6710ms | 0.7520ms | 745.20K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.20K | ±0.30% | 6.7476ms | 9.9390ms | 74.10K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.14K | ±0.74% | 28.4541ms | 50.6150ms | 17.57K |

**Key Insight:** Zen Router is **42.41x faster** than React Router in this category.

### Mixed Route Matching (realistic usage) {#mixed-route-matching-realistic-usage-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 368.08K
🥈 Wouter               ████ 38.53K
🥉 React Router         █ 5.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 368.08K | ±0.24% | 2.7168ms | 3.1360ms | 184.04K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.53K | ±0.31% | 25.9510ms | 37.0390ms | 19.27K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.36K | ±0.95% | 186.4149ms | 346.9390ms | 2.68K |

**Key Insight:** Zen Router is **68.62x faster** than React Router in this category.

### Sequential Route Matching (worst case) {#sequential-route-matching-worst-case-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.17M
🥈 Wouter               █████ 146.71K
🥉 React Router         █ 41.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.17M | ±0.13% | 0.8556ms | 0.9420ms | 584.38K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.71K | ±0.22% | 6.8162ms | 11.3110ms | 73.36K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.99K | ±0.44% | 23.8177ms | 38.7830ms | 20.99K |

**Key Insight:** Zen Router is **27.84x faster** than React Router in this category.

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

*Last generated: 2025-11-09T13:54:45.877Z*
