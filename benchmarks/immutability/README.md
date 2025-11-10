# Immutability Benchmark 🔄

Comprehensive performance testing of JavaScript immutability libraries and patterns.

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
- **Last Run:** 11:03:54 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 10, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 78.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.5/100 | 44.5% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.2% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.5% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items)
- [Set - Large (100 items)](#set-large-100-items)
- [Undo/Redo - Inverse Patches](#undoredo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large Array Update (1000 items)](#large-array-update-1000-items)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes)

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.10K
🥈 Immer                █████████████████████ 115.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.10K | ±1.83% | 4.6062ms | 9.0670ms | 108.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.05K | ±1.47% | 8.6917ms | 18.5840ms | 57.53K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.01M
🥈 Immer                █████ 131.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.01M | ±0.15% | 0.9901ms | 1.3720ms | 505.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.02K | ±1.41% | 7.6324ms | 15.6990ms | 65.51K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.35K
🥈 Immer                ██████████████ 60.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.35K | ±1.50% | 5.6706ms | 11.3610ms | 88.17K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.80K | ±1.42% | 16.4472ms | 32.1510ms | 30.40K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 752.92K
🥈 Mutative             ██████████████████████████ 480.39K
🥉 Immer                █████████ 177.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 752.92K | ±1.63% | 1.3282ms | 2.9160ms | 376.46K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 480.39K | ±0.64% | 2.0816ms | 3.3370ms | 240.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.66K | ±0.75% | 5.6287ms | 11.5720ms | 88.83K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 427.55K
🥉 Immer                █████ 159.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.28M | ±0.39% | 0.7828ms | 1.0720ms | 638.71K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.55K | ±0.38% | 2.3389ms | 2.6760ms | 213.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.01K | ±0.53% | 6.2888ms | 12.6140ms | 79.51K |

**Key Insight:** Craft is **8.03x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 880.78K
🥈 Mutative             █████████████████████ 457.20K
🥉 Immer                ████████ 168.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 880.78K | ±0.37% | 1.1354ms | 1.4730ms | 440.39K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.20K | ±0.37% | 2.1872ms | 2.5150ms | 228.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.79K | ±0.29% | 5.9247ms | 7.2640ms | 84.39K |

**Key Insight:** Craft is **5.22x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 856.71K
🥈 Mutative             █████████████████████ 447.72K
🥉 Immer                ████████ 181.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 856.71K | ±0.40% | 1.1673ms | 1.4630ms | 428.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 447.72K | ±0.40% | 2.2335ms | 2.5750ms | 223.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.33K | ±0.29% | 5.5148ms | 6.4320ms | 90.67K |

**Key Insight:** Craft is **4.72x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.63K
🥈 Mutative             ████████████████████████████████ 148.82K
🥉 Immer                █████████████████ 79.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.63K | ±0.46% | 5.4459ms | 7.1840ms | 91.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.82K | ±0.46% | 6.7194ms | 12.8940ms | 74.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.15K | ±0.62% | 12.6339ms | 25.0870ms | 39.58K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 231.63K
🥈 Mutative             █████████████ 77.21K
🥉 Immer                ██ 12.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 231.63K | ±0.41% | 4.3173ms | 4.9890ms | 115.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.21K | ±0.42% | 12.9522ms | 22.4720ms | 38.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 12.83K | ±0.55% | 77.9358ms | 105.2880ms | 6.42K |

**Key Insight:** Craft is **18.05x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.77K
🥈 Immer                ████████████ 68.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.77K | ±0.33% | 4.3905ms | 4.8790ms | 113.88K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 68.19K | ±1.74% | 14.6644ms | 32.1110ms | 34.10K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Mutative             ████████████████████████████████████ 956.53K
🥉 Immutability Helper  ████████████████████████████████████ 955.76K
   Craft                ███████████████████████████████████ 928.14K
   Immer                ██████████████████████████ 679.15K
   Seamless Immutable   █████ 124.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.45M | ±0.09% | 0.0692ms | 0.1100ms | 7.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.14% | 0.9414ms | 1.1520ms | 531.15K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 956.53K | ±0.61% | 1.0454ms | 1.3420ms | 478.27K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 955.76K | ±0.12% | 1.0463ms | 1.3220ms | 477.88K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 928.14K | ±2.41% | 1.0774ms | 2.7250ms | 464.07K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 679.15K | ±1.78% | 1.4724ms | 3.2060ms | 339.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 124.98K | ±0.27% | 8.0010ms | 15.1180ms | 62.49K |

**Key Insight:** Native Spread is **115.58x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 496.86K
🥈 Mutative             ████████████████████████████████ 393.57K
🥉 Craft                ████████████████████████████ 343.33K
   Immutable.js         ██████████████████ 228.26K
   Immer                █████████████ 156.00K
   Seamless Immutable   ███ 38.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.62M | ±0.15% | 0.0861ms | 0.1410ms | 5.81M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 496.86K | ±0.30% | 2.0126ms | 2.3040ms | 248.43K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 393.57K | ±1.30% | 2.5408ms | 4.9590ms | 196.78K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.33K | ±2.26% | 2.9127ms | 5.3300ms | 171.66K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.26K | ±0.65% | 4.3810ms | 8.4360ms | 114.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.00K | ±1.93% | 6.4103ms | 11.3010ms | 78.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.05K | ±0.28% | 26.2803ms | 37.6000ms | 19.03K |

**Key Insight:** Native Spread is **305.26x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.70M
🥈 Immutability Helper  █████████████████████████████████ 1.40M
🥉 Craft                ████████████ 499.16K
   Mutative             ██████████ 427.24K
   Immer                ███████ 286.23K
   Seamless Immutable   █ 61.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.57M | ±1.09% | 0.0864ms | 0.1200ms | 5.78M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.70M | ±0.40% | 0.5881ms | 1.0220ms | 850.21K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.45% | 0.7153ms | 1.1220ms | 699.03K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 499.16K | ±0.60% | 2.0034ms | 2.4450ms | 249.58K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.24K | ±0.42% | 2.3406ms | 4.0480ms | 213.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 286.23K | ±0.41% | 3.4937ms | 6.2110ms | 143.11K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.89K | ±0.42% | 16.1566ms | 25.8280ms | 30.95K |

**Key Insight:** Native Spread is **186.90x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 771.84K
🥈 Immutability Helper  ██████████████████████████████ 578.78K
🥉 Craft                ████████████████ 313.07K
   Mutative             ███████████ 216.32K
   Immer                ███████ 140.83K
   Seamless Immutable   ███ 61.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.52M | ±3.28% | 0.0799ms | 0.1110ms | 6.26M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 771.84K | ±0.78% | 1.2956ms | 1.6130ms | 385.92K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.78K | ±0.16% | 1.7278ms | 1.8540ms | 289.39K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 313.07K | ±0.62% | 3.1942ms | 3.6570ms | 156.53K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.32K | ±0.51% | 4.6229ms | 7.0830ms | 108.16K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.83K | ±0.58% | 7.1010ms | 14.3870ms | 70.41K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.05K | ±0.59% | 16.3788ms | 25.7490ms | 30.53K |

**Key Insight:** Native Filter is **205.01x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 468.83K
🥈 Mutative             ███████████████████████████████████████ 460.65K
🥉 Immutability Helper  ██████████████████████████████████ 396.08K
   Immer                ████████████████████████ 276.87K
   Immutable.js         █████████████████ 196.79K
   Seamless Immutable   ███ 31.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.70M | ±0.61% | 0.0855ms | 0.1300ms | 5.85M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 468.83K | ±0.28% | 2.1330ms | 2.4950ms | 234.41K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 460.65K | ±0.69% | 2.1709ms | 2.6050ms | 230.32K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 396.08K | ±0.44% | 2.5248ms | 3.2770ms | 198.04K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 276.87K | ±0.66% | 3.6119ms | 7.1440ms | 138.43K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 196.79K | ±0.35% | 5.0814ms | 5.8210ms | 98.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.89K | ±0.31% | 31.3543ms | 41.4180ms | 15.95K |

**Key Insight:** Native Map is **366.89x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.15K
🥈 Craft                █████████████████████████████████ 255.67K
🥉 Mutative             ████████████████████████████ 218.10K
   Immutable.js         ██████████████████████ 171.39K
   Immer                █████████████ 98.94K
   Seamless Immutable   ███ 22.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.32M | ±0.45% | 0.1073ms | 0.1410ms | 4.66M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.15K | ±0.27% | 3.2139ms | 3.5470ms | 155.57K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 255.67K | ±0.68% | 3.9113ms | 7.3730ms | 127.84K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.10K | ±0.44% | 4.5851ms | 5.5010ms | 109.05K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.39K | ±0.34% | 5.8346ms | 6.6030ms | 85.70K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.94K | ±0.36% | 10.1069ms | 19.7170ms | 49.47K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.10K | ±0.32% | 45.2467ms | 82.3340ms | 11.05K |

**Key Insight:** Native Spread is **421.62x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 368.35K
🥈 Immer                ███ 28.64K
🥉 Craft                ██ 22.12K
   Immutability Helper  █ 6.31K
   Immutable.js         █ 739.14
   Seamless Immutable   █ 259.08
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 368.35K | ±0.61% | 2.7148ms | 5.0300ms | 184.18K |
| 🥈 | **Native Map** | 360.73K | ±0.49% | 2.7721ms | 3.4660ms | 180.37K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 28.64K | ±0.31% | 34.9205ms | 54.6630ms | 14.32K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.12K | ±0.25% | 45.1986ms | 54.3310ms | 11.06K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.31K | ±0.35% | 158.4287ms | 208.1710ms | 3.16K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 739.14 | ±0.90% | 1352.9274ms | 1789.8220ms | 370.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 259.08 | ±0.42% | 3859.8453ms | 4251.0850ms | 130.00 |

**Key Insight:** Mutative is **1421.77x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.26K
🥈 Craft                ███████████████████████████████████████ 268.42K
🥉 Mutative             █████████████████████████████ 198.74K
   Immutable.js         ███████████████████████ 159.13K
   Immer                ██████████████████ 125.48K
   Seamless Immutable   ███ 18.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.61M | ±0.86% | 0.1513ms | 0.1800ms | 3.31M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.26K | ±0.50% | 3.6461ms | 4.2990ms | 137.13K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 268.42K | ±0.37% | 3.7256ms | 4.2190ms | 134.21K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.74K | ±0.47% | 5.0318ms | 6.2420ms | 99.37K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.13K | ±0.69% | 6.2840ms | 11.6520ms | 79.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.48K | ±0.56% | 7.9693ms | 10.9510ms | 62.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.93K | ±0.57% | 52.8240ms | 64.1710ms | 9.47K |

**Key Insight:** Native Spread is **349.22x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T23:16:33.211Z*
