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

- **Last Updated:** November 10, 2025
- **Last Run:** 10:21:20 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 10, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 10, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 10, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 10, 2025 | ⚠️ v7.9.5 incompatible |
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
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Static Route Matching](#static-route-matching)
- [Simple Route Matching](#simple-route-matching)
- [Dynamic Route Matching (1 param)](#dynamic-route-matching-1-param)
- [Nested Dynamic Routes (2 params)](#nested-dynamic-routes-2-params)
- [Wildcard Route Matching](#wildcard-route-matching)
- [Optional Parameter Route (with param)](#optional-parameter-route-with-param)
- [Optional Parameter Route (without param)](#optional-parameter-route-without-param)
- [Mixed Route Matching (realistic usage)](#mixed-route-matching-realistic-usage)
- [Sequential Route Matching (worst case)](#sequential-route-matching-worst-case)

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.05M
🥈 Wouter               █████████ 1.55M
🥉 React Router         █ 31.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.05M | ±0.41% | 0.1419ms | 0.2410ms | 3.52M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.63% | 0.6447ms | 0.9820ms | 775.59K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.97K | ±0.48% | 31.2839ms | 52.5380ms | 15.98K |

**Key Insight:** Zen Router is **220.45x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.07M
🥈 Wouter               ██████ 941.69K
🥉 React Router         █ 35.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.07M | ±0.35% | 0.1646ms | 0.2010ms | 3.04M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 941.69K | ±0.46% | 1.0619ms | 1.4230ms | 470.85K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.15K | ±0.71% | 28.4477ms | 51.7360ms | 17.58K |

**Key Insight:** Zen Router is **172.80x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.31M
🥈 Wouter               █████ 313.39K
🥉 React Router         █ 39.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.31M | ±0.41% | 0.4324ms | 0.4910ms | 1.16M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 313.39K | ±0.32% | 3.1909ms | 5.4900ms | 156.69K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.63K | ±0.48% | 25.2318ms | 46.6960ms | 19.82K |

**Key Insight:** Zen Router is **58.36x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.54M
🥈 Wouter               █████ 191.27K
🥉 React Router         █ 55.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.54M | ±0.14% | 0.6504ms | 0.7320ms | 768.77K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 191.27K | ±0.32% | 5.2281ms | 6.5620ms | 95.64K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 55.99K | ±0.53% | 17.8618ms | 29.7470ms | 27.99K |

**Key Insight:** Zen Router is **27.46x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.62M
🥈 Wouter               █████ 186.98K
🥉 React Router         █ 27.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.62M | ±0.15% | 0.6162ms | 1.0320ms | 811.41K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.98K | ±0.47% | 5.3483ms | 6.2310ms | 93.49K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.18K | ±0.51% | 36.7926ms | 51.1550ms | 13.59K |

**Key Insight:** Zen Router is **59.71x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 148.08K
🥉 React Router         █ 41.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.10% | 0.8800ms | 1.1620ms | 568.21K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.08K | ±0.24% | 6.7533ms | 10.3900ms | 74.04K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.46K | ±0.72% | 24.1225ms | 40.6960ms | 20.73K |

**Key Insight:** Zen Router is **27.41x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.43M
🥈 Wouter               ████ 149.51K
🥉 React Router         █ 35.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.43M | ±0.20% | 0.7010ms | 0.8020ms | 713.28K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.51K | ±0.30% | 6.6885ms | 9.3080ms | 74.76K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.16K | ±0.74% | 28.4454ms | 49.9430ms | 17.58K |

**Key Insight:** Zen Router is **40.58x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 351.36K
🥈 Wouter               ████ 39.11K
🥉 React Router         █ 5.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 351.36K | ±0.22% | 2.8461ms | 3.3060ms | 175.68K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 39.11K | ±0.33% | 25.5711ms | 35.9370ms | 19.55K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.41K | ±0.88% | 184.8095ms | 352.6290ms | 2.71K |

**Key Insight:** Zen Router is **64.94x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 148.60K
🥉 React Router         █ 41.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.15% | 0.8887ms | 0.9920ms | 562.63K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.60K | ±0.20% | 6.7297ms | 10.2290ms | 74.30K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.98K | ±0.45% | 23.8211ms | 36.0080ms | 20.99K |

**Key Insight:** Zen Router is **26.80x faster** than React Router in this category.

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

*Last generated: 2025-11-10T22:38:23.791Z*
