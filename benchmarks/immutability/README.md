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
- **Last Run:** 1:43:46 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.6% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 44.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.0/100 | 32.9% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 213.02K
🥈 Immer                ████████████████████ 108.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 213.02K | ±2.36% | 4.6944ms | 9.6590ms | 106.51K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 108.45K | ±2.07% | 9.2208ms | 26.7900ms | 54.23K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 942.10K
🥈 Immer                █████ 128.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 942.10K | ±0.24% | 1.0615ms | 1.2430ms | 471.05K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.51K | ±1.92% | 7.7817ms | 16.4010ms | 64.25K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 169.81K
🥈 Immer                ██████████████ 59.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 169.81K | ±2.05% | 5.8888ms | 11.9020ms | 84.91K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.88K | ±1.76% | 16.7006ms | 31.6490ms | 29.94K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 727.73K
🥈 Mutative             ██████████████████████████ 472.72K
🥉 Immer                ██████████ 173.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 727.73K | ±1.94% | 1.3741ms | 3.0860ms | 363.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.72K | ±0.84% | 2.1154ms | 2.9550ms | 236.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 173.77K | ±1.04% | 5.7546ms | 9.7280ms | 86.89K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 423.25K
🥉 Immer                █████ 153.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.71% | 0.8014ms | 1.2620ms | 623.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.25K | ±0.52% | 2.3627ms | 2.9460ms | 211.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 153.67K | ±0.52% | 6.5075ms | 9.6680ms | 76.83K |

**Key Insight:** Craft is **8.12x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 860.42K
🥈 Mutative             █████████████████████ 454.45K
🥉 Immer                ████████ 167.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 860.42K | ±0.73% | 1.1622ms | 1.6830ms | 430.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.45K | ±0.51% | 2.2005ms | 2.7450ms | 227.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.25K | ±0.73% | 5.9790ms | 11.3420ms | 83.63K |

**Key Insight:** Craft is **5.14x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 848.92K
🥈 Mutative             █████████████████████ 453.03K
🥉 Immer                ████████ 179.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 848.92K | ±0.36% | 1.1780ms | 1.4520ms | 424.46K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.03K | ±0.39% | 2.2074ms | 2.6450ms | 226.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.46K | ±0.47% | 5.5723ms | 10.0090ms | 89.73K |

**Key Insight:** Craft is **4.73x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 188.31K
🥈 Mutative             ████████████████████████████████ 151.32K
🥉 Immer                ██████████████ 65.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 188.31K | ±0.49% | 5.3105ms | 6.4320ms | 94.15K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 151.32K | ±0.49% | 6.6086ms | 10.9210ms | 75.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 65.72K | ±0.92% | 15.2159ms | 71.9040ms | 32.86K |

**Key Insight:** Craft is **2.87x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 231.18K
🥈 Mutative             █████████████ 77.19K
🥉 Immer                ██ 14.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 231.18K | ±0.43% | 4.3257ms | 5.0600ms | 115.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.19K | ±0.45% | 12.9555ms | 22.7720ms | 38.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 14.05K | ±0.32% | 71.1778ms | 83.8170ms | 7.03K |

**Key Insight:** Craft is **16.45x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.65K
🥈 Immer                █████████████ 70.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.65K | ±0.35% | 4.4515ms | 5.2300ms | 112.32K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.91K | ±0.21% | 14.1022ms | 24.7160ms | 35.46K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  ████████████████████████████████████ 983.03K
🥉 Mutative             ████████████████████████████████████ 981.67K
   Craft                ██████████████████████████████████ 928.40K
   Immer                █████████████████████████ 674.99K
   Seamless Immutable   █████ 127.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.41M | ±0.49% | 0.0694ms | 0.1000ms | 7.21M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.10% | 0.9219ms | 1.0820ms | 542.37K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 983.03K | ±0.32% | 1.0173ms | 1.1720ms | 491.51K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 981.67K | ±0.57% | 1.0187ms | 1.6130ms | 490.84K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 928.40K | ±2.47% | 1.0771ms | 2.7050ms | 464.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 674.99K | ±1.81% | 1.4815ms | 3.3360ms | 337.50K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.32K | ±0.26% | 7.8542ms | 14.7980ms | 63.66K |

**Key Insight:** Native Spread is **113.21x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 511.93K
🥈 Mutative             ███████████████████████████████ 401.36K
🥉 Craft                ██████████████████████████ 329.77K
   Immutable.js         ██████████████████ 228.60K
   Immer                ███████████ 141.72K
   Seamless Immutable   ███ 36.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.71M | ±0.10% | 0.0854ms | 0.1200ms | 5.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 511.93K | ±0.72% | 1.9534ms | 2.3050ms | 255.97K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 401.36K | ±0.54% | 2.4915ms | 2.9260ms | 200.68K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 329.77K | ±3.00% | 3.0324ms | 5.3400ms | 165.10K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.60K | ±0.80% | 4.3745ms | 5.4800ms | 114.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.72K | ±2.08% | 7.0560ms | 15.1180ms | 70.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.91K | ±0.54% | 27.0917ms | 36.5490ms | 18.46K |

