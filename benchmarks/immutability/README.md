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
- **Last Run:** 2:19:15 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.4/100 | 76.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.5/100 | 72.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.5/100 | 44.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.3% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 216.06K
🥈 Immer                █████████████████████ 114.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 216.06K | ±1.91% | 4.6283ms | 9.2970ms | 108.03K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.88K | ±1.59% | 8.7044ms | 18.4140ms | 57.44K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 945.60K
🥈 Immer                ██████ 131.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 945.60K | ±0.41% | 1.0575ms | 1.3230ms | 472.80K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.65K | ±1.41% | 7.5958ms | 16.0100ms | 65.83K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.54K
🥈 Immer                █████████████ 58.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 174.54K | ±1.72% | 5.7294ms | 11.5020ms | 87.27K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 58.02K | ±1.75% | 17.2351ms | 31.5990ms | 29.01K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 738.55K
🥈 Mutative             ██████████████████████████ 479.99K
🥉 Immer                ██████████ 179.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 738.55K | ±1.57% | 1.3540ms | 3.0260ms | 369.27K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.99K | ±0.64% | 2.0834ms | 2.5150ms | 240.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.73K | ±0.84% | 5.5640ms | 8.6770ms | 89.86K |

**Key Insight:** Craft is **4.11x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 428.67K
🥉 Immer                █████ 160.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.26M | ±0.61% | 0.7957ms | 1.1620ms | 628.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.67K | ±0.39% | 2.3328ms | 2.7760ms | 214.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 160.00K | ±0.35% | 6.2498ms | 9.6080ms | 80.02K |

**Key Insight:** Craft is **7.85x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 846.08K
🥈 Mutative             ██████████████████████ 460.00K
🥉 Immer                ████████ 166.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 846.08K | ±0.56% | 1.1819ms | 1.5930ms | 423.04K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 460.00K | ±0.39% | 2.1739ms | 2.6750ms | 230.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.05K | ±0.63% | 6.0222ms | 13.8960ms | 83.03K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 820.84K
🥈 Mutative             ████████████████████ 411.63K
🥉 Immer                █████████ 181.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 820.84K | ±0.44% | 1.2183ms | 1.6030ms | 410.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 411.63K | ±0.54% | 2.4294ms | 3.9280ms | 205.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.69K | ±0.57% | 5.5040ms | 9.5470ms | 90.84K |

**Key Insight:** Craft is **4.52x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.43K
🥈 Mutative             ████████████████████████████████ 148.83K
🥉 Immer                █████████████████ 77.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 184.43K | ±0.49% | 5.4221ms | 8.6360ms | 92.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.83K | ±0.51% | 6.7189ms | 10.5800ms | 74.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.07K | ±0.53% | 12.9745ms | 23.8950ms | 38.54K |

**Key Insight:** Craft is **2.39x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.02K
🥈 Mutative             ██████████████ 76.63K
🥉 Immer                ██ 12.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 227.02K | ±0.47% | 4.4048ms | 6.5120ms | 113.51K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.63K | ±0.47% | 13.0495ms | 22.8520ms | 38.32K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 12.87K | ±0.59% | 77.7065ms | 154.4990ms | 6.43K |

**Key Insight:** Craft is **17.64x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.18K
🥈 Immer                ████████████ 68.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 224.18K | ±0.42% | 4.4607ms | 5.6110ms | 112.09K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 68.57K | ±0.46% | 14.5845ms | 25.4280ms | 34.28K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             ████████████████████████████████████ 979.36K
🥉 Craft                ████████████████████████████████████ 967.42K
   Immutability Helper  ████████████████████████████████████ 957.37K
   Immer                ██████████████████████████ 705.63K
   Seamless Immutable   █████ 130.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.60M | ±0.10% | 0.0685ms | 0.1010ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.10% | 0.9314ms | 1.1130ms | 536.82K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 979.36K | ±0.40% | 1.0211ms | 1.7030ms | 489.68K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 967.42K | ±2.64% | 1.0337ms | 2.6450ms | 483.71K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 957.37K | ±0.30% | 1.0445ms | 1.2220ms | 478.69K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 705.63K | ±1.77% | 1.4172ms | 3.1260ms | 352.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.24K | ±0.27% | 7.6783ms | 10.4490ms | 65.12K |

**Key Insight:** Native Spread is **112.07x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 520.48K
🥈 Mutative             ██████████████████████████████ 392.97K
🥉 Craft                ███████████████████████████ 354.17K
   Immutable.js         ██████████████████ 239.24K
   Immer                ████████████ 158.73K
   Seamless Immutable   ███ 37.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.75M | ±0.58% | 0.0851ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 520.48K | ±0.28% | 1.9213ms | 2.2040ms | 260.24K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.97K | ±0.70% | 2.5447ms | 4.7090ms | 196.48K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 354.17K | ±2.24% | 2.8235ms | 5.2100ms | 177.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 239.24K | ±0.36% | 4.1799ms | 4.8490ms | 119.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 158.73K | ±1.70% | 6.3002ms | 11.2010ms | 79.36K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.46K | ±0.47% | 26.6974ms | 47.1380ms | 18.73K |

