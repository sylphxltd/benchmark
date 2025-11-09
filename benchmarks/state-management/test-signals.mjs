import { preactActionsV2, solidActionsV2, zenActionsV2 } from './src/stores/index.ts';

console.log('=== Testing Signal Libraries ===');

// Test Preact Signals
try {
  console.log('Testing Preact createStore...');
  const preactStoreResult = preactActionsV2.createStore();
  console.log('Preact createStore:', preactStoreResult, typeof preactStoreResult, isNaN(preactStoreResult));

  console.log('Testing Preact increment...');
  const preactResult = preactActionsV2.increment();
  console.log('Preact increment:', preactResult, typeof preactResult, isNaN(preactResult));

  // Check if getDoubled exists
  console.log('Preact getDoubled exists:', typeof preactActionsV2.getDoubled);
  if (typeof preactActionsV2.getDoubled === 'function') {
    const preactDoubledResult = preactActionsV2.getDoubled();
    console.log('Preact getDoubled:', preactDoubledResult, typeof preactDoubledResult, isNaN(preactDoubledResult));
  } else {
    console.log('Preact getDoubled: MISSING');
  }

} catch (error) {
  console.error('Preact error:', error.message);
}

// Test Solid Signals
try {
  console.log('Testing Solid createStore...');
  const solidStoreResult = solidActionsV2.createStore();
  console.log('Solid createStore:', solidStoreResult, typeof solidStoreResult, isNaN(solidStoreResult));

  console.log('Testing Solid increment...');
  const solidResult = solidActionsV2.increment();
  console.log('Solid increment:', solidResult, typeof solidResult, isNaN(solidResult));

  // Check if getDoubled exists
  console.log('Solid getDoubled exists:', typeof solidActionsV2.getDoubled);
  if (typeof solidActionsV2.getDoubled === 'function') {
    const solidDoubledResult = solidActionsV2.getDoubled();
    console.log('Solid getDoubled:', solidDoubledResult, typeof solidDoubledResult, isNaN(solidDoubledResult));
  } else {
    console.log('Solid getDoubled: MISSING');
  }

} catch (error) {
  console.error('Solid error:', error.message);
}

// Test Zen
try {
  console.log('Testing Zen createStore...');
  const zenStoreResult = zenActionsV2.createStore();
  console.log('Zen createStore:', zenStoreResult, typeof zenStoreResult, isNaN(zenStoreResult));

  console.log('Testing Zen increment...');
  const zenResult = zenActionsV2.increment();
  console.log('Zen increment:', zenResult, typeof zenResult, isNaN(zenResult));

  // Check if getDoubled exists
  console.log('Zen getDoubled exists:', typeof zenActionsV2.getDoubled);
  if (typeof zenActionsV2.getDoubled === 'function') {
    const zenDoubledResult = zenActionsV2.getDoubled();
    console.log('Zen getDoubled:', zenDoubledResult, typeof zenDoubledResult, isNaN(zenDoubledResult));
  } else {
    console.log('Zen getDoubled: MISSING');
  }

} catch (error) {
  console.error('Zen error:', error.message);
}