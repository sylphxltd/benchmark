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

- **Last Updated:** November 9, 2025
- **Last Run:** 2:12:08 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 9, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.0% |
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
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items-)
- [Set - Large (100 items)](#set-large-100-items-)
- [Undo/Redo - Inverse Patches](#undo-redo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels-)
- [Large Array Update (1000 items)](#large-array-update-1000-items-)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes-)

### JSON Patches - Generate {#json-patches-generate}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.64K
🥈 Immer                █████████████████████ 115.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.64K | ±1.91% | 4.4915ms | 8.9060ms | 111.32K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.43K | ±1.42% | 8.6633ms | 18.3540ms | 57.72K |

### JSON Patches - Apply {#json-patches-apply}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 981.76K
🥈 Immer                █████ 131.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 981.76K | ±0.45% | 1.0186ms | 1.2620ms | 490.88K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.25K | ±1.57% | 7.6190ms | 13.7950ms | 65.63K |

### JSON Patches - Roundtrip {#json-patches-roundtrip}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.24K
🥈 Immer                ██████████████ 60.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.24K | ±1.63% | 5.7064ms | 11.1100ms | 87.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.10K | ±1.47% | 16.6387ms | 33.9130ms | 30.05K |

### Map - Set Operation {#map-set-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 746.59K
🥈 Mutative             ██████████████████████████ 482.38K
🥉 Immer                ██████████ 178.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 746.59K | ±1.65% | 1.3394ms | 2.8550ms | 373.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 482.38K | ±0.40% | 2.0730ms | 2.5150ms | 241.19K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.41K | ±0.90% | 5.6052ms | 12.0220ms | 89.20K |

**Key Insight:** Craft is **4.18x faster** than Immer in this category.

### Map - Update Nested Value {#map-update-nested-value}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 427.81K
🥉 Immer                █████ 160.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.64% | 0.7883ms | 1.1220ms | 634.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.81K | ±0.39% | 2.3375ms | 2.9660ms | 213.90K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 160.86K | ±0.32% | 6.2165ms | 10.5190ms | 80.43K |

**Key Insight:** Craft is **7.89x faster** than Immer in this category.

### Set - Add Operation {#set-add-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 869.26K
🥈 Mutative             █████████████████████ 453.91K
🥉 Immer                ████████ 165.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 869.26K | ±0.35% | 1.1504ms | 1.4830ms | 434.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.91K | ±0.38% | 2.2031ms | 2.6450ms | 226.98K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.28K | ±0.55% | 6.0503ms | 12.2130ms | 82.64K |

**Key Insight:** Craft is **5.26x faster** than Immer in this category.

### Set - Delete Operation {#set-delete-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 843.61K
🥈 Mutative             █████████████████████ 443.74K
🥉 Immer                █████████ 181.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 843.61K | ±0.37% | 1.1854ms | 1.4730ms | 421.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.74K | ±0.38% | 2.2536ms | 2.7050ms | 221.87K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.50K | ±0.32% | 5.5097ms | 8.8070ms | 90.75K |

**Key Insight:** Craft is **4.65x faster** than Immer in this category.

### Map - Large (100 items) {#map-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.93K
🥈 Mutative             █████████████████████████████████ 150.55K
🥉 Immer                █████████████████ 78.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 184.93K | ±0.52% | 5.4075ms | 8.9160ms | 92.47K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.55K | ±0.50% | 6.6425ms | 11.0410ms | 75.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.67K | ±0.45% | 12.7116ms | 23.4630ms | 39.34K |

**Key Insight:** Craft is **2.35x faster** than Immer in this category.

### Set - Large (100 items) {#set-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.07K
🥈 Mutative             ██████████████ 76.31K
🥉 Immer                ██ 13.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.07K | ±0.44% | 4.4430ms | 8.7970ms | 112.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.31K | ±0.46% | 13.1038ms | 22.7920ms | 38.16K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.05K | ±0.41% | 76.6188ms | 95.9680ms | 6.53K |

**Key Insight:** Craft is **17.24x faster** than Immer in this category.

### Undo/Redo - Inverse Patches {#undo-redo-inverse-patches}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.41K
🥈 Immer                ████████████ 70.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.41K | ±0.37% | 4.4167ms | 5.1390ms | 113.21K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.58K | ±0.31% | 14.1687ms | 25.0560ms | 35.29K |

### Simple Object Update {#simple-object-update}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             ████████████████████████████████████ 969.72K
🥉 Immutability Helper  ████████████████████████████████████ 964.08K
   Craft                ████████████████████████████████████ 961.82K
   Immer                █████████████████████████ 679.93K
   Seamless Immutable   █████ 124.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.54M | ±0.10% | 0.0688ms | 0.1100ms | 7.27M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.13% | 0.9324ms | 1.0620ms | 536.27K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 969.72K | ±0.41% | 1.0312ms | 1.3830ms | 484.86K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 964.08K | ±0.16% | 1.0373ms | 1.7930ms | 482.04K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 961.82K | ±2.54% | 1.0397ms | 2.6450ms | 480.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 679.93K | ±2.03% | 1.4707ms | 3.2360ms | 339.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 124.76K | ±0.27% | 8.0153ms | 16.6810ms | 62.38K |

**Key Insight:** Native Spread is **116.52x faster** than Seamless Immutable in this category.

### Nested Object Update {#nested-object-update}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 495.96K
🥈 Mutative             █████████████████████████████████ 405.57K
🥉 Craft                ████████████████████████████ 347.65K
   Immutable.js         ███████████████████ 240.71K
   Immer                ████████████ 154.07K
   Seamless Immutable   ███ 37.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.16% | 0.0852ms | 0.1200ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 495.96K | ±0.48% | 2.0163ms | 2.3350ms | 247.98K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 405.57K | ±0.53% | 2.4656ms | 2.9760ms | 202.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 347.65K | ±2.63% | 2.8765ms | 5.3300ms | 173.82K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 240.71K | ±0.40% | 4.1543ms | 4.8290ms | 120.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.07K | ±1.81% | 6.4904ms | 13.4250ms | 77.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.73K | ±0.27% | 26.5073ms | 36.0170ms | 18.86K |

**Key Insight:** Native Spread is **311.28x faster** than Seamless Immutable in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.80M
🥈 Immutability Helper  ████████████████████████████████ 1.44M
🥉 Craft                ███████████ 509.84K
   Mutative             █████████ 414.84K
   Immer                ██████ 281.08K
   Seamless Immutable   █ 62.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.90M | ±1.19% | 0.0840ms | 0.1200ms | 5.95M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.80M | ±0.59% | 0.5569ms | 0.9210ms | 897.75K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.14% | 0.6922ms | 0.8420ms | 722.36K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 509.84K | ±0.31% | 1.9614ms | 2.2940ms | 254.92K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 414.84K | ±0.39% | 2.4106ms | 4.1380ms | 207.42K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.08K | ±0.44% | 3.5577ms | 4.7690ms | 140.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.07K | ±0.28% | 16.1116ms | 25.3870ms | 31.03K |

**Key Insight:** Native Spread is **191.75x faster** than Seamless Immutable in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 797.26K
🥈 Immutability Helper  █████████████████████████████ 582.89K
🥉 Craft                ████████████████ 320.65K
   Mutative             ███████████ 217.77K
   Immer                ███████ 142.50K
   Seamless Immutable   ███ 61.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.48M | ±0.96% | 0.0801ms | 0.1100ms | 6.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 797.26K | ±0.57% | 1.2543ms | 1.6030ms | 398.63K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.89K | ±0.16% | 1.7156ms | 1.8330ms | 291.45K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.65K | ±0.27% | 3.1187ms | 3.5470ms | 160.33K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.77K | ±0.29% | 4.5921ms | 5.5110ms | 108.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.50K | ±0.33% | 7.0176ms | 12.3130ms | 71.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.34K | ±0.35% | 16.3016ms | 25.5470ms | 30.67K |

**Key Insight:** Native Filter is **203.46x faster** than Seamless Immutable in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 502.37K
🥈 Mutative             ████████████████████████████████████ 454.54K
🥉 Immutability Helper  ████████████████████████████████ 399.59K
   Immer                ███████████████████████ 284.57K
   Immutable.js         ███████████████ 187.52K
   Seamless Immutable   ███ 31.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.45M | ±0.93% | 0.0873ms | 0.1300ms | 5.73M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 502.37K | ±0.46% | 1.9905ms | 2.3040ms | 251.19K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 454.54K | ±0.60% | 2.2000ms | 2.5550ms | 227.27K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.59K | ±0.30% | 2.5026ms | 2.9150ms | 199.79K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.57K | ±0.29% | 3.5141ms | 4.2380ms | 142.28K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.52K | ±0.55% | 5.3327ms | 6.1810ms | 93.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.43K | ±0.49% | 31.8209ms | 46.7870ms | 15.71K |

**Key Insight:** Native Map is **364.50x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 313.27K
🥈 Craft                ███████████████████████████████████ 274.38K
🥉 Mutative             ████████████████████████████ 215.91K
   Immutable.js         ██████████████████████ 174.87K
   Immer                █████████████ 98.66K
   Seamless Immutable   ███ 22.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.14M | ±0.61% | 0.1094ms | 0.1400ms | 4.57M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 313.27K | ±0.36% | 3.1921ms | 3.5460ms | 156.63K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 274.38K | ±0.45% | 3.6446ms | 4.4590ms | 137.19K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.91K | ±0.42% | 4.6315ms | 5.4600ms | 107.96K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.87K | ±0.45% | 5.7185ms | 7.0140ms | 87.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.66K | ±0.37% | 10.1355ms | 19.3160ms | 49.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.34K | ±0.32% | 44.7603ms | 54.3910ms | 11.17K |

**Key Insight:** Native Spread is **409.28x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items) {#large-array-update-1000-items-}

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.98K
🥈 Immer                ███ 29.23K
🥉 Craft                ██ 21.95K
   Immutability Helper  █ 6.44K
   Immutable.js         █ 738.37
   Seamless Immutable   █ 254.34
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.98K | ±0.84% | 2.7934ms | 4.9790ms | 178.99K |
| 🥈 | **Native Map** | 354.19K | ±0.68% | 2.8234ms | 3.8970ms | 177.09K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.23K | ±0.50% | 34.2083ms | 67.5560ms | 14.62K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.95K | ±0.45% | 45.5489ms | 54.5720ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.44K | ±0.38% | 155.3072ms | 185.6950ms | 3.22K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 738.37 | ±1.15% | 1354.3417ms | 1831.4130ms | 370.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.34 | ±0.50% | 3931.6714ms | 4402.6890ms | 128.00 |

**Key Insight:** Mutative is **1407.46x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes) {#multiple-updates-3-changes-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.85K
🥈 Craft                ███████████████████████████████████████ 273.27K
🥉 Mutative             █████████████████████████████ 201.54K
   Immutable.js         ███████████████████████ 161.00K
   Immer                ██████████████████ 125.48K
   Seamless Immutable   ███ 19.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.39M | ±1.00% | 0.1566ms | 0.1710ms | 3.19M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.85K | ±0.51% | 3.5991ms | 3.9970ms | 138.92K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.27K | ±0.50% | 3.6594ms | 5.9610ms | 136.64K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.54K | ±0.48% | 4.9618ms | 5.6610ms | 100.77K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.00K | ±0.59% | 6.2114ms | 9.8180ms | 80.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.48K | ±0.63% | 7.9695ms | 16.2200ms | 62.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.04K | ±0.38% | 52.5209ms | 63.0480ms | 9.52K |

**Key Insight:** Native Spread is **335.48x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T14:54:05.355Z*
