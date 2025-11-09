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
- **Last Run:** 1:54:45 PM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.6/100 | 13.6% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.8/100 | 1.8% |

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
🥇 Zen Router           ████████████████████████████████████████ 6.87M
🥈 Wouter               █████████ 1.54M
🥉 React Router         █ 31.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.87M | ±0.48% | 0.1456ms | 0.2210ms | 3.43M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.54M | ±0.71% | 0.6483ms | 0.9810ms | 771.21K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.15K | ±0.63% | 32.1007ms | 66.9220ms | 15.58K |

**Key Insight:** Zen Router is **220.43x faster** than React Router in this category.

### Simple Route Matching {#simple-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.90M
🥈 Wouter               ██████ 921.98K
🥉 React Router         █ 35.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.90M | ±0.47% | 0.1696ms | 0.2610ms | 2.95M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 921.98K | ±0.48% | 1.0846ms | 1.3020ms | 460.99K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.11K | ±0.76% | 28.4814ms | 45.1140ms | 17.56K |

**Key Insight:** Zen Router is **167.93x faster** than React Router in this category.

### Dynamic Route Matching (1 param) {#dynamic-route-matching-1-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.23M
🥈 Wouter               █████ 298.77K
🥉 React Router         █ 38.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.23M | ±0.46% | 0.4491ms | 0.6910ms | 1.11M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 298.77K | ±0.49% | 3.3471ms | 5.8610ms | 149.38K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.87K | ±1.48% | 25.7277ms | 46.3360ms | 19.43K |

**Key Insight:** Zen Router is **57.29x faster** than React Router in this category.

### Nested Dynamic Routes (2 params) {#nested-dynamic-routes-2-params-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.54M
🥈 Wouter               █████ 190.35K
🥉 React Router         █ 53.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.54M | ±0.20% | 0.6512ms | 0.8020ms | 767.85K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.35K | ±0.44% | 5.2536ms | 7.1930ms | 95.17K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 53.88K | ±0.62% | 18.5595ms | 32.6810ms | 26.94K |

**Key Insight:** Zen Router is **28.50x faster** than React Router in this category.

### Wildcard Route Matching {#wildcard-route-matching}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.55M
🥈 Wouter               █████ 187.08K
🥉 React Router         █ 26.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.55M | ±0.16% | 0.6442ms | 1.0520ms | 776.15K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 187.08K | ±0.42% | 5.3453ms | 7.0630ms | 93.54K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.92K | ±0.73% | 37.1478ms | 51.4560ms | 13.46K |

**Key Insight:** Zen Router is **57.66x faster** than React Router in this category.

### Optional Parameter Route (with param) {#optional-parameter-route-with-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.10M
🥈 Wouter               █████ 148.15K
🥉 React Router         █ 40.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.10M | ±0.25% | 0.9098ms | 1.0920ms | 549.59K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.15K | ±0.36% | 6.7501ms | 10.8110ms | 74.07K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.97K | ±0.81% | 24.4067ms | 40.7560ms | 20.49K |

**Key Insight:** Zen Router is **26.83x faster** than React Router in this category.

### Optional Parameter Route (without param) {#optional-parameter-route-without-param-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.36M
🥈 Wouter               ████ 148.83K
🥉 React Router         █ 34.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.36M | ±0.09% | 0.7330ms | 0.8420ms | 682.12K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.83K | ±0.44% | 6.7192ms | 8.4460ms | 74.41K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.77K | ±0.61% | 28.7641ms | 48.7610ms | 17.38K |

**Key Insight:** Zen Router is **39.24x faster** than React Router in this category.

### Mixed Route Matching (realistic usage) {#mixed-route-matching-realistic-usage-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 345.99K
🥈 Wouter               ████ 38.78K
🥉 React Router         █ 5.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 345.99K | ±0.25% | 2.8903ms | 3.3560ms | 173.00K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.78K | ±0.36% | 25.7892ms | 37.6410ms | 19.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.33K | ±0.92% | 187.7053ms | 360.5960ms | 2.66K |

**Key Insight:** Zen Router is **64.94x faster** than React Router in this category.

### Sequential Route Matching (worst case) {#sequential-route-matching-worst-case-}

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.09M
🥈 Wouter               █████ 148.30K
🥉 React Router         ██ 41.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.09M | ±0.14% | 0.9147ms | 1.0720ms | 546.63K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.30K | ±0.24% | 6.7433ms | 8.1650ms | 74.15K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.36K | ±0.46% | 24.1767ms | 42.2900ms | 20.68K |

**Key Insight:** Zen Router is **26.43x faster** than React Router in this category.

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

*Last generated: 2025-11-09T14:01:46.513Z*
