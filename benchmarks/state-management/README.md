# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 6, 2025
- **Last Run:** 5:14:06 PM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Last Updated |
|---------|---------|-------------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.3.2` | Dec 6, 2024 |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | Dec 6, 2024 |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.0.0` | Dec 6, 2024 |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | Dec 6, 2024 |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | Dec 6, 2024 |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | Nov 6, 2025 |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | Dec 6, 2024 |
| **[valtio](https://github.com/pmndrs/valtio)** | `v1.13.2` | Nov 6, 2025 |
| **[zustand](https://github.com/pmndrs/zustand)** | `v4.5.7` | Nov 6, 2025 |

## 🏆 Top Performers

Quick overview of category winners:

| Category | 🥇 Winner | Ops/sec | Runner-up |
|----------|-----------|---------|----------|
| **Simple Increment** | [Preact Signals](https://github.com/preactjs/signals) | 28.94M | [Zen](https://github.com/sylphxltd/zen) (27.00M) |
| **Computed Access** | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | 27.02M | [Solid Signals](https://github.com/solidjs/solid) (23.71M) |
| **Nested Update** | [Zen](https://github.com/sylphxltd/zen) | 23.01M | [Solid Signals](https://github.com/solidjs/solid) (21.96M) |
| **Array Push** | [MobX](https://github.com/mobxjs/mobx) | 484.04K | [Valtio](https://github.com/pmndrs/valtio) (265.04K) |
| **Async Operations** | [Solid Signals](https://github.com/solidjs/solid) - Async Fetch | 885.43 | [Zen](https://github.com/sylphxltd/zen) - Async Fetch (878.61) |
| **Loading State Toggle** | [Zen](https://github.com/sylphxltd/zen) | 29.54M | [Solid Signals](https://github.com/solidjs/solid) (25.26M) |
| **Multiple Subscriptions (10 subscribers)** | [Solid Signals](https://github.com/solidjs/solid) | 12.44M | [Preact Signals](https://github.com/preactjs/signals) (1.53M) |
| **Batch Updates (3 state changes)** | [Solid Signals](https://github.com/solidjs/solid) | 20.60M | [Preact Signals](https://github.com/preactjs/signals) (18.80M) |
| **Array Filter** | [Solid Signals](https://github.com/solidjs/solid) | 4.37K | [Preact Signals](https://github.com/preactjs/signals) (4.27K) |
| **Array Remove** | [Zen](https://github.com/sylphxltd/zen) | 12.02K | [Jotai](https://github.com/pmndrs/jotai) (11.57K) |
| **Array Update** | [Zen](https://github.com/sylphxltd/zen) | 11.66K | [Jotai](https://github.com/pmndrs/jotai) (5.04K) |
| **Deep Nested Update (5 levels)** | [Solid Signals](https://github.com/solidjs/solid) | 22.08M | [Preact Signals](https://github.com/preactjs/signals) (20.38M) |
| **Large State Update (1000 items)** | [Solid Signals](https://github.com/solidjs/solid) | 276.57K | [Preact Signals](https://github.com/preactjs/signals) (258.31K) |

## 📊 Detailed Results

### Simple Increment

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 28.94M | ±0.07% | 0.0346ms | 0.0420ms | 14.47M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 27.00M | ±1.24% | 0.0370ms | 0.0830ms | 13.50M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 26.19M | ±0.20% | 0.0382ms | 0.0840ms | 13.09M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 4.62M | ±0.96% | 0.2166ms | 0.2920ms | 2.31M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.41M | ±0.23% | 0.2265ms | 0.4590ms | 2.21M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.35M | ±3.27% | 0.7419ms | 1.7500ms | 673.98K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 849.68K | ±0.21% | 1.1769ms | 1.4590ms | 424.84K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 362.39K | ±0.17% | 2.7595ms | 3.6250ms | 181.19K |

**Key Insight:** Preact Signals is **79.86x faster** than Zustand in this category.

### Computed Access

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 27.02M | ±0.97% | 0.0370ms | 0.0830ms | 13.51M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 23.71M | ±0.34% | 0.0422ms | 0.0840ms | 11.85M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 22.37M | ±0.42% | 0.0447ms | 0.1250ms | 11.19M |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 21.03M | ±0.28% | 0.0475ms | 0.1250ms | 10.52M |
| 📍 | **[Zen](https://github.com/sylphxltd/zen)** | 20.65M | ±0.74% | 0.0484ms | 0.0840ms | 10.32M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.06M | ±0.14% | 0.0586ms | 0.1250ms | 8.53M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 5.96M | ±4.18% | 0.1678ms | 0.3340ms | 2.98M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.41M | ±0.37% | 0.4156ms | 0.6250ms | 1.20M |

**Key Insight:** Redux Toolkit is **11.23x faster** than Jotai in this category.

### Nested Update

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 23.01M | ±0.06% | 0.0435ms | 0.0840ms | 11.50M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.96M | ±0.12% | 0.0455ms | 0.0840ms | 10.98M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 18.84M | ±4.01% | 0.0531ms | 0.1250ms | 9.42M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 4.48M | ±1.43% | 0.2231ms | 0.4580ms | 2.24M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.28M | ±0.37% | 0.2336ms | 0.3750ms | 2.14M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.38M | ±7.46% | 0.7249ms | 3.1670ms | 689.78K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 413.84K | ±0.57% | 2.4164ms | 5.1250ms | 206.92K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 229.33K | ±11.26% | 4.3605ms | 20.7920ms | 114.67K |

**Key Insight:** Zen is **100.33x faster** than Zustand in this category.

### Array Push

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 484.04K | ±7.73% | 2.0659ms | 2.1660ms | 243.89K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 265.04K | ±15.56% | 3.7729ms | 4.8330ms | 134.46K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 16.14K | ±10.36% | 61.9726ms | 102.7080ms | 8.07K |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 15.51K | ±11.00% | 64.4836ms | 103.9580ms | 7.75K |
| 📍 | **[Solid Signals](https://github.com/solidjs/solid)** | 14.32K | ±12.18% | 69.8445ms | 119.5000ms | 7.16K |
| 📍 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.19K | ±12.44% | 70.4732ms | 118.7080ms | 7.09K |
| 📍 | **[Zen](https://github.com/sylphxltd/zen)** | 13.96K | ±12.54% | 71.6137ms | 125.9170ms | 6.98K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 6.51K | ±1.89% | 153.6822ms | 430.1670ms | 3.25K |

**Key Insight:** MobX is **74.39x faster** than Redux Toolkit in this category.

### Async Operations

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 885.43 | ±1.46% | 1129.3886ms | 1204.7080ms | 443.00 |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 878.61 | ±1.18% | 1138.1598ms | 1201.2500ms | 440.00 |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 872.81 | ±1.26% | 1145.7255ms | 1232.9160ms | 437.00 |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 872.46 | ±1.19% | 1146.1875ms | 1224.8750ms | 437.00 |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 870.60 | ±1.18% | 1148.6270ms | 1196.1660ms | 436.00 |
| 📍 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 863.51 | ±0.90% | 1158.0669ms | 1321.8750ms | 432.00 |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 860.66 | ±0.90% | 1161.8966ms | 1226.4170ms | 431.00 |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 858.02 | ±0.91% | 1165.4689ms | 1263.2910ms | 430.00 |

**Key Insight:** Solid Signals - Async Fetch is **1.03x faster** than Redux Toolkit - Async Fetch in this category.

### Loading State Toggle

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 29.54M | ±0.06% | 0.0339ms | 0.0830ms | 14.77M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.26M | ±0.05% | 0.0396ms | 0.0840ms | 12.63M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 23.40M | ±0.32% | 0.0427ms | 0.0840ms | 11.70M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.87M | ±0.62% | 0.1455ms | 0.2500ms | 3.44M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 6.33M | ±0.58% | 0.1580ms | 0.2500ms | 3.16M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.83M | ±14.85% | 0.5473ms | 1.4170ms | 913.52K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01M | ±0.94% | 0.9884ms | 1.3340ms | 505.88K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 365.31K | ±0.61% | 2.7374ms | 3.3750ms | 182.65K |

**Key Insight:** Zen is **80.86x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 12.44M | ±0.25% | 0.0804ms | 0.1250ms | 6.22M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.53M | ±1.54% | 0.6524ms | 0.8750ms | 766.39K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 1.36M | ±1.79% | 0.7345ms | 1.0000ms | 680.78K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 250.09K | ±8.35% | 3.9986ms | 4.9170ms | 125.05K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 207.34K | ±17.98% | 4.8231ms | 14.3750ms | 106.04K |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 145.67K | ±3.71% | 6.8647ms | 19.6670ms | 72.84K |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 124.70K | ±14.91% | 8.0195ms | 8.3330ms | 62.35K |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.75 | ±2.49% | 53326.0585ms | 55745.9170ms | 10.00 |

**Key Insight:** Solid Signals is **663423.83x faster** than Valtio in this category.

### Batch Updates (3 state changes)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 20.60M | ±0.13% | 0.0485ms | 0.1250ms | 10.30M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 18.80M | ±0.41% | 0.0532ms | 0.1250ms | 9.40M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 18.57M | ±1.04% | 0.0539ms | 0.1250ms | 9.28M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.36M | ±0.74% | 0.4242ms | 0.5420ms | 1.18M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 2.16M | ±0.51% | 0.4620ms | 0.5840ms | 1.08M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 563.62K | ±14.26% | 1.7742ms | 2.8340ms | 289.68K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 540.62K | ±1.55% | 1.8497ms | 2.2500ms | 270.31K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 377.99K | ±0.75% | 2.6456ms | 3.5840ms | 188.99K |

**Key Insight:** Solid Signals is **54.50x faster** than Zustand in this category.

### Array Filter

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.37K | ±6.99% | 228.6215ms | 278.6250ms | 2.19K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.27K | ±7.16% | 234.3313ms | 296.2910ms | 2.13K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.23K | ±6.83% | 236.1957ms | 318.4590ms | 2.13K |
| 📍 | **[Zen](https://github.com/sylphxltd/zen)** | 4.15K | ±7.67% | 240.7688ms | 294.1670ms | 2.08K |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.15K | ±7.09% | 241.1337ms | 291.7090ms | 2.07K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 401.20 | ±1.36% | 2492.5288ms | 3426.6250ms | 201.00 |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 11.24 | ±1.69% | 88961.5416ms | 93270.6250ms | 10.00 |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.49 | ±1.18% | 222863.9333ms | 228956.6250ms | 10.00 |

**Key Insight:** Solid Signals is **974.82x faster** than Valtio in this category.

### Array Remove

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12.02K | ±0.16% | 83.1732ms | 95.7920ms | 6.01K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.57K | ±0.13% | 86.4475ms | 98.4580ms | 5.78K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.50K | ±15.19% | 181.8817ms | 232.5830ms | 2.75K |
| 📍 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.28K | ±17.13% | 189.5183ms | 235.3750ms | 2.64K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.56K | ±17.56% | 219.1185ms | 755.6250ms | 2.28K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±1.85% | 969.2746ms | 1898.0000ms | 516.00 |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 52.64 | ±0.64% | 18995.6837ms | 19752.3750ms | 27.00 |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 14.01 | ±1.88% | 71376.1415ms | 74550.0830ms | 10.00 |

**Key Insight:** Zen is **858.16x faster** than MobX in this category.

### Array Update

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.66K | ±0.17% | 85.7505ms | 97.9170ms | 5.83K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.04K | ±14.48% | 198.3048ms | 252.8750ms | 2.52K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.98K | ±15.03% | 200.8313ms | 250.4170ms | 2.49K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.96K | ±14.97% | 201.5034ms | 255.3330ms | 2.48K |
| 📍 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.63K | ±16.49% | 215.8739ms | 412.7500ms | 2.32K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.06K | ±1.49% | 945.3476ms | 1798.5840ms | 529.00 |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 52.74 | ±0.86% | 18960.4166ms | 20511.9170ms | 27.00 |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 13.07 | ±11.07% | 76520.9625ms | 104283.0830ms | 10.00 |

**Key Insight:** Zen is **892.37x faster** than MobX in this category.

### Deep Nested Update (5 levels)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.08M | ±0.25% | 0.0453ms | 0.0840ms | 11.04M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 20.38M | ±0.62% | 0.0491ms | 0.0840ms | 10.19M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 20.09M | ±0.28% | 0.0498ms | 0.0840ms | 10.04M |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.29M | ±0.83% | 0.2333ms | 0.2920ms | 2.14M |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 2.46M | ±0.68% | 0.4062ms | 0.5000ms | 1.23M |
| 📍 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.81M | ±1.23% | 0.5520ms | 1.4170ms | 905.86K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 394.86K | ±0.79% | 2.5325ms | 3.1250ms | 197.43K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 227.95K | ±1.00% | 4.3870ms | 5.3330ms | 113.97K |

**Key Insight:** Solid Signals is **96.84x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 276.57K | ±1.07% | 3.6157ms | 6.4170ms | 138.29K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 258.31K | ±1.19% | 3.8713ms | 7.2500ms | 129.16K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 223.87K | ±1.05% | 4.4668ms | 7.1660ms | 111.94K |
| 📍 | **[Zen](https://github.com/sylphxltd/zen)** | 209.51K | ±0.98% | 4.7731ms | 10.9580ms | 104.75K |
| 📍 | **[Zustand](https://github.com/pmndrs/zustand)** | 153.69K | ±1.00% | 6.5066ms | 8.7920ms | 76.85K |
| 📍 | **[Valtio](https://github.com/pmndrs/valtio)** | 72.91K | ±0.64% | 13.7157ms | 27.2080ms | 36.45K |
| 📍 | **[MobX](https://github.com/mobxjs/mobx)** | 27.80K | ±1.10% | 35.9771ms | 73.6670ms | 13.90K |
| 📍 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.84K | ±2.40% | 260.1744ms | 493.1670ms | 1.92K |

**Key Insight:** Solid Signals is **71.96x faster** than Redux Toolkit in this category.

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

*Last generated: 2025-11-06T17:40:16.147Z*