**Key Insight:** Native Spread is **313.75x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.84M
🥈 Immutability Helper  ███████████████████████████████ 1.41M
🥉 Craft                ███████████ 520.27K
   Mutative             █████████ 423.46K
   Immer                ██████ 278.31K
   Seamless Immutable   █ 62.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.83M | ±1.48% | 0.0845ms | 0.1200ms | 5.91M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.84M | ±0.32% | 0.5430ms | 0.8820ms | 920.73K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.09% | 0.7078ms | 0.8310ms | 706.40K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 520.27K | ±0.32% | 1.9221ms | 2.2740ms | 260.13K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 423.46K | ±0.40% | 2.3615ms | 4.1580ms | 211.73K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.31K | ±0.32% | 3.5931ms | 7.6940ms | 139.16K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.32K | ±0.29% | 16.0471ms | 25.3770ms | 31.16K |

**Key Insight:** Native Spread is **189.84x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 815.67K
🥈 Immutability Helper  ████████████████████████████ 567.38K
🥉 Craft                ████████████████ 321.94K
   Mutative             ███████████ 217.41K
   Immer                ███████ 143.77K
   Seamless Immutable   ███ 60.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.45M | ±1.04% | 0.0804ms | 0.1100ms | 6.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 815.67K | ±0.59% | 1.2260ms | 1.9940ms | 407.83K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 567.38K | ±0.18% | 1.7625ms | 1.9730ms | 283.69K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 321.94K | ±0.28% | 3.1062ms | 3.5570ms | 160.97K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.41K | ±0.28% | 4.5995ms | 5.3300ms | 108.71K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.77K | ±0.32% | 6.9554ms | 12.2930ms | 71.89K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.29K | ±0.43% | 16.5861ms | 26.0290ms | 30.15K |

**Key Insight:** Native Filter is **206.42x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 495.22K
🥈 Mutative             █████████████████████████████████████ 459.17K
🥉 Immutability Helper  ████████████████████████████████ 396.63K
   Immer                ███████████████████████ 282.52K
   Immutable.js         ███████████████ 185.32K
   Seamless Immutable   ███ 31.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.34M | ±0.96% | 0.0882ms | 0.1310ms | 5.67M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 495.22K | ±0.63% | 2.0193ms | 2.4650ms | 247.61K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 459.17K | ±0.71% | 2.1778ms | 2.5340ms | 229.59K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 396.63K | ±0.11% | 2.5212ms | 2.9660ms | 198.32K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.52K | ±0.39% | 3.5395ms | 5.0290ms | 141.26K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 185.32K | ±0.69% | 5.3961ms | 11.3920ms | 92.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.14K | ±0.96% | 32.1090ms | 49.6430ms | 15.57K |

**Key Insight:** Native Map is **364.21x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 295.95K
🥈 Craft                ████████████████████████████████████ 267.73K
🥉 Mutative             █████████████████████████████ 212.98K
   Immutable.js         ███████████████████████ 172.76K
   Immer                █████████████ 99.39K
   Seamless Immutable   ███ 20.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.39M | ±0.98% | 0.1192ms | 0.1610ms | 4.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 295.95K | ±0.56% | 3.3790ms | 6.7320ms | 147.97K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 267.73K | ±0.48% | 3.7351ms | 4.6590ms | 133.86K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.98K | ±0.48% | 4.6953ms | 6.5430ms | 106.49K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.76K | ±0.63% | 5.7883ms | 8.0650ms | 86.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.39K | ±0.44% | 10.0610ms | 19.5870ms | 49.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 20.51K | ±0.80% | 48.7658ms | 61.4950ms | 10.25K |

**Key Insight:** Native Spread is **409.27x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 343.93K
🥈 Immer                ███ 29.74K
🥉 Craft                ███ 21.86K
   Immutability Helper  █ 6.41K
   Immutable.js         █ 719.71
   Seamless Immutable   █ 255.44
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 351.89K | ±0.71% | 2.8418ms | 3.3470ms | 175.94K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 343.93K | ±0.84% | 2.9075ms | 5.0200ms | 171.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.74K | ±0.77% | 33.6226ms | 49.5120ms | 14.87K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.86K | ±0.72% | 45.7543ms | 60.1730ms | 10.93K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.41K | ±0.75% | 156.0072ms | 175.8790ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 719.71 | ±1.54% | 1389.4571ms | 2072.3380ms | 360.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.44 | ±0.93% | 3914.8653ms | 4676.9970ms | 128.00 |

**Key Insight:** Native Map is **1377.60x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 276.16K
🥈 Immutability Helper  ██████████████████████████████████████ 260.28K
🥉 Mutative             ████████████████████████████ 196.71K
   Immutable.js         ███████████████████████ 161.59K
   Immer                ██████████████████ 127.55K
   Seamless Immutable   ███ 18.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.28M | ±1.48% | 0.1593ms | 0.1900ms | 3.14M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 276.16K | ±0.61% | 3.6211ms | 4.2180ms | 138.08K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 260.28K | ±0.84% | 3.8420ms | 6.3310ms | 130.18K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.71K | ±0.54% | 5.0837ms | 5.8910ms | 98.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.59K | ±0.64% | 6.1885ms | 7.4440ms | 80.80K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.55K | ±0.63% | 7.8403ms | 14.2870ms | 63.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.88K | ±0.88% | 52.9614ms | 67.5360ms | 9.44K |

**Key Insight:** Native Spread is **332.52x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T02:36:19.757Z*
