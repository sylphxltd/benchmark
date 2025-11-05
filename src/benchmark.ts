/**
 * State Management Benchmark Suite
 * Using tinybench - industry standard benchmarking library
 */

import { Bench } from 'tinybench';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { create } from 'zustand';
import { atom, createStore } from 'jotai';
import { makeAutoObservable } from 'mobx';
import { proxy } from 'valtio';
import { signal } from '@preact/signals';
import { createSignal } from 'solid-js';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🚀 State Management Benchmark Suite');
console.log('🔧 Using tinybench - industry standard benchmarking library\n');

// Initialize stores for each library
const reduxSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: { increment: (state) => { state.count += 1; } }
});
const reduxStore = configureStore({ reducer: { counter: reduxSlice.reducer } });

const zustandStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

const jotaiStore = createStore();
const jotaiAtom = atom(0);

class MobXStore {
  count = 0;
  constructor() { makeAutoObservable(this); }
  increment() { this.count++; }
}
const mobxStore = new MobXStore();

const valtioStore = proxy({ count: 0 });
const preactSignal = signal(0);
const [solidSignal, setSolidSignal] = createSignal(0);

// Create benchmark suite
const bench = new Bench({ time: 1000 });

// Add benchmarks for each library
bench
  .add('Redux Toolkit', () => {
    reduxStore.dispatch(reduxSlice.actions.increment());
  })
  .add('Zustand', () => {
    zustandStore.getState().increment();
  })
  .add('Jotai', () => {
    jotaiStore.set(jotaiAtom, Math.random());
  })
  .add('MobX', () => {
    mobxStore.increment();
  })
  .add('Valtio', () => {
    valtioStore.count++;
  })
  .add('Preact Signals', () => {
    preactSignal.value = Math.random();
  })
  .add('Solid Signals', () => {
    setSolidSignal(Math.random());
  });

// Run benchmarks
async function runBenchmarks() {
  console.log('⏱️  Running benchmarks...\n');

  await bench.run();

  console.log('📊 BENCHMARK RESULTS');
  console.log('='.repeat(50));

  const results = bench.tasks
    .filter(task => task.result)
    .sort((a, b) => b.result!.hz - a.result!.hz);

  results.forEach((task, index) => {
    const result = task.result!;
    const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
    console.log(`${rank} ${task.name.padEnd(20)} ${result.hz.toFixed(0).padStart(10)} ops/sec ±${result.rme.toFixed(2)}%`);
  });

  // Save results to file
  const reportData = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    results: results.map(task => ({
      name: task.name,
      opsPerSec: task.result!.hz,
      meanTime: 1000 / task.result!.hz,
      margin: task.result!.rme
    }))
  };

  mkdirSync('reports', { recursive: true });
  const reportPath = join('reports', `benchmark-${Date.now()}.json`);
  writeFileSync(reportPath, JSON.stringify(reportData, null, 2));

  console.log(`\n💾 Report saved to: ${reportPath}`);
  console.log('🏆 Best Performance: ' + results[0].name);
}

runBenchmarks().catch(console.error);