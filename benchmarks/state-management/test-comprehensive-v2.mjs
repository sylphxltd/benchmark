import { reduxActionsV2, zustandActionsV2, jotaiActionsV2, mobxActionsV2 } from './src/stores/index.ts';

console.log('=== Testing Comprehensive v2 Methods ===');

try {
  // Test Redux createStore
  console.log('Testing Redux createStore...');
  const reduxStoreResult = reduxActionsV2.createStore();
  console.log('Redux createStore:', reduxStoreResult, typeof reduxStoreResult, isNaN(reduxStoreResult));

  // Test Redux increment
  console.log('Testing Redux increment...');
  const reduxResult = reduxActionsV2.increment();
  console.log('Redux increment:', reduxResult, typeof reduxResult, isNaN(reduxResult));

  // Test Redux getDoubled
  console.log('Testing Redux getDoubled...');
  const reduxDoubledResult = reduxActionsV2.getDoubled();
  console.log('Redux getDoubled:', reduxDoubledResult, typeof reduxDoubledResult, isNaN(reduxDoubledResult));

} catch (error) {
  console.error('Redux error:', error.message);
}

try {
  // Test Zustand increment
  console.log('Testing Zustand increment...');
  const zustandResult = zustandActionsV2.increment();
  console.log('Zustand increment:', zustandResult, typeof zustandResult, isNaN(zustandResult));

  // Test Zustand getDoubled
  console.log('Testing Zustand getDoubled...');
  const zustandDoubledResult = zustandActionsV2.getDoubled();
  console.log('Zustand getDoubled:', zustandDoubledResult, typeof zustandDoubledResult, isNaN(zustandDoubledResult));

} catch (error) {
  console.error('Zustand error:', error.message);
}

try {
  // Test Jotai increment
  console.log('Testing Jotai increment...');
  const jotaiResult = jotaiActionsV2.increment();
  console.log('Jotai increment:', jotaiResult, typeof jotaiResult, isNaN(jotaiResult));

  // Test Jotai getDoubled
  console.log('Testing Jotai getDoubled...');
  const jotaiDoubledResult = jotaiActionsV2.getDoubled();
  console.log('Jotai getDoubled:', jotaiDoubledResult, typeof jotaiDoubledResult, isNaN(jotaiDoubledResult));

} catch (error) {
  console.error('Jotai error:', error.message);
}

try {
  // Test MobX increment
  console.log('Testing MobX increment...');
  const mobxResult = mobxActionsV2.increment();
  console.log('MobX increment:', mobxResult, typeof mobxResult, isNaN(mobxResult));

  // Test MobX getDoubled
  console.log('Testing MobX getDoubled...');
  const mobxDoubledResult = mobxActionsV2.getDoubled();
  console.log('MobX getDoubled:', mobxDoubledResult, typeof mobxDoubledResult, isNaN(mobxDoubledResult));

} catch (error) {
  console.error('MobX error:', error.message);
}