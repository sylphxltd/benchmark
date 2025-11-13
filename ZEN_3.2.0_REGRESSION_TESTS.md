# Zen 3.2.0 Performance Regression - 測試清單

## 📋 測試環境

- **基準版本**: Zen 3.1.1 (排名 #1, 65.5/100)
- **測試版本**: Zen 3.2.0 (排名 #3, 55.1/100)
- **總測試數**: 28 tests
- **測試框架**: Tinybench
- **測試平台**: GitHub Actions (Ubuntu latest)
- **Node版本**: 20.x
- **日期**: 2025-11-13

## 🔴 嚴重退步測試 (>50% 慢)

### 1. Wide Fanout (1→100) - **最嚴重**
- **類別**: Reactivity Patterns
- **3.1.1**: 11,120,000 ops/sec
- **3.2.0**: 2,600,000 ops/sec
- **退步**: -76.6%
- **描述**: 一個信號更新，100 個依賴讀取
- **影響**: Reactivity graph 水平擴展性能嚴重下降

### 2. Extreme Read (10000x)
- **類別**: Performance Stress
- **3.1.1**: 21,000,000 ops/sec
- **3.2.0**: 5,430,000 ops/sec
- **退步**: -74.1%
- **描述**: 10000 次連續讀取操作
- **影響**: 高頻讀取場景性能崩潰

### 3. Repeated Diamonds (5x)
- **類別**: Reactivity Patterns
- **3.1.1**: 18,590,000 ops/sec
- **3.2.0**: 4,930,000 ops/sec
- **退步**: -73.5%
- **描述**: 5 次重複的鑽石模式（多路徑依賴）
- **影響**: 複雜依賴圖計算效率嚴重下降

### 4. Heavy Write (1000x)
- **類別**: Basic Write
- **3.1.1**: 20,880,000 ops/sec
- **3.2.0**: 6,050,000 ops/sec
- **退步**: -71.0%
- **描述**: 1000 次連續寫入操作
- **影響**: 批量寫入性能大幅下降

### 5. Computed Value Access
- **類別**: Advanced Operations
- **3.1.1**: 21,190,000 ops/sec
- **3.2.0**: 6,610,000 ops/sec
- **退步**: -68.8%
- **描述**: 訪問計算值（computed signal）
- **影響**: Computed signals 性能嚴重退步

### 6. Cache Invalidation
- **類別**: Real-world Scenarios
- **3.1.1**: 20,480,000 ops/sec
- **3.2.0**: 7,480,000 ops/sec
- **退步**: -63.5%
- **描述**: 更新源數據並訪問計算值
- **影響**: Cache invalidation 機制變慢

### 7. Deep Chain (10 layers)
- **類別**: Reactivity Patterns
- **3.1.1**: 14,200,000 ops/sec
- **3.2.0**: 5,300,000 ops/sec
- **退步**: -62.7%
- **描述**: 10 層深度的線性依賴鏈
- **影響**: 深度依賴鏈計算效率下降

### 8. Moderate Read (100x)
- **類別**: Basic Read
- **3.1.1**: 22,250,000 ops/sec
- **3.2.0**: 8,280,000 ops/sec
- **退步**: -62.8%
- **描述**: 100 次連續讀取
- **影響**: 中等頻率讀取性能大降

### 9. Massive Fanout (1→1000)
- **類別**: Reactivity Patterns
- **3.1.1**: 2,720,000 ops/sec
- **3.2.0**: 1,050,000 ops/sec
- **退步**: -61.2%
- **描述**: 一個信號更新，1000 個依賴讀取
- **影響**: 大規模扇出性能下降

### 10. Deep Diamond (5 layers)
- **類別**: Reactivity Patterns
- **3.1.1**: 18,980,000 ops/sec
- **3.2.0**: 8,440,000 ops/sec
- **退步**: -55.5%
- **描述**: 5 層深度的鑽石依賴模式
- **影響**: 多層鑽石模式計算變慢

### 11. Diamond Pattern (3 layers)
- **類別**: Reactivity Patterns
- **3.1.1**: 20,750,000 ops/sec
- **3.2.0**: 10,140,000 ops/sec
- **退步**: -51.1%
- **描述**: 3 層鑽石依賴 (A→B,C→D)
- **影響**: 基礎鑽石模式去重效率下降

## 🟡 中等退步測試 (30-50% 慢)

### 12. Nested Object Update
- **3.1.1**: 7,750,000 ops/sec
- **3.2.0**: 3,980,000 ops/sec
- **退步**: -48.6%

### 13. Batch Write (10x)
- **3.1.1**: 20,970,000 ops/sec
- **3.2.0**: 10,790,000 ops/sec
- **退步**: -48.5%

### 14. Dynamic Dependencies
- **3.1.1**: 20,320,000 ops/sec
- **3.2.0**: 11,110,000 ops/sec
- **退步**: -45.3%

### 15. Single Write
- **3.1.1**: 18,380,000 ops/sec
- **3.2.0**: 10,810,000 ops/sec
- **退步**: -41.2%

### 16. Extreme Write (10000x)
- **3.1.1**: 21,230,000 ops/sec
- **3.2.0**: 15,040,000 ops/sec
- **退步**: -29.2%

### 17. Single Read
- **3.1.1**: 19,860,000 ops/sec
- **3.2.0**: 14,160,000 ops/sec
- **退步**: -28.7%

### 18. Large Array (1000 items)
- **3.1.1**: 220,000 ops/sec
- **3.2.0**: 160,000 ops/sec
- **退步**: -28.4%

### 19. Simple Form (3 fields)
- **3.1.1**: 7,930,000 ops/sec
- **3.2.0**: 6,320,000 ops/sec
- **退步**: -20.2%

## 🟢 進步測試 (少數)

### 1. Complex Form (nested+array) - **但基數極低**
- **3.1.1**: 20,000 ops/sec
- **3.2.0**: 460,000 ops/sec
- **進步**: +2456.3%
- **備註**: 雖然進步巨大，但絕對值仍然很低

### 2. Array Push - **但基數極低**
- **3.1.1**: 30,000 ops/sec
- **3.2.0**: 630,000 ops/sec
- **進步**: +2200.2%
- **備註**: 原本性能極差，進步後仍不理想

### 3. Burst Write (100x)
- **3.1.1**: 14,470,000 ops/sec
- **3.2.0**: 23,440,000 ops/sec
- **進步**: +61.9%
- **備註**: 唯一有實質進步的主流測試

### 4. Concurrent Updates (50x)
- **3.1.1**: 110,000 ops/sec
- **3.2.0**: 150,000 ops/sec
- **進步**: +41.5%

### 5. Async Throughput (20 ops)
- **3.1.1**: 480,000 ops/sec
- **3.2.0**: 640,000 ops/sec
- **進步**: +33.2%

### 6. Memory Management
- **3.1.1**: 150,000 ops/sec
- **3.2.0**: 180,000 ops/sec
- **進步**: +23.4%

## 📊 統計分析

### 按類別統計

| 類別 | 測試數 | 退步數 | 退步比例 | 平均退步 |
|------|--------|--------|----------|----------|
| **Reactivity Patterns** | 8 | 7 | 87.5% | -60.4% |
| **Basic Read** | 3 | 3 | 100% | -51.5% |
| **Basic Write** | 4 | 3 | 75% | -39.2% |
| **Performance Stress** | 3 | 3 | 100% | -43.9% |
| **Advanced Operations** | 4 | 2 | 50% | -30.7% |
| **Real-world Scenarios** | 4 | 2 | 50% | -41.9% |
| **Async Operations** | 2 | 0 | 0% | +37.4% |

### 整體統計

- **總測試數**: 28 tests
- **退步測試**: 19 tests (67.9%)
- **進步測試**: 6 tests (21.4%)
- **持平測試**: 1 test (3.6%)
- **缺失測試**: 2 tests (Complex Form, High Frequency Read)

## 🎯 問題根源分析

### 1. **Signal Getter 優化被破壞**
**證據**:
- Single Read: -28.7%
- Moderate Read: -62.8%
- Extreme Read: -74.1%

**推測**: Signal 的 getter 函數可能增加了額外的檢查或開銷

### 2. **Reactivity Graph 計算效率降低**
**證據**:
- Diamond Pattern: -51.1%
- Wide Fanout: -76.6%
- Repeated Diamonds: -73.5%
- Deep Chain: -62.7%

**推測**:
- 依賴追踪機制變慢
- 去重算法效率下降
- Graph traversal 增加開銷

### 3. **Computed Signals 性能問題**
**證據**:
- Computed Value Access: -68.8%
- Cache Invalidation: -63.5%

**推測**: Computed signals 的緩存或計算機制出現問題

### 4. **批量寫入優化失效**
**證據**:
- Heavy Write (1000x): -71.0%
- Batch Write (10x): -48.5%

**推測**: 批量更新的優化路徑可能被破壞

## 🔧 建議測試步驟

### 步驟 1: 驗證測試環境
```bash
# Clone benchmark repo
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark/benchmarks/state-management

# Install Zen 3.1.1
npm install --save @sylphx/zen@3.1.1
npm run benchmark

# Install Zen 3.2.0
npm install --save @sylphx/zen@3.2.0
npm run benchmark
```

### 步驟 2: 本地複現
```bash
# 使用我們的測試套件
bun run index.ts
```

### 步驟 3: Profiling
建議使用 Chrome DevTools 或 Node.js profiler 對比兩個版本：
- Signal getter 調用棧
- Reactivity graph 更新流程
- Computed value 計算路徑

### 步驟 4: 重點檢查
1. **Signal.ts** - getter/setter 實現
2. **Graph.ts** - 依賴追踪和更新
3. **Computed.ts** - 計算和緩存邏輯
4. **Batching.ts** - 批量更新機制

## 📝 測試代碼範例

### Wide Fanout 測試 (最嚴重退步)
```typescript
// Setup
const counter = signal(0);
const deps = Array.from({ length: 100 }, () =>
  computed(() => counter.value)
);

// Benchmark
counter.value++;
for (let i = 0; i < 100; i++) {
  const v = deps[i].value;
}
```

### Diamond Pattern 測試
```typescript
// Setup
const a = signal(0);
const b = computed(() => a.value);
const c = computed(() => a.value);
const d = computed(() => b.value + c.value);

// Benchmark
a.value++;
const result = d.value;
```

### Extreme Read 測試
```typescript
// Setup
const counter = signal(0);

// Benchmark (10000 iterations)
for (let i = 0; i < 10000; i++) {
  const v = counter.value;
}
```

## 🚨 優先級

### P0 (必須修復)
1. Wide Fanout (-76.6%)
2. Extreme Read (-74.1%)
3. Repeated Diamonds (-73.5%)
4. Heavy Write (-71.0%)

### P1 (高優先級)
5. Computed Value Access (-68.8%)
6. Cache Invalidation (-63.5%)
7. Deep Chain (-62.7%)
8. Moderate Read (-62.8%)

### P2 (中優先級)
9-19. 其他退步 30-60% 的測試

## 💡 建議

1. **回退 3.2.0 發布**，直到修復主要 regression
2. **添加 performance regression tests** 到 CI/CD
3. **使用我們的 benchmark suite** 作為性能基準
4. **對比 3.1.1 和 3.2.0 的代碼變更**，找出導致退步的 commits
5. **發布 3.2.1 hotfix**，修復關鍵性能問題

## 📧 聯繫

如需更多詳情或測試協助，請聯繫：
- Benchmark repo: https://github.com/SylphxAI/benchmark
- 完整報告: `ZEN_VERSION_COMPARISON.md`
- 測試結果: `benchmarks/state-management/results/zen/`

---

**報告生成**: 2025-11-13
**測試平台**: GitHub Actions + Tinybench
**對比版本**: 3.1.1 (4d252b63) vs 3.2.0 (331865db)
