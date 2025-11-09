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
- **Last Run:** 2:14:46 PM UTC
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
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.0/100 | Baseline |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.0/100 | Baseline |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.0/100 | Baseline |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.0/100 | Baseline |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.0/100 | Baseline |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.0/100 | Baseline |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.0/100 | Baseline |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.0/100 | Baseline |

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
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 44/46 | 96% |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 39/46 | 85% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 38/46 | 83% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 38/46 | 83% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 38/46 | 83% |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 37/46 | 80% |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 36/46 | 78% |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 22/46 | 48% |

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
🥇 Solid Signals        ████████████████████████████████████████ 10.06M
🥈 Jotai                ██████████████████████████████████████ 9.57M
🥉 Zen                  ██████████████████████████████████████ 9.54M
   Preact Signals       ████████████████████████████████████ 8.99M
   MobX                 ██████ 1.46M
   Valtio               █████ 1.35M
   Redux Toolkit        █ 4.59K
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.06M | ±0.16% | 0.0994ms | 0.1210ms | 5.03M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.57M | ±0.18% | 0.1045ms | 0.1500ms | 4.78M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.54M | ±0.09% | 0.1049ms | 0.1300ms | 4.77M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.99M | ±0.09% | 0.1112ms | 0.1400ms | 4.50M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.46M | ±0.16% | 0.6848ms | 0.8020ms | 730.10K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.35M | ±0.25% | 0.7396ms | 0.7810ms | 676.00K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.59K | ±1.21% | 217.8503ms | 395.1910ms | 2.30K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Zustand in this category.

