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
- **Last Run:** 6:53:03 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 55.9/100 | 76.8% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.0/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.8/100 | 45.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 217.64K
🥈 Immer                █████████████████████ 112.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 217.64K | ±2.01% | 4.5948ms | 9.0870ms | 108.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.85K | ±1.67% | 8.8612ms | 24.7060ms | 56.43K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 983.64K
🥈 Immer                █████ 130.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 983.64K | ±0.42% | 1.0166ms | 1.7230ms | 491.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.63K | ±1.41% | 7.6552ms | 16.9620ms | 65.32K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.81K
🥈 Immer                ██████████████ 60.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 175.81K | ±1.45% | 5.6881ms | 11.3110ms | 87.90K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.35K | ±1.48% | 16.5687ms | 29.9160ms | 30.18K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 746.90K
🥈 Mutative             █████████████████████████ 465.77K
🥉 Immer                ██████████ 178.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 746.90K | ±1.61% | 1.3389ms | 3.0060ms | 373.45K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 465.77K | ±0.66% | 2.1470ms | 2.7950ms | 232.88K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.28K | ±0.90% | 5.6093ms | 9.3380ms | 89.14K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 423.60K
🥉 Immer                █████ 157.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.64% | 0.7857ms | 1.2820ms | 636.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.60K | ±0.40% | 2.3607ms | 3.3470ms | 211.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.23K | ±0.34% | 6.3603ms | 10.8600ms | 78.61K |

**Key Insight:** Craft is **8.09x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 875.67K
🥈 Mutative             ████████████████████ 446.70K
🥉 Immer                ████████ 167.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 875.67K | ±0.37% | 1.1420ms | 1.4730ms | 437.84K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 446.70K | ±0.38% | 2.2386ms | 2.6850ms | 223.35K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.52K | ±0.54% | 5.9696ms | 12.8140ms | 83.76K |

**Key Insight:** Craft is **5.23x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 864.22K
🥈 Mutative             █████████████████████ 445.17K
🥉 Immer                ████████ 181.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 864.22K | ±0.36% | 1.1571ms | 1.4330ms | 432.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.17K | ±0.39% | 2.2463ms | 2.6950ms | 222.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.65K | ±0.31% | 5.5052ms | 7.6440ms | 90.82K |

**Key Insight:** Craft is **4.76x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.10K
🥈 Mutative             █████████████████████████████████ 149.86K
🥉 Immer                ██████████████████ 80.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 183.10K | ±0.50% | 5.4616ms | 8.3560ms | 91.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.86K | ±0.49% | 6.6729ms | 12.7940ms | 74.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.11K | ±0.43% | 12.4833ms | 23.0930ms | 40.06K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.30K
🥈 Mutative             █████████████ 76.47K
🥉 Immer                ██ 14.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.30K | ±0.47% | 4.3610ms | 5.3400ms | 114.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.47K | ±0.48% | 13.0778ms | 22.7320ms | 38.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 14.02K | ±0.34% | 71.3387ms | 91.4300ms | 7.01K |

**Key Insight:** Craft is **16.36x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.71K
🥈 Immer                █████████████ 70.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 223.71K | ±0.37% | 4.4701ms | 5.2100ms | 111.86K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.50K | ±0.31% | 14.1842ms | 25.6880ms | 35.25K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  ████████████████████████████████████ 966.72K
🥉 Mutative             ████████████████████████████████████ 964.47K
   Craft                ███████████████████████████████████ 929.32K
   Immer                ██████████████████████████ 704.28K
   Seamless Immutable   █████ 128.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.53M | ±0.09% | 0.0688ms | 0.1100ms | 7.27M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.14% | 0.9357ms | 1.1220ms | 534.38K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 966.72K | ±0.43% | 1.0344ms | 1.2120ms | 483.36K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 964.47K | ±0.40% | 1.0368ms | 1.5620ms | 482.23K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 929.32K | ±2.48% | 1.0761ms | 2.7050ms | 464.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 704.28K | ±1.73% | 1.4199ms | 3.2360ms | 352.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.71K | ±0.37% | 7.7696ms | 13.0550ms | 64.35K |

**Key Insight:** Native Spread is **112.92x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 516.57K
🥈 Mutative             ██████████████████████████████ 382.88K
🥉 Craft                ██████████████████████████ 340.91K
   Immutable.js         ██████████████████ 238.24K
   Immer                ███████████ 147.72K
   Seamless Immutable   ███ 37.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.73M | ±0.17% | 0.0852ms | 0.1210ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 516.57K | ±0.42% | 1.9358ms | 2.3640ms | 258.29K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 382.88K | ±0.80% | 2.6118ms | 4.9000ms | 191.44K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 340.91K | ±2.56% | 2.9333ms | 5.3190ms | 170.46K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 238.24K | ±0.37% | 4.1975ms | 4.8490ms | 119.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 147.72K | ±2.17% | 6.7696ms | 13.5150ms | 73.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.83K | ±0.35% | 26.4365ms | 35.9870ms | 18.91K |

