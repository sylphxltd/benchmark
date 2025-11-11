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
- **Last Run:** 5:17:32 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 78.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.6/100 | 75.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 44.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.5% |
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
🥇 Craft                ████████████████████████████████████████ 214.51K
🥈 Immer                █████████████████████ 110.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 214.51K | ±2.15% | 4.6617ms | 9.1870ms | 107.26K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.79K | ±1.88% | 9.0264ms | 25.7290ms | 55.39K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 938.53K
🥈 Immer                ██████ 129.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 938.53K | ±0.17% | 1.0655ms | 1.2230ms | 469.27K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.61K | ±1.60% | 7.7153ms | 16.9010ms | 64.81K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.34K
🥈 Immer                ██████████████ 60.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 176.34K | ±1.81% | 5.6709ms | 11.1610ms | 88.17K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.63K | ±1.55% | 16.4947ms | 33.8030ms | 30.31K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 742.65K
🥈 Mutative             █████████████████████████ 470.07K
🥉 Immer                █████████ 172.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 742.65K | ±1.63% | 1.3465ms | 2.7750ms | 371.32K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 470.07K | ±0.70% | 2.1273ms | 2.8050ms | 235.04K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 172.90K | ±1.05% | 5.7836ms | 9.9790ms | 86.45K |

**Key Insight:** Craft is **4.30x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 425.12K
🥉 Immer                █████ 150.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.22M | ±0.77% | 0.8198ms | 1.3220ms | 609.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 425.12K | ±0.50% | 2.3523ms | 2.9650ms | 212.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 150.89K | ±0.38% | 6.6273ms | 11.8920ms | 75.45K |

**Key Insight:** Craft is **8.08x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 861.19K
🥈 Mutative             █████████████████████ 448.28K
🥉 Immer                ████████ 163.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 861.19K | ±0.42% | 1.1612ms | 1.5930ms | 430.60K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.28K | ±0.42% | 2.2307ms | 2.8850ms | 224.14K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.05K | ±0.54% | 6.1330ms | 10.9300ms | 81.53K |

**Key Insight:** Craft is **5.28x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 807.28K
🥈 Mutative             ██████████████████████ 435.66K
🥉 Immer                █████████ 174.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 807.28K | ±0.67% | 1.2387ms | 1.6230ms | 403.64K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 435.66K | ±0.60% | 2.2954ms | 2.9060ms | 217.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 174.74K | ±0.53% | 5.7228ms | 8.4650ms | 87.37K |

**Key Insight:** Craft is **4.62x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.76K
🥈 Mutative             █████████████████████████████████ 148.36K
🥉 Immer                █████████████████ 77.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 178.76K | ±0.56% | 5.5939ms | 10.5400ms | 89.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.36K | ±0.63% | 6.7404ms | 10.6200ms | 74.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.81K | ±0.79% | 12.8523ms | 24.2650ms | 38.90K |

**Key Insight:** Craft is **2.30x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.28K
🥈 Mutative             ██████████████ 76.50K
🥉 Immer                ██ 13.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 225.28K | ±0.49% | 4.4389ms | 6.5220ms | 112.64K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.50K | ±0.52% | 13.0720ms | 22.7830ms | 38.25K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.80K | ±0.43% | 72.4569ms | 85.3200ms | 6.90K |

**Key Insight:** Craft is **16.32x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.24K
🥈 Immer                █████████████ 70.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.24K | ±0.53% | 4.4201ms | 5.1200ms | 113.12K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.98K | ±0.39% | 14.0890ms | 24.6970ms | 35.49K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 981.67K
🥉 Immutability Helper  ████████████████████████████████████ 952.51K
   Craft                █████████████████████████████████ 889.09K
   Immer                ██████████████████████████ 690.18K
   Seamless Immutable   █████ 126.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.49M | ±0.13% | 0.0690ms | 0.1010ms | 7.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.39% | 0.9351ms | 1.4830ms | 534.70K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 981.67K | ±0.44% | 1.0187ms | 1.3630ms | 490.83K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 952.51K | ±0.24% | 1.0499ms | 1.7540ms | 476.26K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 889.09K | ±3.01% | 1.1247ms | 2.6860ms | 444.55K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 690.18K | ±2.13% | 1.4489ms | 3.2160ms | 345.09K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.61K | ±0.40% | 7.8982ms | 16.3310ms | 63.31K |

**Key Insight:** Native Spread is **114.42x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 529.19K
🥈 Mutative             █████████████████████████████ 389.75K
🥉 Craft                ██████████████████████████ 342.59K
   Immutable.js         ██████████████████ 234.22K
   Immer                ████████████ 155.52K
   Seamless Immutable   ███ 36.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.16% | 0.0850ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 529.19K | ±0.48% | 1.8897ms | 2.3950ms | 264.60K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 389.75K | ±3.12% | 2.5657ms | 4.7090ms | 194.88K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 342.59K | ±2.67% | 2.9189ms | 5.3410ms | 171.30K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 234.22K | ±0.46% | 4.2695ms | 5.1500ms | 117.11K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.52K | ±2.15% | 6.4301ms | 11.8220ms | 77.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.93K | ±0.37% | 27.0802ms | 37.0090ms | 18.46K |