### Store Creation {#store-creation}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.24M
🥈 Zen                  ████████████████████████████████████████ 10.17M
🥉 Solid Signals        ████████████████████████████████████████ 10.16M
   Preact Signals       ███████████████████████████████████████ 10.08M
   Solid Signals        ██████████████████████████████████████ 9.83M
   Preact Signals       ██████████████████████████████████████ 9.64M
   Zustand              █████████████████ 4.47M
   Zustand              █████████████████ 4.37M
   Jotai                ███████ 1.69M
   Jotai                ███ 885.30K
   Valtio               ██ 388.10K
   Valtio               █ 322.80K
   MobX                 █ 89.61K
   Redux Toolkit        █ 84.62K
   Redux Toolkit        █ 42.95K
   MobX                 █ 116.66
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.24M | ±0.09% | 0.0976ms | 0.1200ms | 5.12M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.17M | ±0.19% | 0.0983ms | 0.1200ms | 5.08M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.16M | ±0.09% | 0.0985ms | 0.1110ms | 5.08M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.08M | ±0.13% | 0.0992ms | 0.1210ms | 5.04M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.83M | ±0.10% | 0.1017ms | 0.1500ms | 4.92M |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.64M | ±0.11% | 0.1038ms | 0.1500ms | 4.82M |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.47M | ±0.26% | 0.2237ms | 0.3510ms | 2.24M |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.37M | ±0.90% | 0.2289ms | 0.4510ms | 2.18M |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.69M | ±2.01% | 0.5911ms | 0.9420ms | 845.94K |
| 10 | **[Jotai](https://github.com/pmndrs/jotai)** | 885.30K | ±8.56% | 1.1296ms | 1.3720ms | 442.85K |
| 11 | **[Valtio](https://github.com/pmndrs/valtio)** | 388.10K | ±12.61% | 2.5767ms | 3.6970ms | 194.05K |
| 12 | **[Valtio](https://github.com/pmndrs/valtio)** | 322.80K | ±14.32% | 3.0979ms | 5.7810ms | 161.40K |
| 13 | **[MobX](https://github.com/mobxjs/mobx)** | 89.61K | ±3.98% | 11.1596ms | 26.2990ms | 44.80K |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 84.62K | ±0.82% | 11.8174ms | 24.9870ms | 42.31K |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 42.95K | ±4.44% | 23.2840ms | 58.6800ms | 21.56K |
| 16 | **[MobX](https://github.com/mobxjs/mobx)** | 116.66 | ±6.72% | 8571.8043ms | 12130.5760ms | 59.00 |

**Key Insight:** Zen is **87802.25x faster** than MobX in this category.

### Simple Increment {#simple-increment}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.46M
🥈 Zen                  ███████████████████████████████████████ 10.18M
🥉 Preact Signals       ██████████████████████████████████████ 9.96M
   Solid Signals        ███████████████████████████████████ 9.24M
   Zen                  ███████████████████████████████████ 9.24M
   Jotai                ██████████████████████████████████ 8.94M
   Preact Signals       ███████████████████████████████ 8.20M
   MobX                 ██████ 1.56M
   Valtio               ██████ 1.51M
   MobX                 ██████ 1.45M
   Valtio               █████ 1.36M
   Jotai                ██ 518.47K
   Redux Toolkit        █ 283.60K
   Zustand              █ 169.44K
   Redux Toolkit        █ 4.35K
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.46M | ±0.09% | 0.0956ms | 0.1500ms | 5.23M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.18M | ±0.09% | 0.0983ms | 0.1300ms | 5.09M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.96M | ±0.15% | 0.1004ms | 0.1210ms | 4.98M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.24M | ±0.09% | 0.1082ms | 0.1310ms | 4.62M |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 9.24M | ±0.11% | 0.1082ms | 0.1500ms | 4.62M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.94M | ±0.10% | 0.1119ms | 0.1600ms | 4.47M |
| 7 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.20M | ±0.13% | 0.1220ms | 0.1410ms | 4.10M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 1.56M | ±0.18% | 0.6404ms | 0.7610ms | 780.75K |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.51M | ±0.29% | 0.6624ms | 1.0820ms | 754.78K |
| 10 | **[MobX](https://github.com/mobxjs/mobx)** | 1.45M | ±0.15% | 0.6902ms | 0.8210ms | 724.46K |
| 11 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.36M | ±0.26% | 0.7336ms | 0.7910ms | 681.55K |
| 12 | **[Jotai](https://github.com/pmndrs/jotai)** | 518.47K | ±0.79% | 1.9287ms | 4.5490ms | 259.25K |
| 13 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 283.60K | ±0.42% | 3.5261ms | 6.2710ms | 141.80K |
| 14 | **[Zustand](https://github.com/pmndrs/zustand)** | 169.44K | ±0.21% | 5.9017ms | 8.0750ms | 84.72K |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.35K | ±1.74% | 229.7420ms | 728.5450ms | 2.18K |
| 16 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Zustand in this category.

### High Frequency Read {#high-frequency-read}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 37.32K
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 37.32K | ±0.08% | 26.7932ms | 33.7930ms | 18.66K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Burst Updates {#burst-updates}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 377.14K
🥈 Jotai                ███████████████████████████████ 289.39K
🥉 Zen                  █████████████████████████████ 274.07K
   Preact Signals       ███████████████████████████ 255.19K
   MobX                 ██ 17.35K
   Valtio               ██ 16.40K
   Redux Toolkit        █ 93.07
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 377.14K | ±0.08% | 2.6516ms | 2.7360ms | 188.57K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 289.39K | ±0.41% | 3.4556ms | 6.9330ms | 144.69K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 274.07K | ±0.07% | 3.6488ms | 3.6770ms | 137.03K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 255.19K | ±0.09% | 3.9186ms | 7.8440ms | 127.60K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 17.35K | ±0.30% | 57.6499ms | 68.3980ms | 8.67K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.40K | ±0.29% | 60.9574ms | 70.3720ms | 8.20K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 93.07 | ±3.28% | 10744.1363ms | 16922.3710ms | 47.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Zustand in this category.

### Array Splice Operations {#array-splice-operations}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 1.58M
🥈 Zen                  ████████████████████████████████████████ 1.57M
🥉 Preact Signals       ██████████████████████████████████████ 1.52M
   MobX                 ████ 171.48K
   Redux Toolkit        █ 1.38K
   Zustand              █ 0.00
   Jotai                █ 0.00
   Valtio               █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 1.58M | ±1.29% | 0.6310ms | 0.9520ms | 792.41K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.57M | ±1.32% | 0.6385ms | 0.9420ms | 783.16K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.52M | ±1.27% | 0.6589ms | 1.0020ms | 758.83K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 171.48K | ±0.47% | 5.8317ms | 9.9490ms | 85.74K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.38K | ±1.41% | 722.7265ms | 1152.0810ms | 692.00 |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Valtio in this category.

### Large Array Sort {#large-array-sort}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 31.57K
🥈 Solid Signals        ███████████████████████████████████████ 31.10K
🥉 Preact Signals       ███████████████████████████████████████ 30.95K
   MobX                 ███ 2.37K
   Redux Toolkit        █ 561.73
   Zustand              █ 0.00
   Jotai                █ 0.00
   Valtio               █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 31.57K | ±0.40% | 31.6793ms | 40.6360ms | 15.78K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 31.10K | ±0.42% | 32.1529ms | 41.5680ms | 15.55K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 30.95K | ±0.40% | 32.3107ms | 41.1270ms | 15.47K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.37K | ±0.63% | 422.6195ms | 740.8380ms | 1.18K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 561.73 | ±1.24% | 1780.2057ms | 2721.6390ms | 281.00 |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zen is **Infinityx faster** than Valtio in this category.

### Array Find Operations {#array-find-operations}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.58M
🥈 Preact Signals       ████████████████████████████████████████ 1.58M
🥉 Solid Signals        ████████████████████████████████████████ 1.58M
   Redux Toolkit        █ 58.71K
   Jotai                █ 48.88K
   Valtio               █ 38.08K
   MobX                 █ 26.78K
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.58M | ±0.09% | 0.6319ms | 0.6910ms | 791.24K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.58M | ±0.14% | 0.6320ms | 0.6910ms | 791.12K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 1.58M | ±0.16% | 0.6322ms | 0.6920ms | 790.91K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 58.71K | ±0.08% | 17.0328ms | 24.3060ms | 29.36K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 48.88K | ±0.10% | 20.4584ms | 27.7820ms | 24.44K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 38.08K | ±0.09% | 26.2582ms | 33.5530ms | 19.04K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 26.78K | ±0.36% | 37.3471ms | 49.4420ms | 13.39K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zen is **Infinityx faster** than Zustand in this category.

### Deep Object Creation {#deep-object-creation}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 2.17M
🥈 Jotai                ████████████████████████████████████████ 2.15M
🥉 Preact Signals       ████████████████████████████████████████ 2.15M
   Redux Toolkit        ████████████████████████████████████████ 2.15M
   Valtio               ████████████████████████████████████████ 2.14M
   Solid Signals        ███████████████████████████████████████ 2.11M
   MobX                 ████████████████████████████████ 1.75M
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 2.17M | ±0.25% | 0.4614ms | 0.5210ms | 1.08M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.15M | ±0.42% | 0.4647ms | 0.5410ms | 1.08M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.15M | ±0.25% | 0.4652ms | 0.5310ms | 1.07M |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.15M | ±0.36% | 0.4660ms | 0.5500ms | 1.07M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.14M | ±0.26% | 0.4665ms | 0.5310ms | 1.07M |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.11M | ±0.96% | 0.4739ms | 0.7810ms | 1.06M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 1.75M | ±0.09% | 0.5717ms | 0.6810ms | 874.62K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zen is **Infinityx faster** than Zustand in this category.

### 10-Level Nested Update {#10-level-nested-update}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 7.16M
🥈 Valtio               ██████ 1.01M
🥉 MobX                 ████ 626.63K
   Zen                  ██ 432.35K
   Solid Signals        ██ 423.39K
   Preact Signals       ██ 422.80K
   Redux Toolkit        █ 4.36K
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.16M | ±0.54% | 0.1397ms | 0.2500ms | 3.58M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.01M | ±0.23% | 0.9897ms | 1.1020ms | 505.20K |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 626.63K | ±0.24% | 1.5958ms | 1.7430ms | 313.32K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 432.35K | ±0.15% | 2.3130ms | 2.4950ms | 216.17K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 423.39K | ±0.75% | 2.3619ms | 4.4480ms | 211.69K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 422.80K | ±0.25% | 2.3652ms | 2.5950ms | 211.40K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.36K | ±1.21% | 229.5015ms | 389.9890ms | 2.18K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Zustand in this category.

### Deep Read Access {#deep-read-access}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 9.78M
🥈 Jotai                ████████████████████████████████████████ 9.72M
🥉 Preact Signals       ███████████████████████████████████████ 9.51M
   Solid Signals        ███████████████████████████████████████ 9.46M
   Zen                  ██████████████████████████████████████ 9.41M
   Valtio               ██████████ 2.41M
   MobX                 ███ 758.36K
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.78M | ±0.14% | 0.1022ms | 0.1300ms | 4.89M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.72M | ±0.09% | 0.1029ms | 0.1200ms | 4.86M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.51M | ±0.18% | 0.1052ms | 0.1300ms | 4.76M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.46M | ±0.09% | 0.1058ms | 0.1300ms | 4.73M |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 9.41M | ±0.09% | 0.1062ms | 0.1210ms | 4.71M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.41M | ±0.09% | 0.4146ms | 0.4300ms | 1.21M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 758.36K | ±0.26% | 1.3186ms | 1.4130ms | 379.18K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zustand in this category.

### Complex Computed Chain {#complex-computed-chain}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.06M
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.06M | ±0.09% | 0.0994ms | 0.1200ms | 5.03M |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Computed Invalidation {#computed-invalidation}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 5.48K
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 5.48K | ±1.07% | 182.5549ms | 223.9790ms | 2.74K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Subscription Cascade {#subscription-cascade}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 1.59M
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.59M | ±20.84% | 0.6287ms | 0.9620ms | 833.60K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Reaction Performance {#reaction-performance}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 80.12
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 80.12 | ±0.33% | 12480.9324ms | 12790.4740ms | 41.00 |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Multi-Store Operations {#multi-store-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 81.14
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 81.14 | ±0.48% | 12324.9462ms | 12894.6090ms | 41.00 |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Memory Allocation {#memory-allocation}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 160.97
🥈 Zustand              █ 0.00
🥈 Jotai                █ 0.00
🥈 MobX                 █ 0.00
🥈 Valtio               █ 0.00
🥈 Preact Signals       █ 0.00
🥈 Solid Signals        █ 0.00
🥈 Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 160.97 | ±11.33% | 6212.4453ms | 10401.8210ms | 81.00 |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **Infinityx faster** than Zen in this category.

### Form State Management {#form-state-management}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.38M
🥈 Valtio               ██████████████████████████████ 3.29M
🥉 MobX                 █████████████████████████ 2.75M
   Solid Signals        ███ 304.02K
   Preact Signals       ███ 303.09K
   Zen                  ███ 302.10K
   Redux Toolkit        █ 83.50
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.38M | ±0.26% | 0.2284ms | 0.2600ms | 2.19M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.29M | ±0.09% | 0.3035ms | 0.3310ms | 1.65M |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 2.75M | ±0.09% | 0.3641ms | 0.4000ms | 1.37M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 304.02K | ±0.47% | 3.2892ms | 3.7170ms | 152.01K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 303.09K | ±0.42% | 3.2993ms | 3.7770ms | 151.55K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 302.10K | ±0.46% | 3.3101ms | 3.7370ms | 151.05K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 83.50 | ±0.41% | 11975.7172ms | 12667.0930ms | 42.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Zustand in this category.

### Optimistic Update {#optimistic-update}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 8.39K
🥈 Zen                  ████████████████████████████████████████ 8.32K
🥉 Solid Signals        ████████████████████████████████████████ 8.30K
   Preact Signals       ████████████████████████████████████████ 8.29K
   MobX                 ███████████ 2.37K
   Valtio               ███ 593.84
   Redux Toolkit        █ 0.00
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.39K | ±7.64% | 119.1187ms | 190.7070ms | 4.20K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.32K | ±8.00% | 120.2322ms | 187.7210ms | 4.16K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.30K | ±8.22% | 120.5430ms | 190.2170ms | 4.15K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.29K | ±8.03% | 120.5694ms | 189.0840ms | 4.15K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.37K | ±1.24% | 421.2093ms | 876.8930ms | 1.19K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 593.84 | ±5.56% | 1683.9668ms | 5142.5920ms | 297.00 |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Zustand in this category.

### Undo/Redo Operations {#undo-redo-operations}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.04M
🥈 Jotai                ███████████████████████████████████████ 9.71M
🥉 Solid Signals        ██████████████████████████████████████ 9.61M
   Preact Signals       ██████████████████████████████████████ 9.61M
   Valtio               █████████████████████████ 6.23M
   MobX                 ███████████ 2.71M
   Redux Toolkit        █ 82.68
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.04M | ±0.09% | 0.0996ms | 0.1200ms | 5.02M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.71M | ±0.09% | 0.1029ms | 0.1210ms | 4.86M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.61M | ±0.40% | 0.1041ms | 0.1210ms | 4.80M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.61M | ±0.09% | 0.1041ms | 0.1300ms | 4.80M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.23M | ±0.09% | 0.1605ms | 0.1710ms | 3.12M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 2.71M | ±0.77% | 0.3685ms | 0.4110ms | 1.36M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.68 | ±0.38% | 12095.1561ms | 12436.2150ms | 42.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zen is **Infinityx faster** than Zustand in this category.

### Batch State Operations {#batch-state-operations}

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 6.30M
🥈 Solid Signals        ██████████████████████████████████ 5.43M
🥉 Zen                  ███████████████████████████████ 4.83M
   Jotai                █ 9.12K
   MobX                 █ 1.27K
   Valtio               █ 512.60
   Redux Toolkit        █ 24.15
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.30M | ±0.09% | 0.1587ms | 0.2510ms | 3.15M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.43M | ±0.09% | 0.1841ms | 0.2800ms | 2.72M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.83M | ±0.10% | 0.2071ms | 0.3110ms | 2.41M |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.12K | ±28.20% | 109.6326ms | 46.4580ms | 4.59K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.27K | ±4.42% | 787.5210ms | 3470.3490ms | 635.00 |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 512.60 | ±5.07% | 1950.8303ms | 5270.6100ms | 257.00 |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 24.15 | ±1.13% | 41407.6758ms | 43133.6150ms | 13.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Preact Signals is **Infinityx faster** than Zustand in this category.

### Null Value Handling {#null-value-handling}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.41M
🥈 Solid Signals        ███████████████████████████████████████ 9.16M
🥉 Zen                  ██████████████████████████████████████ 8.98M
   Preact Signals       ███████████████████████████████████ 8.30M
   Valtio               ██████████████████ 4.28M
   MobX                 ███████ 1.76M
   Redux Toolkit        █ 82.36
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.41M | ±2.09% | 0.1062ms | 0.1600ms | 4.71M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.16M | ±0.41% | 0.1092ms | 0.1310ms | 4.58M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.98M | ±0.09% | 0.1113ms | 0.1400ms | 4.49M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.30M | ±0.32% | 0.1205ms | 0.1500ms | 4.15M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.28M | ±0.35% | 0.2337ms | 0.2510ms | 2.14M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.76M | ±2.15% | 0.5678ms | 0.7210ms | 880.57K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.36 | ±0.46% | 12141.1777ms | 12809.3590ms | 42.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Zustand in this category.

### Undefined Value Handling {#undefined-value-handling}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.42M
🥈 Solid Signals        ███████████████████████████████████████ 9.27M
🥉 Zen                  ██████████████████████████████████████ 8.98M
   Preact Signals       ███████████████████████████████████ 8.35M
   Valtio               ██████████████████ 4.34M
   MobX                 ████████ 1.82M
   Redux Toolkit        █ 82.33
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.42M | ±2.12% | 0.1062ms | 0.1600ms | 4.71M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.27M | ±0.51% | 0.1078ms | 0.1310ms | 4.64M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.98M | ±0.47% | 0.1114ms | 0.1400ms | 4.49M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.35M | ±0.09% | 0.1197ms | 0.1500ms | 4.18M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.34M | ±0.09% | 0.2302ms | 0.2510ms | 2.17M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.82M | ±1.03% | 0.5481ms | 0.7010ms | 912.29K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 82.33 | ±1.25% | 12146.1071ms | 15014.8010ms | 42.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Zustand in this category.

### Async State Loading {#async-state-loading}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 938.01
🥈 Valtio               ████████████████████████████████████████ 937.46
🥉 Zen                  ████████████████████████████████████████ 936.02
   Preact Signals       ████████████████████████████████████████ 932.83
   MobX                 ████████████████████████████████████████ 928.89
   Redux Toolkit        ████████████████████████████████████████ 928.10
   Jotai                ████████████████████████████████████████ 926.57
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 938.01 | ±0.41% | 1066.0839ms | 1089.4210ms | 470.00 |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 937.46 | ±0.41% | 1066.7176ms | 1086.9150ms | 469.00 |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 936.02 | ±0.02% | 1068.3530ms | 1085.7230ms | 469.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 932.83 | ±0.42% | 1072.0026ms | 1098.4340ms | 467.00 |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 928.89 | ±0.59% | 1076.5499ms | 1103.3160ms | 465.00 |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 928.10 | ±0.42% | 1077.4654ms | 1105.2600ms | 465.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 926.57 | ±0.59% | 1079.2440ms | 1109.1180ms | 464.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Zustand in this category.

### Concurrent Async Operations {#concurrent-async-operations}

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 933.69
🥈 Jotai                ████████████████████████████████████████ 932.11
🥉 Zen                  ████████████████████████████████████████ 931.62
   Preact Signals       ████████████████████████████████████████ 930.91
   Redux Toolkit        ████████████████████████████████████████ 929.29
   Solid Signals        ████████████████████████████████████████ 927.70
   MobX                 ████████████████████████████████████████ 927.36
   Zustand              █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 933.69 | ±0.04% | 1071.0160ms | 1096.7940ms | 467.00 |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 932.11 | ±0.41% | 1072.8369ms | 1104.8400ms | 467.00 |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 931.62 | ±0.07% | 1073.4016ms | 1109.6590ms | 466.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 930.91 | ±0.06% | 1074.2150ms | 1109.6150ms | 466.00 |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 929.29 | ±0.05% | 1076.0937ms | 1095.2820ms | 465.00 |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 927.70 | ±0.11% | 1077.9314ms | 1123.6240ms | 464.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 927.36 | ±0.75% | 1078.3307ms | 1116.7420ms | 464.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Valtio is **Infinityx faster** than Zustand in this category.

### Read (1000x) {#read-1000x-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.29M
🥈 Zen                  ███████████████████ 1.11M
🥉 Preact Signals       █████████████ 739.53K
   Zustand              ███████████ 600.95K
   Redux Toolkit        ████████ 436.89K
   Valtio               █ 40.95K
   MobX                 █ 32.45K
   Jotai                █ 3.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.29M | ±0.14% | 0.4372ms | 0.7120ms | 1.14M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.11M | ±0.08% | 0.8976ms | 1.0320ms | 557.05K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 739.53K | ±0.16% | 1.3522ms | 1.3620ms | 369.76K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 600.95K | ±0.08% | 1.6640ms | 1.6730ms | 300.48K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 436.89K | ±0.08% | 2.2889ms | 2.3140ms | 218.45K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.95K | ±0.09% | 24.4183ms | 31.4590ms | 20.48K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 32.45K | ±0.09% | 30.8124ms | 38.2920ms | 16.23K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.33K | ±0.43% | 300.7424ms | 443.9710ms | 1.66K |

**Key Insight:** Solid Signals is **687.84x faster** than Jotai in this category.

### Write (no listeners) {#write-no-listeners-}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 9.69M
🥈 Preact Signals       ████████████████████████████████████████ 9.61M
🥉 Solid Signals        ████████████████████████████████████████ 9.61M
   MobX                 █████████ 2.08M
   Valtio               ███████ 1.66M
   Jotai                ██ 534.60K
   Redux Toolkit        █ 265.57K
   Zustand              █ 165.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 9.69M | ±0.09% | 0.1032ms | 0.1110ms | 4.85M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.61M | ±0.09% | 0.1040ms | 0.1210ms | 4.81M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.61M | ±0.09% | 0.1041ms | 0.1210ms | 4.80M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.08M | ±0.61% | 0.4816ms | 0.5210ms | 1.04M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.66M | ±0.36% | 0.6009ms | 0.6510ms | 832.14K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 534.60K | ±0.68% | 1.8705ms | 3.5860ms | 267.30K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 265.57K | ±0.53% | 3.7655ms | 4.4890ms | 132.78K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 165.37K | ±0.36% | 6.0469ms | 7.8350ms | 82.69K |

**Key Insight:** Zen is **58.61x faster** than Zustand in this category.

### Write (1 subscriber) {#write-1-subscriber-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.80M
🥈 Zen                  ██████████████████████ 4.32M
🥉 Preact Signals       ███████████████ 2.99M
   Redux Toolkit        █ 232.49K
   Jotai                █ 209.93K
   Zustand              █ 156.45K
   MobX                 █ 5.65K
   Valtio               █ 2.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.80M | ±1.25% | 0.1283ms | 0.1900ms | 3.90M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.32M | ±1.22% | 0.2314ms | 0.3600ms | 2.16M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.99M | ±1.00% | 0.3347ms | 0.5310ms | 1.49M |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 232.49K | ±0.71% | 4.3013ms | 7.9240ms | 116.25K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 209.93K | ±4.50% | 4.7634ms | 10.9900ms | 104.97K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 156.45K | ±0.53% | 6.3918ms | 11.2610ms | 78.23K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.65K | ±1.15% | 176.9810ms | 248.7260ms | 2.83K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.66K | ±4.09% | 375.3779ms | 1157.6480ms | 1.33K |

**Key Insight:** Solid Signals is **2926.34x faster** than Valtio in this category.

### Write (5 subscribers) {#write-5-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.59M
🥈 Zen                  ████████████████ 2.64M
🥉 Preact Signals       ████████ 1.30M
   Redux Toolkit        █ 168.63K
   Zustand              █ 133.46K
   Jotai                █ 90.30K
   MobX                 █ 5.70K
   Valtio               █ 2.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.59M | ±0.76% | 0.1517ms | 0.2000ms | 3.30M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.64M | ±0.48% | 0.3789ms | 0.5910ms | 1.32M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.30M | ±0.61% | 0.7701ms | 1.0220ms | 649.24K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 168.63K | ±2.26% | 5.9302ms | 10.9610ms | 84.31K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 133.46K | ±2.26% | 7.4931ms | 16.4710ms | 66.73K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 90.30K | ±3.90% | 11.0739ms | 31.9500ms | 45.15K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.70K | ±1.65% | 175.5195ms | 213.7810ms | 2.85K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.63K | ±2.33% | 379.7452ms | 1185.2900ms | 1.32K |

**Key Insight:** Solid Signals is **2503.95x faster** than Valtio in this category.

### Computed - Cached Read {#computed-cached-read}

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.02M
🥈 Solid Signals        ███████████████████████████████████████ 9.85M
🥉 Zen                  ███████████████████████████████████████ 9.69M
   Zustand              ██████████████████████████████████████ 9.44M
   Redux Toolkit        █████████████████████████████████████ 9.16M
   Valtio               ████████████████████████ 5.92M
   MobX                 ███████████ 2.71M
   Jotai                ████ 963.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.02M | ±0.09% | 0.0998ms | 0.1300ms | 5.01M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.85M | ±0.09% | 0.1015ms | 0.1200ms | 4.93M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.69M | ±0.09% | 0.1032ms | 0.1210ms | 4.85M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.44M | ±0.09% | 0.1060ms | 0.1210ms | 4.72M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.16M | ±0.10% | 0.1092ms | 0.1400ms | 4.58M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.92M | ±0.16% | 0.1689ms | 0.1910ms | 2.96M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.71M | ±0.58% | 0.3690ms | 0.4010ms | 1.35M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 963.33K | ±0.46% | 1.0381ms | 1.2320ms | 481.67K |

**Key Insight:** Preact Signals is **10.41x faster** than Jotai in this category.

### Computed - Update {#computed-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.79M
🥈 Zen                  ███████████████████████████████████ 8.48M
🥉 Preact Signals       █████████████████████████ 6.19M
   Valtio               ██████ 1.46M
   MobX                 █████ 1.32M
   Jotai                █ 217.50K
   Redux Toolkit        █ 199.95K
   Zustand              █ 163.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.79M | ±0.09% | 0.1021ms | 0.1400ms | 4.90M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.48M | ±0.13% | 0.1179ms | 0.1400ms | 4.24M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.19M | ±0.09% | 0.1615ms | 0.1810ms | 3.10M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.46M | ±0.53% | 0.6863ms | 0.7620ms | 728.56K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.32M | ±0.22% | 0.7565ms | 0.8510ms | 660.93K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 217.50K | ±2.98% | 4.5977ms | 9.0170ms | 108.75K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 199.95K | ±1.25% | 5.0013ms | 8.3960ms | 99.97K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 163.77K | ±0.31% | 6.1060ms | 6.7830ms | 81.89K |

**Key Insight:** Solid Signals is **59.78x faster** than Zustand in this category.

### Chained Computed (3 levels) {#chained-computed-3-levels-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.05M
🥈 Zen                  ███████████████████████████████████████ 9.84M
🥉 Preact Signals       █████████████████████████████████████ 9.40M
   Zustand              ████████████████████████████████████ 9.12M
   Redux Toolkit        ████████████████████████████████████ 9.06M
   Valtio               ████████████████ 3.98M
   MobX                 ██ 518.98K
   Jotai                ██ 481.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.05M | ±0.09% | 0.0995ms | 0.1110ms | 5.03M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 9.84M | ±0.12% | 0.1016ms | 0.1210ms | 4.92M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.40M | ±0.14% | 0.1064ms | 0.1500ms | 4.70M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.12M | ±0.14% | 0.1097ms | 0.1400ms | 4.56M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.06M | ±0.09% | 0.1104ms | 0.1300ms | 4.53M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.98M | ±0.16% | 0.2516ms | 0.4200ms | 1.99M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 518.98K | ±0.39% | 1.9268ms | 3.7670ms | 259.49K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 481.04K | ±0.39% | 2.0788ms | 2.4450ms | 240.52K |

**Key Insight:** Solid Signals is **20.90x faster** than Jotai in this category.

### Batching (100 updates) {#batching-100-updates-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.11M
🥈 Preact Signals       ██████ 879.51K
🥉 Zen                  ██████ 847.52K
   MobX                 █ 41.73K
   Valtio               █ 24.97K
   Jotai                █ 7.83K
   Redux Toolkit        █ 2.04K
   Zustand              █ 1.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.11M | ±0.09% | 0.1637ms | 0.1800ms | 3.05M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 879.51K | ±0.16% | 1.1370ms | 1.1430ms | 439.75K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 847.52K | ±0.08% | 1.1799ms | 1.2120ms | 423.76K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 41.73K | ±0.32% | 23.9620ms | 31.6690ms | 20.87K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.97K | ±0.46% | 40.0548ms | 49.9430ms | 12.48K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.83K | ±0.65% | 127.7241ms | 284.0020ms | 3.92K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.04K | ±0.61% | 489.9619ms | 689.7520ms | 1.02K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.75K | ±0.35% | 572.8034ms | 774.0600ms | 873.00 |

**Key Insight:** Solid Signals is **3498.83x faster** than Zustand in this category.

### Subscribe/Unsubscribe {#subscribe-unsubscribe}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.69M
🥈 Zen                  █████████████████████████ 6.15M
🥉 Preact Signals       ████████████████████ 4.89M
   Zustand              ████████████████ 3.99M
   Redux Toolkit        █████████ 2.29M
   MobX                 ███ 743.94K
   Jotai                █ 356.01K
   Valtio               █ 2.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.69M | ±0.14% | 0.1032ms | 0.1400ms | 4.85M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.15M | ±0.21% | 0.1625ms | 0.2400ms | 3.08M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.89M | ±0.57% | 0.2047ms | 0.3210ms | 2.44M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 3.99M | ±1.06% | 0.2509ms | 1.8840ms | 1.99M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.29M | ±17.67% | 0.4369ms | 1.9940ms | 1.14M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 743.94K | ±1.77% | 1.3442ms | 3.1460ms | 371.97K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 356.01K | ±6.83% | 2.8089ms | 6.6020ms | 178.00K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.70K | ±2.40% | 371.0485ms | 974.6850ms | 1.35K |

**Key Insight:** Solid Signals is **3597.01x faster** than Valtio in this category.

### Computed Access {#computed-access}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.61M
🥈 Zen                  ███████████████████████████████████████ 10.43M
🥉 Solid Signals        ███████████████████████████████████████ 10.39M
   Preact Signals       ██████████████████████████████████████ 10.21M
   Zustand              ████████████████████████████████████ 9.43M
   Valtio               ███████████████████████ 5.98M
   MobX                 ████████████ 3.22M
   Jotai                ████ 968.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.61M | ±0.10% | 0.0942ms | 0.1600ms | 5.31M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.43M | ±0.09% | 0.0958ms | 0.1100ms | 5.22M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.39M | ±0.09% | 0.0963ms | 0.1210ms | 5.19M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.21M | ±0.10% | 0.0980ms | 0.1400ms | 5.10M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.43M | ±0.25% | 0.1061ms | 0.1200ms | 4.71M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.98M | ±0.15% | 0.1673ms | 0.1810ms | 2.99M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.22M | ±0.52% | 0.3101ms | 0.3500ms | 1.61M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 968.48K | ±0.41% | 1.0325ms | 1.2320ms | 484.24K |

**Key Insight:** Redux Toolkit is **10.96x faster** than Jotai in this category.

### Nested Update {#nested-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.96M
🥈 Zen                  ██████████████████████████████████████ 8.62M
🥉 Preact Signals       ██████████████████████████████████████ 8.62M
   MobX                 ████████ 1.72M
   Valtio               ██████ 1.32M
   Jotai                ███ 675.08K
   Redux Toolkit        █ 204.76K
   Zustand              █ 163.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.96M | ±0.10% | 0.1116ms | 0.2100ms | 4.48M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.62M | ±0.09% | 0.1160ms | 0.2100ms | 4.31M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.62M | ±0.09% | 0.1160ms | 0.2110ms | 4.31M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.72M | ±0.48% | 0.5812ms | 0.6910ms | 860.23K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.32M | ±0.21% | 0.7568ms | 0.8620ms | 660.66K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 675.08K | ±0.67% | 1.4813ms | 3.1560ms | 337.54K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 204.76K | ±0.48% | 4.8837ms | 9.0870ms | 102.38K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 163.42K | ±0.28% | 6.1192ms | 7.7840ms | 81.71K |

**Key Insight:** Solid Signals is **54.83x faster** than Zustand in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 155.16K
🥈 MobX                 ██████████████████████████████████████ 146.68K
🥉 Zustand              ███ 12.01K
   Jotai                ██ 9.03K
   Preact Signals       ██ 8.83K
   Zen                  ██ 8.37K
   Solid Signals        ██ 8.28K
   Redux Toolkit        █ 4.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 155.16K | ±10.95% | 6.4448ms | 10.7410ms | 77.58K |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 146.68K | ±6.43% | 6.8178ms | 9.6890ms | 73.34K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12.01K | ±7.75% | 83.2941ms | 207.4580ms | 6.00K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.03K | ±7.73% | 110.7396ms | 203.0310ms | 4.52K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.83K | ±8.20% | 113.2181ms | 202.9400ms | 4.42K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 8.37K | ±7.90% | 119.4220ms | 196.7880ms | 4.19K |
| 7 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.28K | ±7.97% | 120.7175ms | 193.4220ms | 4.14K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.69K | ±1.16% | 213.1209ms | 330.3790ms | 2.35K |

**Key Insight:** Valtio is **33.07x faster** than Redux Toolkit in this category.

### Loading State Toggle {#loading-state-toggle}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.21M
🥈 Preact Signals       ██████████████████████████████████████ 8.71M
🥉 Zen                  ████████████████████████ 5.45M
   Valtio               ██████████ 2.28M
   MobX                 ████████ 1.91M
   Jotai                ███ 758.87K
   Redux Toolkit        ██ 347.45K
   Zustand              █ 169.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.21M | ±0.10% | 0.1086ms | 0.2100ms | 4.60M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.71M | ±0.09% | 0.1149ms | 0.2200ms | 4.35M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.45M | ±0.10% | 0.1836ms | 0.2810ms | 2.72M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.28M | ±0.53% | 0.4395ms | 0.7110ms | 1.14M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.91M | ±0.60% | 0.5225ms | 0.6610ms | 956.87K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 758.87K | ±0.72% | 1.3177ms | 3.1760ms | 379.44K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 347.45K | ±0.70% | 2.8781ms | 3.7870ms | 173.73K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 169.45K | ±0.45% | 5.9014ms | 6.5820ms | 84.73K |

**Key Insight:** Solid Signals is **54.32x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers) {#multiple-subscriptions-10-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.38M
🥈 Zen                  ███████████ 1.26M
🥉 Preact Signals       ██████ 655.42K
   Zustand              █ 103.49K
   Redux Toolkit        █ 96.07K
   Jotai                █ 55.50K
   MobX                 █ 46.08K
   Valtio               █ 10.87
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.38M | ±2.02% | 0.2283ms | 0.3410ms | 2.19M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.26M | ±1.63% | 0.7957ms | 1.2530ms | 628.35K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 655.42K | ±1.49% | 1.5257ms | 2.5950ms | 327.71K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 103.49K | ±8.03% | 9.6632ms | 19.0060ms | 52.01K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 96.07K | ±9.01% | 10.4094ms | 20.2980ms | 48.03K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 55.50K | ±3.07% | 18.0184ms | 41.2270ms | 27.75K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 46.08K | ±11.04% | 21.7004ms | 34.5650ms | 23.23K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 10.87 | ±37.69% | 92000.2660ms | 225398.3890ms | 10.00 |

**Key Insight:** Solid Signals is **402968.86x faster** than Valtio in this category.

### Batch Updates (3 state changes) {#batch-updates-3-state-changes-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.90M
🥈 Preact Signals       ███████████████████████████████████ 6.91M
🥉 Zen                  ████████████████████ 4.02M
   Valtio               ████ 796.57K
   MobX                 ███ 685.39K
   Jotai                █ 241.19K
   Redux Toolkit        █ 177.87K
   Zustand              █ 156.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.90M | ±0.09% | 0.1267ms | 0.2210ms | 3.95M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.91M | ±0.09% | 0.1448ms | 0.2410ms | 3.45M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.02M | ±0.26% | 0.2487ms | 0.3600ms | 2.01M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 796.57K | ±0.62% | 1.2554ms | 1.3620ms | 398.29K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 685.39K | ±0.78% | 1.4590ms | 1.7030ms | 342.69K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 241.19K | ±1.25% | 4.1462ms | 8.6050ms | 120.59K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 177.87K | ±0.96% | 5.6221ms | 8.3660ms | 88.94K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 156.17K | ±0.85% | 6.4033ms | 7.0630ms | 78.09K |

**Key Insight:** Solid Signals is **50.56x faster** than Zustand in this category.

### Array Filter {#array-filter}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 9.94K
🥈 Preact Signals       █████████████████████████████ 7.25K
🥉 Jotai                ██████████████████ 4.54K
   Zen                  ███████████████ 3.81K
   Solid Signals        ██████████████ 3.39K
   Redux Toolkit        █ 164.74
   MobX                 █ 42.97
   Valtio               █ 6.08
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.94K | ±2.10% | 100.5665ms | 406.7920ms | 4.97K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.25K | ±2.38% | 137.9331ms | 551.9240ms | 3.63K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.54K | ±1.09% | 220.1831ms | 559.9790ms | 2.27K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 3.81K | ±4.96% | 262.2674ms | 2095.5750ms | 1.91K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.39K | ±4.35% | 295.2404ms | 1997.9850ms | 1.69K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 164.74 | ±1.40% | 6070.0883ms | 7249.2170ms | 83.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 42.97 | ±3.17% | 23272.6057ms | 26719.3210ms | 22.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.08 | ±0.33% | 164368.6217ms | 165292.9090ms | 10.00 |

**Key Insight:** Zustand is **1634.43x faster** than Valtio in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 33.08K
🥈 Zen                  ███████████████████████████████████████ 32.55K
🥉 Solid Signals        █████████████████████████████ 23.58K
   Zustand              █████████████████████████ 20.78K
   Preact Signals       ███████████████████ 15.45K
   Redux Toolkit        █ 415.20
   Valtio               █ 89.39
   MobX                 █ 70.12
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 33.08K | ±0.95% | 30.2323ms | 121.0670ms | 16.54K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 32.55K | ±0.84% | 30.7226ms | 124.6030ms | 16.27K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 23.58K | ±1.90% | 42.4165ms | 141.5650ms | 11.79K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 20.78K | ±2.31% | 48.1265ms | 143.5990ms | 10.39K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 15.45K | ±2.33% | 64.7083ms | 260.8890ms | 7.73K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 415.20 | ±1.63% | 2408.4714ms | 3393.8360ms | 208.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 89.39 | ±1.92% | 11186.3336ms | 13184.4730ms | 45.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 70.12 | ±3.81% | 14261.6232ms | 20843.7270ms | 36.00 |

**Key Insight:** Jotai is **471.73x faster** than MobX in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.74K
🥈 Solid Signals        █████████████ 10.64K
🥉 Zustand              ████████████ 10.41K
   Preact Signals       █████████ 7.62K
   Jotai                ███████ 6.19K
   Redux Toolkit        █ 409.99
   Valtio               █ 88.12
   MobX                 █ 71.42
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.74K | ±0.74% | 29.6386ms | 123.5710ms | 16.87K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.64K | ±2.17% | 94.0154ms | 214.8230ms | 5.32K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.41K | ±2.05% | 96.0472ms | 323.7660ms | 5.21K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.62K | ±2.37% | 131.2415ms | 357.4390ms | 3.81K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.19K | ±1.41% | 161.4920ms | 327.1330ms | 3.10K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 409.99 | ±1.91% | 2439.0923ms | 3547.3040ms | 205.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 88.12 | ±2.46% | 11348.3690ms | 15367.4210ms | 45.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 71.42 | ±4.01% | 14000.8533ms | 20890.2360ms | 36.00 |

**Key Insight:** Zen is **472.39x faster** than MobX in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.64M
🥈 Preact Signals       █████████████████████████████████████ 7.03M
🥉 Zen                  ███████████████████████████████████ 6.69M
   Valtio               ██████ 1.10M
   MobX                 █████ 895.29K
   Jotai                ███ 632.49K
   Zustand              █ 169.85K
   Redux Toolkit        █ 77.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.64M | ±1.27% | 0.1310ms | 0.2200ms | 3.82M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.03M | ±2.02% | 0.1423ms | 0.2210ms | 3.51M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 6.69M | ±1.19% | 0.1495ms | 0.2410ms | 3.35M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.10M | ±0.69% | 0.9082ms | 1.0020ms | 550.55K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 895.29K | ±0.64% | 1.1170ms | 1.2520ms | 447.65K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 632.49K | ±0.47% | 1.5811ms | 3.3160ms | 316.25K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 169.85K | ±0.75% | 5.8875ms | 6.5020ms | 84.93K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 77.81K | ±0.83% | 12.8515ms | 22.7320ms | 38.91K |

**Key Insight:** Solid Signals is **98.13x faster** than Redux Toolkit in this category.

### Large State Update (1000 items) {#large-state-update-1000-items-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 117.02K
🥈 Preact Signals       █████████████████████████████████████ 109.40K
🥉 Zen                  ███████████████████████████████ 90.95K
   Jotai                ███████████████████████████████ 90.89K
   Zustand              ███████████████████████ 67.66K
   Valtio               ████████ 23.13K
   MobX                 █████ 15.89K
   Redux Toolkit        █ 1.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 117.02K | ±1.13% | 8.5455ms | 15.7490ms | 58.51K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 109.40K | ±1.00% | 9.1411ms | 17.1220ms | 54.70K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 90.95K | ±0.91% | 10.9947ms | 19.7270ms | 45.48K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 90.89K | ±1.08% | 11.0023ms | 21.7210ms | 45.45K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 67.66K | ±0.91% | 14.7794ms | 24.5860ms | 33.83K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.13K | ±1.03% | 43.2417ms | 86.6220ms | 11.56K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 15.89K | ±1.45% | 62.9304ms | 134.7820ms | 7.95K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.28K | ±3.90% | 779.5226ms | 1627.9290ms | 642.00 |

**Key Insight:** Solid Signals is **91.22x faster** than Redux Toolkit in this category.

### Reactive Async State Access {#reactive-async-state-access}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.25M
🥈 Jotai                ███████████████████████ 716.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.25M | ±1.19% | 0.7988ms | 1.0620ms | 625.93K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 716.73K | ±0.88% | 1.3952ms | 1.7230ms | 358.37K |

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

*Last generated: 2025-11-09T14:59:32.632Z*
