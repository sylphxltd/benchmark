<div align="center">

# Benchmark 📊

**Automated performance benchmarks for popular JavaScript libraries**

[![Automated Daily](https://img.shields.io/badge/Automated-Daily-brightgreen?style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vitest](https://img.shields.io/badge/Vitest-Bench-729B1B?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

**Real-world performance data** • **Daily automation** • **Comprehensive testing** • **Production-ready insights**

[View Benchmarks](#-benchmark-categories) • [Documentation](#-how-it-works) • [Contributing](#-contributing)

</div>

---

## 🚀 Performance Highlights

Real-world benchmark results from automated daily testing:

### State Management (8 libraries tested)

| Library | Overall Score | Performance | Bundle Size |
|---------|---------------|-------------|-------------|
| **Solid Signals** | 98.4/100 | 🥇 Fastest reads (39.9M ops/s) | 4.0 KB |
| **Preact Signals** | 91.5/100 | 🥈 Fastest creation (33.4M ops/s) | 3.0 KB |
| **Zen** | 89.6/100 | 🥉 Excellent balance | 5.3 KB |
| Jotai | 50.0/100 | Fast read/write | 4.3 KB |
| Zustand | 7.4/100 | Smallest bundle | **1.2 KB** |

### Immutability (6 libraries tested)

| Library | Overall Score | Key Strength | Bundle Size |
|---------|---------------|--------------|-------------|
| **Craft** | 73.4/100 | 🥇 1.4-35x faster than immer | 2.76 KB |
| **Mutative** | 57.2/100 | 🥈 Large arrays (356K ops/s) | 7.16 KB |
| **Immutability Helper** | 54.3/100 | 🥉 Lightweight | **1.65 KB** |
| Immer | 24.7/100 | Full features (100% coverage) | 4.70 KB |

---

## 📊 Benchmark Categories

| Category | Description | Libraries | Status | View Results |
|----------|-------------|-----------|--------|--------------|
| **[🗃️ State Management](./benchmarks/state-management/)** | React state management libraries | 8 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/state-management/)** |
| **[🔄 Immutability](./benchmarks/immutability/)** | Immutability helper libraries | 6 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/immutability/)** |
| **[🧭 Router](./benchmarks/router/)** | React routing libraries | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/router/)** |
| **[🎨 CSS Frameworks](./benchmarks/css-frameworks/)** | CSS-in-JS and utility-first CSS frameworks | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/css-frameworks/)** |

Each category includes detailed results, methodology, and comprehensive insights.

---

## 🔬 How It Works

### Automated & Reliable

- **Daily execution** - GitHub Actions runs benchmarks every day
- **Smart triggers** - Only runs when libraries update or tests change
- **Statistical accuracy** - Multiple iterations until significance achieved
- **Real-world scenarios** - Production patterns, not synthetic tests

### Methodology

```
1. Version Detection
   ↓ Check for library updates via npm

2. Benchmark Execution
   ↓ Vitest Bench with statistical rigor

3. Data Collection
   ↓ Ops/sec, variance, mean, p99, bundle sizes

4. Results Generation
   ↓ Automated README with rankings and insights

5. Historical Tracking
   ↓ JSON results for trend analysis
```

### Technologies

