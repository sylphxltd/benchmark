# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **8 tested libraries** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

### 🏆 Overall Performance

Based on aggregated results across all test categories:

| Rank | Library | Best Category | Peak Performance | Avg Performance |
|------|---------|--------------|------------------|---------------|
| 1 | **Solid Signals** | write | ~28.4M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | write | ~27.8M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Preact Signals** | write | ~24.9M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Zen** | write | ~24.1M ops/sec | ⚡⚡⚡⚡ |
| 5 | **Valtio** | write | ~3.4M ops/sec | ⚡⚡⚡ |
| 6 | **MobX** | write | ~2.8M ops/sec | ⚡⚡⚡ |
| 7 | **Redux Toolkit** | write | ~765K ops/sec | ⚡⚡ |
| 8 | **Zustand** | write | ~281K ops/sec | ⚡⚡ |


### ✏️ Write Operations Ranking

[📊 View Detailed Results →](groups/write/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Solid Signals** | ~28.4M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | ~27.8M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Solid Signals** | ~25.5M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Preact Signals** | ~24.9M ops/sec | ⚡⚡⚡⚡ |
| 5 | **Zen** | ~24.1M ops/sec | ⚡⚡⚡⚡ |
| 6 | **Jotai** | ~10.3M ops/sec | ⚡⚡⚡⚡ |
| 7 | **Preact Signals** | ~9.3M ops/sec | ⚡⚡⚡ |
| 8 | **Zen** | ~7.1M ops/sec | ⚡⚡⚡ |

### 📖 Read Operations Ranking

[📊 View Detailed Results →](groups/read/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:read`

### 🔄 Async Operations Ranking

[📊 View Detailed Results →](groups/async/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:async`

### 📝 Form State Ranking

[📊 View Detailed Results →](groups/form/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:form`

### 🧠 Memory Management Ranking

[📊 View Detailed Results →](groups/memory/)

| Rank | Library | Memory Usage | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:memory`

### 💾 Cache Performance Ranking

[📊 View Detailed Results →](groups/cache/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:cache`


---

## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [✏️ Write Operations](groups/write/) | State mutation and update performance | ✅ Results Available |
| [📖 Read Operations](groups/read/) | State access performance across different scales | ⏳ Pending |
| [🔄 Async Operations](groups/async/) | Promise handling and async patterns | ⏳ Pending |
| [📝 Form State](groups/form/) | Complex form state management | ⏳ Pending |
| [🧠 Memory Management](groups/memory/) | Memory usage and allocation patterns | ⏳ Pending |
| [💾 Cache Performance](groups/cache/) | Memoization and caching efficiency | ⏳ Pending |

> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis


## 🎯 Quick Start

```bash
# Install dependencies
npm install

# Run all benchmarks
npm run benchmark

# Run specific category
npm run benchmark:write
npm run benchmark:read

# Generate reports
npm run extract-results
```

## 📚 Libraries Tested

- **Solid Signals**
- **Jotai**
- **Preact Signals**
- **Zen**
- **Valtio**
- **MobX**
- **Redux Toolkit**
- **Zustand**

## 🏗️ Architecture

This benchmark suite features an **auto-discovery architecture** that automatically generates tests for all available libraries:

1. **Zero Configuration**: Add a library to `versions.json` and it's automatically included
2. **Standardized Interface**: All libraries implement the same test interface
3. **Automated Generation**: Tests are generated dynamically for all library × test-type combinations
4. **Modular Results**: Each category has its own detailed README

## 📖 Documentation

- [📝 Test Architecture](docs/architecture.md)
- [🔧 Adding New Libraries](docs/adding-libraries.md)
- [📊 Understanding Results](docs/understanding-results.md)

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](../../CONTRIBUTING.md) for details.

---

*Last updated: 2025-11-10T14:15:57.012Z*
*Generated by: main-readme-generator.cjs*