**Key Insight:** Native Spread is **310.16x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  ████████████████████████████████ 1.37M
🥉 Craft                ████████████ 499.88K
   Mutative             ██████████ 423.28K
   Immer                ██████ 271.17K
   Seamless Immutable   █ 60.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.45M | ±1.25% | 0.0874ms | 0.1110ms | 5.72M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±0.80% | 0.5807ms | 0.8220ms | 861.01K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.66% | 0.7286ms | 0.8310ms | 686.28K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 499.88K | ±0.67% | 2.0005ms | 2.5250ms | 249.94K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 423.28K | ±0.74% | 2.3625ms | 2.8760ms | 211.64K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 271.17K | ±0.56% | 3.6877ms | 8.5160ms | 135.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.31K | ±0.38% | 16.5806ms | 26.7200ms | 30.16K |

**Key Insight:** Native Spread is **189.78x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 804.65K
🥈 Immutability Helper  ████████████████████████████ 567.04K
🥉 Craft                ████████████████ 313.40K
   Mutative             ███████████ 212.77K
   Immer                ███████ 141.10K
   Seamless Immutable   ███ 60.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.66M | ±0.98% | 0.0790ms | 0.1200ms | 6.33M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 804.65K | ±0.83% | 1.2428ms | 1.6530ms | 402.47K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 567.04K | ±0.37% | 1.7636ms | 1.8640ms | 283.52K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 313.40K | ±0.81% | 3.1908ms | 3.7370ms | 156.70K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 212.77K | ±0.90% | 4.7000ms | 5.3300ms | 106.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.10K | ±0.72% | 7.0873ms | 14.4060ms | 70.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.58K | ±1.05% | 16.5060ms | 25.6470ms | 30.29K |

**Key Insight:** Native Filter is **209.04x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 490.74K
🥈 Mutative             █████████████████████████████████████ 449.18K
🥉 Immutability Helper  ████████████████████████████████ 395.91K
   Immer                ███████████████████████ 276.21K
   Immutable.js         ████████████████ 195.25K
   Seamless Immutable   ███ 32.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.67M | ±0.63% | 0.0857ms | 0.1300ms | 5.83M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 490.74K | ±0.36% | 2.0377ms | 2.4640ms | 245.37K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 449.18K | ±0.36% | 2.2263ms | 3.1060ms | 224.59K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.91K | ±0.18% | 2.5258ms | 3.2460ms | 197.95K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 276.21K | ±0.28% | 3.6205ms | 7.3730ms | 138.10K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 195.25K | ±0.41% | 5.1217ms | 5.7610ms | 97.62K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 32.26K | ±0.32% | 30.9998ms | 40.7250ms | 16.13K |

**Key Insight:** Native Map is **361.74x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.68K
🥈 Craft                ██████████████████████████████████ 267.02K
🥉 Mutative             ████████████████████████████ 215.26K
   Immutable.js         ███████████████████████ 182.87K
   Immer                ████████████ 96.22K
   Seamless Immutable   ███ 22.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.09M | ±0.66% | 0.1101ms | 0.1400ms | 4.54M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.68K | ±0.44% | 3.1982ms | 3.6270ms | 156.34K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 267.02K | ±0.44% | 3.7451ms | 4.4280ms | 133.51K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.26K | ±0.45% | 4.6456ms | 5.6910ms | 107.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 182.87K | ±0.48% | 5.4683ms | 6.5420ms | 91.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.22K | ±0.45% | 10.3925ms | 19.9670ms | 48.11K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.34K | ±0.38% | 44.7681ms | 81.2910ms | 11.17K |

**Key Insight:** Native Spread is **406.77x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 362.35K
🥈 Immer                ███ 29.74K
🥉 Craft                ██ 21.80K
   Immutability Helper  █ 6.35K
   Immutable.js         █ 745.81
   Seamless Immutable   █ 255.18
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 362.35K | ±0.81% | 2.7598ms | 3.7180ms | 181.17K |
| 🥈 | **Native Map** | 351.61K | ±0.71% | 2.8440ms | 3.5670ms | 175.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.74K | ±0.62% | 33.6301ms | 43.7920ms | 14.87K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.80K | ±0.53% | 45.8738ms | 55.4930ms | 10.90K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.35K | ±0.62% | 157.4074ms | 186.1360ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 745.81 | ±1.25% | 1340.8306ms | 1996.8450ms | 373.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.18 | ±0.93% | 3918.7644ms | 4668.7370ms | 128.00 |

**Key Insight:** Mutative is **1419.95x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.91K
🥈 Craft                ███████████████████████████████████████ 273.09K
🥉 Mutative             ████████████████████████████ 197.18K
   Immutable.js         ████████████████████████ 168.04K
   Immer                ██████████████████ 125.92K
   Seamless Immutable   ███ 19.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.49M | ±1.05% | 0.1540ms | 0.1800ms | 3.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.91K | ±0.44% | 3.5854ms | 3.9870ms | 139.45K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 273.09K | ±0.51% | 3.6618ms | 4.2790ms | 136.55K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.18K | ±0.46% | 5.0716ms | 6.8030ms | 98.59K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.04K | ±0.67% | 5.9509ms | 10.7100ms | 84.02K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.92K | ±0.53% | 7.9418ms | 13.9050ms | 62.96K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.16K | ±0.47% | 52.1954ms | 64.6700ms | 9.58K |

**Key Insight:** Native Spread is **338.83x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T07:10:46.321Z*