**Key Insight:** Native Spread is **317.31x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ███████████████████████████████ 1.37M
🥉 Craft                ████████████ 509.40K
   Mutative             ██████████ 423.46K
   Immer                ██████ 279.83K
   Seamless Immutable   █ 60.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.42M | ±1.68% | 0.0876ms | 0.1200ms | 5.71M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.78% | 0.5722ms | 0.8110ms | 873.88K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.97% | 0.7291ms | 0.7720ms | 685.74K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 509.40K | ±0.78% | 1.9631ms | 2.4250ms | 254.70K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 423.46K | ±0.73% | 2.3615ms | 2.7850ms | 211.73K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 279.83K | ±0.80% | 3.5736ms | 4.1870ms | 139.91K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.67K | ±0.86% | 16.4831ms | 25.8690ms | 30.34K |

**Key Insight:** Native Spread is **188.18x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 818.50K
🥈 Immutability Helper  ████████████████████████████ 576.79K
🥉 Craft                ████████████████ 323.03K
   Mutative             ███████████ 216.48K
   Immer                ███████ 140.26K
   Seamless Immutable   ███ 60.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.23M | ±1.08% | 0.0818ms | 0.1100ms | 6.11M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 818.50K | ±0.56% | 1.2218ms | 1.5730ms | 409.25K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.79K | ±0.27% | 1.7337ms | 1.8330ms | 288.39K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 323.03K | ±0.35% | 3.0957ms | 3.5470ms | 161.51K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.48K | ±0.47% | 4.6194ms | 5.2500ms | 108.24K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.26K | ±0.63% | 7.1295ms | 14.7380ms | 70.13K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.96K | ±0.39% | 16.4040ms | 25.8990ms | 30.48K |

**Key Insight:** Native Filter is **200.55x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 487.67K
🥈 Mutative             █████████████████████████████████████ 453.23K
🥉 Immutability Helper  █████████████████████████████████ 401.12K
   Immer                ████████████████████████ 286.55K
   Immutable.js         ████████████████ 189.43K
   Seamless Immutable   ███ 31.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.17M | ±1.23% | 0.0895ms | 0.1300ms | 5.59M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 487.67K | ±0.55% | 2.0506ms | 3.4270ms | 243.84K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 453.23K | ±0.60% | 2.2064ms | 2.6250ms | 226.62K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.12K | ±0.22% | 2.4930ms | 2.9050ms | 200.56K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 286.55K | ±0.28% | 3.4898ms | 4.0670ms | 143.28K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.43K | ±0.61% | 5.2791ms | 6.3220ms | 94.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.05K | ±1.10% | 32.2089ms | 42.5300ms | 15.52K |

**Key Insight:** Native Map is **359.80x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 306.28K
🥈 Craft                ███████████████████████████████████ 265.59K
🥉 Mutative             ███████████████████████████ 209.08K
   Immutable.js         ██████████████████████ 166.59K
   Immer                █████████████ 97.30K
   Seamless Immutable   ███ 22.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.17M | ±0.59% | 0.1091ms | 0.1510ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 306.28K | ±0.82% | 3.2650ms | 6.0020ms | 153.14K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.59K | ±1.00% | 3.7653ms | 4.5590ms | 132.79K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 209.08K | ±1.05% | 4.7829ms | 7.9550ms | 104.54K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.59K | ±0.99% | 6.0027ms | 8.0560ms | 83.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.30K | ±0.89% | 10.2778ms | 20.3690ms | 48.65K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.13K | ±0.40% | 45.1864ms | 55.9360ms | 11.07K |

**Key Insight:** Native Spread is **414.22x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 342.90K
🥈 Immer                ███ 29.82K
🥉 Craft                ███ 21.78K
   Immutability Helper  █ 6.31K
   Immutable.js         █ 718.23
   Seamless Immutable   █ 253.03
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 344.60K | ±0.89% | 2.9019ms | 3.5770ms | 172.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 342.90K | ±0.72% | 2.9163ms | 3.6270ms | 171.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.82K | ±0.61% | 33.5347ms | 44.3230ms | 14.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.78K | ±0.51% | 45.9126ms | 56.7860ms | 10.89K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.31K | ±0.60% | 158.3841ms | 233.4980ms | 3.16K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 718.23 | ±1.44% | 1392.3061ms | 2110.2990ms | 360.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.03 | ±0.78% | 3952.0555ms | 4651.7270ms | 127.00 |

**Key Insight:** Native Map is **1361.89x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 270.16K
🥈 Craft                ███████████████████████████████████████ 264.01K
🥉 Mutative             █████████████████████████████ 192.65K
   Immutable.js         ███████████████████████ 158.44K
   Immer                ███████████████████ 126.80K
   Seamless Immutable   ███ 18.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.11M | ±1.43% | 0.1637ms | 0.2010ms | 3.05M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 270.16K | ±0.72% | 3.7015ms | 4.5380ms | 135.08K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.01K | ±0.90% | 3.7877ms | 4.5480ms | 132.01K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 192.65K | ±0.89% | 5.1907ms | 9.2270ms | 96.33K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.44K | ±0.91% | 6.3114ms | 10.5090ms | 79.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.80K | ±0.75% | 7.8863ms | 16.1000ms | 63.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.55K | ±0.64% | 53.9007ms | 67.7870ms | 9.28K |

**Key Insight:** Native Spread is **329.31x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T01:47:01.637Z*
