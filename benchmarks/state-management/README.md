# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

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
- **Last Run:** 2:59:32 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.4.0` | 3.04KB | Nov 7, 2025 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.2.1` | 5.35KB | Nov 7, 2025 | ✅ Latest |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **[valtio](https://github.com/pmndrs/valtio)** | `v2.2.0` | 3.07KB | Nov 6, 2025 | ✅ Latest |
| **[zustand](https://github.com/pmndrs/zustand)** | `v5.0.8` | 1.17KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **[@preact/signals](https://github.com/preactjs/signals)** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **[valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 8.27KB | 2.62x |
| 4 | **[solid-js](https://github.com/solidjs/solid)** | 3.96KB | 11.91KB | 3.38x |
| 5 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 6 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 5.35KB | 18.43KB | 4.56x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 74.9/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 65.6/100 | 87.6% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 60.1/100 | 80.2% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 19.7/100 | 26.3% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.1/100 | 13.5% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 7.0/100 | 9.3% |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.9/100 | 7.9% |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.0/100 | 0.0% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 5.35KB | 79/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 46/46 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 46/46 | 100% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 45/46 | 98% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 45/46 | 98% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 45/46 | 98% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 45/46 | 98% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 45/46 | 98% |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 44/46 | 96% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across state management libraries

| Feature | **Preact Signals** | **Redux Toolkit** | **Zen** | **Jotai** | **MobX** | **Recoil** | **Solid Signals** | **Valtio** | **Zustand** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support with full type inference</sub> | [✅](https://preactjs.com/guide/v10/signals/) | ✅ | [✅](https://github.com/sylphxltd/zen) | ✅ | [✅](https://mobx.js.org/README.html#typescript) | [✅](https://recoiljs.org/docs/guides/typescript) | [✅](https://www.solidjs.com/docs/latest#typescript) | ✅ | ✅ |
| **DevTools**<br/><sub>Browser DevTools extension for debugging</sub> | ✅ | [✅](https://github.com/reduxjs/redux-devtools) | ❌ | [✅](https://jotai.org/docs/tools/devtools) | ❌ | [✅](https://recoiljs.org/docs/guides/dev-tools) | ❌ | [✅](https://github.com/pmndrs/valtio#devtools) | [✅](https://github.com/pmndrs/zustand#redux-devtools) |
| **Time Travel**<br/><sub>Time-travel debugging capability</sub> | ❌ | [✅](https://redux-toolkit.js.org/api/configureStore) | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Middleware**<br/><sub>Middleware/plugin system for extensibility</sub> | ❌ | [✅](https://redux-toolkit.js.org/api/getDefaultMiddleware) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | [✅](https://github.com/pmndrs/zustand#middleware) |
| **Async Support**<br/><sub>Built-in async/thunk operations</sub> | ❌ | ✅ | [✅](https://github.com/sylphxltd/zen) | [✅](https://jotai.org/docs/guides/async) | ✅ | [✅](https://recoiljs.org/docs/guides/asynchronous-data-queries) | ❌ | ✅ | ✅ |
| **Selectors**<br/><sub>Built-in selector/computed value system</sub> | [✅](https://preactjs.com/guide/v10/signals/#computed-signals) | ✅ | [✅](https://github.com/sylphxltd/zen) | ✅ | [✅](https://mobx.js.org/computeds.html) | ✅ | [✅](https://www.solidjs.com/docs/latest/api#creatememo) | [✅](https://github.com/pmndrs/valtio#computed-values) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Test Fix](#test-fix)
- [Store Creation](#store-creation)
- [Simple Increment](#simple-increment)
- [High Frequency Read](#high-frequency-read)
- [Burst Updates](#burst-updates)
- [Array Splice Operations](#array-splice-operations)
- [Large Array Sort](#large-array-sort)
- [Array Find Operations](#array-find-operations)
- [Deep Object Creation](#deep-object-creation)
- [10-Level Nested Update](#10-level-nested-update)
- [Deep Read Access](#deep-read-access)
- [Complex Computed Chain](#complex-computed-chain)
- [Computed Invalidation](#computed-invalidation)
- [Subscription Cascade](#subscription-cascade)
- [Reaction Performance](#reaction-performance)
- [Multi-Store Operations](#multi-store-operations)
- [Memory Allocation](#memory-allocation)
- [Form State Management](#form-state-management)
- [Optimistic Update](#optimistic-update)
- [Undo/Redo Operations](#undo-redo-operations)
- [Batch State Operations](#batch-state-operations)
- [Null Value Handling](#null-value-handling)
- [Undefined Value Handling](#undefined-value-handling)
- [Async State Loading](#async-state-loading)
- [Concurrent Async Operations](#concurrent-async-operations)
- [Read (1000x)](#read-1000x-)
- [Write (no listeners)](#write-no-listeners-)
- [Write (1 subscriber)](#write-1-subscriber-)
- [Write (5 subscribers)](#write-5-subscribers-)
- [Computed - Cached Read](#computed-cached-read)
- [Computed - Update](#computed-update)
- [Chained Computed (3 levels)](#chained-computed-3-levels-)
- [Batching (100 updates)](#batching-100-updates-)
- [Subscribe/Unsubscribe](#subscribe-unsubscribe)
- [Computed Access](#computed-access)
- [Nested Update](#nested-update)
- [Array Push](#array-push)
- [Loading State Toggle](#loading-state-toggle)
- [Multiple Subscriptions (10 subscribers)](#multiple-subscriptions-10-subscribers-)
- [Batch Updates (3 state changes)](#batch-updates-3-state-changes-)
- [Array Filter](#array-filter)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels-)
- [Large State Update (1000 items)](#large-state-update-1000-items-)
- [Reactive Async State Access](#reactive-async-state-access)

### Test Fix {#test-fix}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 11.02M
🥈 Jotai                ███████████████████████████████████ 9.73M
🥉 Zen                  ██████████████████████████████████ 9.49M
   Preact Signals       ████████████████████████████████ 8.90M
   Valtio               █████ 1.36M
   MobX                 ████ 1.21M
   Redux Toolkit        █ 307.97K
   Zustand              █ 169.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 11.02M | ±0.20% | 0.0908ms | 0.1300ms | 5.51M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.73M | ±0.19% | 0.1027ms | 0.1310ms | 4.87M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.49M | ±0.10% | 0.1054ms | 0.1500ms | 4.74M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.90M | ±0.09% | 0.1123ms | 0.1310ms | 4.45M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.36M | ±0.24% | 0.7338ms | 0.9210ms | 681.42K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.21M | ±0.28% | 0.8263ms | 0.9620ms | 605.07K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 307.97K | ±0.43% | 3.2471ms | 5.7810ms | 153.99K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 169.47K | ±0.25% | 5.9008ms | 6.5620ms | 84.73K |

**Key Insight:** Solid Signals is **65.01x faster** than Zustand in this category.

### Store Creation {#store-creation}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.07M
🥈 Solid Signals        ███████████████████████████████████████ 10.69M
🥉 Zen                  █████████████████████████████████████ 10.35M
   Preact Signals       █████████████████████████████████████ 10.35M
   Solid Signals        ████████████████████████████████████ 10.06M
   Preact Signals       ████████████████████████████████████ 10.02M
   Zustand              █████████████████ 4.63M
   Zustand              ████████████████ 4.38M
   Jotai                ███ 882.41K
   Jotai                ███ 877.19K
   Valtio               █ 368.10K
   Valtio               █ 362.72K
   MobX                 █ 88.60K
   Redux Toolkit        █ 83.83K
   Redux Toolkit        █ 43.61K
   MobX                 █ 121.94
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.07M | ±0.17% | 0.0904ms | 0.1100ms | 5.53M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.69M | ±0.09% | 0.0936ms | 0.1100ms | 5.34M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.35M | ±0.23% | 0.0966ms | 0.1300ms | 5.17M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.35M | ±0.09% | 0.0966ms | 0.1200ms | 5.17M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.06M | ±0.17% | 0.0994ms | 0.1300ms | 5.03M |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.02M | ±0.15% | 0.0998ms | 0.1510ms | 5.01M |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.63M | ±0.81% | 0.2161ms | 0.3500ms | 2.31M |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.38M | ±0.36% | 0.2285ms | 0.4610ms | 2.19M |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 882.41K | ±8.41% | 1.1333ms | 1.2820ms | 441.20K |
| 10 | **[Jotai](https://github.com/pmndrs/jotai)** | 877.19K | ±2.09% | 1.1400ms | 1.5030ms | 438.60K |
| 11 | **[Valtio](https://github.com/pmndrs/valtio)** | 368.10K | ±14.30% | 2.7167ms | 3.6970ms | 184.05K |
| 12 | **[Valtio](https://github.com/pmndrs/valtio)** | 362.72K | ±14.59% | 2.7570ms | 4.4490ms | 182.22K |
| 13 | **[MobX](https://github.com/mobxjs/mobx)** | 88.60K | ±4.32% | 11.2861ms | 27.6620ms | 44.30K |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 83.83K | ±0.90% | 11.9282ms | 27.7000ms | 41.92K |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 43.61K | ±4.42% | 22.9322ms | 57.2860ms | 21.80K |
| 16 | **[MobX](https://github.com/mobxjs/mobx)** | 121.94 | ±6.33% | 8200.6614ms | 10821.2350ms | 61.00 |

**Key Insight:** Zen is **90748.77x faster** than MobX in this category.

### Simple Increment {#simple-increment}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.77M
🥈 Zen                  ███████████████████████████████████████ 10.37M
🥉 Preact Signals       █████████████████████████████████████ 9.92M
   Solid Signals        ████████████████████████████████████ 9.81M
   Jotai                ██████████████████████████████████ 9.25M
   Zen                  █████████████████████████████████ 8.84M
   Preact Signals       ███████████████████████████████ 8.43M
   MobX                 ██████ 1.70M
   Valtio               ██████ 1.56M
   Valtio               █████ 1.36M
   MobX                 ████ 1.11M
   Jotai                ██ 509.34K
   Redux Toolkit        █ 299.72K
   Redux Toolkit        █ 280.83K
   Zustand              █ 171.09K
   Zustand              █ 167.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.77M | ±0.15% | 0.0928ms | 0.1100ms | 5.39M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.37M | ±0.09% | 0.0964ms | 0.1110ms | 5.19M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.92M | ±0.14% | 0.1008ms | 0.1300ms | 4.96M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.81M | ±0.16% | 0.1020ms | 0.1200ms | 4.90M |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.25M | ±0.09% | 0.1081ms | 0.1400ms | 4.62M |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 8.84M | ±0.10% | 0.1131ms | 0.1600ms | 4.42M |
| 7 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.43M | ±0.12% | 0.1186ms | 0.1400ms | 4.22M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.11% | 0.5873ms | 0.7010ms | 851.36K |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.56M | ±0.26% | 0.6394ms | 0.6820ms | 782.02K |
| 10 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.36M | ±0.53% | 0.7375ms | 0.7920ms | 677.98K |
| 11 | **[MobX](https://github.com/mobxjs/mobx)** | 1.11M | ±0.32% | 0.8976ms | 1.0920ms | 557.06K |
| 12 | **[Jotai](https://github.com/pmndrs/jotai)** | 509.34K | ±0.85% | 1.9633ms | 4.3480ms | 254.67K |
| 13 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 299.72K | ±0.55% | 3.3365ms | 6.4210ms | 149.86K |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 280.83K | ±0.42% | 3.5609ms | 6.5130ms | 140.41K |
| 15 | **[Zustand](https://github.com/pmndrs/zustand)** | 171.09K | ±0.26% | 5.8448ms | 7.1230ms | 85.55K |
| 16 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.90K | ±0.28% | 5.9558ms | 6.7020ms | 83.95K |

**Key Insight:** Solid Signals is **64.15x faster** than Zustand in this category.

### High Frequency Read {#high-frequency-read}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 37.69K
🥈 Redux Toolkit        ████████████████████████████████████████ 37.32K
🥉 Solid Signals        ███████████████████████████████████████ 37.07K
   Preact Signals       ██████████████████████████████████████ 36.03K
   Zen                  ██████████████████████████████████████ 35.45K
   Zustand              ██████████████████████████████████ 32.05K
   Valtio               █████████████████████ 19.42K
   MobX                 █████████████████ 15.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 37.69K | ±0.09% | 26.5352ms | 33.6920ms | 18.84K |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 37.32K | ±0.11% | 26.7978ms | 34.0730ms | 18.66K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 37.07K | ±0.10% | 26.9776ms | 34.1730ms | 18.53K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 36.03K | ±0.11% | 27.7575ms | 34.9750ms | 18.01K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 35.45K | ±0.17% | 28.2048ms | 35.4950ms | 17.73K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 32.05K | ±0.11% | 31.2055ms | 38.3920ms | 16.02K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 19.42K | ±0.17% | 51.4877ms | 62.8670ms | 9.71K |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.83K | ±0.12% | 63.1656ms | 70.9210ms | 7.92K |

**Key Insight:** Jotai is **2.38x faster** than MobX in this category.

### Burst Updates {#burst-updates}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 359.63K
🥈 Jotai                █████████████████████████████████ 292.66K
🥉 Zen                  █████████████████████████████ 262.70K
   Preact Signals       ████████████████████████████ 249.23K
   Valtio               ██ 16.37K
   MobX                 █ 13.01K
   Redux Toolkit        █ 3.10K
   Zustand              █ 1.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 359.63K | ±0.14% | 2.7806ms | 2.7850ms | 179.82K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 292.66K | ±0.32% | 3.4170ms | 3.8070ms | 146.33K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 262.70K | ±0.08% | 3.8066ms | 3.8370ms | 131.35K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 249.23K | ±0.09% | 4.0124ms | 4.7390ms | 124.61K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.37K | ±0.24% | 61.0727ms | 72.2230ms | 8.19K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.01K | ±0.25% | 76.8658ms | 88.4650ms | 6.50K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.10K | ±0.75% | 322.4762ms | 593.4420ms | 1.55K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.75K | ±0.25% | 570.6168ms | 699.0780ms | 877.00 |

**Key Insight:** Solid Signals is **205.21x faster** than Zustand in this category.

### Array Splice Operations {#array-splice-operations}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.49M
🥈 Zen                  ██████████████ 1.58M
🥉 Solid Signals        ██████████████ 1.57M
   Preact Signals       ██████████████ 1.54M
   MobX                 ██ 169.42K
   Zustand              █ 153.31K
   Valtio               █ 113.16K
   Redux Toolkit        █ 10.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.49M | ±0.51% | 0.2225ms | 0.2500ms | 2.25M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.58M | ±0.97% | 0.6336ms | 1.0020ms | 789.14K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 1.57M | ±3.06% | 0.6368ms | 1.0220ms | 785.31K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.54M | ±1.03% | 0.6489ms | 1.0420ms | 770.68K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 169.42K | ±0.38% | 5.9026ms | 11.0600ms | 84.71K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 153.31K | ±0.42% | 6.5227ms | 9.2570ms | 76.66K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 113.16K | ±6.00% | 8.8369ms | 18.7340ms | 56.99K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.61K | ±0.44% | 94.2582ms | 178.9520ms | 5.30K |

**Key Insight:** Jotai is **423.66x faster** than Redux Toolkit in this category.

### Large Array Sort {#large-array-sort}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 32.42K
🥈 Zen                  ███████████████████████████████████████ 31.73K
🥉 Preact Signals       ███████████████████████████████████████ 31.66K
   Solid Signals        ███████████████████████████████████████ 31.41K
   Zustand              █████████████████████████████████ 26.34K
   Valtio               ███ 2.42K
   MobX                 ███ 2.32K
   Redux Toolkit        █ 654.45
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 32.42K | ±0.27% | 30.8457ms | 39.5430ms | 16.21K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 31.73K | ±0.31% | 31.5167ms | 40.8060ms | 15.87K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 31.66K | ±0.38% | 31.5889ms | 41.1060ms | 15.83K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 31.41K | ±0.33% | 31.8384ms | 41.3170ms | 15.71K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 26.34K | ±0.36% | 37.9608ms | 48.2500ms | 13.17K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.42K | ±0.10% | 413.4463ms | 438.0120ms | 1.21K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.32K | ±0.50% | 431.3265ms | 604.9730ms | 1.16K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 654.45 | ±0.51% | 1527.9930ms | 1875.6700ms | 328.00 |

**Key Insight:** Jotai is **49.54x faster** than Redux Toolkit in this category.

### Array Find Operations {#array-find-operations}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 736.93K
🥈 Preact Signals       ████████████████████████████████████████ 736.09K
🥉 Zen                  ████████████████████████████████████████ 735.58K
   Solid Signals        ████████████████████████████████████████ 735.41K
   Zustand              ████████████████████████████████████████ 730.71K
   Redux Toolkit        █ 24.20K
   Valtio               █ 12.67K
   MobX                 █ 9.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 736.93K | ±0.08% | 1.3570ms | 1.4130ms | 368.46K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 736.09K | ±0.08% | 1.3585ms | 1.4130ms | 368.05K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 735.58K | ±0.08% | 1.3595ms | 1.4130ms | 367.79K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 735.41K | ±0.09% | 1.3598ms | 1.6530ms | 367.70K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 730.71K | ±0.09% | 1.3685ms | 1.4320ms | 365.36K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 24.20K | ±0.22% | 41.3267ms | 49.0210ms | 12.10K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 12.67K | ±0.12% | 78.9187ms | 88.0730ms | 6.34K |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 9.03K | ±0.36% | 110.7292ms | 131.3140ms | 4.52K |

**Key Insight:** Jotai is **81.60x faster** than MobX in this category.

### Deep Object Creation {#deep-object-creation}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 2.19M
🥈 Preact Signals       ████████████████████████████████████████ 2.17M
🥉 Redux Toolkit        ███████████████████████████████████████ 2.14M
   Valtio               ███████████████████████████████████████ 2.14M
   Solid Signals        ███████████████████████████████████████ 2.13M
   Zustand              ███████████████████████████████████████ 2.12M
   Zen                  ███████████████████████████████████████ 2.11M
   MobX                 ████████████████████████████████ 1.75M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.19M | ±0.23% | 0.4570ms | 0.5210ms | 1.09M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.17M | ±0.24% | 0.4619ms | 0.5310ms | 1.08M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.14M | ±0.32% | 0.4673ms | 0.7810ms | 1.07M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.14M | ±1.00% | 0.4679ms | 0.6610ms | 1.07M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.13M | ±0.80% | 0.4704ms | 0.7710ms | 1.06M |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 2.12M | ±0.85% | 0.4728ms | 0.6120ms | 1.06M |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 2.11M | ±0.38% | 0.4737ms | 0.7810ms | 1.06M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 1.75M | ±0.93% | 0.5728ms | 0.9310ms | 872.84K |

**Key Insight:** Jotai is **1.25x faster** than MobX in this category.

### 10-Level Nested Update {#10-level-nested-update}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 7.46M
🥈 Valtio               ██████ 1.04M
🥉 MobX                 ███ 617.02K
   Solid Signals        ██ 448.02K
   Zen                  ██ 436.33K
   Preact Signals       ██ 432.85K
   Zustand              █ 119.32K
   Redux Toolkit        █ 48.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.46M | ±0.56% | 0.1340ms | 0.2400ms | 3.73M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.04M | ±0.24% | 0.9598ms | 1.0620ms | 520.96K |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 617.02K | ±0.23% | 1.6207ms | 2.9560ms | 308.51K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 448.02K | ±0.16% | 2.2320ms | 2.5650ms | 224.01K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 436.33K | ±0.68% | 2.2918ms | 4.2580ms | 218.17K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 432.85K | ±0.16% | 2.3103ms | 2.4440ms | 216.42K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 119.32K | ±0.32% | 8.3811ms | 14.9380ms | 59.66K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 48.82K | ±0.36% | 20.4817ms | 30.9070ms | 24.41K |

**Key Insight:** Jotai is **152.89x faster** than Redux Toolkit in this category.

### Deep Read Access {#deep-read-access}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 10.04M
🥈 Solid Signals        ███████████████████████████████████████ 9.68M
🥉 Redux Toolkit        ██████████████████████████████████████ 9.65M
   Preact Signals       ██████████████████████████████████████ 9.61M
   Zen                  ████████████████████████████████████ 9.03M
   Zustand              ██████████████████████████████████ 8.49M
   Valtio               ██████████ 2.43M
   MobX                 ███ 754.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.04M | ±0.18% | 0.0996ms | 0.1110ms | 5.02M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.68M | ±0.09% | 0.1033ms | 0.1400ms | 4.84M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.65M | ±0.14% | 0.1037ms | 0.1300ms | 4.82M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.61M | ±0.09% | 0.1041ms | 0.1200ms | 4.80M |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 9.03M | ±0.14% | 0.1107ms | 0.1210ms | 4.52M |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.49M | ±0.09% | 0.1178ms | 0.1310ms | 4.24M |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.43M | ±0.09% | 0.4107ms | 0.4300ms | 1.22M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 754.04K | ±0.20% | 1.3262ms | 1.4130ms | 377.02K |

**Key Insight:** Jotai is **13.31x faster** than MobX in this category.

### Complex Computed Chain {#complex-computed-chain}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.85M
🥈 Zen                  ████████████████████████████████████████ 9.81M
🥉 Redux Toolkit        ████████████████████████████████████████ 9.80M
   Zustand              ████████████████████████████████████████ 9.76M
   Preact Signals       ████████████████████████████████████████ 9.76M
   Solid Signals        ███████████████████████████████████████ 9.50M
   Valtio               ███████████████████████████████ 7.61M
   MobX                 ███████████████████████████ 6.73M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.85M | ±0.16% | 0.1015ms | 0.1200ms | 4.92M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 9.81M | ±0.09% | 0.1019ms | 0.1200ms | 4.91M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.80M | ±0.10% | 0.1020ms | 0.1210ms | 4.90M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.76M | ±0.15% | 0.1025ms | 0.1110ms | 4.88M |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.76M | ±0.09% | 0.1025ms | 0.1200ms | 4.88M |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.50M | ±0.15% | 0.1053ms | 0.1210ms | 4.75M |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.61M | ±0.09% | 0.1314ms | 0.1410ms | 3.81M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 6.73M | ±0.16% | 0.1485ms | 0.1700ms | 3.37M |

**Key Insight:** Jotai is **1.46x faster** than MobX in this category.

### Computed Invalidation {#computed-invalidation}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.80M
🥈 Jotai                ██████████████████████████████████████ 9.28M
🥉 Zen                  ████████████████████████████████████ 8.71M
   Preact Signals       ██████████████████████████████████ 8.30M
   MobX                 ███████ 1.71M
   Valtio               █████ 1.34M
   Redux Toolkit        █ 283.76K
   Zustand              █ 171.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.80M | ±0.10% | 0.1020ms | 0.1400ms | 4.90M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.28M | ±0.09% | 0.1078ms | 0.1400ms | 4.64M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.71M | ±0.09% | 0.1149ms | 0.1310ms | 4.35M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.30M | ±0.09% | 0.1204ms | 0.1510ms | 4.15M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.71M | ±0.49% | 0.5843ms | 0.6220ms | 855.75K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.34M | ±0.33% | 0.7456ms | 0.7920ms | 670.61K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 283.76K | ±0.49% | 3.5241ms | 4.8990ms | 141.88K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 171.08K | ±0.37% | 5.8452ms | 6.3820ms | 85.54K |

**Key Insight:** Solid Signals is **57.29x faster** than Zustand in this category.

### Subscription Cascade {#subscription-cascade}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 10.17M
🥈 MobX                 ███████████████████████████████████████ 10.01M
🥉 Solid Signals        ███████████████████████████████████████ 9.91M
   Zen                  ███████████████████████████████████████ 9.89M
   Preact Signals       ███████████████████████████████████████ 9.88M
   Valtio               ██████████████████████████████████████ 9.75M
   Jotai                ██████████████████████████████████████ 9.66M
   Redux Toolkit        ██████ 1.51M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.17M | ±0.09% | 0.0983ms | 0.1200ms | 5.09M |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 10.01M | ±0.09% | 0.0999ms | 0.1200ms | 5.00M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.91M | ±0.09% | 0.1009ms | 0.1200ms | 4.96M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 9.89M | ±0.09% | 0.1012ms | 0.1210ms | 4.94M |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.88M | ±0.16% | 0.1013ms | 0.1200ms | 4.94M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 9.75M | ±0.09% | 0.1025ms | 0.1210ms | 4.88M |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.66M | ±0.09% | 0.1035ms | 0.1300ms | 4.83M |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.51M | ±19.23% | 0.6605ms | 1.0410ms | 807.34K |

**Key Insight:** Zustand is **6.72x faster** than Redux Toolkit in this category.

### Reaction Performance {#reaction-performance}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.89M
🥈 Jotai                ██████████████████████████████████████ 9.35M
🥉 Zen                  ████████████████████████████████████ 8.89M
   Preact Signals       ██████████████████████████████████ 8.37M
   MobX                 ███████ 1.70M
   Valtio               █████ 1.35M
   Zustand              █ 168.22K
   Redux Toolkit        █ 82.31
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.89M | ±0.09% | 0.1011ms | 0.1200ms | 4.95M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.35M | ±0.09% | 0.1069ms | 0.1400ms | 4.68M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.89M | ±0.09% | 0.1125ms | 0.1400ms | 4.44M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.37M | ±0.09% | 0.1195ms | 0.1400ms | 4.18M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.81% | 0.5884ms | 0.6310ms | 849.79K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.35M | ±0.52% | 0.7404ms | 0.7910ms | 675.30K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 168.22K | ±0.69% | 5.9446ms | 6.6020ms | 84.11K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.31 | ±0.34% | 12148.5107ms | 12569.0980ms | 42.00 |

**Key Insight:** Solid Signals is **120179.78x faster** than Redux Toolkit in this category.

### Multi-Store Operations {#multi-store-operations}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.91M
🥈 Zen                  ███████████████████████████████████ 8.70M
🥉 Preact Signals       ██████████████████████████████████ 8.45M
   Jotai                ██████████████████████████████████ 8.41M
   MobX                 ███████ 1.70M
   Valtio               █████ 1.34M
   Zustand              █ 166.95K
   Redux Toolkit        █ 82.12
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.91M | ±0.09% | 0.1009ms | 0.1200ms | 4.96M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.70M | ±0.09% | 0.1149ms | 0.1310ms | 4.35M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.45M | ±0.09% | 0.1183ms | 0.1410ms | 4.22M |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.41M | ±2.68% | 0.1189ms | 0.1710ms | 4.20M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.62% | 0.5878ms | 0.6220ms | 850.63K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.34M | ±0.60% | 0.7446ms | 0.7820ms | 671.46K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.95K | ±1.17% | 5.9899ms | 6.4820ms | 83.47K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.12 | ±0.41% | 12177.1070ms | 12775.7510ms | 42.00 |

**Key Insight:** Solid Signals is **120722.39x faster** than Redux Toolkit in this category.

### Memory Allocation {#memory-allocation}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 283.77
🥈 Zen                  ███████████████████████████████████████ 275.12
🥉 Preact Signals       █████████████████████████████████████ 261.80
   Solid Signals        █████████████████████ 151.99
   MobX                 ████████████████████ 143.45
   Redux Toolkit        ████████████████████ 139.34
   Jotai                ██████████████████ 128.68
   Valtio               █████████████████ 119.95
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 283.77 | ±0.26% | 3523.9761ms | 3684.8390ms | 142.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 275.12 | ±0.35% | 3634.8203ms | 3868.0280ms | 138.00 |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 261.80 | ±4.16% | 3819.6847ms | 6614.3450ms | 131.00 |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 151.99 | ±12.57% | 6579.3349ms | 12628.4450ms | 76.00 |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 143.45 | ±24.28% | 6970.9141ms | 60468.7090ms | 72.00 |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 139.34 | ±20.06% | 7176.4413ms | 39620.3720ms | 71.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 128.68 | ±20.85% | 7771.4035ms | 43594.7550ms | 66.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 119.95 | ±24.69% | 8336.4990ms | 48044.3110ms | 64.00 |

**Key Insight:** Zustand is **2.37x faster** than Valtio in this category.

### Form State Management {#form-state-management}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.19M
🥈 Valtio               ███████████████████████████████ 3.30M
🥉 MobX                 ██████████████████████████ 2.72M
   Zustand              █████████ 995.79K
   Zen                  ███ 295.92K
   Preact Signals       ███ 294.85K
   Solid Signals        ███ 291.43K
   Redux Toolkit        █ 82.07
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.19M | ±0.45% | 0.2384ms | 0.2800ms | 2.10M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.30M | ±0.10% | 0.3029ms | 0.3410ms | 1.65M |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 2.72M | ±0.09% | 0.3682ms | 0.4010ms | 1.36M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 995.79K | ±0.81% | 1.0042ms | 1.2320ms | 497.89K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 295.92K | ±1.44% | 3.3793ms | 3.7070ms | 147.96K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 294.85K | ±1.50% | 3.3915ms | 3.7470ms | 147.43K |
| 7 | **[Solid Signals](https://github.com/solidjs/solid)** | 291.43K | ±2.20% | 3.4314ms | 3.9470ms | 145.72K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.07 | ±0.42% | 12185.3559ms | 12638.3050ms | 42.00 |

**Key Insight:** Jotai is **51105.35x faster** than Redux Toolkit in this category.

### Optimistic Update {#optimistic-update}

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 11.05K
🥈 Zustand              ████████████████████████████████████████ 10.92K
🥉 Zen                  ████████████████████████████████████████ 10.92K
   Jotai                ███████████████████████████████████████ 10.69K
   Solid Signals        ██████████████████████████████████████ 10.59K
   MobX                 ████████ 2.23K
   Valtio               ██ 573.60
   Redux Toolkit        █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 11.05K | ±9.06% | 90.5133ms | 613.3690ms | 5.53K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.92K | ±9.13% | 91.5560ms | 597.6290ms | 5.46K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.92K | ±9.76% | 91.5842ms | 595.5150ms | 5.46K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.69K | ±9.95% | 93.5777ms | 552.0950ms | 5.34K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.59K | ±9.49% | 94.4673ms | 587.9710ms | 5.29K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 2.23K | ±2.99% | 448.1274ms | 2009.5500ms | 1.12K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 573.60 | ±6.65% | 1743.3847ms | 6162.4070ms | 287.00 |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Preact Signals is **Infinityx faster** than Redux Toolkit in this category.

### Undo/Redo Operations {#undo-redo-operations}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 10.06M
🥈 Preact Signals       ███████████████████████████████████████ 9.91M
🥉 Zen                  ███████████████████████████████████████ 9.88M
   Zustand              ███████████████████████████████████████ 9.68M
   Solid Signals        ██████████████████████████████████████ 9.67M
   Valtio               █████████████████████████ 6.24M
   MobX                 ███████████ 2.76M
   Redux Toolkit        █ 64.32
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.06M | ±0.20% | 0.0994ms | 0.1110ms | 5.03M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.91M | ±0.10% | 0.1009ms | 0.1300ms | 4.96M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.88M | ±0.10% | 0.1012ms | 0.1200ms | 4.94M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.68M | ±0.20% | 0.1033ms | 0.1600ms | 4.84M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.67M | ±0.09% | 0.1035ms | 0.1600ms | 4.83M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.24M | ±0.09% | 0.1604ms | 0.1800ms | 3.12M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.76M | ±0.83% | 0.3625ms | 0.4010ms | 1.38M |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 64.32 | ±7.64% | 15547.5385ms | 26578.6570ms | 33.00 |

**Key Insight:** Jotai is **156366.56x faster** than Redux Toolkit in this category.

### Batch State Operations {#batch-state-operations}

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 6.55M
🥈 Solid Signals        ██████████████████████████████████ 5.56M
🥉 Zen                  █████████████████████████████ 4.73M
   Zustand              █ 10.40K
   Jotai                █ 5.35K
   MobX                 █ 817.45
   Valtio               █ 517.35
   Redux Toolkit        █ 26.15
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.55M | ±0.09% | 0.1527ms | 0.2510ms | 3.27M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.56M | ±0.09% | 0.1799ms | 0.2800ms | 2.78M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.73M | ±0.36% | 0.2115ms | 0.3100ms | 2.36M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.40K | ±18.84% | 96.1129ms | 5256.5960ms | 5.22K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.35K | ±19.55% | 186.8974ms | 6918.1110ms | 2.68K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 817.45 | ±27.11% | 1223.3174ms | 20386.1860ms | 409.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 517.35 | ±5.46% | 1932.9164ms | 5313.0510ms | 260.00 |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 26.15 | ±0.66% | 38247.6490ms | 39448.5940ms | 14.00 |

**Key Insight:** Preact Signals is **250429.30x faster** than Redux Toolkit in this category.

### Null Value Handling {#null-value-handling}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 10.03M
🥈 Solid Signals        ███████████████████████████████████ 8.76M
🥉 Zen                  ███████████████████████████████████ 8.76M
   Preact Signals       ██████████████████████████████████ 8.45M
   Valtio               █████████████████ 4.26M
   MobX                 ███████ 1.77M
   Zustand              █ 144.16K
   Redux Toolkit        █ 83.02
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.03M | ±0.09% | 0.0997ms | 0.1200ms | 5.01M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.76M | ±2.37% | 0.1141ms | 0.1800ms | 4.38M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.76M | ±0.32% | 0.1142ms | 0.1400ms | 4.38M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.45M | ±0.49% | 0.1183ms | 0.1800ms | 4.23M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.26M | ±0.09% | 0.2348ms | 0.2510ms | 2.13M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.77M | ±2.23% | 0.5643ms | 0.6610ms | 886.10K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 144.16K | ±2.25% | 6.9367ms | 9.4280ms | 72.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 83.02 | ±0.23% | 12045.5622ms | 12236.6410ms | 42.00 |

**Key Insight:** Jotai is **120759.00x faster** than Redux Toolkit in this category.

### Undefined Value Handling {#undefined-value-handling}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.92M
🥈 Zen                  ███████████████████████████████████ 8.67M
🥉 Preact Signals       ██████████████████████████████████ 8.47M
   Solid Signals        ██████████████████████████████████ 8.45M
   Valtio               █████████████████ 4.26M
   MobX                 ███████ 1.78M
   Zustand              █ 143.34K
   Redux Toolkit        █ 82.74
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.92M | ±0.09% | 0.1008ms | 0.1210ms | 4.96M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.67M | ±0.36% | 0.1153ms | 0.1410ms | 4.34M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.47M | ±0.10% | 0.1181ms | 0.1410ms | 4.23M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.45M | ±2.91% | 0.1183ms | 0.1800ms | 4.23M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.26M | ±0.37% | 0.2349ms | 0.3710ms | 2.13M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.78M | ±1.53% | 0.5604ms | 0.6720ms | 892.17K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 143.34K | ±2.71% | 6.9762ms | 7.6940ms | 71.67K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.74 | ±0.28% | 12086.4540ms | 12422.8970ms | 42.00 |

**Key Insight:** Jotai is **119939.53x faster** than Redux Toolkit in this category.

### Async State Loading {#async-state-loading}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 934.26
🥈 Zen                  ████████████████████████████████████████ 927.90
🥉 Valtio               ████████████████████████████████████████ 927.28
   Preact Signals       ████████████████████████████████████████ 925.30
   MobX                 ████████████████████████████████████████ 925.27
   Jotai                ███████████████████████████████████████ 920.04
   Redux Toolkit        ███████████████████████████████████████ 916.90
   Zustand              ███████████████████████████████████████ 913.98
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 934.26 | ±0.72% | 1070.3699ms | 1095.6270ms | 468.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 927.90 | ±0.85% | 1077.7055ms | 1129.5720ms | 464.00 |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 927.28 | ±0.93% | 1078.4271ms | 2127.5690ms | 464.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 925.30 | ±1.01% | 1080.7278ms | 2126.8850ms | 463.00 |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 925.27 | ±0.83% | 1080.7699ms | 1120.7300ms | 463.00 |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 920.04 | ±1.11% | 1086.9072ms | 2139.5010ms | 461.00 |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 916.90 | ±1.03% | 1090.6298ms | 2138.4290ms | 459.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 913.98 | ±1.23% | 1094.1157ms | 2135.6840ms | 457.00 |

**Key Insight:** Solid Signals is **1.02x faster** than Zustand in this category.

### Concurrent Async Operations {#concurrent-async-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 926.15
🥈 Valtio               ████████████████████████████████████████ 926.10
🥉 Zen                  ████████████████████████████████████████ 924.17
   Preact Signals       ████████████████████████████████████████ 923.02
   Solid Signals        ████████████████████████████████████████ 922.80
   MobX                 ████████████████████████████████████████ 921.14
   Jotai                ████████████████████████████████████████ 919.51
   Zustand              ███████████████████████████████████████ 913.52
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 926.15 | ±0.72% | 1079.7388ms | 1137.1660ms | 464.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 926.10 | ±0.83% | 1079.7922ms | 1111.7840ms | 464.00 |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 924.17 | ±1.02% | 1082.0492ms | 2128.6810ms | 463.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 923.02 | ±1.02% | 1083.3944ms | 2132.8790ms | 462.00 |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 922.80 | ±1.02% | 1083.6626ms | 2130.3430ms | 462.00 |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 921.14 | ±1.05% | 1085.6084ms | 2142.9160ms | 461.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 919.51 | ±1.19% | 1087.5374ms | 2132.2770ms | 460.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 913.52 | ±1.18% | 1094.6684ms | 2136.2520ms | 457.00 |

**Key Insight:** Redux Toolkit is **1.01x faster** than Zustand in this category.

### Read (1000x) {#read-1000x-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.35M
🥈 Zen                  ███████████████████ 1.13M
🥉 Preact Signals       █████████████ 736.93K
   Zustand              ██████████ 602.37K
   Redux Toolkit        ███████ 436.36K
   Valtio               █ 41.01K
   MobX                 █ 33.04K
   Jotai                █ 3.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.35M | ±0.16% | 0.4258ms | 0.7110ms | 1.17M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.13M | ±0.08% | 0.8879ms | 1.0220ms | 563.13K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 736.93K | ±0.17% | 1.3570ms | 1.3630ms | 368.46K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 602.37K | ±0.08% | 1.6601ms | 1.6630ms | 301.19K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 436.36K | ±0.08% | 2.2917ms | 2.3040ms | 218.18K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 41.01K | ±0.08% | 24.3856ms | 31.4680ms | 20.50K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 33.04K | ±0.09% | 30.2650ms | 37.3800ms | 16.52K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.24K | ±0.51% | 308.5420ms | 496.5940ms | 1.62K |

**Key Insight:** Solid Signals is **724.67x faster** than Jotai in this category.

### Write (no listeners) {#write-no-listeners-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.45M
🥈 Zen                  ███████████████████████████████████████ 10.29M
🥉 Preact Signals       ██████████████████████████████████████ 9.90M
   MobX                 ████████ 2.12M
   Valtio               ██████ 1.64M
   Jotai                ██ 544.32K
   Redux Toolkit        █ 273.33K
   Zustand              █ 168.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.45M | ±0.09% | 0.0957ms | 0.1100ms | 5.22M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.29M | ±0.14% | 0.0972ms | 0.1210ms | 5.14M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.90M | ±0.19% | 0.1010ms | 0.1210ms | 4.95M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.12M | ±0.54% | 0.4720ms | 0.5010ms | 1.06M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.64M | ±0.49% | 0.6086ms | 0.6710ms | 821.58K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 544.32K | ±0.53% | 1.8372ms | 3.5470ms | 272.16K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 273.33K | ±0.48% | 3.6586ms | 4.3580ms | 136.67K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 168.11K | ±0.50% | 5.9486ms | 6.9330ms | 84.06K |

**Key Insight:** Solid Signals is **62.16x faster** than Zustand in this category.

### Write (1 subscriber) {#write-1-subscriber-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.23M
🥈 Zen                  ██████████████████████ 4.56M
🥉 Preact Signals       ███████████████ 3.07M
   MobX                 ██ 428.11K
   Redux Toolkit        █ 239.41K
   Jotai                █ 217.11K
   Zustand              █ 162.24K
   Valtio               █ 2.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.23M | ±0.97% | 0.1215ms | 0.1800ms | 4.12M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.56M | ±0.52% | 0.2192ms | 0.2800ms | 2.28M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.07M | ±0.70% | 0.3256ms | 0.5210ms | 1.54M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 428.11K | ±1.98% | 2.3359ms | 4.0470ms | 214.05K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 239.41K | ±0.59% | 4.1769ms | 6.0120ms | 119.71K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 217.11K | ±4.26% | 4.6059ms | 8.5560ms | 108.56K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 162.24K | ±0.38% | 6.1637ms | 9.6080ms | 81.12K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.14K | ±11.65% | 468.2579ms | 6050.7150ms | 1.07K |

**Key Insight:** Solid Signals is **3855.26x faster** than Valtio in this category.

### Write (5 subscribers) {#write-5-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.76M
🥈 Zen                  █████████████████ 2.83M
🥉 Preact Signals       ████████ 1.30M
   Redux Toolkit        █ 170.16K
   Zustand              █ 139.22K
   MobX                 █ 106.98K
   Jotai                █ 91.77K
   Valtio               █ 3.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.76M | ±1.76% | 0.1479ms | 0.2110ms | 3.38M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.83M | ±0.48% | 0.3530ms | 0.5710ms | 1.42M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.30M | ±0.55% | 0.7702ms | 1.0210ms | 649.19K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 170.16K | ±2.38% | 5.8770ms | 10.7100ms | 85.08K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 139.22K | ±2.73% | 7.1828ms | 12.0030ms | 69.78K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 106.98K | ±6.67% | 9.3476ms | 16.6210ms | 53.49K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 91.77K | ±8.75% | 10.8967ms | 29.9450ms | 45.89K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.24K | ±2.95% | 308.6370ms | 1146.5430ms | 1.62K |

**Key Insight:** Solid Signals is **2086.52x faster** than Valtio in this category.

### Computed - Cached Read {#computed-cached-read}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.62M
🥈 Solid Signals        ███████████████████████████████████████ 10.39M
🥉 Preact Signals       ██████████████████████████████████████ 10.21M
   Zustand              █████████████████████████████████████ 9.86M
   Redux Toolkit        █████████████████████████████████ 8.73M
   Valtio               ███████████████████████ 5.99M
   MobX                 ███████████ 3.01M
   Jotai                ████ 973.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.62M | ±0.09% | 0.0942ms | 0.1100ms | 5.31M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.39M | ±0.11% | 0.0962ms | 0.1100ms | 5.20M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.21M | ±0.14% | 0.0980ms | 0.1200ms | 5.10M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.86M | ±0.12% | 0.1014ms | 0.1500ms | 4.93M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.73M | ±0.09% | 0.1145ms | 0.1410ms | 4.37M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.99M | ±0.09% | 0.1670ms | 0.1810ms | 2.99M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.01M | ±0.50% | 0.3325ms | 0.3610ms | 1.50M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 973.81K | ±0.42% | 1.0269ms | 1.1520ms | 486.90K |

**Key Insight:** Zen is **10.91x faster** than Jotai in this category.

### Computed - Update {#computed-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.17M
🥈 Zen                  ███████████████████████████████████ 8.90M
🥉 Preact Signals       ██████████████████████████ 6.69M
   Valtio               ██████ 1.46M
   MobX                 █████ 1.35M
   Jotai                █ 221.47K
   Redux Toolkit        █ 203.35K
   Zustand              █ 169.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.17M | ±0.19% | 0.0983ms | 0.1500ms | 5.09M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.90M | ±0.12% | 0.1124ms | 0.1400ms | 4.45M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.69M | ±0.09% | 0.1495ms | 0.1800ms | 3.35M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.46M | ±0.49% | 0.6837ms | 0.7910ms | 731.37K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.35M | ±0.23% | 0.7420ms | 0.8410ms | 673.86K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 221.47K | ±3.07% | 4.5152ms | 8.8270ms | 110.84K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 203.35K | ±1.21% | 4.9175ms | 7.9750ms | 101.68K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 169.46K | ±0.33% | 5.9010ms | 6.5830ms | 84.73K |

**Key Insight:** Solid Signals is **60.04x faster** than Zustand in this category.

### Chained Computed (3 levels) {#chained-computed-3-levels-}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.68M
🥈 Solid Signals        ███████████████████████████████████████ 10.31M
🥉 Preact Signals       █████████████████████████████████████ 9.80M
   Zustand              ████████████████████████████████████ 9.73M
   Redux Toolkit        ███████████████████████████████ 8.40M
   Valtio               ██████████████ 3.81M
   MobX                 ██ 522.53K
   Jotai                ██ 488.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.68M | ±0.09% | 0.0937ms | 0.1300ms | 5.34M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.31M | ±0.09% | 0.0970ms | 0.1110ms | 5.16M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.80M | ±0.09% | 0.1020ms | 0.1310ms | 4.90M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.73M | ±0.09% | 0.1027ms | 0.1200ms | 4.87M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.40M | ±0.09% | 0.1191ms | 0.1410ms | 4.20M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.81M | ±0.17% | 0.2626ms | 0.4300ms | 1.90M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 522.53K | ±0.47% | 1.9138ms | 3.6960ms | 261.26K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 488.87K | ±0.52% | 2.0455ms | 2.3650ms | 244.44K |

**Key Insight:** Zen is **21.84x faster** than Jotai in this category.

### Batching (100 updates) {#batching-100-updates-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.22M
🥈 Preact Signals       ██████ 883.05K
🥉 Zen                  █████ 850.45K
   MobX                 █ 40.31K
   Valtio               █ 25.89K
   Jotai                █ 7.38K
   Redux Toolkit        █ 2.00K
   Zustand              █ 1.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.22M | ±0.13% | 0.1608ms | 0.2400ms | 3.11M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 883.05K | ±0.08% | 1.1324ms | 1.1520ms | 441.52K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 850.45K | ±0.13% | 1.1758ms | 1.2020ms | 425.23K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 40.31K | ±0.29% | 24.8076ms | 32.7110ms | 20.16K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.89K | ±0.27% | 38.6252ms | 48.2200ms | 12.95K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.38K | ±2.57% | 135.4181ms | 330.2540ms | 3.69K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.00K | ±2.00% | 500.0677ms | 985.2140ms | 1.00K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.79K | ±0.31% | 558.1517ms | 710.8720ms | 896.00 |

**Key Insight:** Solid Signals is **3470.82x faster** than Zustand in this category.

### Subscribe/Unsubscribe {#subscribe-unsubscribe}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.43M
🥈 Zen                  ████████████████████████ 6.30M
🥉 Preact Signals       ███████████████████ 5.02M
   Zustand              ███████████████ 3.87M
   Redux Toolkit        █████████ 2.31M
   MobX                 ███ 703.11K
   Jotai                █ 355.87K
   Valtio               █ 3.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.43M | ±0.09% | 0.0958ms | 0.1100ms | 5.22M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.30M | ±1.76% | 0.1587ms | 0.2610ms | 3.15M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.02M | ±0.51% | 0.1992ms | 0.2400ms | 2.51M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 3.87M | ±0.98% | 0.2586ms | 1.8630ms | 1.93M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.31M | ±2.38% | 0.4337ms | 2.0330ms | 1.15M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 703.11K | ±1.72% | 1.4222ms | 3.1160ms | 351.56K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 355.87K | ±10.58% | 2.8100ms | 6.5020ms | 179.63K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.06K | ±3.32% | 326.9594ms | 1144.0270ms | 1.53K |

**Key Insight:** Solid Signals is **3411.58x faster** than Valtio in this category.

### Computed Access {#computed-access}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.51M
🥈 Solid Signals        ███████████████████████████████████████ 10.28M
🥉 Zen                  ███████████████████████████████████████ 10.18M
   Preact Signals       ██████████████████████████████████████ 10.03M
   Zustand              ███████████████████████████████████ 9.12M
   Valtio               ████████████████████████ 6.22M
   MobX                 ████████████ 3.24M
   Jotai                ████ 955.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.51M | ±0.16% | 0.0951ms | 0.1100ms | 5.26M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.28M | ±0.15% | 0.0973ms | 0.1300ms | 5.14M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.18M | ±0.15% | 0.0982ms | 0.1110ms | 5.09M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.03M | ±0.09% | 0.0997ms | 0.1510ms | 5.01M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.12M | ±0.16% | 0.1096ms | 0.1210ms | 4.56M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.22M | ±0.09% | 0.1609ms | 0.1800ms | 3.11M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.24M | ±0.52% | 0.3084ms | 0.3610ms | 1.62M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 955.25K | ±0.40% | 1.0469ms | 1.2220ms | 477.62K |

**Key Insight:** Redux Toolkit is **11.01x faster** than Jotai in this category.

### Nested Update {#nested-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.95M
🥈 Preact Signals       ██████████████████████████████████████ 8.42M
🥉 Zen                  █████████████████████████████████████ 8.35M
   MobX                 ███████ 1.66M
   Valtio               ██████ 1.38M
   Jotai                ███ 668.29K
   Redux Toolkit        █ 203.12K
   Zustand              █ 160.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.95M | ±0.09% | 0.1117ms | 0.2100ms | 4.48M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.42M | ±0.10% | 0.1188ms | 0.2110ms | 4.21M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.35M | ±0.09% | 0.1198ms | 0.2200ms | 4.17M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.66M | ±0.60% | 0.6012ms | 0.7120ms | 831.62K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.38M | ±0.26% | 0.7243ms | 0.8310ms | 690.33K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 668.29K | ±0.66% | 1.4964ms | 3.1560ms | 334.15K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 203.12K | ±0.64% | 4.9232ms | 5.8600ms | 101.56K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 160.84K | ±0.30% | 6.2175ms | 8.1460ms | 80.42K |

**Key Insight:** Solid Signals is **55.67x faster** than Zustand in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 150.40K
🥈 MobX                 ██████████████████████████████████████ 141.29K
🥉 Zustand              ███ 12.28K
   Jotai                ███ 9.41K
   Preact Signals       ██ 8.51K
   Solid Signals        ██ 8.50K
   Zen                  ██ 8.44K
   Redux Toolkit        █ 4.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 150.40K | ±10.96% | 6.6489ms | 11.7220ms | 75.20K |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 141.29K | ±6.62% | 7.0779ms | 13.8760ms | 70.72K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12.28K | ±7.26% | 81.4014ms | 188.0300ms | 6.14K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.41K | ±7.75% | 106.2997ms | 197.9290ms | 4.70K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.51K | ±7.22% | 117.4694ms | 186.0170ms | 4.26K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.50K | ±7.38% | 117.6621ms | 186.8470ms | 4.25K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 8.44K | ±7.47% | 118.4664ms | 196.3640ms | 4.22K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.75K | ±1.14% | 210.5998ms | 306.8210ms | 2.38K |

**Key Insight:** Valtio is **31.67x faster** than Redux Toolkit in this category.

### Loading State Toggle {#loading-state-toggle}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.40M
🥈 Preact Signals       ████████████████████████████████████ 8.45M
🥉 Zen                  █████████████████████████ 5.78M
   Valtio               ██████████ 2.36M
   MobX                 █████████ 2.02M
   Jotai                ███ 762.14K
   Redux Toolkit        █ 347.44K
   Zustand              █ 171.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.40M | ±0.09% | 0.1064ms | 0.2110ms | 4.70M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.45M | ±1.68% | 0.1184ms | 0.2210ms | 4.22M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.78M | ±0.09% | 0.1729ms | 0.2800ms | 2.89M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.36M | ±0.56% | 0.4240ms | 0.6920ms | 1.18M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.02M | ±0.45% | 0.4947ms | 0.6310ms | 1.01M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 762.14K | ±0.68% | 1.3121ms | 3.0960ms | 381.07K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 347.44K | ±0.72% | 2.8782ms | 3.7270ms | 173.72K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 171.52K | ±0.66% | 5.8301ms | 6.4720ms | 85.76K |

**Key Insight:** Solid Signals is **54.80x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers) {#multiple-subscriptions-10-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.48M
🥈 Zen                  ███████████ 1.18M
🥉 Preact Signals       ██████ 652.44K
   Redux Toolkit        █ 95.46K
   Zustand              █ 74.75K
   Jotai                █ 55.90K
   MobX                 █ 48.01K
   Valtio               █ 11.35
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.48M | ±1.80% | 0.2232ms | 0.3110ms | 2.24M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.18M | ±1.32% | 0.8472ms | 1.1420ms | 590.18K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 652.44K | ±1.36% | 1.5327ms | 1.8940ms | 326.22K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 95.46K | ±9.52% | 10.4756ms | 19.0660ms | 47.73K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 74.75K | ±21.71% | 13.3773ms | 43.2100ms | 37.38K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 55.90K | ±2.89% | 17.8876ms | 40.6860ms | 28.00K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 48.01K | ±10.97% | 20.8281ms | 33.0610ms | 24.12K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 11.35 | ±24.26% | 88107.7062ms | 146096.2620ms | 10.00 |

**Key Insight:** Solid Signals is **394695.87x faster** than Valtio in this category.

### Batch Updates (3 state changes) {#batch-updates-3-state-changes-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.66M
🥈 Preact Signals       ████████████████████████████████ 6.09M
🥉 Zen                  ██████████████████████ 4.25M
   Valtio               ████ 829.00K
   MobX                 ████ 704.93K
   Jotai                █ 239.80K
   Redux Toolkit        █ 179.98K
   Zustand              █ 160.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.66M | ±2.24% | 0.1306ms | 0.2310ms | 3.83M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.09M | ±0.10% | 0.1642ms | 0.2610ms | 3.04M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.25M | ±0.18% | 0.2354ms | 0.3410ms | 2.12M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 829.00K | ±0.57% | 1.2063ms | 1.3230ms | 414.50K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 704.93K | ±1.14% | 1.4186ms | 1.6830ms | 352.47K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 239.80K | ±1.09% | 4.1701ms | 8.4960ms | 119.90K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 179.98K | ±1.06% | 5.5562ms | 7.4030ms | 89.99K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 160.27K | ±1.16% | 6.2396ms | 6.9630ms | 80.13K |

**Key Insight:** Solid Signals is **47.77x faster** than Zustand in this category.

### Array Filter {#array-filter}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 9.76K
🥈 Jotai                ███████████████████ 4.56K
🥉 Zen                  ████████████████ 3.85K
   Solid Signals        ██████████████ 3.35K
   Preact Signals       ██████████████ 3.34K
   Redux Toolkit        █ 166.12
   MobX                 █ 42.18
   Valtio               █ 6.55
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.76K | ±1.98% | 102.4244ms | 394.9040ms | 4.88K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.56K | ±1.05% | 219.1328ms | 571.2130ms | 2.28K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 3.85K | ±4.54% | 259.6719ms | 1899.5750ms | 1.93K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.35K | ±4.56% | 298.9474ms | 2054.5940ms | 1.67K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.34K | ±4.56% | 299.5936ms | 2103.4250ms | 1.67K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 166.12 | ±1.35% | 6019.6421ms | 7091.4980ms | 84.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 42.18 | ±2.63% | 23707.7722ms | 27288.4370ms | 22.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.55 | ±1.01% | 152712.3331ms | 158345.2950ms | 10.00 |

**Key Insight:** Zustand is **1490.98x faster** than Valtio in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.46K
🥈 Jotai                ███████████████████████████████████████ 32.99K
🥉 Solid Signals        █████████████████████████████ 24.28K
   Preact Signals       ████████████████████████████ 23.32K
   Zustand              ██████████████████████████ 21.43K
   Redux Toolkit        █ 410.73
   Valtio               █ 87.70
   MobX                 █ 64.93
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.46K | ±0.84% | 29.8839ms | 123.5800ms | 16.73K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 32.99K | ±0.98% | 30.3168ms | 121.0960ms | 16.49K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 24.28K | ±1.89% | 41.1807ms | 141.6240ms | 12.14K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 23.32K | ±2.29% | 42.8880ms | 142.4850ms | 11.66K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 21.43K | ±1.51% | 46.6712ms | 145.7620ms | 10.71K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 410.73 | ±1.45% | 2434.7017ms | 3326.7410ms | 206.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 87.70 | ±2.35% | 11402.8462ms | 13598.3150ms | 44.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 64.93 | ±3.07% | 15401.9826ms | 20670.2140ms | 33.00 |

**Key Insight:** Zen is **515.39x faster** than MobX in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.33K
🥈 Solid Signals        █████████████ 10.59K
🥉 Preact Signals       █████████████ 10.49K
   Zustand              ████████████ 10.36K
   Jotai                ███████ 6.03K
   Redux Toolkit        █ 397.62
   Valtio               █ 88.10
   MobX                 █ 67.88
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.33K | ±0.79% | 30.0028ms | 123.4800ms | 16.67K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.59K | ±2.43% | 94.4355ms | 258.9310ms | 5.29K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.49K | ±2.62% | 95.2949ms | 176.8890ms | 5.25K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.36K | ±2.26% | 96.5676ms | 181.9790ms | 5.18K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.03K | ±1.67% | 165.7017ms | 323.0510ms | 3.02K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 397.62 | ±2.09% | 2514.9393ms | 3899.0450ms | 199.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 88.10 | ±2.38% | 11350.9654ms | 14015.6830ms | 45.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 67.88 | ±2.95% | 14731.9041ms | 21448.4330ms | 34.00 |

**Key Insight:** Zen is **491.02x faster** than MobX in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.77M
🥈 Preact Signals       ███████████████████████████████████ 6.82M
🥉 Zen                  █████████████████████████████████ 6.34M
   Valtio               ██████ 1.16M
   MobX                 █████ 919.57K
   Jotai                ██ 439.20K
   Zustand              █ 170.69K
   Redux Toolkit        █ 77.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.77M | ±1.25% | 0.1287ms | 0.2200ms | 3.89M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.82M | ±1.10% | 0.1466ms | 0.2410ms | 3.41M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 6.34M | ±1.27% | 0.1578ms | 0.2600ms | 3.17M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.16M | ±0.66% | 0.8629ms | 0.9620ms | 579.48K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 919.57K | ±0.40% | 1.0875ms | 1.2430ms | 459.79K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 439.20K | ±24.45% | 2.2769ms | 5.7310ms | 239.03K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 170.69K | ±0.68% | 5.8587ms | 7.8640ms | 85.34K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 77.78K | ±1.22% | 12.8575ms | 22.8830ms | 38.89K |

**Key Insight:** Solid Signals is **99.93x faster** than Redux Toolkit in this category.

### Large State Update (1000 items) {#large-state-update-1000-items-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 121.30K
🥈 Preact Signals       ████████████████████████████████████ 107.87K
🥉 Jotai                ██████████████████████████████ 91.98K
   Zen                  ██████████████████████████████ 91.83K
   Zustand              ███████████████████████ 68.79K
   Valtio               ████████ 23.52K
   MobX                 █████ 16.25K
   Redux Toolkit        █ 1.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 121.30K | ±1.01% | 8.2441ms | 13.2440ms | 60.65K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 107.87K | ±1.46% | 9.2701ms | 17.9530ms | 53.94K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 91.98K | ±1.19% | 10.8719ms | 21.3900ms | 45.99K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 91.83K | ±0.96% | 10.8893ms | 19.1250ms | 45.92K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 68.79K | ±1.11% | 14.5373ms | 24.0650ms | 34.40K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.52K | ±1.03% | 42.5090ms | 83.8660ms | 11.76K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 16.25K | ±1.42% | 61.5263ms | 130.0120ms | 8.13K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.29K | ±4.07% | 774.6914ms | 1559.9830ms | 646.00 |

**Key Insight:** Solid Signals is **93.97x faster** than Redux Toolkit in this category.

### Reactive Async State Access {#reactive-async-state-access}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.24M
🥈 Jotai                ███████████████████████ 721.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.24M | ±0.93% | 0.8039ms | 1.0010ms | 621.99K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 721.55K | ±0.82% | 1.3859ms | 1.6530ms | 360.78K |

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

*Last generated: 2025-11-09T17:14:32.558Z*
