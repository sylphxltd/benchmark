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
- **Last Run:** 2:05:09 PM UTC
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
🥇 Zen                  ████████████████████████████████████████ 11.21M
🥈 Solid Signals        ██████████████████████████████████████ 10.63M
🥉 Preact Signals       █████████████████████████████████████ 10.47M
   Zustand              ████████████████ 4.44M
   Jotai                ███ 762.10K
   Valtio               █ 335.21K
   MobX                 █ 84.19K
   Redux Toolkit        █ 41.99K
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
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.21M | ±0.10% | 0.0892ms | 0.1100ms | 5.61M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.63M | ±0.12% | 0.0941ms | 0.1400ms | 5.32M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.47M | ±0.19% | 0.0955ms | 0.1400ms | 5.24M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.44M | ±0.77% | 0.2251ms | 0.3610ms | 2.22M |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 762.10K | ±10.88% | 1.3122ms | 1.2720ms | 381.05K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 335.21K | ±14.52% | 2.9832ms | 3.8880ms | 167.78K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 84.19K | ±5.13% | 11.8775ms | 28.5330ms | 42.10K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 41.99K | ±4.44% | 23.8134ms | 61.7450ms | 21.00K |
| 9 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[MobX](https://github.com/mobxjs/mobx)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **[Zen](https://github.com/sylphxltd/zen)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zen is **Infinityx faster** than Zen in this category.

### Simple Increment {#simple-increment}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.84M
🥈 Zen                  ███████████████████████████████████████ 10.55M
🥉 Preact Signals       █████████████████████████████████████ 10.02M
   MobX                 ██████ 1.70M
   Valtio               ██████ 1.57M
   Jotai                ██ 512.78K
   Redux Toolkit        █ 275.41K
   Zustand              █ 166.47K
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
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.84M | ±0.10% | 0.0923ms | 0.1310ms | 5.42M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.55M | ±0.19% | 0.0948ms | 0.1210ms | 5.27M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.02M | ±0.13% | 0.0998ms | 0.1300ms | 5.01M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.21% | 0.5894ms | 0.8620ms | 848.27K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.57M | ±0.27% | 0.6363ms | 1.0720ms | 785.83K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 512.78K | ±1.31% | 1.9502ms | 4.3580ms | 256.39K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 275.41K | ±0.50% | 3.6309ms | 6.5730ms | 137.71K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.47K | ±0.32% | 6.0070ms | 9.7080ms | 83.24K |
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
🥇 Solid Signals        ████████████████████████████████████████ 2.34M
🥈 Zen                  ███████████████████ 1.12M
🥉 Preact Signals       █████████████ 738.11K
   Zustand              ██████████ 600.04K
   Redux Toolkit        ███████ 433.80K
   Valtio               █ 40.96K
   MobX                 █ 30.73K
   Jotai                █ 3.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.34M | ±0.09% | 0.4267ms | 0.7110ms | 1.17M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.12M | ±0.08% | 0.8919ms | 1.0220ms | 560.57K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 738.11K | ±0.08% | 1.3548ms | 1.3630ms | 369.05K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 600.04K | ±0.08% | 1.6666ms | 1.6730ms | 300.02K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 433.80K | ±0.09% | 2.3052ms | 2.3340ms | 216.90K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.96K | ±0.09% | 24.4148ms | 31.4580ms | 20.48K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 30.73K | ±0.13% | 32.5431ms | 39.8340ms | 15.37K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.05K | ±1.73% | 327.8750ms | 979.6920ms | 1.52K |

**Key Insight:** Solid Signals is **768.36x faster** than Jotai in this category.

### Write (no listeners) {#write-no-listeners-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.43M
🥈 Zen                  ███████████████████████████████████████ 10.23M
🥉 Preact Signals       ██████████████████████████████████████ 9.98M
   MobX                 ████████ 2.03M
   Valtio               ██████ 1.53M
   Jotai                ██ 496.01K
   Redux Toolkit        █ 264.92K
   Zustand              █ 165.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.43M | ±0.10% | 0.0959ms | 0.1110ms | 5.21M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.23M | ±0.09% | 0.0977ms | 0.1300ms | 5.12M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.98M | ±0.09% | 0.1002ms | 0.1500ms | 4.99M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.03M | ±0.72% | 0.4928ms | 0.8220ms | 1.01M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.53M | ±0.35% | 0.6525ms | 0.7220ms | 766.28K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 496.01K | ±12.12% | 2.0161ms | 3.7880ms | 248.00K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 264.92K | ±0.99% | 3.7747ms | 4.5990ms | 132.46K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 165.68K | ±0.97% | 6.0358ms | 8.3260ms | 82.84K |

**Key Insight:** Solid Signals is **62.95x faster** than Zustand in this category.

### Write (1 subscriber) {#write-1-subscriber-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.67M
🥈 Zen                  █████████████████████████ 4.71M
🥉 Preact Signals       ██████████████ 2.65M
   Redux Toolkit        █ 229.68K
   Jotai                █ 208.55K
   Zustand              █ 158.43K
   MobX                 █ 5.23K
   Valtio               █ 2.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.67M | ±5.92% | 0.1304ms | 0.2010ms | 3.84M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.71M | ±1.13% | 0.2124ms | 0.3400ms | 2.35M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.65M | ±3.69% | 0.3770ms | 0.4520ms | 1.33M |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 229.68K | ±1.12% | 4.3539ms | 7.0430ms | 114.84K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 208.55K | ±5.05% | 4.7949ms | 8.9160ms | 104.71K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 158.43K | ±0.73% | 6.3120ms | 9.2670ms | 79.22K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.23K | ±2.20% | 191.1735ms | 294.3690ms | 2.62K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.50K | ±2.88% | 400.6497ms | 1657.1220ms | 1.25K |

**Key Insight:** Solid Signals is **3073.49x faster** than Valtio in this category.

### Write (5 subscribers) {#write-5-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.44M
🥈 Zen                  ████████████████ 2.56M
🥉 Preact Signals       ████████ 1.24M
   Redux Toolkit        █ 162.45K
   Zustand              █ 133.00K
   Jotai                █ 88.36K
   MobX                 █ 5.57K
   Valtio               █ 2.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.44M | ±1.48% | 0.1554ms | 0.2610ms | 3.22M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.56M | ±0.93% | 0.3910ms | 0.6110ms | 1.28M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.24M | ±0.98% | 0.8070ms | 1.2020ms | 619.55K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 162.45K | ±3.10% | 6.1558ms | 11.0510ms | 81.22K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 133.00K | ±3.30% | 7.5189ms | 15.8990ms | 66.50K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 88.36K | ±3.65% | 11.3172ms | 32.2300ms | 44.18K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.57K | ±1.81% | 179.4354ms | 218.5270ms | 2.79K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.56K | ±3.11% | 391.1698ms | 1262.2380ms | 1.28K |

**Key Insight:** Solid Signals is **2517.75x faster** than Valtio in this category.

### Computed - Cached Read {#computed-cached-read}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.64M
🥈 Preact Signals       ███████████████████████████████████████ 10.37M
🥉 Solid Signals        ██████████████████████████████████████ 10.14M
   Zustand              █████████████████████████████████████ 9.78M
   Redux Toolkit        █████████████████████████████████ 8.75M
   Valtio               ███████████████████████ 6.12M
   MobX                 ███████████ 2.88M
   Jotai                ████ 963.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.64M | ±0.17% | 0.0940ms | 0.1100ms | 5.32M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.37M | ±0.09% | 0.0965ms | 0.1200ms | 5.18M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.14M | ±0.16% | 0.0986ms | 0.1110ms | 5.07M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.78M | ±0.10% | 0.1023ms | 0.1500ms | 4.89M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.75M | ±0.09% | 0.1143ms | 0.1400ms | 4.38M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.12M | ±0.10% | 0.1635ms | 0.1810ms | 3.06M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.88M | ±0.61% | 0.3467ms | 0.3810ms | 1.44M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 963.02K | ±0.59% | 1.0384ms | 1.1920ms | 481.51K |

**Key Insight:** Zen is **11.05x faster** than Jotai in this category.

### Computed - Update {#computed-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.26M
🥈 Zen                  ████████████████████████████████████ 9.19M
🥉 Preact Signals       ██████████████████████████ 6.57M
   Valtio               █████ 1.36M
   MobX                 █████ 1.29M
   Jotai                █ 217.03K
   Redux Toolkit        █ 188.01K
   Zustand              █ 167.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.26M | ±0.11% | 0.0974ms | 0.1300ms | 5.13M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 9.19M | ±0.09% | 0.1088ms | 0.1400ms | 4.59M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.57M | ±0.33% | 0.1522ms | 0.1710ms | 3.28M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.36M | ±0.91% | 0.7332ms | 0.8420ms | 681.99K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.29M | ±0.29% | 0.7744ms | 0.8820ms | 645.66K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 217.03K | ±3.39% | 4.6078ms | 9.0560ms | 108.51K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 188.01K | ±1.89% | 5.3190ms | 9.2980ms | 94.00K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.03K | ±0.65% | 5.9870ms | 7.3930ms | 83.51K |

**Key Insight:** Solid Signals is **61.45x faster** than Zustand in this category.

### Chained Computed (3 levels) {#chained-computed-3-levels-}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.54M
🥈 Solid Signals        ████████████████████████████████████████ 10.43M
🥉 Preact Signals       ██████████████████████████████████████ 9.90M
   Zustand              █████████████████████████████████████ 9.71M
   Redux Toolkit        █████████████████████████████████ 8.60M
   Valtio               █████████████████ 4.41M
   MobX                 ██ 525.68K
   Jotai                ██ 466.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.54M | ±0.25% | 0.0949ms | 0.1200ms | 5.27M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.43M | ±0.12% | 0.0959ms | 0.1110ms | 5.21M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.90M | ±0.09% | 0.1010ms | 0.1300ms | 4.95M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.71M | ±0.10% | 0.1030ms | 0.1510ms | 4.85M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.60M | ±0.10% | 0.1163ms | 0.1400ms | 4.30M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.41M | ±0.10% | 0.2268ms | 0.4110ms | 2.21M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 525.68K | ±0.80% | 1.9023ms | 3.6670ms | 262.84K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 466.58K | ±0.96% | 2.1433ms | 2.6950ms | 233.29K |

**Key Insight:** Zen is **22.59x faster** than Jotai in this category.

### Batching (100 updates) {#batching-100-updates-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.21M
🥈 Preact Signals       ██████ 881.94K
🥉 Zen                  █████ 846.45K
   MobX                 █ 37.97K
   Valtio               █ 21.07K
   Jotai                █ 7.35K
   Redux Toolkit        █ 2.00K
   Zustand              █ 1.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.21M | ±0.09% | 0.1611ms | 0.1800ms | 3.10M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 881.94K | ±0.08% | 1.1339ms | 1.1420ms | 440.97K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 846.45K | ±0.14% | 1.1814ms | 1.2120ms | 423.22K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 37.97K | ±0.77% | 26.3374ms | 34.3640ms | 18.98K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.07K | ±1.30% | 47.4683ms | 97.3610ms | 10.53K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.35K | ±1.25% | 136.1316ms | 529.9960ms | 3.67K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.00K | ±0.87% | 499.5810ms | 909.4720ms | 1.00K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.76K | ±0.79% | 569.0678ms | 1020.7090ms | 879.00 |

**Key Insight:** Solid Signals is **3531.95x faster** than Zustand in this category.

### Subscribe/Unsubscribe {#subscribe-unsubscribe}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.43M
🥈 Zen                  ████████████████████████ 6.14M
🥉 Preact Signals       █████████████████ 4.44M
   Zustand              ██████████████ 3.72M
   Redux Toolkit        █████████ 2.26M
   MobX                 ███ 715.20K
   Jotai                █ 352.69K
   Valtio               █ 2.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.43M | ±0.09% | 0.0959ms | 0.1110ms | 5.22M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.14M | ±0.19% | 0.1628ms | 0.2200ms | 3.07M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.44M | ±0.82% | 0.2254ms | 0.3000ms | 2.22M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 3.72M | ±3.49% | 0.2690ms | 1.8730ms | 1.86M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.26M | ±18.47% | 0.4430ms | 1.9640ms | 1.13M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 715.20K | ±2.29% | 1.3982ms | 3.1060ms | 357.60K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 352.69K | ±7.98% | 2.8353ms | 6.4820ms | 176.35K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.53K | ±3.19% | 394.9155ms | 1219.2380ms | 1.27K |

**Key Insight:** Solid Signals is **4119.99x faster** than Valtio in this category.

### Computed Access {#computed-access}

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.69M
🥈 Zen                  ███████████████████████████████████████ 10.53M
🥉 Solid Signals        ███████████████████████████████████████ 10.41M
   Preact Signals       ██████████████████████████████████████ 10.18M
   Zustand              ███████████████████████████████████ 9.35M
   Valtio               ███████████████████████ 6.16M
   MobX                 ████████████ 3.19M
   Jotai                ████ 950.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.69M | ±0.12% | 0.0936ms | 0.1500ms | 5.34M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.53M | ±0.10% | 0.0950ms | 0.1110ms | 5.26M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.41M | ±0.10% | 0.0961ms | 0.1500ms | 5.20M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.18M | ±0.10% | 0.0983ms | 0.1300ms | 5.09M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.35M | ±0.15% | 0.1069ms | 0.1210ms | 4.68M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.16M | ±0.09% | 0.1625ms | 0.1810ms | 3.08M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.19M | ±0.95% | 0.3137ms | 0.3610ms | 1.59M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 950.35K | ±0.68% | 1.0522ms | 1.2230ms | 475.17K |

**Key Insight:** Redux Toolkit is **11.25x faster** than Jotai in this category.

### Nested Update {#nested-update}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.02M
🥈 Zen                  ███████████████████████████████████████ 8.71M
🥉 Preact Signals       ██████████████████████████████████████ 8.60M
   MobX                 ███████ 1.69M
   Valtio               ██████ 1.37M
   Jotai                ███ 663.15K
   Redux Toolkit        █ 192.16K
   Zustand              █ 160.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.02M | ±0.10% | 0.1109ms | 0.2100ms | 4.51M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.71M | ±0.14% | 0.1148ms | 0.2110ms | 4.36M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.60M | ±0.10% | 0.1162ms | 0.2110ms | 4.30M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.69M | ±1.42% | 0.5934ms | 0.7710ms | 842.66K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.37M | ±0.47% | 0.7307ms | 0.8320ms | 684.26K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 663.15K | ±1.33% | 1.5080ms | 3.1560ms | 331.57K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 192.16K | ±1.14% | 5.2040ms | 12.0220ms | 96.08K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 160.00K | ±0.66% | 6.2500ms | 7.4940ms | 80.00K |

**Key Insight:** Solid Signals is **56.37x faster** than Zustand in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 148.00K
🥈 MobX                 ███████████████████████████████████████ 142.73K
🥉 Preact Signals       █████ 19.27K
   Zustand              ███ 12.73K
   Jotai                ███ 10.23K
   Solid Signals        ██ 8.19K
   Zen                  ██ 8.12K
   Redux Toolkit        █ 4.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 148.00K | ±12.80% | 6.7566ms | 10.0290ms | 75.06K |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 142.73K | ±7.68% | 7.0064ms | 9.8880ms | 71.36K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.27K | ±8.00% | 51.8843ms | 264.9230ms | 9.65K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 12.73K | ±7.56% | 78.5396ms | 218.1960ms | 6.37K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.23K | ±8.05% | 97.7641ms | 213.2770ms | 5.12K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.19K | ±8.31% | 122.0936ms | 218.9670ms | 4.10K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 8.12K | ±8.53% | 123.0948ms | 212.8650ms | 4.06K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.61K | ±1.49% | 217.0781ms | 458.3420ms | 2.31K |

**Key Insight:** Valtio is **32.13x faster** than Redux Toolkit in this category.

### Loading State Toggle {#loading-state-toggle}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.38M
🥈 Preact Signals       █████████████████████████████████████ 8.64M
🥉 Zen                  █████████████████████████ 5.78M
   Valtio               ██████████ 2.31M
   MobX                 █████████ 2.05M
   Jotai                ███ 750.53K
   Redux Toolkit        █ 327.06K
   Zustand              █ 167.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.38M | ±0.10% | 0.1066ms | 0.2100ms | 4.69M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.64M | ±0.10% | 0.1157ms | 0.2200ms | 4.32M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.78M | ±0.09% | 0.1730ms | 0.2800ms | 2.89M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.31M | ±1.78% | 0.4324ms | 0.7010ms | 1.16M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.05M | ±1.10% | 0.4882ms | 0.6310ms | 1.02M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 750.53K | ±1.66% | 1.3324ms | 3.0950ms | 375.26K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 327.06K | ±1.69% | 3.0575ms | 4.4180ms | 163.53K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.23K | ±1.23% | 5.9799ms | 7.1540ms | 83.61K |

**Key Insight:** Solid Signals is **56.08x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers) {#multiple-subscriptions-10-subscribers-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.07M
🥈 Zen                  ██████████ 1.06M
🥉 Preact Signals       ██████ 617.47K
   Zustand              █ 104.28K
   Redux Toolkit        █ 92.75K
   Jotai                █ 51.08K
   MobX                 █ 43.95K
   Valtio               █ 10.76
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.07M | ±3.24% | 0.2460ms | 0.3010ms | 2.03M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.06M | ±3.70% | 0.9436ms | 1.2920ms | 529.87K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 617.47K | ±2.64% | 1.6195ms | 2.0640ms | 308.74K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 104.28K | ±8.73% | 9.5899ms | 18.8060ms | 52.14K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 92.75K | ±10.13% | 10.7816ms | 20.8280ms | 46.38K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 51.08K | ±5.60% | 19.5769ms | 43.5310ms | 25.54K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 43.95K | ±13.29% | 22.7536ms | 33.5420ms | 21.98K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 10.76 | ±24.87% | 92899.3702ms | 173701.5690ms | 10.00 |

**Key Insight:** Solid Signals is **377679.17x faster** than Valtio in this category.

### Batch Updates (3 state changes) {#batch-updates-3-state-changes-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.12M
🥈 Preact Signals       █████████████████████████████████████ 6.57M
🥉 Zen                  ████████████████████████ 4.25M
   Valtio               ████ 792.61K
   MobX                 ████ 668.39K
   Jotai                █ 216.09K
   Redux Toolkit        █ 162.81K
   Zustand              █ 155.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.12M | ±4.36% | 0.1405ms | 0.2610ms | 3.56M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.57M | ±0.10% | 0.1522ms | 0.2510ms | 3.29M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.25M | ±0.10% | 0.2355ms | 0.3410ms | 2.12M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 792.61K | ±2.35% | 1.2617ms | 1.5430ms | 396.31K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 668.39K | ±3.77% | 1.4961ms | 2.4950ms | 334.19K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 216.09K | ±3.98% | 4.6276ms | 9.3570ms | 108.05K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 162.81K | ±3.10% | 6.1423ms | 9.3880ms | 81.40K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 155.11K | ±2.33% | 6.4470ms | 7.2930ms | 77.56K |

**Key Insight:** Solid Signals is **45.90x faster** than Zustand in this category.

### Array Filter {#array-filter}

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 8.63K
🥈 Preact Signals       ███████████████████████████████ 6.75K
🥉 Jotai                ███████████████████ 4.10K
   Zen                  █████████████████ 3.69K
   Solid Signals        ███████████████ 3.13K
   Redux Toolkit        █ 162.78
   MobX                 █ 40.55
   Valtio               █ 6.10
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.63K | ±3.09% | 115.9059ms | 689.8030ms | 4.31K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.75K | ±2.94% | 148.2033ms | 700.7440ms | 3.37K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.10K | ±2.66% | 243.7911ms | 1170.4380ms | 2.05K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 3.69K | ±5.74% | 271.3362ms | 2435.8020ms | 1.84K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.13K | ±5.62% | 319.5713ms | 2659.9880ms | 1.56K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 162.78 | ±1.71% | 6143.0948ms | 7411.7450ms | 82.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 40.55 | ±2.47% | 24661.4940ms | 28012.1430ms | 21.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.10 | ±0.60% | 164047.6780ms | 166419.1960ms | 10.00 |

**Key Insight:** Zustand is **1415.35x faster** than Valtio in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.19K
🥈 Jotai                ████████████████████████████████████████ 33.02K
🥉 Solid Signals        █████████████████████████ 20.38K
   Zustand              ██████████████████████ 17.92K
   Preact Signals       █████████████████ 14.17K
   Redux Toolkit        █ 402.25
   MobX                 █ 66.87
   Valtio               █ 65.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.19K | ±0.83% | 30.1316ms | 122.3880ms | 16.59K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 33.02K | ±0.81% | 30.2886ms | 121.4460ms | 16.51K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 20.38K | ±2.97% | 49.0632ms | 147.0130ms | 10.19K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 17.92K | ±4.08% | 55.7882ms | 179.5840ms | 8.97K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.17K | ±2.97% | 70.5848ms | 196.6460ms | 7.08K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 402.25 | ±2.74% | 2486.0123ms | 4058.1880ms | 202.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 66.87 | ±3.04% | 14954.5259ms | 22012.5480ms | 34.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 65.43 | ±1.78% | 15284.2878ms | 17127.2880ms | 33.00 |

**Key Insight:** Zen is **507.25x faster** than Valtio in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.61K
🥈 Solid Signals        ████████████ 9.68K
🥉 Zustand              ███████████ 9.36K
   Preact Signals       █████████ 7.23K
   Jotai                ███████ 5.83K
   Redux Toolkit        █ 395.94
   MobX                 █ 67.94
   Valtio               █ 63.76
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.61K | ±0.74% | 29.7532ms | 123.2190ms | 16.80K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.68K | ±3.15% | 103.2985ms | 318.9130ms | 4.85K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.36K | ±3.91% | 106.8002ms | 307.6120ms | 4.68K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.23K | ±2.83% | 138.2391ms | 349.0190ms | 3.62K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.83K | ±2.95% | 171.6653ms | 329.4220ms | 2.91K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 395.94 | ±3.11% | 2525.6292ms | 4640.1610ms | 198.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 67.94 | ±3.12% | 14719.5339ms | 21893.7000ms | 34.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 63.76 | ±2.20% | 15683.8632ms | 18090.3680ms | 32.00 |

**Key Insight:** Zen is **527.13x faster** than Valtio in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.77M
🥈 Preact Signals       ██████████████████████████████████ 6.63M
🥉 Zen                  █████████████████████████████████ 6.51M
   Valtio               ██████ 1.16M
   MobX                 ████ 714.91K
   Jotai                ███ 628.88K
   Zustand              █ 166.93K
   Redux Toolkit        █ 75.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.77M | ±1.42% | 0.1287ms | 0.2110ms | 3.89M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.63M | ±2.17% | 0.1508ms | 0.2310ms | 3.32M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 6.51M | ±1.40% | 0.1537ms | 0.2510ms | 3.25M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.16M | ±0.94% | 0.8627ms | 0.9610ms | 579.58K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 714.91K | ±13.97% | 1.3988ms | 2.1840ms | 357.46K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 628.88K | ±0.81% | 1.5901ms | 3.2960ms | 314.44K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.93K | ±1.75% | 5.9907ms | 7.1430ms | 83.46K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 75.12K | ±2.18% | 13.3121ms | 23.0330ms | 37.56K |

**Key Insight:** Solid Signals is **103.45x faster** than Redux Toolkit in this category.

### Large State Update (1000 items) {#large-state-update-1000-items-}

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 114.72K
🥈 Preact Signals       ███████████████████████████████████ 100.20K
🥉 Jotai                ███████████████████████████████ 88.07K
   Zen                  ██████████████████████████████ 84.94K
   Zustand              ███████████████████████ 65.67K
   Valtio               ████████ 23.42K
   MobX                 ██████ 16.19K
   Redux Toolkit        █ 1.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 114.72K | ±1.89% | 8.7166ms | 16.0100ms | 57.36K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 100.20K | ±2.24% | 9.9802ms | 18.1640ms | 50.10K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 88.07K | ±1.91% | 11.3552ms | 21.9810ms | 44.03K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 84.94K | ±2.73% | 11.7729ms | 20.3080ms | 42.47K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 65.67K | ±1.98% | 15.2271ms | 24.8960ms | 32.84K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.42K | ±1.01% | 42.6906ms | 84.1370ms | 11.71K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 16.19K | ±1.87% | 61.7564ms | 130.9330ms | 8.10K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.25K | ±4.48% | 801.4821ms | 2454.4050ms | 624.00 |

**Key Insight:** Solid Signals is **91.95x faster** than Redux Toolkit in this category.

### Reactive Async State Access {#reactive-async-state-access}

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.13M
🥈 Jotai                ████████████████████████ 671.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.13M | ±3.33% | 0.8859ms | 1.1220ms | 564.41K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 671.75K | ±3.16% | 1.4886ms | 2.0640ms | 335.88K |

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

*Last generated: 2025-11-09T14:14:46.796Z*
