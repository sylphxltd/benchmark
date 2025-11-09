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
- **Last Run:** 6:20:00 AM UTC
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
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 23/45 | 51% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 23/45 | 51% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 22/45 | 49% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 22/45 | 49% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 22/45 | 49% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 22/45 | 49% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 22/45 | 49% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 22/45 | 49% |

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

### Store Creation {#store-creation}

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.54M
🥈 Zen                  ████████████████████████████████████████ 10.53M
🥉 Solid Signals        ██████████████████████████████████████ 9.89M
   Zustand              ████████████████ 4.32M
   Jotai                ███ 851.82K
   Valtio               █ 377.79K
   MobX                 █ 90.52K
   Redux Toolkit        █ 42.06K
   Redux Toolkit        █ 0.00
   Zustand              █ 0.00
   Jotai                █ 0.00
   MobX                 █ 0.00
   Valtio               █ 0.00
   Preact Signals       █ 0.00
   Solid Signals        █ 0.00
   Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.54M | ±0.09% | 0.0949ms | 0.1110ms | 5.27M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.53M | ±0.09% | 0.0950ms | 0.1200ms | 5.26M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.89M | ±0.11% | 0.1011ms | 0.1210ms | 4.95M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.32M | ±0.79% | 0.2314ms | 0.3400ms | 2.16M |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 851.82K | ±8.89% | 1.1740ms | 1.1930ms | 425.91K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 377.79K | ±13.30% | 2.6470ms | 3.6470ms | 188.89K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 90.52K | ±4.13% | 11.0477ms | 27.1510ms | 45.26K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 42.06K | ±4.37% | 23.7747ms | 55.9540ms | 21.03K |
| 9 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Preact Signals is **Infinityx faster** than Zen in this category.

### Simple Increment {#simple-increment}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.36M
🥈 Zen                  ████████████████████████████████████████ 10.29M
🥉 Preact Signals       ████████████████████████████████████ 9.26M
   MobX                 ███████ 1.70M
   Valtio               ██████ 1.61M
   Jotai                ██ 516.73K
   Redux Toolkit        █ 280.64K
   Zustand              █ 171.27K
   Redux Toolkit        █ 0.00
   Zustand              █ 0.00
   Jotai                █ 0.00
   MobX                 █ 0.00
   Valtio               █ 0.00
   Preact Signals       █ 0.00
   Solid Signals        █ 0.00
   Zen                  █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.36M | ±0.10% | 0.0965ms | 0.1510ms | 5.18M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.29M | ±0.15% | 0.0972ms | 0.1100ms | 5.14M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.26M | ±0.09% | 0.1079ms | 0.1610ms | 4.63M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.15% | 0.5891ms | 0.7120ms | 848.79K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.61M | ±0.24% | 0.6203ms | 0.6620ms | 806.01K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 516.73K | ±1.00% | 1.9353ms | 4.0980ms | 258.36K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 280.64K | ±0.45% | 3.5633ms | 4.4090ms | 140.32K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 171.27K | ±0.24% | 5.8387ms | 10.2690ms | 85.64K |
| 9 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Zen in this category.

### High Frequency Read {#high-frequency-read}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Burst Updates {#burst-updates}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Array Splice Operations {#array-splice-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Large Array Sort {#large-array-sort}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Array Find Operations {#array-find-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Deep Object Creation {#deep-object-creation}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### 10-Level Nested Update {#10-level-nested-update}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Deep Read Access {#deep-read-access}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Complex Computed Chain {#complex-computed-chain}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Computed Invalidation {#computed-invalidation}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Subscription Cascade {#subscription-cascade}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Reaction Performance {#reaction-performance}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Multi-Store Operations {#multi-store-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Memory Allocation {#memory-allocation}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Form State Management {#form-state-management}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Optimistic Update {#optimistic-update}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Undo/Redo Operations {#undo-redo-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Batch State Operations {#batch-state-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Null Value Handling {#null-value-handling}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Undefined Value Handling {#undefined-value-handling}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Async State Loading {#async-state-loading}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Concurrent Async Operations {#concurrent-async-operations}

