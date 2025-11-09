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
- **Last Run:** 2:01:46 PM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.4/100 | 13.4% |
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
🥇 Zen Router           ████████████████████████████████████████ 7.05M
🥈 Wouter               █████████ 1.56M
🥉 React Router         █ 30.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.05M | ±0.43% | 0.1419ms | 0.2110ms | 3.52M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.56M | ±0.60% | 0.6411ms | 0.8420ms | 779.96K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 30.25K | ±0.78% | 33.0607ms | 72.9460ms | 15.12K |

**Key Insight:** Zen Router is **232.96x faster** than React Router in this category.

### Simple Route Matching {#simple-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.95M
🥈 Wouter               ██████ 915.96K
🥉 React Router         █ 34.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.95M | ±0.37% | 0.1679ms | 0.2710ms | 2.98M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 915.96K | ±0.27% | 1.0918ms | 1.3120ms | 457.98K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.75K | ±0.48% | 28.7736ms | 50.5640ms | 17.38K |

**Key Insight:** Zen Router is **171.33x faster** than React Router in this category.

### Dynamic Route Matching (1 param) {#dynamic-route-matching-1-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.33M
🥈 Wouter               █████ 306.57K
🥉 React Router         █ 38.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.33M | ±0.40% | 0.4290ms | 0.4810ms | 1.17M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 306.57K | ±0.90% | 3.2619ms | 5.7410ms | 153.29K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.68K | ±0.50% | 25.8549ms | 46.5970ms | 19.34K |

**Key Insight:** Zen Router is **60.27x faster** than React Router in this category.

### Nested Dynamic Routes (2 params) {#nested-dynamic-routes-2-params-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.55M
🥈 Wouter               █████ 191.96K
🥉 React Router         █ 54.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.55M | ±0.10% | 0.6433ms | 0.7010ms | 777.21K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 191.96K | ±0.33% | 5.2093ms | 5.8510ms | 95.98K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.72K | ±0.47% | 18.2747ms | 30.2260ms | 27.36K |

**Key Insight:** Zen Router is **28.41x faster** than React Router in this category.

### Wildcard Route Matching {#wildcard-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 189.52K
🥉 React Router         █ 26.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.09% | 0.6284ms | 0.6910ms | 795.63K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 189.52K | ±0.29% | 5.2764ms | 6.1910ms | 94.76K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.38K | ±0.49% | 37.9025ms | 58.8290ms | 13.19K |

**Key Insight:** Zen Router is **60.31x faster** than React Router in this category.

### Optional Parameter Route (with param) {#optional-parameter-route-with-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 149.40K
🥉 React Router         █ 40.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.14% | 0.8868ms | 0.9620ms | 563.80K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.40K | ±0.26% | 6.6932ms | 10.0590ms | 74.70K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.73K | ±0.46% | 24.5498ms | 38.0910ms | 20.37K |

**Key Insight:** Zen Router is **27.68x faster** than React Router in this category.

### Optional Parameter Route (without param) {#optional-parameter-route-without-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.38M
🥈 Wouter               ████ 150.32K
🥉 React Router         █ 34.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.38M | ±0.10% | 0.7239ms | 1.0520ms | 690.70K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 150.32K | ±0.33% | 6.6524ms | 8.4360ms | 75.16K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.17K | ±0.66% | 29.2651ms | 50.5440ms | 17.09K |

**Key Insight:** Zen Router is **40.43x faster** than React Router in this category.

### Mixed Route Matching (realistic usage) {#mixed-route-matching-realistic-usage-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 357.61K
🥈 Wouter               ████ 38.79K
🥉 React Router         █ 5.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 357.61K | ±0.21% | 2.7963ms | 3.1960ms | 178.81K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.79K | ±0.29% | 25.7804ms | 35.8060ms | 19.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.28K | ±0.94% | 189.2722ms | 331.3420ms | 2.64K |

**Key Insight:** Zen Router is **67.69x faster** than React Router in this category.

### Sequential Route Matching (worst case) {#sequential-route-matching-worst-case-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.12M
🥈 Wouter               █████ 149.80K
🥉 React Router         █ 40.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.12M | ±0.15% | 0.8938ms | 1.0320ms | 559.42K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.80K | ±0.18% | 6.6756ms | 8.1150ms | 74.90K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.95K | ±0.36% | 24.4226ms | 36.4780ms | 20.47K |

**Key Insight:** Zen Router is **27.32x faster** than React Router in this category.

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

*Last generated: 2025-11-09T14:11:19.838Z*