- **[Vitest Bench](https://vitest.dev/guide/features.html#benchmarking)** - Fast, reliable benchmarking
- **[Bundlephobia](https://bundlephobia.com)** - Bundle size analysis
- **[GitHub Actions](https://github.com/features/actions)** - Automated execution
- **Node.js v20+** - Runtime environment

---

## 🚀 Quick Start

### View Results

Browse to any category folder to see detailed benchmark results and insights.

### Run Locally

```bash
# Clone repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Run specific category
cd benchmarks/state-management
npm install
npm run benchmark

# Generate README with results
npx tsx ../../scripts/generate-readme.ts .
```

---

## 📈 Results Format

Each category README includes:

- **Library Versions** - Current versions with last updated dates
- **Bundle Sizes** - Minified + Gzipped sizes from Bundlephobia
- **Performance Rankings** - Overall scores using geometric mean
- **Benchmark Results** - Operations/sec, variance, mean time, p99
- **Feature Comparison** - Capability matrices
- **Key Insights** - Performance comparisons and trade-offs
- **Historical Data** - JSON results for trend analysis

---

## 🤝 Contributing

### Adding a New Library

1. Update `package.json` in the category folder
2. Update `library-metadata.json` with GitHub link
3. Add benchmark tests in `src/benchmark.bench.ts`
4. Run benchmarks and generate README
5. Submit PR with results

### Adding a New Category

1. Create directory in `benchmarks/`
2. Copy structure from existing category
3. Add libraries and write real-world tests
4. Update main README table
5. Submit PR with sample results

### Guidelines

- Use **real library APIs** - No synthetic constructs
- Test **production patterns** - Real-world usage
- Include **statistical rigor** - Multiple iterations
- Document **methodology** - Clear test descriptions

---

## 🎯 Key Insights

### State Management

**Performance Tiers:**
- **Tier S**: Solid Signals, Preact Signals, Zen (98-89/100) - Signal-based, exceptional speed
- **Tier A**: Jotai (50/100) - Atom-based, very fast with creation overhead
- **Tier C**: Zustand, Redux Toolkit (7-4/100) - Store-based, predictable but slower

**Trade-offs:**
- **Solid Signals**: Fastest overall, requires Solid.js ecosystem
- **Zen**: Excellent balance, framework-agnostic, 1.45 KB
- **Zustand**: Minimal bundle (1.2 KB), simple API, moderate performance

### Immutability

**Performance Tiers:**
- **Tier S**: Craft (73.4/100) - 1.4-35x faster than immer, 2.76 KB
- **Tier A**: Mutative (57.2/100) - Best for large arrays, 7.16 KB
- **Tier B**: Immutability Helper (54.3/100) - Lightest (1.65 KB)

**Trade-offs:**
- **Craft**: Fastest, Map/Set support, JSON patches, 100% features
- **Mutative**: Excellent large array performance, 78% features
- **Immer**: Industry standard, 100% features, moderate performance

---

## 🗺️ Roadmap

**✅ Completed**
- [x] State management benchmarks (8 libraries)
- [x] Immutability benchmarks (6 libraries)
- [x] Router benchmarks (4 libraries)
- [x] CSS framework benchmarks (4 libraries)
- [x] Automated daily execution
- [x] Historical tracking
- [x] Bundle size analysis

**🚀 Next**
- [ ] Form library benchmarks
- [ ] Animation library benchmarks
- [ ] HTTP client benchmarks
- [ ] Trend visualization dashboard
- [ ] Performance regression alerts

---

## 🤝 Support

[![GitHub Issues](https://img.shields.io/github/issues/SylphxAI/benchmark?style=flat-square)](https://github.com/SylphxAI/benchmark/issues)
[![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?style=flat-square&logo=discord)](https://discord.gg/sylphx)

- 🐛 [Bug Reports](https://github.com/SylphxAI/benchmark/issues)
- 💬 [Discussions](https://github.com/SylphxAI/benchmark/discussions)
- 📖 [Documentation](https://benchmark.sylphx.com)
- 📧 [Email](mailto:hi@sylphx.com)

**Show Your Support:**
⭐ Star • 👀 Watch • 🐛 Report bugs • 💡 Suggest features • 🔀 Contribute

---

## 📄 License

MIT © [Sylphx](https://sylphx.com)

---

## 🙏 Credits

Built with:
- [Vitest](https://vitest.dev) - Fast testing framework
- [Bundlephobia](https://bundlephobia.com) - Bundle size analysis
- [GitHub Actions](https://github.com/features/actions) - Automation

Special thanks to the open source community ❤️

---

<p align="center">
  <strong>Real-world benchmarks. Daily automation. Production-ready insights.</strong>
  <br>
  <sub>The performance testing framework that actually measures what matters</sub>
  <br><br>
  <a href="https://sylphx.com">sylphx.com</a> •
  <a href="https://x.com/SylphxAI">@SylphxAI</a> •
  <a href="mailto:hi@sylphx.com">hi@sylphx.com</a>
</p>