**Key Insight:** Native Spread is **318.53x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.76M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ████████████ 512.20K
   Mutative             ██████████ 421.95K
   Immer                ██████ 278.08K
   Seamless Immutable   █ 60.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.26M | ±1.40% | 0.0888ms | 0.1200ms | 5.63M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.76M | ±0.49% | 0.5677ms | 0.7710ms | 880.71K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.80% | 0.7101ms | 0.7620ms | 704.13K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 512.20K | ±0.64% | 1.9524ms | 2.3840ms | 256.10K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 421.95K | ±0.67% | 2.3699ms | 3.0760ms | 210.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.08K | ±0.54% | 3.5961ms | 4.8690ms | 139.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.74K | ±0.67% | 16.4634ms | 25.7290ms | 30.37K |

**Key Insight:** Native Spread is **185.31x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 809.87K
🥈 Immutability Helper  █████████████████████████████ 585.58K
🥉 Craft                ███████████████ 310.46K
   Mutative             ███████████ 214.29K
   Immer                ███████ 140.69K
   Seamless Immutable   ███ 60.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.68M | ±0.84% | 0.0789ms | 0.1200ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 809.87K | ±0.96% | 1.2348ms | 1.6330ms | 404.93K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 585.58K | ±0.51% | 1.7077ms | 1.8340ms | 292.79K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 310.46K | ±0.94% | 3.2211ms | 6.5620ms | 155.23K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.29K | ±1.06% | 4.6665ms | 6.2620ms | 107.15K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.69K | ±0.94% | 7.1077ms | 15.3990ms | 70.35K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.45K | ±0.94% | 16.5421ms | 25.8080ms | 30.23K |

**Key Insight:** Native Filter is **209.71x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 473.54K
🥈 Mutative             ██████████████████████████████████████ 449.85K
🥉 Immutability Helper  ██████████████████████████████████ 400.20K
   Immer                ████████████████████████ 278.56K
   Immutable.js         ████████████████ 193.31K
   Seamless Immutable   ███ 31.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.06M | ±1.29% | 0.0904ms | 0.1200ms | 5.53M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 473.54K | ±0.68% | 2.1118ms | 2.6550ms | 236.77K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 449.85K | ±0.71% | 2.2230ms | 2.8750ms | 224.93K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.20K | ±0.34% | 2.4987ms | 4.4180ms | 200.10K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 278.56K | ±0.29% | 3.5898ms | 6.0420ms | 139.28K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 193.31K | ±0.65% | 5.1730ms | 5.8710ms | 96.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.59K | ±0.65% | 31.6579ms | 46.1270ms | 15.79K |

**Key Insight:** Native Map is **350.20x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 306.98K
🥈 Craft                ██████████████████████████████████ 260.64K
🥉 Mutative             ████████████████████████████ 211.62K
   Immutable.js         ██████████████████████ 167.61K
   Immer                █████████████ 95.94K
   Seamless Immutable   ███ 22.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.86M | ±1.35% | 0.1129ms | 0.1510ms | 4.43M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 306.98K | ±1.16% | 3.2575ms | 3.9370ms | 153.49K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 260.64K | ±0.76% | 3.8368ms | 6.5820ms | 130.32K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.62K | ±0.81% | 4.7254ms | 5.8510ms | 105.81K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 167.61K | ±1.32% | 5.9661ms | 7.1840ms | 83.81K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 95.94K | ±1.05% | 10.4235ms | 19.8480ms | 47.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.02K | ±0.96% | 45.4167ms | 81.5730ms | 11.01K |

**Key Insight:** Native Spread is **402.41x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 354.02K
🥈 Immer                ███ 29.68K
🥉 Craft                ██ 21.92K
   Immutability Helper  █ 6.40K
   Immutable.js         █ 728.24
   Seamless Immutable   █ 253.44
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 354.02K | ±0.69% | 2.8247ms | 4.9290ms | 177.01K |
| 🥈 | **Native Map** | 351.56K | ±0.61% | 2.8445ms | 4.4780ms | 175.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.68K | ±0.48% | 33.6961ms | 45.7060ms | 14.84K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.92K | ±0.50% | 45.6292ms | 56.6160ms | 10.96K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.40K | ±0.55% | 156.1885ms | 194.8660ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 728.24 | ±1.15% | 1373.1677ms | 1947.1440ms | 365.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.44 | ±0.73% | 3945.6983ms | 4621.3310ms | 127.00 |

**Key Insight:** Mutative is **1396.86x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.05K
🥈 Craft                ███████████████████████████████████████ 271.22K
🥉 Mutative             █████████████████████████████ 200.97K
   Immutable.js         ███████████████████████ 159.86K
   Immer                ██████████████████ 126.93K
   Seamless Immutable   ███ 18.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.20M | ±0.63% | 0.1612ms | 0.2000ms | 3.10M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.05K | ±0.55% | 3.5965ms | 4.2880ms | 139.03K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 271.22K | ±0.52% | 3.6871ms | 4.3290ms | 135.61K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.97K | ±0.42% | 4.9759ms | 6.1810ms | 100.48K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.86K | ±0.57% | 6.2557ms | 12.2630ms | 79.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.93K | ±0.56% | 7.8781ms | 14.3670ms | 63.47K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.76K | ±0.71% | 53.3070ms | 95.9400ms | 9.38K |

**Key Insight:** Native Spread is **330.73x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T05:34:57.542Z*
