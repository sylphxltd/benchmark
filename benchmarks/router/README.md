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
- **Last Run:** 2:53:18 PM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 12.2/100 | 12.2% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.6/100 | 1.6% |

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
🥇 Zen Router           ████████████████████████████████████████ 7.47M
🥈 Wouter               █████████ 1.61M
🥉 React Router         █ 32.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.47M | ±0.45% | 0.1339ms | 0.3230ms | 3.73M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.61M | ±0.42% | 0.6198ms | 1.0440ms | 806.77K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 32.54K | ±0.53% | 30.7313ms | 52.5670ms | 16.27K |

**Key Insight:** Zen Router is **229.50x faster** than React Router in this category.

### Simple Route Matching {#simple-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.60M
🥈 Wouter               █████ 856.78K
🥉 React Router         █ 36.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.60M | ±0.47% | 0.1515ms | 0.3020ms | 3.30M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 856.78K | ±0.47% | 1.1672ms | 1.9230ms | 428.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 36.63K | ±0.70% | 27.2976ms | 38.4160ms | 18.32K |

**Key Insight:** Zen Router is **180.16x faster** than React Router in this category.

### Dynamic Route Matching (1 param) {#dynamic-route-matching-1-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.40M
🥈 Wouter               █████ 310.31K
🥉 React Router         █ 40.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.40M | ±0.83% | 0.4162ms | 0.8010ms | 1.20M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 310.31K | ±0.60% | 3.2226ms | 4.0450ms | 155.15K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.57K | ±0.99% | 24.6485ms | 34.4330ms | 20.29K |

**Key Insight:** Zen Router is **59.22x faster** than React Router in this category.

### Nested Dynamic Routes (2 params) {#nested-dynamic-routes-2-params-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               ████ 176.87K
🥉 React Router         █ 52.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.19% | 0.6308ms | 1.0390ms | 792.71K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 176.87K | ±0.88% | 5.6537ms | 12.5230ms | 88.44K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 52.73K | ±3.76% | 18.9635ms | 34.5200ms | 26.37K |

**Key Insight:** Zen Router is **30.07x faster** than React Router in this category.

### Wildcard Route Matching {#wildcard-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.86M
🥈 Wouter               ████ 195.34K
🥉 React Router         █ 27.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.86M | ±0.08% | 0.5377ms | 1.0500ms | 929.82K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 195.34K | ±0.44% | 5.1193ms | 7.3280ms | 97.67K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.68K | ±0.56% | 36.1322ms | 50.3620ms | 13.84K |

**Key Insight:** Zen Router is **67.19x faster** than React Router in this category.

### Optional Parameter Route (with param) {#optional-parameter-route-with-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.31M
🥈 Wouter               █████ 152.36K
🥉 React Router         █ 42.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.31M | ±0.21% | 0.7611ms | 1.2020ms | 656.96K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 152.36K | ±0.31% | 6.5635ms | 10.5150ms | 76.18K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.11K | ±0.73% | 23.7496ms | 36.2510ms | 21.05K |

**Key Insight:** Zen Router is **31.21x faster** than React Router in this category.

### Optional Parameter Route (without param) {#optional-parameter-route-without-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.65M
🥈 Wouter               ████ 151.14K
🥉 React Router         █ 35.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.65M | ±0.21% | 0.6073ms | 0.9940ms | 823.32K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 151.14K | ±0.47% | 6.6163ms | 10.3000ms | 75.57K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.72K | ±1.07% | 27.9964ms | 47.3030ms | 17.86K |

**Key Insight:** Zen Router is **46.10x faster** than React Router in this category.

### Mixed Route Matching (realistic usage) {#mixed-route-matching-realistic-usage-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 360.90K
🥈 Wouter               ████ 40.07K
🥉 React Router         █ 5.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 360.90K | ±0.39% | 2.7709ms | 4.0750ms | 180.45K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 40.07K | ±0.39% | 24.9594ms | 33.5280ms | 20.03K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.55K | ±0.72% | 180.0633ms | 410.9180ms | 2.78K |

**Key Insight:** Zen Router is **64.98x faster** than React Router in this category.

### Sequential Route Matching (worst case) {#sequential-route-matching-worst-case-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.32M
🥈 Wouter               █████ 153.42K
🥉 React Router         █ 43.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.32M | ±0.23% | 0.7559ms | 1.1490ms | 661.43K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 153.42K | ±0.27% | 6.5180ms | 9.2520ms | 76.71K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 43.26K | ±0.43% | 23.1142ms | 32.6650ms | 21.63K |

**Key Insight:** Zen Router is **30.58x faster** than React Router in this category.

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

*Last generated: 2025-11-09T17:06:20.876Z*
