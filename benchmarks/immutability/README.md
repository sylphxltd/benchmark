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
- **Last Run:** 5:34:57 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.2/100 | 77.3% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 43.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 217.33K
🥈 Immer                █████████████████████ 116.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 217.33K | ±2.00% | 4.6013ms | 9.1270ms | 108.67K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 116.48K | ±1.71% | 8.5852ms | 17.9340ms | 58.24K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 978.06K
🥈 Immer                █████ 130.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 978.06K | ±0.17% | 1.0224ms | 1.3220ms | 489.03K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.84K | ±1.64% | 7.6428ms | 13.8260ms | 65.42K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.22K
🥈 Immer                ██████████████ 61.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 176.22K | ±1.64% | 5.6747ms | 11.0810ms | 88.11K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.12K | ±1.56% | 16.3618ms | 30.4070ms | 30.60K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 746.83K
🥈 Mutative             ██████████████████████████ 479.45K
🥉 Immer                ██████████ 178.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 746.83K | ±1.60% | 1.3390ms | 3.0360ms | 373.41K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.45K | ±0.65% | 2.0857ms | 2.8750ms | 239.73K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.22K | ±0.92% | 5.6111ms | 9.2570ms | 89.11K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 415.12K
🥉 Immer                █████ 158.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.28M | ±0.66% | 0.7818ms | 1.1320ms | 639.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 415.12K | ±0.38% | 2.4090ms | 3.3270ms | 207.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.91K | ±0.29% | 6.2930ms | 9.3070ms | 79.45K |

**Key Insight:** Craft is **8.05x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 878.86K
🥈 Mutative             █████████████████████ 457.42K
🥉 Immer                ████████ 170.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 878.86K | ±0.38% | 1.1378ms | 1.4430ms | 439.43K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.42K | ±0.37% | 2.1862ms | 2.5150ms | 228.71K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 170.56K | ±0.59% | 5.8632ms | 11.0210ms | 85.28K |

**Key Insight:** Craft is **5.15x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 861.64K
🥈 Mutative             █████████████████████ 449.20K
🥉 Immer                ████████ 180.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 861.64K | ±0.35% | 1.1606ms | 1.4420ms | 430.82K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.20K | ±0.40% | 2.2262ms | 2.6050ms | 224.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.48K | ±0.32% | 5.5409ms | 9.2880ms | 90.24K |

**Key Insight:** Craft is **4.77x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.19K
🥈 Mutative             ████████████████████████████████ 149.31K
🥉 Immer                █████████████████ 80.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 184.19K | ±0.50% | 5.4291ms | 7.2130ms | 92.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.31K | ±0.51% | 6.6973ms | 10.8700ms | 74.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.48K | ±0.44% | 12.4262ms | 22.7720ms | 40.24K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.09K
🥈 Mutative             █████████████ 75.97K
🥉 Immer                ██ 13.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.09K | ±0.44% | 4.3650ms | 5.0600ms | 114.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.97K | ±0.48% | 13.1636ms | 22.6230ms | 37.98K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.63K | ±0.31% | 73.3862ms | 89.1370ms | 6.81K |

**Key Insight:** Craft is **16.81x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.63K
🥈 Immer                █████████████ 71.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.63K | ±0.38% | 4.4126ms | 6.1820ms | 113.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.62K | ±0.29% | 13.9620ms | 24.3850ms | 35.81K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  █████████████████████████████████████ 989.15K
🥉 Mutative             ████████████████████████████████████ 973.02K
   Craft                ████████████████████████████████████ 966.93K
   Immer                ██████████████████████████ 700.89K
   Seamless Immutable   █████ 130.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.59M | ±0.09% | 0.0685ms | 0.1000ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.13% | 0.9239ms | 1.0520ms | 541.20K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 989.15K | ±0.32% | 1.0110ms | 1.7330ms | 494.58K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 973.02K | ±0.38% | 1.0277ms | 1.7130ms | 486.51K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 966.93K | ±2.49% | 1.0342ms | 2.6950ms | 483.47K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 700.89K | ±1.71% | 1.4268ms | 3.2470ms | 350.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.81K | ±0.26% | 7.6447ms | 13.7860ms | 65.41K |

**Key Insight:** Native Spread is **111.55x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 526.45K
🥈 Mutative             ██████████████████████████████ 397.92K
🥉 Craft                ██████████████████████████ 348.33K
   Immutable.js         ██████████████████ 237.55K
   Immer                ████████████ 152.18K
   Seamless Immutable   ███ 37.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.63M | ±0.15% | 0.0860ms | 0.1400ms | 5.82M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 526.45K | ±0.30% | 1.8995ms | 2.5140ms | 263.22K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 397.92K | ±0.37% | 2.5131ms | 4.9300ms | 198.96K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 348.33K | ±2.61% | 2.8709ms | 5.2700ms | 174.16K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 237.55K | ±0.21% | 4.2096ms | 4.8490ms | 118.78K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 152.18K | ±1.96% | 6.5712ms | 15.1480ms | 76.09K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.65K | ±0.45% | 26.5617ms | 37.3900ms | 18.82K |

