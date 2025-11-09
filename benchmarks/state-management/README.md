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
- **Last Run:** 5:14:32 PM UTC
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
| 🥇 | **Async Loading** | 98.0/100 | Baseline |
| 🥈 | **Concurrent Async** | 97.8/100 | 99.8% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 68.9/100 | 70.3% |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 65.0/100 | 66.3% |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 63.9/100 | 65.2% |
| 6 | **Large State Allocation** | 62.8/100 | 64.1% |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 35.6/100 | 36.3% |
| 8 | **Simple Increment** | 19.3/100 | 19.7% |
| 9 | **[Zustand](https://github.com/pmndrs/zustand)** | 11.7/100 | 11.9% |
| 10 | **[Valtio](https://github.com/pmndrs/valtio)** | 8.5/100 | 8.7% |
| 11 | **[MobX](https://github.com/mobxjs/mobx)** | 8.2/100 | 8.4% |
| 12 | **Store Creation** | 4.8/100 | 4.9% |
| 13 | **Burst Updates** | 4.7/100 | 4.8% |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.0/100 | 0.0% |
| 14 | **Deep Read Access** | 0.0/100 | 0.0% |

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
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 36/39 | 92% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 36/39 | 92% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 35/39 | 90% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 35/39 | 90% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 35/39 | 90% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 35/39 | 90% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 35/39 | 90% |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 34/39 | 87% |
| 9 | **Store Creation** | 1/39 | 3% |
| 9 | **Large State Allocation** | 1/39 | 3% |
| 9 | **Async Loading** | 1/39 | 3% |
| 9 | **Concurrent Async** | 1/39 | 3% |
| 9 | **Simple Increment** | 1/39 | 3% |
| 9 | **Burst Updates** | 1/39 | 3% |

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
- [Undo/Redo Operations](#undoredo-operations)
- [Batch State Operations](#batch-state-operations)
- [Null Value Handling](#null-value-handling)
- [Undefined Value Handling](#undefined-value-handling)
- [Async State Loading](#async-state-loading)
- [Concurrent Async Operations](#concurrent-async-operations)
- [Computed Access](#computed-access)
- [Nested Update](#nested-update)
- [Array Push](#array-push)
- [Loading State Toggle](#loading-state-toggle)
- [Multiple Subscriptions (10 subscribers)](#multiple-subscriptions-10-subscribers)
- [Batch Updates (3 state changes)](#batch-updates-3-state-changes)
- [Array Filter](#array-filter)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large State Update (1000 items)](#large-state-update-1000-items)
- [Reactive Async State Access](#reactive-async-state-access)
- [Deep Nested Updates](#deep-nested-updates)
- [Read Operations - x1](#read-operations-x1)
- [Write Operations - x1](#write-operations-x1)

### Store Creation

**Performance Comparison:**

```
🥇 Store Creation - ... ████████████████████████████████████████ 13.06M
🥈 Store Creation - ... ████████████████████████████████████████ 13.01M
🥉 Store Creation - Zen ██████████████████████████████████████ 12.56M
   Preact Signals       █████████████████████████████ 9.62M
   Zen                  █████████████████████████████ 9.52M
   Solid Signals        ████████████████████████████ 9.03M
   Store Creation - ... ███████████████ 5.00M
   Zustand              ██████████████ 4.43M
   Store Creation - ... ███ 854.91K
   Jotai                ██ 774.51K
   Store Creation - ... █ 264.93K
   Valtio               █ 240.73K
   Store Creation - ... █ 86.80K
   Redux Toolkit        █ 86.36K
   Store Creation - ... █ 119.48
   MobX                 █ 115.89
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Store Creation - Preact Signals** | 13.06M | ±0.18% | 0.0766ms | 0.0900ms | 6.53M |
| 🥈 | **Store Creation - Solid Signals** | 13.01M | ±0.09% | 0.0768ms | 0.0900ms | 6.51M |
| 🥉 | **Store Creation - Zen** | 12.56M | ±0.19% | 0.0796ms | 0.0910ms | 6.28M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.62M | ±0.21% | 0.1040ms | 0.1510ms | 4.81M |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 9.52M | ±0.10% | 0.1050ms | 0.1300ms | 4.76M |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.03M | ±0.10% | 0.1107ms | 0.1510ms | 4.51M |
| 7 | **Store Creation - Zustand** | 5.00M | ±0.43% | 0.2000ms | 0.4210ms | 2.50M |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.43M | ±0.41% | 0.2260ms | 0.4510ms | 2.21M |
| 9 | **Store Creation - Jotai** | 854.91K | ±2.14% | 1.1697ms | 1.4830ms | 427.45K |
| 10 | **[Jotai](https://github.com/pmndrs/jotai)** | 774.51K | ±2.08% | 1.2911ms | 1.6630ms | 387.26K |
| 11 | **Store Creation - Valtio** | 264.93K | ±19.67% | 3.7747ms | 4.5290ms | 140.20K |
| 12 | **[Valtio](https://github.com/pmndrs/valtio)** | 240.73K | ±20.29% | 4.1540ms | 6.3430ms | 120.37K |
| 13 | **Store Creation - Redux Toolkit** | 86.80K | ±1.06% | 11.5214ms | 23.2140ms | 43.40K |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 86.36K | ±0.99% | 11.5791ms | 23.9150ms | 43.18K |
| 15 | **Store Creation - MobX** | 119.48 | ±6.99% | 8369.5633ms | 11052.6220ms | 60.00 |
| 16 | **[MobX](https://github.com/mobxjs/mobx)** | 115.89 | ±7.16% | 8629.2150ms | 12495.3930ms | 59.00 |

**Key Insight:** Store Creation - Preact Signals is **112680.93x faster** than MobX in this category.

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.73M
🥈 Preact Signals       ██████████████████████████████████████ 10.17M
🥉 Zen                  █████████████████████████████████████ 10.04M
   Solid Signals        ████████████████████████████████████ 9.64M
   Jotai                ███████████████████████████████████ 9.38M
   Preact Signals       ████████████████████████████████ 8.60M
   Zen                  ████████████████████████████ 7.53M
   MobX                 ██████ 1.70M
   Valtio               ██████ 1.56M
   Valtio               █████ 1.33M
   MobX                 ████ 1.12M
   Jotai                ██ 517.85K
   Redux Toolkit        █ 298.55K
   Redux Toolkit        █ 282.47K
   Zustand              █ 170.16K
   Zustand              █ 167.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.73M | ±0.09% | 0.0932ms | 0.1100ms | 5.36M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.17M | ±0.09% | 0.0983ms | 0.1300ms | 5.09M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.04M | ±0.21% | 0.0996ms | 0.1300ms | 5.02M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.64M | ±0.09% | 0.1037ms | 0.1200ms | 4.82M |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.38M | ±0.10% | 0.1066ms | 0.1310ms | 4.69M |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.60M | ±0.20% | 0.1162ms | 0.1400ms | 4.30M |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 7.53M | ±0.10% | 0.1329ms | 0.1610ms | 3.76M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 1.70M | ±0.20% | 0.5885ms | 0.7710ms | 849.66K |
| 9 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.56M | ±0.37% | 0.6403ms | 1.0620ms | 780.91K |
| 10 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.33M | ±0.57% | 0.7501ms | 0.8310ms | 666.62K |
| 11 | **[MobX](https://github.com/mobxjs/mobx)** | 1.12M | ±0.57% | 0.8915ms | 1.1330ms | 560.88K |
| 12 | **[Jotai](https://github.com/pmndrs/jotai)** | 517.85K | ±0.71% | 1.9311ms | 4.3380ms | 258.92K |
| 13 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 298.55K | ±0.62% | 3.3495ms | 6.4320ms | 149.28K |
| 14 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 282.47K | ±0.46% | 3.5401ms | 4.2780ms | 141.24K |
| 15 | **[Zustand](https://github.com/pmndrs/zustand)** | 170.16K | ±0.21% | 5.8767ms | 8.7360ms | 85.08K |
| 16 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.50K | ±0.48% | 5.9700ms | 6.9030ms | 83.75K |

**Key Insight:** Solid Signals is **64.04x faster** than Zustand in this category.

### High Frequency Read

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 38.23K
🥈 Preact Signals       ███████████████████████████████████████ 37.62K
🥉 Redux Toolkit        ███████████████████████████████████████ 37.32K
   Zen                  ██████████████████████████████████████ 36.40K
   Solid Signals        █████████████████████████████████████ 35.05K
   Zustand              █████████████████████████████████ 31.55K
   Valtio               █████████████████████ 19.66K
   MobX                 ███████████████████ 18.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 38.23K | ±0.13% | 26.1601ms | 39.3240ms | 19.11K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 37.62K | ±0.09% | 26.5846ms | 33.7030ms | 18.81K |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 37.32K | ±0.12% | 26.7962ms | 34.0730ms | 18.66K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 36.40K | ±0.19% | 27.4749ms | 44.0130ms | 18.20K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 35.05K | ±0.11% | 28.5324ms | 36.7090ms | 17.52K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 31.55K | ±0.10% | 31.6914ms | 39.0430ms | 15.78K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 19.66K | ±0.46% | 50.8565ms | 59.5420ms | 9.83K |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 18.58K | ±0.11% | 53.8278ms | 62.5070ms | 9.29K |

**Key Insight:** Jotai is **2.06x faster** than MobX in this category.

### Burst Updates

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 338.11K
🥈 Jotai                ██████████████████████████████████ 289.94K
🥉 Zen                  ████████████████████████████████ 267.14K
   Preact Signals       ██████████████████████████████ 249.86K
   Valtio               ██ 16.16K
   MobX                 ██ 13.27K
   Redux Toolkit        █ 3.09K
   Zustand              █ 1.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 338.11K | ±0.09% | 2.9576ms | 3.0960ms | 169.06K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 289.94K | ±0.91% | 3.4490ms | 4.0580ms | 144.97K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 267.14K | ±0.08% | 3.7433ms | 3.7770ms | 133.57K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 249.86K | ±0.30% | 4.0023ms | 6.0410ms | 124.93K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.16K | ±0.81% | 61.8715ms | 73.7490ms | 8.08K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.27K | ±0.84% | 75.3460ms | 89.9980ms | 6.64K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.09K | ±1.17% | 323.1681ms | 811.9710ms | 1.55K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.72K | ±0.87% | 581.5794ms | 1129.4550ms | 860.00 |

**Key Insight:** Solid Signals is **196.64x faster** than Zustand in this category.

### Array Splice Operations

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 3.95M
🥈 Zen                  █████████████ 1.32M
🥉 Preact Signals       ████████████ 1.21M
   Solid Signals        ████████████ 1.16M
   MobX                 ██ 164.97K
   Zustand              █ 145.62K
   Valtio               █ 105.03K
   Redux Toolkit        █ 10.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.95M | ±1.45% | 0.2531ms | 0.2710ms | 1.98M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.32M | ±0.95% | 0.7563ms | 1.2230ms | 661.13K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.21M | ±1.73% | 0.8275ms | 1.2220ms | 604.24K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 1.16M | ±15.88% | 0.8605ms | 1.2020ms | 581.03K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 164.97K | ±0.98% | 6.0616ms | 8.9060ms | 82.49K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 145.62K | ±0.94% | 6.8670ms | 11.8620ms | 72.81K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 105.03K | ±8.10% | 9.5215ms | 17.1630ms | 52.51K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.38K | ±0.82% | 96.3142ms | 197.3190ms | 5.19K |

**Key Insight:** Jotai is **380.55x faster** than Redux Toolkit in this category.

### Large Array Sort

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 31.62K
🥈 Solid Signals        ███████████████████████████████████████ 31.08K
🥉 Preact Signals       ███████████████████████████████████████ 30.45K
   Zustand              ████████████████████████████████ 25.60K
   Zen                  ████████████████████████████████ 25.25K
   Valtio               ███ 2.35K
   MobX                 ███ 2.34K
   Redux Toolkit        █ 658.74
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 31.62K | ±0.48% | 31.6300ms | 43.5710ms | 15.81K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 31.08K | ±0.60% | 32.1748ms | 42.3700ms | 15.54K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 30.45K | ±0.56% | 32.8394ms | 42.7100ms | 15.23K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 25.60K | ±0.57% | 39.0558ms | 49.9840ms | 12.80K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 25.25K | ±0.56% | 39.6114ms | 49.2020ms | 12.62K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.35K | ±0.28% | 425.1894ms | 498.8250ms | 1.18K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.34K | ±0.56% | 427.7475ms | 700.8320ms | 1.17K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 658.74 | ±0.67% | 1518.0537ms | 1992.6820ms | 330.00 |

**Key Insight:** Jotai is **47.99x faster** than Redux Toolkit in this category.

### Array Find Operations

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 680.10K
🥈 Preact Signals       ████████████████████████████████████████ 680.00K
🥉 Solid Signals        ████████████████████████████████████████ 678.41K
   Jotai                ████████████████████████████████████████ 676.78K
   Zustand              ████████████████████████████████████████ 672.16K
   Redux Toolkit        █ 22.92K
   Valtio               █ 12.01K
   MobX                 █ 8.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 680.10K | ±0.08% | 1.4704ms | 1.5230ms | 340.05K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 680.00K | ±0.09% | 1.4706ms | 1.5230ms | 340.00K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 678.41K | ±0.09% | 1.4740ms | 1.5230ms | 339.20K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 676.78K | ±0.08% | 1.4776ms | 1.5330ms | 338.39K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 672.16K | ±0.09% | 1.4877ms | 1.5530ms | 336.08K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 22.92K | ±0.11% | 43.6325ms | 51.5360ms | 11.46K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 12.01K | ±0.14% | 83.2300ms | 94.3570ms | 6.01K |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 8.18K | ±0.58% | 122.3178ms | 206.9880ms | 4.09K |

**Key Insight:** Zen is **83.19x faster** than MobX in this category.

### Deep Object Creation

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 2.16M
🥈 Zen                  ████████████████████████████████████████ 2.15M
🥉 Jotai                ████████████████████████████████████████ 2.14M
   Zustand              ████████████████████████████████████████ 2.14M
   Solid Signals        ███████████████████████████████████████ 2.13M
   Preact Signals       ███████████████████████████████████████ 2.12M
   Redux Toolkit        ███████████████████████████████████████ 2.09M
   MobX                 ███████████████████████████████ 1.66M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.16M | ±0.58% | 0.4632ms | 0.5410ms | 1.08M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.15M | ±0.44% | 0.4644ms | 0.5410ms | 1.08M |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.14M | ±0.43% | 0.4666ms | 0.5510ms | 1.07M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 2.14M | ±0.38% | 0.4671ms | 0.5310ms | 1.07M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.13M | ±0.38% | 0.4694ms | 0.5510ms | 1.07M |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.12M | ±0.44% | 0.4715ms | 0.7910ms | 1.06M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.09M | ±1.75% | 0.4777ms | 0.7810ms | 1.05M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 1.66M | ±0.10% | 0.6025ms | 0.8110ms | 829.81K |

**Key Insight:** Valtio is **1.30x faster** than MobX in this category.

### 10-Level Nested Update

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 7.17M
🥈 Valtio               ██████ 1.02M
🥉 MobX                 ███ 623.48K
   Solid Signals        ██ 443.83K
   Zen                  ██ 434.70K
   Preact Signals       ██ 432.77K
   Zustand              █ 119.03K
   Redux Toolkit        █ 48.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.17M | ±0.97% | 0.1395ms | 0.2400ms | 3.58M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.02M | ±0.50% | 0.9837ms | 1.1130ms | 508.30K |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 623.48K | ±0.48% | 1.6039ms | 1.8030ms | 311.74K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 443.83K | ±0.46% | 2.2531ms | 2.4950ms | 221.92K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 434.70K | ±0.44% | 2.3004ms | 2.4840ms | 217.35K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 432.77K | ±0.37% | 2.3107ms | 2.6450ms | 216.39K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 119.03K | ±0.53% | 8.4011ms | 14.6980ms | 59.52K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 48.29K | ±0.77% | 20.7067ms | 31.3090ms | 24.15K |

**Key Insight:** Jotai is **148.45x faster** than Redux Toolkit in this category.

### Deep Read Access

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.82M
🥈 Redux Toolkit        ████████████████████████████████████████ 9.80M
🥉 Preact Signals       ███████████████████████████████████████ 9.56M
   Zen                  ████████████████████████████████████ 8.86M
   Solid Signals        ████████████████████████████████████ 8.82M
   Zustand              ███████████████████████████████████ 8.64M
   Valtio               ██████████ 2.41M
   MobX                 ███ 711.20K
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.82M | ±0.09% | 0.1018ms | 0.1410ms | 4.91M |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.80M | ±0.09% | 0.1020ms | 0.1200ms | 4.90M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.56M | ±0.20% | 0.1046ms | 0.1300ms | 4.78M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 8.86M | ±0.17% | 0.1129ms | 0.1600ms | 4.43M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.82M | ±0.10% | 0.1134ms | 0.1300ms | 4.41M |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.64M | ±0.09% | 0.1157ms | 0.1510ms | 4.32M |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.41M | ±0.09% | 0.4153ms | 0.4310ms | 1.20M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 711.20K | ±0.45% | 1.4061ms | 1.5940ms | 355.60K |
| 9 | **Deep Read Access - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Jotai is **Infinityx faster** than Deep Read Access - Zen in this category.

### Complex Computed Chain

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.04M
🥈 Jotai                ████████████████████████████████████████ 10.03M
🥉 Zen                  ███████████████████████████████████████ 9.87M
   Solid Signals        ███████████████████████████████████████ 9.81M
   Zustand              ███████████████████████████████████████ 9.70M
   Redux Toolkit        ██████████████████████████████████████ 9.54M
   Valtio               ███████████████████████████████ 7.90M
   MobX                 ████████████████████████████ 6.93M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.04M | ±0.10% | 0.0996ms | 0.1500ms | 5.02M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.03M | ±0.15% | 0.0997ms | 0.1200ms | 5.02M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.87M | ±0.17% | 0.1013ms | 0.1200ms | 4.93M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.81M | ±0.10% | 0.1019ms | 0.1200ms | 4.91M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.70M | ±0.09% | 0.1031ms | 0.1200ms | 4.85M |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.54M | ±0.16% | 0.1048ms | 0.1210ms | 4.77M |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.90M | ±0.20% | 0.1266ms | 0.1410ms | 3.95M |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 6.93M | ±0.10% | 0.1444ms | 0.1600ms | 3.46M |

**Key Insight:** Preact Signals is **1.45x faster** than MobX in this category.

### Computed Invalidation

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.69M
🥈 Zen                  ████████████████████████████████████ 8.83M
🥉 Jotai                ████████████████████████████████████ 8.72M
   Preact Signals       ███████████████████████████████████ 8.38M
   MobX                 ███████ 1.74M
   Valtio               █████ 1.31M
   Redux Toolkit        █ 279.55K
   Zustand              █ 167.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.69M | ±0.10% | 0.1032ms | 0.1200ms | 4.85M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.83M | ±0.10% | 0.1132ms | 0.1500ms | 4.42M |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.72M | ±0.09% | 0.1146ms | 0.1400ms | 4.36M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.38M | ±0.29% | 0.1193ms | 0.1700ms | 4.19M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.74M | ±1.08% | 0.5761ms | 0.6210ms | 867.96K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.31M | ±0.85% | 0.7613ms | 0.8310ms | 656.75K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 279.55K | ±0.87% | 3.5772ms | 5.5300ms | 139.78K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.41K | ±0.73% | 5.9733ms | 6.7730ms | 83.71K |

**Key Insight:** Solid Signals is **57.89x faster** than Zustand in this category.

### Subscription Cascade

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 10.42M
🥈 Zustand              ████████████████████████████████████████ 10.33M
🥉 Zen                  ███████████████████████████████████████ 10.05M
   Preact Signals       ██████████████████████████████████████ 10.02M
   Solid Signals        ██████████████████████████████████████ 9.79M
   MobX                 ████████████████████████████████████ 9.35M
   Jotai                ███████████████████████████████████ 9.05M
   Redux Toolkit        ██████ 1.50M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 10.42M | ±0.10% | 0.0960ms | 0.1200ms | 5.21M |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.33M | ±0.10% | 0.0968ms | 0.1200ms | 5.16M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.05M | ±0.09% | 0.0995ms | 0.1110ms | 5.03M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.02M | ±0.10% | 0.0998ms | 0.1510ms | 5.01M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.79M | ±0.21% | 0.1021ms | 0.1200ms | 4.90M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 9.35M | ±0.10% | 0.1069ms | 0.1300ms | 4.68M |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.05M | ±0.60% | 0.1106ms | 0.1700ms | 4.52M |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.50M | ±11.15% | 0.6645ms | 1.1320ms | 752.45K |

**Key Insight:** Valtio is **6.92x faster** than Redux Toolkit in this category.

### Reaction Performance

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.62M
🥈 Zen                  ████████████████████████████████████ 8.71M
🥉 Jotai                ████████████████████████████████████ 8.63M
   Preact Signals       ███████████████████████████████████ 8.51M
   MobX                 ███████ 1.74M
   Valtio               ██████ 1.34M
   Zustand              █ 165.14K
   Redux Toolkit        █ 89.56
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.62M | ±0.09% | 0.1040ms | 0.1200ms | 4.81M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.71M | ±1.19% | 0.1148ms | 0.1900ms | 4.36M |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.63M | ±0.64% | 0.1159ms | 0.1710ms | 4.31M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.51M | ±0.18% | 0.1175ms | 0.1400ms | 4.26M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.74M | ±0.79% | 0.5736ms | 0.6110ms | 871.73K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.34M | ±0.48% | 0.7461ms | 0.7910ms | 670.12K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 165.14K | ±1.13% | 6.0554ms | 7.5040ms | 82.57K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 89.56 | ±0.53% | 11165.1966ms | 11789.7320ms | 45.00 |

**Key Insight:** Solid Signals is **107388.14x faster** than Redux Toolkit in this category.

### Multi-Store Operations

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.65M
🥈 Jotai                ███████████████████████████████████████ 9.31M
🥉 Zen                  ██████████████████████████████████████ 9.08M
   Preact Signals       ████████████████████████████████████ 8.60M
   MobX                 ███████ 1.77M
   Valtio               ██████ 1.35M
   Zustand              █ 167.35K
   Redux Toolkit        █ 90.81
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.65M | ±1.19% | 0.1036ms | 0.1500ms | 4.83M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.31M | ±0.09% | 0.1074ms | 0.1400ms | 4.66M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 9.08M | ±0.09% | 0.1101ms | 0.1400ms | 4.54M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.60M | ±0.10% | 0.1163ms | 0.1500ms | 4.30M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.77M | ±0.93% | 0.5662ms | 0.6010ms | 883.08K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.35M | ±0.70% | 0.7427ms | 0.7920ms | 673.22K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 167.35K | ±0.93% | 5.9756ms | 7.8550ms | 83.67K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 90.81 | ±2.18% | 11012.4891ms | 16068.3650ms | 46.00 |

**Key Insight:** Solid Signals is **106310.68x faster** than Redux Toolkit in this category.

### Memory Allocation

**Performance Comparison:**

```
🥇 Large State Alloc... ████████████████████████████████████████ 323.47
🥈 Large State Alloc... ████████████████████████████████████████ 320.99
🥉 Large State Alloc... ███████████████████████████████████████ 315.37
   Preact Signals       █████████████████████████████████████ 302.09
   Redux Toolkit        ███████████████████████████████████ 279.47
   MobX                 ██████████████████████████████████ 272.16
   Large State Alloc... ████████████████████ 161.57
   Large State Alloc... ███████████████████ 155.73
   Jotai                ███████████████████ 154.10
   Large State Alloc... ███████████████████ 153.59
   Large State Alloc... ███████████████████ 152.16
   Large State Alloc... ███████████████████ 150.44
   Solid Signals        ██████████████████ 149.28
   Zustand              ███████████████ 119.76
   Valtio               █████████ 72.11
   Zen                  ███████ 58.86
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Large State Allocation - Redux Toolkit** | 323.47 | ±0.65% | 3091.4587ms | 3509.0740ms | 162.00 |
| 🥈 | **Large State Allocation - MobX** | 320.99 | ±0.30% | 3115.4018ms | 3304.5720ms | 161.00 |
| 🥉 | **Large State Allocation - Solid Signals** | 315.37 | ±2.77% | 3170.8998ms | 3497.5060ms | 158.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 302.09 | ±0.41% | 3310.2897ms | 3708.5650ms | 152.00 |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 279.47 | ±0.32% | 3578.1850ms | 3761.1140ms | 140.00 |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 272.16 | ±0.48% | 3674.2588ms | 4081.0030ms | 137.00 |
| 7 | **Large State Allocation - Zustand** | 161.57 | ±14.45% | 6189.3377ms | 27519.0740ms | 81.00 |
| 8 | **Large State Allocation - Zen** | 155.73 | ±13.65% | 6421.2706ms | 17667.3070ms | 78.00 |
| 9 | **[Jotai](https://github.com/pmndrs/jotai)** | 154.10 | ±11.81% | 6489.2117ms | 11142.8680ms | 78.00 |
| 10 | **Large State Allocation - Preact Signals** | 153.59 | ±13.58% | 6510.7770ms | 17480.7610ms | 78.00 |
| 11 | **Large State Allocation - Valtio** | 152.16 | ±13.07% | 6571.8316ms | 17379.8790ms | 77.00 |
| 12 | **Large State Allocation - Jotai** | 150.44 | ±13.58% | 6646.9534ms | 17248.0870ms | 76.00 |
| 13 | **[Solid Signals](https://github.com/solidjs/solid)** | 149.28 | ±12.38% | 6698.8555ms | 11057.0470ms | 75.00 |
| 14 | **[Zustand](https://github.com/pmndrs/zustand)** | 119.76 | ±26.27% | 8349.7068ms | 47751.8280ms | 60.00 |
| 15 | **[Valtio](https://github.com/pmndrs/valtio)** | 72.11 | ±43.55% | 13867.3710ms | 116918.7840ms | 42.00 |
| 16 | **[Zen](https://github.com/sylphxltd/zen)** | 58.86 | ±47.34% | 16990.5864ms | 115643.8400ms | 31.00 |

**Key Insight:** Large State Allocation - Redux Toolkit is **5.50x faster** than Zen in this category.

### Form State Management

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.41M
🥈 Valtio               ██████████████████████████████ 3.26M
🥉 MobX                 █████████████████████████ 2.71M
   Zustand              █████████ 986.19K
   Preact Signals       ███ 298.84K
   Solid Signals        ███ 296.83K
   Zen                  ███ 292.16K
   Redux Toolkit        █ 91.24
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.41M | ±0.10% | 0.2270ms | 0.2610ms | 2.20M |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.26M | ±0.09% | 0.3066ms | 0.3310ms | 1.63M |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 2.71M | ±0.10% | 0.3697ms | 0.4100ms | 1.35M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 986.19K | ±0.34% | 1.0140ms | 1.3430ms | 493.09K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 298.84K | ±0.87% | 3.3462ms | 3.9570ms | 149.42K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 296.83K | ±1.30% | 3.3689ms | 3.8870ms | 148.42K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 292.16K | ±1.49% | 3.4227ms | 5.0000ms | 146.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 91.24 | ±0.39% | 10959.7810ms | 11682.4090ms | 46.00 |

**Key Insight:** Jotai is **48279.61x faster** than Redux Toolkit in this category.

### Optimistic Update

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 8.82K
🥈 Zen                  ████████████████████████████████████████ 8.75K
🥉 Preact Signals       ██████████████████████████████████████ 8.30K
   Jotai                █████████████████████████████████████ 8.20K
   Solid Signals        ████████████████████████████████████ 7.96K
   MobX                 ███████████ 2.34K
   Valtio               ███ 577.75
   Redux Toolkit        █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.82K | ±8.46% | 113.3324ms | 216.2050ms | 4.41K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 8.75K | ±9.07% | 114.3062ms | 200.0140ms | 4.38K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.30K | ±8.96% | 120.5110ms | 206.4460ms | 4.15K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 8.20K | ±8.63% | 121.8793ms | 188.9040ms | 4.10K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.96K | ±9.25% | 125.5550ms | 209.8330ms | 3.98K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 2.34K | ±1.67% | 426.9676ms | 1153.3500ms | 1.17K |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 577.75 | ±5.90% | 1730.8398ms | 5476.3100ms | 289.00 |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Zustand is **Infinityx faster** than Redux Toolkit in this category.

### Undo/Redo Operations

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.23M
🥈 Zen                  ████████████████████████████████████████ 10.12M
🥉 Jotai                ███████████████████████████████████████ 10.00M
   Zustand              ██████████████████████████████████████ 9.81M
   Solid Signals        ██████████████████████████████████████ 9.64M
   Valtio               █████████████████████████ 6.37M
   MobX                 ██████████ 2.65M
   Redux Toolkit        █ 91.71
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.23M | ±0.09% | 0.0978ms | 0.1200ms | 5.11M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.12M | ±0.09% | 0.0988ms | 0.1200ms | 5.06M |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.00M | ±0.09% | 0.1000ms | 0.1300ms | 5.00M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.81M | ±0.31% | 0.1019ms | 0.1200ms | 4.90M |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.64M | ±0.23% | 0.1037ms | 0.1210ms | 4.82M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.37M | ±0.09% | 0.1569ms | 0.1710ms | 3.19M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 2.65M | ±0.78% | 0.3774ms | 0.4010ms | 1.32M |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 91.71 | ±0.30% | 10904.0503ms | 11206.6010ms | 46.00 |

**Key Insight:** Preact Signals is **111496.73x faster** than Redux Toolkit in this category.

### Batch State Operations

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 6.54M
🥈 Solid Signals        ███████████████████████████████ 5.01M
🥉 Zen                  █████████████████████████ 4.15M
   Jotai                █ 9.27K
   Zustand              █ 5.60K
   MobX                 █ 1.29K
   Valtio               █ 490.75
   Redux Toolkit        █ 28.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.54M | ±0.49% | 0.1529ms | 0.2500ms | 3.27M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.01M | ±0.10% | 0.1996ms | 0.2910ms | 2.51M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.15M | ±0.10% | 0.2407ms | 0.3310ms | 2.08M |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.27K | ±19.68% | 107.8925ms | 5383.8010ms | 4.68K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.60K | ±25.17% | 178.6420ms | 5850.3350ms | 2.85K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.29K | ±6.09% | 775.3771ms | 4502.1560ms | 645.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 490.75 | ±7.29% | 2037.7125ms | 6733.3380ms | 246.00 |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 28.43 | ±0.84% | 35179.1379ms | 36731.2800ms | 15.00 |

**Key Insight:** Preact Signals is **230061.78x faster** than Redux Toolkit in this category.

### Null Value Handling

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 9.74M
🥈 Solid Signals        ██████████████████████████████████████ 9.17M
🥉 Preact Signals       ████████████████████████████████████ 8.74M
   Zen                  ████████████████████████████████████ 8.74M
   Valtio               ██████████████████ 4.40M
   MobX                 ███████ 1.68M
   Zustand              █ 138.52K
   Redux Toolkit        █ 88.21
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.74M | ±0.23% | 0.1026ms | 0.1400ms | 4.87M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.17M | ±0.09% | 0.1090ms | 0.1310ms | 4.59M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.74M | ±0.10% | 0.1144ms | 0.1410ms | 4.37M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 8.74M | ±0.89% | 0.1145ms | 0.1400ms | 4.37M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.40M | ±0.94% | 0.2274ms | 0.2510ms | 2.20M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.68M | ±3.19% | 0.5956ms | 0.7520ms | 839.52K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 138.52K | ±4.38% | 7.2192ms | 10.2990ms | 69.26K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 88.21 | ±0.71% | 11337.1674ms | 12663.6720ms | 45.00 |

**Key Insight:** Jotai is **110444.92x faster** than Redux Toolkit in this category.

### Undefined Value Handling

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 10.12M
🥈 Solid Signals        █████████████████████████████████████ 9.36M
🥉 Zen                  ███████████████████████████████████ 8.93M
   Preact Signals       ███████████████████████████████████ 8.82M
   Valtio               █████████████████ 4.39M
   MobX                 ██████ 1.63M
   Zustand              █ 136.43K
   Redux Toolkit        █ 89.23
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.12M | ±0.74% | 0.0988ms | 0.1200ms | 5.06M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.36M | ±0.08% | 0.1068ms | 0.1300ms | 4.68M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.93M | ±0.09% | 0.1120ms | 0.1400ms | 4.46M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.82M | ±0.09% | 0.1133ms | 0.1400ms | 4.41M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.39M | ±0.09% | 0.2276ms | 0.2510ms | 2.20M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 1.63M | ±4.01% | 0.6139ms | 0.7010ms | 814.47K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 136.43K | ±4.41% | 7.3297ms | 10.8300ms | 68.22K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 89.23 | ±1.81% | 11207.4128ms | 15479.5580ms | 45.00 |

**Key Insight:** Jotai is **113429.48x faster** than Redux Toolkit in this category.

### Async State Loading

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 927.38
🥈 Async Loading - P... ████████████████████████████████████████ 924.92
🥉 Zen                  ████████████████████████████████████████ 923.23
   Preact Signals       ████████████████████████████████████████ 919.52
   Async Loading - Zen  ████████████████████████████████████████ 918.94
   Valtio               ████████████████████████████████████████ 918.89
   Jotai                ████████████████████████████████████████ 918.72
   Zustand              ████████████████████████████████████████ 916.26
   Redux Toolkit        ████████████████████████████████████████ 916.08
   Async Loading - V... ███████████████████████████████████████ 914.53
   Async Loading - R... ███████████████████████████████████████ 909.64
   Async Loading - S... ███████████████████████████████████████ 908.92
   MobX                 ███████████████████████████████████████ 905.76
   Async Loading - Z... ███████████████████████████████████████ 901.90
   Async Loading - J... ███████████████████████████████████████ 900.93
   Async Loading - MobX ███████████████████████████████████████ 894.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 927.38 | ±0.93% | 1078.3076ms | 2128.9870ms | 464.00 |
| 🥈 | **Async Loading - Preact Signals** | 924.92 | ±1.02% | 1081.1797ms | 2128.4860ms | 463.00 |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 923.23 | ±1.10% | 1083.1558ms | 2129.7080ms | 462.00 |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 919.52 | ±1.18% | 1087.5184ms | 2129.7380ms | 460.00 |
| 5 | **Async Loading - Zen** | 918.94 | ±1.24% | 1088.2124ms | 2129.2560ms | 460.00 |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 918.89 | ±1.17% | 1088.2675ms | 2131.6510ms | 460.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 918.72 | ±1.18% | 1088.4659ms | 2131.4200ms | 460.00 |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 916.26 | ±1.10% | 1091.3952ms | 2135.0480ms | 459.00 |
| 9 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 916.08 | ±1.10% | 1091.6032ms | 2137.5930ms | 459.00 |
| 10 | **Async Loading - Valtio** | 914.53 | ±1.43% | 1093.4547ms | 2135.6390ms | 458.00 |
| 11 | **Async Loading - Redux Toolkit** | 909.64 | ±1.38% | 1099.3405ms | 2141.3600ms | 455.00 |
| 12 | **Async Loading - Solid Signals** | 908.92 | ±1.54% | 1100.2089ms | 2136.0100ms | 455.00 |
| 13 | **[MobX](https://github.com/mobxjs/mobx)** | 905.76 | ±1.62% | 1104.0450ms | 2149.7530ms | 453.00 |
| 14 | **Async Loading - Zustand** | 901.90 | ±1.50% | 1108.7764ms | 2163.3780ms | 451.00 |
| 15 | **Async Loading - Jotai** | 900.93 | ±1.65% | 1109.9661ms | 2182.5870ms | 451.00 |
| 16 | **Async Loading - MobX** | 894.84 | ±1.79% | 1117.5216ms | 2151.8010ms | 448.00 |

**Key Insight:** Solid Signals is **1.04x faster** than Async Loading - MobX in this category.

### Concurrent Async Operations

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 926.09
🥈 Solid Signals        ████████████████████████████████████████ 922.42
🥉 Valtio               ████████████████████████████████████████ 918.35
   Concurrent Async ... ████████████████████████████████████████ 918.28
   MobX                 ███████████████████████████████████████ 914.20
   Concurrent Async ... ███████████████████████████████████████ 914.00
   Jotai                ███████████████████████████████████████ 912.76
   Preact Signals       ███████████████████████████████████████ 906.94
   Zustand              ███████████████████████████████████████ 905.52
   Concurrent Async ... ███████████████████████████████████████ 905.24
   Concurrent Async ... ███████████████████████████████████████ 904.46
   Concurrent Async ... ███████████████████████████████████████ 903.67
   Concurrent Async ... ███████████████████████████████████████ 903.04
   Concurrent Async ... ███████████████████████████████████████ 902.35
   Redux Toolkit        ███████████████████████████████████████ 900.23
   Concurrent Async ... ███████████████████████████████████████ 897.10
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 926.09 | ±0.84% | 1079.8106ms | 1120.1280ms | 464.00 |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 922.42 | ±1.02% | 1084.1083ms | 2132.6930ms | 462.00 |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 918.35 | ±1.18% | 1088.9112ms | 2131.2410ms | 460.00 |
| 4 | **Concurrent Async - Zen** | 918.28 | ±1.11% | 1088.9894ms | 2135.1050ms | 460.00 |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 914.20 | ±1.43% | 1093.8495ms | 2136.5210ms | 458.00 |
| 6 | **Concurrent Async - Valtio** | 914.00 | ±1.33% | 1094.0921ms | 2141.1660ms | 457.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 912.76 | ±1.32% | 1095.5777ms | 2141.0860ms | 457.00 |
| 8 | **[Preact Signals](https://github.com/preactjs/signals)** | 906.94 | ±1.49% | 1102.6125ms | 2135.2990ms | 454.00 |
| 9 | **[Zustand](https://github.com/pmndrs/zustand)** | 905.52 | ±1.44% | 1104.3399ms | 2141.8500ms | 453.00 |
| 10 | **Concurrent Async - Jotai** | 905.24 | ±1.53% | 1104.6793ms | 2137.4420ms | 453.00 |
| 11 | **Concurrent Async - Redux Toolkit** | 904.46 | ±1.40% | 1105.6341ms | 2184.6910ms | 454.00 |
| 12 | **Concurrent Async - MobX** | 903.67 | ±1.48% | 1106.6036ms | 2181.9090ms | 452.00 |
| 13 | **Concurrent Async - Zustand** | 903.04 | ±1.44% | 1107.3648ms | 2159.3960ms | 452.00 |
| 14 | **Concurrent Async - Solid Signals** | 902.35 | ±1.56% | 1108.2117ms | 2140.8450ms | 452.00 |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 900.23 | ±1.61% | 1110.8213ms | 2154.5040ms | 451.00 |
| 16 | **Concurrent Async - Preact Signals** | 897.10 | ±1.75% | 1114.7024ms | 2141.9670ms | 449.00 |

**Key Insight:** Zen is **1.03x faster** than Concurrent Async - Preact Signals in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.24M
🥈 Solid Signals        ████████████████████████████████████████ 10.23M
🥉 Redux Toolkit        ███████████████████████████████████████ 10.10M
   Zen                  ███████████████████████████████████████ 9.87M
   Zustand              ██████████████████████████████████████ 9.65M
   Valtio               █████████████████████████ 6.46M
   MobX                 █████████████ 3.33M
   Jotai                ████ 960.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.24M | ±0.23% | 0.0976ms | 0.1310ms | 5.12M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.23M | ±0.10% | 0.0978ms | 0.1210ms | 5.11M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.10M | ±0.10% | 0.0990ms | 0.1200ms | 5.05M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 9.87M | ±0.24% | 0.1013ms | 0.1200ms | 4.94M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.65M | ±0.21% | 0.1036ms | 0.1210ms | 4.83M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.46M | ±0.10% | 0.1547ms | 0.1710ms | 3.23M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.33M | ±0.75% | 0.3005ms | 0.3310ms | 1.66M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 960.82K | ±0.44% | 1.0408ms | 1.2720ms | 480.41K |

**Key Insight:** Preact Signals is **10.66x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.72M
🥈 Preact Signals       ███████████████████████████████████████ 8.53M
🥉 Zen                  ██████████████████████████████████████ 8.25M
   MobX                 ████████ 1.76M
   Valtio               ██████ 1.35M
   Jotai                ███ 656.07K
   Redux Toolkit        █ 197.43K
   Zustand              █ 160.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.72M | ±0.10% | 0.1147ms | 0.2110ms | 4.36M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.53M | ±0.10% | 0.1173ms | 0.2110ms | 4.26M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 8.25M | ±0.09% | 0.1213ms | 0.2200ms | 4.12M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.76M | ±1.34% | 0.5693ms | 0.7910ms | 878.30K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.35M | ±0.45% | 0.7414ms | 0.8410ms | 674.44K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 656.07K | ±1.80% | 1.5242ms | 3.2260ms | 328.04K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 197.43K | ±1.40% | 5.0651ms | 8.8370ms | 98.71K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 160.72K | ±0.80% | 6.2220ms | 7.1230ms | 80.36K |

**Key Insight:** Solid Signals is **54.25x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 140.95K
🥈 Valtio               ████████████████████████████████████ 128.60K
🥉 Zustand              ████ 12.37K
   Jotai                ███ 9.50K
   Solid Signals        ██ 8.09K
   Preact Signals       ██ 7.86K
   Zen                  ██ 7.79K
   Redux Toolkit        █ 4.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 140.95K | ±7.49% | 7.0946ms | 10.1290ms | 70.48K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 128.60K | ±13.53% | 7.7759ms | 13.4850ms | 64.30K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12.37K | ±7.31% | 80.8133ms | 210.8040ms | 6.21K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.50K | ±7.49% | 105.2680ms | 213.7500ms | 4.75K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.09K | ±9.09% | 123.5875ms | 213.8910ms | 4.08K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 7.86K | ±8.88% | 127.1672ms | 217.0870ms | 3.93K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 7.79K | ±9.07% | 128.3899ms | 230.2710ms | 3.90K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.68K | ±1.34% | 213.5455ms | 323.5960ms | 2.34K |

**Key Insight:** MobX is **30.10x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.09M
🥈 Preact Signals       ███████████████████████████████████████ 8.94M
🥉 Zen                  ████████████████████████ 5.47M
   Valtio               ██████████ 2.36M
   MobX                 █████████ 2.07M
   Jotai                ███ 767.29K
   Redux Toolkit        █ 337.93K
   Zustand              █ 173.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.09M | ±0.09% | 0.1100ms | 0.2110ms | 4.54M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.94M | ±0.10% | 0.1118ms | 0.2200ms | 4.47M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.47M | ±0.09% | 0.1827ms | 0.2900ms | 2.74M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.36M | ±1.14% | 0.4235ms | 0.6910ms | 1.18M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.07M | ±0.89% | 0.4826ms | 0.6310ms | 1.04M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 767.29K | ±1.14% | 1.3033ms | 3.1060ms | 383.64K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 337.93K | ±1.41% | 2.9592ms | 3.9570ms | 168.97K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 173.08K | ±0.69% | 5.7777ms | 6.3610ms | 86.54K |

**Key Insight:** Solid Signals is **52.51x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.10M
🥈 Zen                  ████████████ 1.20M
🥉 Preact Signals       ███████ 670.75K
   Zustand              █ 103.88K
   Redux Toolkit        █ 88.64K
   Jotai                █ 49.73K
   MobX                 █ 36.46K
   Valtio               █ 14.87
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.10M | ±3.01% | 0.2441ms | 0.3010ms | 2.05M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.20M | ±1.88% | 0.8351ms | 1.1220ms | 598.73K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 670.75K | ±2.04% | 1.4909ms | 1.8440ms | 335.37K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 103.88K | ±9.03% | 9.6266ms | 18.6350ms | 51.94K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 88.64K | ±10.79% | 11.2812ms | 20.2880ms | 44.32K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 49.73K | ±6.29% | 20.1102ms | 42.9610ms | 25.00K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 36.46K | ±14.29% | 27.4263ms | 126.9570ms | 18.23K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 14.87 | ±4.12% | 67234.4231ms | 73257.5490ms | 10.00 |

**Key Insight:** Solid Signals is **275387.07x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.04M
🥈 Preact Signals       █████████████████████████████████ 6.57M
🥉 Zen                  ████████████████████ 4.05M
   Valtio               ████ 832.55K
   MobX                 ████ 713.70K
   Redux Toolkit        █ 173.27K
   Jotai                █ 160.64K
   Zustand              █ 149.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.04M | ±0.09% | 0.1243ms | 0.2300ms | 4.02M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.57M | ±0.09% | 0.1522ms | 0.2510ms | 3.28M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.05M | ±0.41% | 0.2470ms | 0.3510ms | 2.02M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 832.55K | ±0.72% | 1.2011ms | 1.3420ms | 416.27K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 713.70K | ±1.49% | 1.4012ms | 1.7640ms | 356.85K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 173.27K | ±2.38% | 5.7714ms | 7.3740ms | 86.64K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 160.64K | ±7.97% | 6.2251ms | 24.8760ms | 80.32K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 149.43K | ±3.28% | 6.6922ms | 8.1560ms | 74.72K |

**Key Insight:** Solid Signals is **53.83x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.95K
🥈 Solid Signals        ████████████████████████████████████ 9.75K
🥉 Preact Signals       ██████████████████████████████████ 9.36K
   Zustand              ██████████████████████████████████ 9.26K
   Jotai                ████████████████ 4.42K
   Redux Toolkit        █ 161.05
   MobX                 █ 40.23
   Valtio               █ 6.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.95K | ±1.91% | 91.3622ms | 407.1020ms | 5.47K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.75K | ±2.26% | 102.5548ms | 465.6210ms | 4.88K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.36K | ±2.83% | 106.8337ms | 523.5090ms | 4.68K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.26K | ±2.35% | 107.9690ms | 483.0250ms | 4.63K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.42K | ±1.83% | 226.2651ms | 740.8360ms | 2.21K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 161.05 | ±2.08% | 6209.0750ms | 8303.0880ms | 81.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 40.23 | ±3.37% | 24855.5934ms | 29223.5650ms | 21.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.84 | ±5.48% | 146236.2864ms | 169189.9310ms | 10.00 |

**Key Insight:** Zen is **1600.62x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 34.08K
🥈 Jotai                ███████████████████████████████████████ 33.23K
🥉 Solid Signals        █████████████████████████ 20.99K
   Preact Signals       █████████████████████████ 20.97K
   Zustand              ████████████████████████ 20.09K
   Redux Toolkit        █ 404.81
   Valtio               █ 95.79
   MobX                 █ 65.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 34.08K | ±0.81% | 29.3447ms | 120.4650ms | 17.04K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 33.23K | ±0.83% | 30.0892ms | 121.2170ms | 16.62K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 20.99K | ±3.15% | 47.6332ms | 141.9250ms | 10.50K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 20.97K | ±3.03% | 47.6805ms | 141.8450ms | 10.49K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 20.09K | ±2.28% | 49.7864ms | 143.9700ms | 10.04K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 404.81 | ±1.65% | 2470.2942ms | 3528.6720ms | 203.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 95.79 | ±4.54% | 10439.6973ms | 16024.0190ms | 49.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 65.43 | ±2.93% | 15283.2240ms | 22178.5710ms | 33.00 |

**Key Insight:** Zen is **520.82x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.92K
🥈 Solid Signals        █████████████ 11.19K
🥉 Preact Signals       █████████████ 10.70K
   Zustand              ████████████ 10.36K
   Jotai                ███████ 5.97K
   Redux Toolkit        █ 404.54
   Valtio               █ 83.25
   MobX                 █ 62.49
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.92K | ±0.71% | 29.4778ms | 120.1450ms | 16.96K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 11.19K | ±2.32% | 89.3902ms | 289.6320ms | 5.59K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.70K | ±2.56% | 93.4856ms | 171.5920ms | 5.35K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.36K | ±2.27% | 96.4901ms | 177.2420ms | 5.18K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.97K | ±2.00% | 167.4385ms | 210.9650ms | 2.99K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 404.54 | ±1.92% | 2471.9450ms | 3634.2790ms | 203.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 83.25 | ±3.98% | 12012.2818ms | 15549.4400ms | 42.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 62.49 | ±3.15% | 16002.4893ms | 23085.8010ms | 32.00 |

**Key Insight:** Zen is **542.87x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.21M
🥈 Preact Signals       ███████████████████████████████████ 6.40M
🥉 Zen                  █████████████████████████████████ 5.96M
   Valtio               ██████ 1.12M
   MobX                 █████ 946.68K
   Jotai                ████ 652.97K
   Zustand              █ 164.15K
   Redux Toolkit        █ 75.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.21M | ±2.40% | 0.1386ms | 0.2210ms | 3.61M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.40M | ±3.16% | 0.1563ms | 0.2310ms | 3.20M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.96M | ±2.87% | 0.1677ms | 0.2510ms | 2.98M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.12M | ±1.60% | 0.8963ms | 0.9820ms | 557.86K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 946.68K | ±1.59% | 1.0563ms | 1.2230ms | 473.34K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 652.97K | ±0.76% | 1.5315ms | 3.2770ms | 326.49K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 164.15K | ±1.79% | 6.0920ms | 7.2740ms | 82.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 75.10K | ±2.11% | 13.3164ms | 23.2240ms | 37.55K |

**Key Insight:** Solid Signals is **96.07x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 112.87K
🥈 Preact Signals       ███████████████████████████████████ 97.71K
🥉 Jotai                ████████████████████████████████ 89.89K
   Zen                  ██████████████████████████████ 85.85K
   Zustand              ███████████████████████ 65.21K
   Valtio               ████████ 22.75K
   MobX                 ██████ 15.81K
   Redux Toolkit        █ 1.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 112.87K | ±1.66% | 8.8594ms | 15.2590ms | 56.44K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 97.71K | ±2.22% | 10.2347ms | 19.6570ms | 48.85K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 89.89K | ±1.75% | 11.1251ms | 20.3380ms | 44.94K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 85.85K | ±1.91% | 11.6488ms | 21.1490ms | 42.92K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 65.21K | ±1.89% | 15.3355ms | 25.4080ms | 32.60K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.75K | ±1.04% | 43.9627ms | 88.8960ms | 11.37K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 15.81K | ±1.79% | 63.2557ms | 133.9010ms | 7.91K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.19K | ±4.35% | 839.3986ms | 2390.3140ms | 597.00 |

**Key Insight:** Solid Signals is **94.75x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.16M
🥈 Jotai                ████████████████████████ 681.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.16M | ±2.77% | 0.8657ms | 1.1120ms | 577.60K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 681.59K | ±1.92% | 1.4672ms | 2.6850ms | 340.80K |

### Deep Nested Updates

**Performance Comparison:**

```
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **10-Level Nested Update - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** 10-Level Nested Update - Redux Toolkit is **NaNx faster** than 10-Level Nested Update - Zen in this category.

### Read Operations - x1

**Performance Comparison:**

```
🥇 Simple Read - Red...  0.00
🥇 Simple Read - Zus...  0.00
🥇 Simple Read - Jotai   0.00
🥇 Simple Read - MobX    0.00
🥇 Simple Read - Valtio  0.00
🥇 Simple Read - Pre...  0.00
🥇 Simple Read - Sol...  0.00
🥇 Simple Read - Zen     0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
🥇 High Frequency Re...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Simple Read - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Simple Read - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **High Frequency Read - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Simple Read - Redux Toolkit is **NaNx faster** than High Frequency Read - Zen in this category.

### Write Operations - x1

**Performance Comparison:**

```
🥇 Simple Increment ... ████████████████████████████████████████ 13.01M
🥈 Simple Increment ... ██████████████████████████████████████ 12.33M
🥉 Simple Increment ... █████████████████████████████████ 10.84M
   Simple Increment ... █████████████████████████████████ 10.72M
   Burst Updates - S... ████████████████████████████████ 10.54M
   Burst Updates - J... ██████████████████ 5.92M
   Burst Updates - Zen  ███████████████ 4.97M
   Burst Updates - P... ██████████████ 4.49M
   Simple Increment ... ████ 1.38M
   Simple Increment ... ████ 1.16M
   Simple Increment ... █ 310.93K
   Simple Increment ... █ 170.42K
   Burst Updates - V... █ 168.36K
   Burst Updates - MobX █ 141.39K
   Burst Updates - R... █ 33.10K
   Burst Updates - Z... █ 17.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Simple Increment - Solid Signals** | 13.01M | ±0.09% | 0.0768ms | 0.0910ms | 6.51M |
| 🥈 | **Simple Increment - Jotai** | 12.33M | ±0.17% | 0.0811ms | 0.1010ms | 6.16M |
| 🥉 | **Simple Increment - Preact Signals** | 10.84M | ±0.23% | 0.0922ms | 0.1100ms | 5.42M |
| 4 | **Simple Increment - Zen** | 10.72M | ±0.09% | 0.0933ms | 0.1100ms | 5.36M |
| 5 | **Burst Updates - Solid Signals** | 10.54M | ±0.10% | 0.0949ms | 0.1010ms | 5.27M |
| 6 | **Burst Updates - Jotai** | 5.92M | ±0.93% | 0.1689ms | 0.2300ms | 2.96M |
| 7 | **Burst Updates - Zen** | 4.97M | ±0.26% | 0.2011ms | 0.2210ms | 2.49M |
| 8 | **Burst Updates - Preact Signals** | 4.49M | ±0.09% | 0.2226ms | 0.2310ms | 2.25M |
| 9 | **Simple Increment - Valtio** | 1.38M | ±0.69% | 0.7270ms | 0.7820ms | 687.78K |
| 10 | **Simple Increment - MobX** | 1.16M | ±0.72% | 0.8634ms | 1.0530ms | 579.12K |
| 11 | **Simple Increment - Redux Toolkit** | 310.93K | ±0.42% | 3.2161ms | 5.5900ms | 155.47K |
| 12 | **Simple Increment - Zustand** | 170.42K | ±0.29% | 5.8680ms | 6.4920ms | 85.21K |
| 13 | **Burst Updates - Valtio** | 168.36K | ±0.81% | 5.9398ms | 6.9030ms | 84.18K |
| 14 | **Burst Updates - MobX** | 141.39K | ±0.86% | 7.0728ms | 10.2890ms | 70.69K |
| 15 | **Burst Updates - Redux Toolkit** | 33.10K | ±0.56% | 30.2136ms | 41.3780ms | 16.55K |
| 16 | **Burst Updates - Zustand** | 17.62K | ±0.46% | 56.7459ms | 67.1860ms | 8.81K |

**Key Insight:** Simple Increment - Solid Signals is **738.54x faster** than Burst Updates - Zustand in this category.

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

*Last generated: 2025-11-09T18:49:22.234Z*
