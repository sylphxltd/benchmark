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

- **Last Updated:** November 11, 2025
- **Last Run:** 5:34:00 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | `v1.0.2` | 1.57KB | Nov 11, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 11, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 11, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 11, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.3/100 | 13.3% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
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
🥇 Zen Router           ████████████████████████████████████████ 6.82M
🥈 Wouter               █████████ 1.58M
🥉 React Router         █ 30.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 6.82M | ±0.45% | 0.1465ms | 0.1910ms | 3.41M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.58M | ±0.67% | 0.6330ms | 0.8620ms | 789.91K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 30.85K | ±0.60% | 32.4130ms | 72.8290ms | 15.43K |

**Key Insight:** Zen Router is **221.19x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.93M
🥈 Wouter               ██████ 924.03K
🥉 React Router         █ 35.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 5.93M | ±0.40% | 0.1687ms | 0.2700ms | 2.96M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 924.03K | ±0.47% | 1.0822ms | 1.4630ms | 462.02K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.36K | ±0.74% | 28.2800ms | 42.0290ms | 17.68K |

**Key Insight:** Zen Router is **167.67x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.20M
🥈 Wouter               █████ 296.90K
🥉 React Router         █ 37.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 2.20M | ±0.54% | 0.4539ms | 0.7710ms | 1.10M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 296.90K | ±0.42% | 3.3681ms | 5.7400ms | 148.45K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 37.76K | ±2.20% | 26.4842ms | 50.6770ms | 18.88K |

**Key Insight:** Zen Router is **58.35x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.56M
🥈 Wouter               █████ 184.05K
🥉 React Router         █ 54.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.56M | ±0.10% | 0.6413ms | 0.7510ms | 779.72K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 184.05K | ±0.57% | 5.4334ms | 10.2890ms | 92.02K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.22K | ±0.65% | 18.4439ms | 35.7360ms | 27.11K |

**Key Insight:** Zen Router is **28.76x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.60M
🥈 Wouter               █████ 188.78K
🥉 React Router         █ 26.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.60M | ±0.14% | 0.6253ms | 1.0520ms | 799.60K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 188.78K | ±0.51% | 5.2971ms | 6.2620ms | 94.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.58K | ±0.78% | 37.6257ms | 65.2910ms | 13.29K |

**Key Insight:** Zen Router is **60.17x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 148.19K
🥉 React Router         █ 41.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.13M | ±0.17% | 0.8841ms | 1.0220ms | 565.56K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.19K | ±0.29% | 6.7481ms | 11.9530ms | 74.09K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.14K | ±0.96% | 24.3084ms | 41.3170ms | 20.57K |

**Key Insight:** Zen Router is **27.50x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.37M
🥈 Wouter               ████ 146.09K
🥉 React Router         █ 34.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.37M | ±0.18% | 0.7278ms | 0.9820ms | 687.01K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.09K | ±0.42% | 6.8453ms | 10.2590ms | 73.04K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.96K | ±0.88% | 28.6051ms | 48.8010ms | 17.48K |

**Key Insight:** Zen Router is **39.30x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 366.86K
🥈 Wouter               ████ 37.34K
🥉 React Router         █ 5.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 366.86K | ±0.34% | 2.7258ms | 3.4360ms | 183.43K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 37.34K | ±0.70% | 26.7814ms | 45.0440ms | 18.67K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.39K | ±0.64% | 185.6873ms | 368.6480ms | 2.69K |

**Key Insight:** Zen Router is **68.12x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.12M
🥈 Wouter               █████ 148.03K
🥉 React Router         █ 41.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.12M | ±0.18% | 0.8896ms | 1.0220ms | 562.03K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.03K | ±0.24% | 6.7554ms | 10.3800ms | 74.02K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.37K | ±0.79% | 24.1724ms | 40.4860ms | 20.69K |

**Key Insight:** Zen Router is **27.17x faster** than React Router in this category.

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

*Last generated: 2025-11-11T05:39:40.178Z*