**Key Insight:** Native Spread is **308.92x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.78M
🥈 Immutability Helper  ████████████████████████████████ 1.43M
🥉 Craft                ████████████ 519.46K
   Mutative             ██████████ 427.88K
   Immer                ██████ 280.84K
   Seamless Immutable   █ 62.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.13M | ±1.03% | 0.0825ms | 0.1200ms | 6.06M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.78M | ±1.91% | 0.5613ms | 0.9220ms | 890.75K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.33% | 0.6999ms | 0.7520ms | 714.36K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 519.46K | ±0.38% | 1.9251ms | 2.3940ms | 259.73K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.88K | ±0.40% | 2.3371ms | 2.7260ms | 213.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.84K | ±0.33% | 3.5607ms | 5.9110ms | 140.42K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.80K | ±0.29% | 15.9229ms | 25.7380ms | 31.40K |

**Key Insight:** Native Spread is **193.10x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 801.39K
🥈 Immutability Helper  █████████████████████████████ 587.74K
🥉 Craft                ████████████████ 324.18K
   Mutative             ███████████ 215.73K
   Immer                ███████ 142.63K
   Seamless Immutable   ███ 62.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.43M | ±1.04% | 0.0805ms | 0.1100ms | 6.21M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 801.39K | ±0.62% | 1.2478ms | 1.5820ms | 400.69K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 587.74K | ±0.21% | 1.7014ms | 1.7930ms | 293.87K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 324.18K | ±0.32% | 3.0847ms | 4.6890ms | 162.23K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.73K | ±0.30% | 4.6354ms | 8.9960ms | 107.87K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.63K | ±0.39% | 7.0110ms | 13.7950ms | 71.32K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.14K | ±0.33% | 16.0928ms | 25.4580ms | 31.07K |

**Key Insight:** Native Filter is **199.98x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 476.29K
🥈 Mutative             ███████████████████████████████████████ 459.46K
🥉 Immutability Helper  ██████████████████████████████████ 399.90K
   Immer                ████████████████████████ 280.33K
   Immutable.js         ███████████████ 179.26K
   Seamless Immutable   ███ 31.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.37M | ±0.99% | 0.0879ms | 0.1310ms | 5.69M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 476.29K | ±0.53% | 2.0996ms | 2.4750ms | 238.14K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 459.46K | ±0.66% | 2.1765ms | 2.5550ms | 229.73K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.90K | ±0.43% | 2.5006ms | 2.9750ms | 199.95K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 280.33K | ±0.23% | 3.5672ms | 4.9090ms | 140.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 179.26K | ±0.63% | 5.5785ms | 6.1420ms | 89.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.72K | ±0.53% | 31.5273ms | 41.6280ms | 15.86K |

**Key Insight:** Native Map is **358.58x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 315.29K
🥈 Craft                ██████████████████████████████████ 266.43K
🥉 Mutative             ███████████████████████████ 214.91K
   Immutable.js         ██████████████████████ 171.89K
   Immer                █████████████ 100.35K
   Seamless Immutable   ███ 22.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.17M | ±0.65% | 0.1090ms | 0.1410ms | 4.59M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 315.29K | ±0.37% | 3.1717ms | 3.5370ms | 157.65K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 266.43K | ±0.44% | 3.7533ms | 6.3820ms | 133.22K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.91K | ±0.44% | 4.6531ms | 5.2900ms | 107.45K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.89K | ±0.27% | 5.8178ms | 11.1310ms | 85.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 100.35K | ±0.39% | 9.9652ms | 19.1160ms | 50.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.31K | ±0.39% | 44.8277ms | 81.4830ms | 11.15K |

**Key Insight:** Native Spread is **411.27x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 363.35K
🥈 Immer                ███ 29.87K
🥉 Craft                ██ 21.50K
   Immutability Helper  █ 6.26K
   Immutable.js         █ 654.74
   Seamless Immutable   █ 257.03
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 363.35K | ±0.81% | 2.7522ms | 4.4990ms | 181.68K |
| 🥈 | **Native Map** | 354.75K | ±0.65% | 2.8189ms | 3.2460ms | 177.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.87K | ±0.42% | 33.4838ms | 43.1100ms | 14.93K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.50K | ±0.50% | 46.5140ms | 96.2010ms | 10.75K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.26K | ±0.43% | 159.7474ms | 180.1680ms | 3.13K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 654.74 | ±0.96% | 1527.3248ms | 1996.6640ms | 328.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 257.03 | ±0.57% | 3890.6543ms | 4418.1250ms | 129.00 |

**Key Insight:** Mutative is **1413.67x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.08K
🥈 Craft                █████████████████████████████████████ 254.90K
🥉 Mutative             █████████████████████████████ 199.07K
   Immutable.js         ███████████████████████ 158.43K
   Immer                ██████████████████ 128.12K
   Seamless Immutable   ███ 19.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.05M | ±1.05% | 0.1654ms | 0.2200ms | 3.02M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.08K | ±0.39% | 3.5832ms | 5.0190ms | 139.54K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 254.90K | ±0.45% | 3.9232ms | 4.3680ms | 127.45K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.07K | ±0.50% | 5.0233ms | 6.4120ms | 99.54K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.43K | ±0.64% | 6.3119ms | 9.3380ms | 79.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.12K | ±0.48% | 7.8054ms | 16.0310ms | 64.06K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.08K | ±0.51% | 52.4004ms | 63.7390ms | 9.54K |

**Key Insight:** Native Spread is **316.78x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T05:40:25.939Z*
