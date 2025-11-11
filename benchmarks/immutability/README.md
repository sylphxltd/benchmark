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

- **Last Updated:** November 11, 2025
- **Last Run:** 5:10:26 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/SylphxAI/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥉 | **[@sylphx/craft](https://github.com/SylphxAI/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.7/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.2/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.2/100 | 42.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.3% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.4% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/SylphxAI/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/SylphxAI/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/SylphxAI/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/SylphxAI/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

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
🥇 Craft                ████████████████████████████████████████ 218.62K
🥈 Immer                █████████████████████ 117.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 218.62K | ±1.83% | 4.5742ms | 9.2170ms | 109.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 117.29K | ±1.41% | 8.5260ms | 18.0730ms | 58.64K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 990.47K
🥈 Immer                █████ 134.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 990.47K | ±0.17% | 1.0096ms | 1.3830ms | 495.23K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 134.55K | ±1.29% | 7.4320ms | 13.4550ms | 67.28K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.24K
🥈 Immer                ██████████████ 60.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 178.24K | ±1.64% | 5.6104ms | 11.2010ms | 89.12K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.66K | ±1.75% | 16.4852ms | 31.1180ms | 30.33K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 756.24K
🥈 Mutative             █████████████████████████ 464.00K
🥉 Immer                ██████████ 179.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 756.24K | ±1.49% | 1.3223ms | 2.8050ms | 378.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 464.00K | ±0.66% | 2.1552ms | 3.4870ms | 232.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.89K | ±1.01% | 5.5590ms | 9.1970ms | 89.94K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             ██████████████ 435.54K
🥉 Immer                █████ 155.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.28M | ±0.39% | 0.7841ms | 1.0720ms | 637.68K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 435.54K | ±0.38% | 2.2960ms | 2.6450ms | 217.77K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.67K | ±0.59% | 6.4239ms | 15.0680ms | 77.85K |

**Key Insight:** Craft is **8.19x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 870.07K
🥈 Mutative             █████████████████████ 454.75K
🥉 Immer                ████████ 168.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 870.07K | ±0.35% | 1.1493ms | 1.4520ms | 435.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.75K | ±0.38% | 2.1990ms | 2.5450ms | 227.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.54K | ±0.29% | 5.9333ms | 7.0430ms | 84.27K |

**Key Insight:** Craft is **5.16x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 851.74K
🥈 Mutative             █████████████████████ 450.32K
🥉 Immer                █████████ 184.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 851.74K | ±0.36% | 1.1741ms | 1.4420ms | 425.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.32K | ±0.40% | 2.2207ms | 2.5250ms | 225.16K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 184.36K | ±0.29% | 5.4241ms | 7.5040ms | 92.18K |

**Key Insight:** Craft is **4.62x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 186.21K
🥈 Mutative             █████████████████████████████████ 152.33K
🥉 Immer                █████████████████ 80.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 186.21K | ±0.43% | 5.3702ms | 6.6730ms | 93.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 152.33K | ±0.44% | 6.5645ms | 10.1190ms | 76.17K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.20K | ±0.64% | 12.4681ms | 24.2960ms | 40.10K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 231.99K
🥈 Mutative             █████████████ 78.29K
🥉 Immer                ██ 13.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 231.99K | ±0.38% | 4.3105ms | 4.9800ms | 116.00K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 78.29K | ±0.43% | 12.7730ms | 22.1710ms | 39.15K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.73K | ±0.35% | 72.8313ms | 86.6310ms | 6.87K |

**Key Insight:** Craft is **16.90x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.60K
🥈 Immer                █████████████ 72.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.60K | ±0.31% | 4.3554ms | 5.1600ms | 114.80K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.84K | ±0.26% | 13.7279ms | 24.1240ms | 36.42K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  █████████████████████████████████████ 986.79K
🥉 Mutative             █████████████████████████████████████ 970.94K
   Craft                ███████████████████████████████████ 936.60K
   Immer                ██████████████████████████ 676.76K
   Seamless Immutable   █████ 131.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.79M | ±0.09% | 0.0676ms | 0.0900ms | 7.40M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.16% | 0.9467ms | 1.0930ms | 528.17K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 986.79K | ±0.30% | 1.0134ms | 1.1820ms | 493.40K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 970.94K | ±0.60% | 1.0299ms | 1.4130ms | 485.47K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 936.60K | ±2.34% | 1.0677ms | 2.6960ms | 468.31K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 676.76K | ±1.66% | 1.4776ms | 3.2460ms | 338.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 131.58K | ±0.20% | 7.5998ms | 10.0690ms | 65.79K |

**Key Insight:** Native Spread is **112.43x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 527.17K
🥈 Mutative             ██████████████████████████████ 392.26K
🥉 Craft                █████████████████████████ 333.70K
   Immutable.js         ████████████████ 206.66K
   Immer                ███████████ 145.43K
   Seamless Immutable   ███ 37.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.15% | 0.0848ms | 0.1110ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 527.17K | ±0.29% | 1.8969ms | 2.1730ms | 263.58K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.26K | ±2.98% | 2.5494ms | 4.9690ms | 196.13K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 333.70K | ±2.65% | 2.9967ms | 5.6600ms | 166.85K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 206.66K | ±1.43% | 4.8388ms | 9.1170ms | 103.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 145.43K | ±1.95% | 6.8764ms | 16.2800ms | 72.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.64K | ±0.22% | 26.5674ms | 36.0080ms | 18.82K |

**Key Insight:** Native Spread is **313.33x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.79M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ███████████ 510.30K
   Mutative             ██████████ 428.81K
   Immer                ██████ 276.66K
   Seamless Immutable   █ 61.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.75M | ±0.98% | 0.0851ms | 0.1100ms | 5.88M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.79M | ±0.39% | 0.5592ms | 0.8210ms | 894.16K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.40% | 0.7077ms | 1.1420ms | 706.47K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 510.30K | ±0.30% | 1.9596ms | 2.2940ms | 255.15K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.81K | ±0.39% | 2.3320ms | 2.6850ms | 214.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 276.66K | ±0.36% | 3.6146ms | 4.3180ms | 138.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.90K | ±0.32% | 16.1539ms | 25.4480ms | 30.95K |

**Key Insight:** Native Spread is **189.86x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 781.63K
🥈 Immutability Helper  ██████████████████████████████ 578.83K
🥉 Craft                ████████████████ 316.71K
   Mutative             ███████████ 218.24K
   Immer                ███████ 141.52K
   Seamless Immutable   ███ 61.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.71M | ±0.64% | 0.0787ms | 0.1200ms | 6.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 781.63K | ±0.83% | 1.2794ms | 1.6130ms | 390.82K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.83K | ±0.21% | 1.7276ms | 1.9340ms | 289.42K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 316.71K | ±0.87% | 3.1575ms | 3.7570ms | 158.36K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.24K | ±0.35% | 4.5821ms | 5.2600ms | 109.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.52K | ±0.42% | 7.0659ms | 9.8090ms | 70.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.08K | ±0.40% | 16.3715ms | 25.6980ms | 30.54K |

**Key Insight:** Native Filter is **208.01x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.74K
🥈 Mutative             █████████████████████████████████████ 465.47K
🥉 Immutability Helper  ████████████████████████████████ 402.66K
   Immer                ███████████████████████ 283.25K
   Immutable.js         ███████████████ 193.25K
   Seamless Immutable   ███ 31.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.41M | ±0.97% | 0.0876ms | 0.1200ms | 5.70M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 498.74K | ±0.34% | 2.0050ms | 2.3240ms | 249.37K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 465.47K | ±0.43% | 2.1484ms | 2.5040ms | 232.74K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.66K | ±0.16% | 2.4835ms | 3.0460ms | 201.33K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.25K | ±0.18% | 3.5305ms | 5.0900ms | 141.63K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 193.25K | ±0.48% | 5.1745ms | 5.8910ms | 96.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.74K | ±0.32% | 31.5073ms | 52.8380ms | 15.87K |

**Key Insight:** Native Map is **359.50x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.32K
🥈 Craft                ███████████████████████████████████ 273.51K
🥉 Mutative             ████████████████████████████ 218.34K
   Immutable.js         ██████████████████████ 172.43K
   Immer                █████████████ 97.98K
   Seamless Immutable   ███ 22.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.85M | ±0.88% | 0.1130ms | 0.1500ms | 4.42M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.32K | ±0.50% | 3.2018ms | 3.5170ms | 156.16K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 273.51K | ±0.59% | 3.6561ms | 4.0880ms | 136.76K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.34K | ±0.59% | 4.5799ms | 8.8160ms | 109.17K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.43K | ±0.57% | 5.7994ms | 9.7280ms | 86.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.98K | ±0.46% | 10.2066ms | 20.1570ms | 48.99K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.31K | ±0.40% | 44.8308ms | 81.3920ms | 11.15K |

**Key Insight:** Native Spread is **396.60x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 378.53K
🥈 Immer                ███ 30.15K
🥉 Craft                ██ 21.72K
   Immutability Helper  █ 6.42K
   Immutable.js         █ 714.18
   Seamless Immutable   █ 257.48
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 378.53K | ±0.60% | 2.6418ms | 3.2160ms | 189.27K |
| 🥈 | **Native Map** | 361.33K | ±0.50% | 2.7675ms | 3.2460ms | 180.67K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.15K | ±0.29% | 33.1681ms | 43.0710ms | 15.08K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.72K | ±0.32% | 46.0327ms | 55.1630ms | 10.86K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.42K | ±0.37% | 155.7818ms | 229.9480ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 714.18 | ±1.13% | 1400.2110ms | 1878.0070ms | 358.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 257.48 | ±0.44% | 3883.8352ms | 4260.3660ms | 129.00 |

**Key Insight:** Mutative is **1470.15x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.15K
🥈 Craft                ████████████████████████████████████████ 275.77K
🥉 Mutative             █████████████████████████████ 201.57K
   Immutable.js         ███████████████████████ 159.37K
   Immer                ██████████████████ 128.02K
   Seamless Immutable   ███ 18.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.50M | ±0.51% | 0.1537ms | 0.1900ms | 3.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.15K | ±0.33% | 3.5823ms | 3.9570ms | 139.57K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 275.77K | ±0.36% | 3.6263ms | 6.3610ms | 137.88K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.57K | ±0.36% | 4.9610ms | 5.5900ms | 100.79K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.37K | ±0.45% | 6.2748ms | 8.6860ms | 79.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.02K | ±0.35% | 7.8110ms | 13.9760ms | 64.01K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.75K | ±0.27% | 53.3314ms | 63.3380ms | 9.38K |

**Key Insight:** Native Spread is **346.91x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T05:17:32.099Z*
