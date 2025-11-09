import { reduxActionsV2, zustandActionsV2, jotaiActionsV2, mobxActionsV2, valtioActionsV2, preactActionsV2, solidActionsV2, zenActionsV2 } from './src/stores/index.ts';

console.log('=== Testing Method Return Values ===');

// Test Redux increment
const reduxResult = reduxActionsV2.increment();
console.log('Redux increment:', reduxResult, typeof reduxResult, isNaN(reduxResult));

// Test Zustand increment
const zustandResult = zustandActionsV2.increment();
console.log('Zustand increment:', zustandResult, typeof zustandResult, isNaN(zustandResult));

// Test Jotai increment
const jotaiResult = jotaiActionsV2.increment();
console.log('Jotai increment:', jotaiResult, typeof jotaiResult, isNaN(jotaiResult));

// Test some complex operations
console.log('\n=== Testing Complex Operations ===');

const reduxComplex = reduxActionsV2.invalidateComputed();
console.log('Redux invalidateComputed:', reduxComplex, typeof reduxComplex, isNaN(reduxComplex));

const reduxBatch = reduxActionsV2.batchComplexState();
console.log('Redux batchComplexState:', reduxBatch, typeof reduxBatch, isNaN(reduxBatch));