**Performance Comparison:**

```
🥇 Redux Toolkit         0.00
🥇 Zustand               0.00
🥇 Jotai                 0.00
🥇 MobX                  0.00
🥇 Valtio                0.00
🥇 Preact Signals        0.00
🥇 Solid Signals         0.00
🥇 Zen                   0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit is **NaNx faster** than Zen in this category.

### Read (1000x) {#read-1000x-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.33M
🥈 Zen                  ███████████████████ 1.13M
🥉 Preact Signals       █████████████ 733.78K
   Zustand              ██████████ 597.21K
   Redux Toolkit        ███████ 436.41K
   Valtio               █ 41.01K
   MobX                 █ 29.20K
   Jotai                █ 3.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.33M | ±0.09% | 0.4284ms | 0.7110ms | 1.17M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.13M | ±0.08% | 0.8888ms | 1.0220ms | 562.56K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 733.78K | ±0.08% | 1.3628ms | 1.3730ms | 366.89K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 597.21K | ±0.08% | 1.6744ms | 1.6830ms | 298.61K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 436.41K | ±0.08% | 2.2914ms | 2.3140ms | 218.21K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 41.01K | ±0.09% | 24.3869ms | 31.3790ms | 20.50K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 29.20K | ±0.09% | 34.2444ms | 41.2570ms | 14.60K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.04K | ±0.51% | 328.5426ms | 526.2370ms | 1.52K |

**Key Insight:** Solid Signals is **766.94x faster** than Jotai in this category.

### Write (no listeners) {#write-no-listeners-}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.02M
🥈 Solid Signals        ███████████████████████████████████████ 9.81M
🥉 Preact Signals       ███████████████████████████████████████ 9.73M
   MobX                 ████████ 2.01M
   Valtio               ██████ 1.52M
   Jotai                ██ 495.54K
   Redux Toolkit        █ 263.91K
   Zustand              █ 166.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.02M | ±0.16% | 0.0998ms | 0.1210ms | 5.01M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.81M | ±0.09% | 0.1020ms | 0.1110ms | 4.90M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.73M | ±0.09% | 0.1028ms | 0.1210ms | 4.86M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.01M | ±0.43% | 0.4981ms | 0.8420ms | 1.00M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.52M | ±0.51% | 0.6569ms | 0.8110ms | 761.16K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 495.54K | ±9.48% | 2.0180ms | 3.9080ms | 247.77K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 263.91K | ±0.81% | 3.7891ms | 4.4680ms | 131.96K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.84K | ±0.73% | 5.9936ms | 8.4550ms | 83.42K |

**Key Insight:** Zen is **60.03x faster** than Zustand in this category.

### Write (1 subscriber) {#write-1-subscriber-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.70M
🥈 Zen                  ████████████████████████ 4.56M
🥉 Preact Signals       ███████████████ 2.95M
   Redux Toolkit        █ 237.78K
   Jotai                █ 212.75K
   Zustand              █ 158.28K
   MobX                 █ 5.30K
   Valtio               █ 2.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.70M | ±1.00% | 0.1298ms | 0.1710ms | 3.85M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.56M | ±0.54% | 0.2192ms | 0.2700ms | 2.28M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.95M | ±1.42% | 0.3389ms | 0.4410ms | 1.48M |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 237.78K | ±0.67% | 4.2056ms | 6.9430ms | 118.89K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 212.75K | ±4.84% | 4.7004ms | 8.6360ms | 106.38K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 158.28K | ±0.55% | 6.3179ms | 11.1210ms | 79.14K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.30K | ±2.38% | 188.7861ms | 289.6500ms | 2.65K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.52K | ±2.62% | 397.2482ms | 1548.1910ms | 1.26K |

**Key Insight:** Solid Signals is **3060.47x faster** than Valtio in this category.

### Write (5 subscribers) {#write-5-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.40M
🥈 Zen                  █████████████████ 2.65M
🥉 Preact Signals       ████████ 1.23M
   Redux Toolkit        █ 169.77K
   Zustand              █ 136.92K
   Jotai                █ 87.30K
   MobX                 █ 5.89K
   Valtio               █ 2.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.40M | ±0.68% | 0.1562ms | 0.2100ms | 3.20M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.65M | ±0.53% | 0.3768ms | 0.5410ms | 1.33M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.23M | ±0.57% | 0.8129ms | 1.5230ms | 615.11K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 169.77K | ±2.44% | 5.8904ms | 10.7300ms | 85.02K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 136.92K | ±2.89% | 7.3034ms | 11.8620ms | 68.46K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 87.30K | ±8.80% | 11.4554ms | 30.9580ms | 43.65K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.89K | ±1.75% | 169.6815ms | 221.1850ms | 2.95K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.63K | ±2.85% | 379.9030ms | 1237.5790ms | 1.32K |

**Key Insight:** Solid Signals is **2432.06x faster** than Valtio in this category.

### Computed - Cached Read {#computed-cached-read}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.34M
🥈 Preact Signals       ███████████████████████████████████████ 10.02M
🥉 Solid Signals        ██████████████████████████████████████ 9.79M
   Zustand              ████████████████████████████████████ 9.26M
   Redux Toolkit        ███████████████████████████████████ 8.95M
   Valtio               ███████████████████████ 6.06M
   MobX                 ███████████ 2.78M
   Jotai                ████ 937.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.34M | ±0.20% | 0.0968ms | 0.1200ms | 5.17M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.02M | ±0.09% | 0.0998ms | 0.1300ms | 5.01M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.79M | ±0.09% | 0.1021ms | 0.1400ms | 4.90M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.26M | ±0.15% | 0.1080ms | 0.1210ms | 4.63M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.95M | ±0.09% | 0.1117ms | 0.1400ms | 4.48M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.06M | ±0.10% | 0.1649ms | 0.1910ms | 3.03M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.78M | ±1.08% | 0.3595ms | 0.3810ms | 1.39M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 937.84K | ±0.87% | 1.0663ms | 1.2030ms | 468.92K |

**Key Insight:** Zen is **11.02x faster** than Jotai in this category.

### Computed - Update {#computed-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.83M
🥈 Zen                  ████████████████████████████████████ 8.95M
🥉 Preact Signals       ██████████████████████████ 6.43M
   Valtio               ██████ 1.39M
   MobX                 █████ 1.29M
   Jotai                █ 213.67K
   Redux Toolkit        █ 199.05K
   Zustand              █ 166.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.83M | ±0.09% | 0.1017ms | 0.1400ms | 4.92M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.95M | ±0.09% | 0.1117ms | 0.1400ms | 4.48M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.43M | ±0.12% | 0.1554ms | 0.1800ms | 3.22M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.39M | ±0.39% | 0.7211ms | 1.2620ms | 693.38K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.29M | ±0.27% | 0.7726ms | 0.8520ms | 647.19K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 213.67K | ±3.69% | 4.6802ms | 8.8770ms | 106.83K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 199.05K | ±1.30% | 5.0239ms | 9.2170ms | 99.53K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.31K | ±0.51% | 6.0129ms | 11.0210ms | 83.16K |

**Key Insight:** Solid Signals is **59.12x faster** than Zustand in this category.

### Chained Computed (3 levels) {#chained-computed-3-levels-}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.39M
🥈 Solid Signals        ██████████████████████████████████████ 9.85M
🥉 Preact Signals       █████████████████████████████████████ 9.70M
   Zustand              ███████████████████████████████████ 9.10M
   Redux Toolkit        ██████████████████████████████████ 8.92M
   Valtio               ████████████████ 4.28M
   MobX                 ██ 507.77K
   Jotai                ██ 466.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.39M | ±0.09% | 0.0963ms | 0.1110ms | 5.19M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.85M | ±0.09% | 0.1015ms | 0.1110ms | 4.93M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.70M | ±0.09% | 0.1031ms | 0.1300ms | 4.85M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.10M | ±0.20% | 0.1099ms | 0.1210ms | 4.55M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.92M | ±0.10% | 0.1121ms | 0.1410ms | 4.46M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.28M | ±0.09% | 0.2336ms | 0.2600ms | 2.14M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 507.77K | ±0.61% | 1.9694ms | 3.6970ms | 253.89K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 466.02K | ±0.50% | 2.1458ms | 2.5350ms | 233.01K |

**Key Insight:** Zen is **22.29x faster** than Jotai in this category.

### Batching (100 updates) {#batching-100-updates-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.06M
🥈 Preact Signals       ██████ 874.72K
🥉 Zen                  ██████ 848.19K
   MobX                 █ 41.87K
   Valtio               █ 22.60K
   Jotai                █ 7.68K
   Redux Toolkit        █ 2.05K
   Zustand              █ 1.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.06M | ±0.13% | 0.1650ms | 0.2510ms | 3.03M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 874.72K | ±0.08% | 1.1432ms | 1.3220ms | 437.36K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 848.19K | ±0.09% | 1.1790ms | 1.2030ms | 424.09K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 41.87K | ±0.82% | 23.8821ms | 31.2690ms | 20.94K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.60K | ±0.90% | 44.2455ms | 52.6090ms | 11.30K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.68K | ±0.92% | 130.2179ms | 407.3930ms | 3.84K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.05K | ±0.77% | 488.2960ms | 840.5450ms | 1.02K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.74K | ±0.59% | 575.8241ms | 949.3190ms | 869.00 |

**Key Insight:** Solid Signals is **3489.71x faster** than Zustand in this category.

### Subscribe/Unsubscribe {#subscribe-unsubscribe}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.79M
🥈 Zen                  █████████████████████████ 6.17M
🥉 Preact Signals       ████████████████████ 4.93M
   Zustand              ████████████████ 3.80M
   Redux Toolkit        ███████████ 2.66M
   MobX                 ███ 711.46K
   Jotai                █ 356.42K
   Valtio               █ 2.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.79M | ±0.09% | 0.1021ms | 0.1110ms | 4.90M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.17M | ±0.18% | 0.1621ms | 0.2010ms | 3.08M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.93M | ±0.54% | 0.2030ms | 0.2510ms | 2.46M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 3.80M | ±1.40% | 0.2631ms | 1.8430ms | 1.90M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.66M | ±1.14% | 0.3761ms | 1.9240ms | 1.33M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 711.46K | ±1.91% | 1.4056ms | 3.0550ms | 355.73K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 356.42K | ±6.91% | 2.8057ms | 6.5720ms | 178.21K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.61K | ±2.56% | 383.3995ms | 1096.8350ms | 1.31K |

**Key Insight:** Solid Signals is **3754.79x faster** than Valtio in this category.

### Computed Access {#computed-access}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.66M
🥈 Solid Signals        ███████████████████████████████████████ 10.47M
🥉 Preact Signals       ███████████████████████████████████████ 10.28M
   Zen                  ██████████████████████████████████████ 10.20M
   Zustand              █████████████████████████████████ 8.89M
   Valtio               ████████████████████████ 6.39M
   MobX                 █████████████ 3.37M
   Jotai                ████ 959.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.66M | ±0.09% | 0.0938ms | 0.1100ms | 5.33M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.47M | ±0.26% | 0.0955ms | 0.1100ms | 5.23M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.28M | ±0.09% | 0.0972ms | 0.1110ms | 5.14M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 10.20M | ±0.09% | 0.0981ms | 0.1110ms | 5.10M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.89M | ±0.22% | 0.1124ms | 0.1300ms | 4.45M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.39M | ±0.10% | 0.1565ms | 0.2500ms | 3.20M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.37M | ±0.74% | 0.2967ms | 0.3500ms | 1.69M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 959.44K | ±0.64% | 1.0423ms | 1.2120ms | 479.72K |

**Key Insight:** Redux Toolkit is **11.11x faster** than Jotai in this category.

### Nested Update {#nested-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.88M
🥈 Zen                  ██████████████████████████████████████ 8.51M
🥉 Preact Signals       ██████████████████████████████████████ 8.41M
   MobX                 ████████ 1.75M
   Valtio               ██████ 1.35M
   Jotai                ███ 693.13K
   Redux Toolkit        █ 203.29K
   Zustand              █ 161.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.88M | ±0.09% | 0.1126ms | 0.2100ms | 4.44M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.51M | ±0.09% | 0.1175ms | 0.2110ms | 4.25M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.41M | ±0.09% | 0.1189ms | 0.2110ms | 4.21M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.75M | ±0.57% | 0.5710ms | 0.7710ms | 875.64K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.35M | ±0.46% | 0.7387ms | 0.8620ms | 676.91K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 693.13K | ±0.36% | 1.4427ms | 3.1250ms | 346.56K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 203.29K | ±0.50% | 4.9190ms | 8.2150ms | 101.65K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 161.01K | ±0.41% | 6.2109ms | 8.0250ms | 80.50K |

**Key Insight:** Solid Signals is **55.17x faster** than Zustand in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 155.50K
🥈 MobX                 █████████████████████████████████████ 144.59K
🥉 Preact Signals       ███ 13.27K
   Zustand              ███ 13.15K
   Jotai                ██ 9.49K
   Solid Signals        ██ 8.55K
   Zen                  ██ 8.29K
   Redux Toolkit        █ 4.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 155.50K | ±11.89% | 6.4308ms | 9.3070ms | 77.75K |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 144.59K | ±6.51% | 6.9160ms | 10.9400ms | 72.30K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 13.27K | ±7.86% | 75.3566ms | 226.8450ms | 6.68K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 13.15K | ±7.14% | 76.0474ms | 209.4030ms | 6.58K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.49K | ±7.93% | 105.3577ms | 204.7030ms | 4.75K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.55K | ±8.05% | 116.9266ms | 195.8270ms | 4.28K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 8.29K | ±8.17% | 120.6070ms | 197.2300ms | 4.15K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.68K | ±1.26% | 213.8883ms | 334.7570ms | 2.34K |

**Key Insight:** Valtio is **33.26x faster** than Redux Toolkit in this category.

### Loading State Toggle {#loading-state-toggle}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.39M
🥈 Preact Signals       ██████████████████████████████████████ 8.83M
🥉 Zen                  ███████████████████████ 5.47M
   Valtio               ██████████ 2.34M
   MobX                 █████████ 2.03M
   Jotai                ███ 766.56K
   Redux Toolkit        █ 341.68K
   Zustand              █ 167.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.39M | ±0.09% | 0.1065ms | 0.2100ms | 4.70M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.83M | ±0.09% | 0.1132ms | 0.2200ms | 4.42M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.47M | ±0.09% | 0.1828ms | 0.2900ms | 2.74M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.34M | ±0.56% | 0.4266ms | 0.6910ms | 1.17M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.03M | ±0.69% | 0.4916ms | 0.6210ms | 1.02M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 766.56K | ±0.87% | 1.3045ms | 3.1060ms | 383.28K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 341.68K | ±0.86% | 2.9267ms | 4.0280ms | 170.84K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.92K | ±0.65% | 5.9553ms | 7.0440ms | 83.96K |

**Key Insight:** Solid Signals is **55.94x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers) {#multiple-subscriptions-10-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.36M
🥈 Zen                  ███████████ 1.19M
🥉 Preact Signals       ██████ 638.53K
   Zustand              █ 108.38K
   Redux Toolkit        █ 95.37K
   Jotai                █ 55.04K
   MobX                 █ 44.96K
   Valtio               █ 10.63
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.36M | ±2.34% | 0.2292ms | 0.2910ms | 2.18M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.19M | ±1.68% | 0.8369ms | 1.1520ms | 597.41K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 638.53K | ±1.63% | 1.5661ms | 1.9230ms | 319.26K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 108.38K | ±7.92% | 9.2266ms | 18.0530ms | 54.19K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 95.37K | ±9.60% | 10.4858ms | 19.3660ms | 47.68K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 55.04K | ±3.60% | 18.1674ms | 40.7270ms | 27.52K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 44.96K | ±12.01% | 22.2434ms | 34.1440ms | 22.48K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 10.63 | ±28.27% | 94087.7354ms | 189184.1520ms | 10.00 |

**Key Insight:** Solid Signals is **410522.40x faster** than Valtio in this category.

### Batch Updates (3 state changes) {#batch-updates-3-state-changes-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.17M
🥈 Preact Signals       ████████████████████████████████ 6.50M
🥉 Zen                  █████████████████████ 4.25M
   Valtio               ████ 814.52K
   MobX                 ███ 697.16K
   Jotai                █ 242.42K
   Redux Toolkit        █ 176.73K
   Zustand              █ 157.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.17M | ±0.09% | 0.1225ms | 0.2300ms | 4.08M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.50M | ±0.09% | 0.1539ms | 0.2510ms | 3.25M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.25M | ±0.22% | 0.2353ms | 0.3510ms | 2.13M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 814.52K | ±1.30% | 1.2277ms | 1.3220ms | 407.26K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 697.16K | ±2.65% | 1.4344ms | 1.5830ms | 348.58K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 242.42K | ±1.33% | 4.1252ms | 8.5160ms | 121.21K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 176.73K | ±1.25% | 5.6582ms | 6.8720ms | 88.37K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 157.98K | ±0.92% | 6.3300ms | 7.1030ms | 78.99K |

**Key Insight:** Solid Signals is **51.69x faster** than Zustand in this category.

### Array Filter {#array-filter}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 8.93K
🥈 Preact Signals       ████████████████████████████ 6.15K
🥉 Jotai                ████████████████████ 4.40K
   Zen                  ████████████████ 3.68K
   Solid Signals        ███████████████ 3.30K
   Redux Toolkit        █ 168.28
   MobX                 █ 45.35
   Valtio               █ 6.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.93K | ±2.16% | 111.9709ms | 474.1090ms | 4.47K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.15K | ±2.74% | 162.6726ms | 699.3200ms | 3.07K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.40K | ±1.76% | 227.3591ms | 788.0270ms | 2.20K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 3.68K | ±5.58% | 271.6582ms | 2388.9770ms | 1.84K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.30K | ±4.88% | 303.2147ms | 2220.4810ms | 1.65K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 168.28 | ±1.53% | 5942.6374ms | 7103.3640ms | 85.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 45.35 | ±3.04% | 22049.5808ms | 25648.9720ms | 23.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.00 | ±0.51% | 166540.6397ms | 168279.6960ms | 10.00 |

**Key Insight:** Zustand is **1487.36x faster** than Valtio in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 33.18K
🥈 Zen                  ████████████████████████████████████████ 33.14K
🥉 Solid Signals        ███████████████████████████ 22.33K
   Zustand              █████████████████████████ 20.51K
   Preact Signals       █████████████████ 14.36K
   Redux Toolkit        █ 409.80
   MobX                 █ 71.41
   Valtio               █ 71.29
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 33.18K | ±1.01% | 30.1371ms | 121.4280ms | 16.59K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 33.14K | ±0.86% | 30.1745ms | 122.5690ms | 16.57K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.33K | ±2.31% | 44.7738ms | 142.4970ms | 11.17K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 20.51K | ±2.29% | 48.7624ms | 143.1180ms | 10.25K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.36K | ±2.72% | 69.6422ms | 189.2040ms | 7.18K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 409.80 | ±2.76% | 2440.1878ms | 4033.1780ms | 205.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 71.41 | ±4.02% | 14003.9494ms | 21373.5120ms | 36.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 71.29 | ±1.82% | 14026.4250ms | 16187.8150ms | 36.00 |

**Key Insight:** Jotai is **465.42x faster** than Valtio in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.61K
🥈 Zustand              ████████████ 9.84K
🥉 Solid Signals        ████████████ 9.73K
   Preact Signals       █████████ 7.19K
   Jotai                ███████ 6.15K
   Redux Toolkit        █ 412.53
   Valtio               █ 79.59
   MobX                 █ 70.82
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.61K | ±0.74% | 29.7487ms | 123.3810ms | 16.81K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.84K | ±3.36% | 101.6310ms | 199.4840ms | 4.92K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.73K | ±3.29% | 102.7833ms | 190.5670ms | 4.87K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.19K | ±2.55% | 139.1248ms | 349.5850ms | 3.59K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.15K | ±2.07% | 162.5914ms | 198.5210ms | 3.08K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 412.53 | ±2.46% | 2424.0514ms | 3859.3630ms | 207.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 79.59 | ±2.28% | 12565.1100ms | 15476.4460ms | 40.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 70.82 | ±4.27% | 14120.3108ms | 20995.6100ms | 36.00 |

**Key Insight:** Zen is **474.65x faster** than MobX in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.68M
🥈 Preact Signals       ██████████████████████████████████ 6.49M
🥉 Zen                  ██████████████████████████████████ 6.44M
   Valtio               ██████ 1.12M
   MobX                 █████ 932.98K
   Jotai                ███ 634.29K
   Zustand              █ 164.16K
   Redux Toolkit        █ 76.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.68M | ±1.52% | 0.1302ms | 0.2200ms | 3.84M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.49M | ±2.87% | 0.1540ms | 0.2310ms | 3.25M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 6.44M | ±1.33% | 0.1553ms | 0.2510ms | 3.22M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.12M | ±0.99% | 0.8892ms | 0.9820ms | 562.30K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 932.98K | ±1.20% | 1.0718ms | 1.2620ms | 466.49K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 634.29K | ±0.55% | 1.5766ms | 3.2860ms | 317.14K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 164.16K | ±1.48% | 6.0915ms | 6.7630ms | 82.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 76.62K | ±1.78% | 13.0517ms | 23.1030ms | 38.31K |

**Key Insight:** Solid Signals is **100.21x faster** than Redux Toolkit in this category.

### Large State Update (1000 items) {#large-state-update-1000-items-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 118.12K
🥈 Preact Signals       █████████████████████████████████████ 108.78K
🥉 Jotai                ███████████████████████████████ 90.93K
   Zen                  ██████████████████████████████ 89.90K
   Zustand              ██████████████████████ 65.77K
   Valtio               ████████ 22.80K
   MobX                 ██████ 16.89K
   Redux Toolkit        █ 1.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 118.12K | ±1.28% | 8.4658ms | 16.1100ms | 59.06K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 108.78K | ±1.16% | 9.1929ms | 17.0920ms | 54.39K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 90.93K | ±1.32% | 10.9976ms | 21.5310ms | 45.47K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 89.90K | ±1.29% | 11.1233ms | 19.7570ms | 44.95K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 65.77K | ±1.56% | 15.2041ms | 25.0970ms | 32.89K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.80K | ±1.03% | 43.8623ms | 86.1720ms | 11.40K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 16.89K | ±1.63% | 59.2068ms | 124.0330ms | 8.45K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.27K | ±4.32% | 788.0648ms | 2175.3440ms | 635.00 |

**Key Insight:** Solid Signals is **93.09x faster** than Redux Toolkit in this category.

### Reactive Async State Access {#reactive-async-state-access}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.22M
🥈 Jotai                ███████████████████████ 695.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.22M | ±1.36% | 0.8193ms | 1.0420ms | 610.26K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 695.06K | ±1.77% | 1.4387ms | 1.9240ms | 347.53K |

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

*Last generated: 2025-11-09T14:05:09.535Z*
