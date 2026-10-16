globalThis.MutationObserver = class { observe() {} disconnect() {} }
globalThis.window = {
  addEventListener: () => {},
  removeEventListener: () => {},
  matchMedia: () => ({ matches: false }),
  localStorage: { getItem: () => null, setItem: () => {} },
  scrollY: 0,
}
globalThis.document = {
  documentElement: {
    classList: { add: () => {}, remove: () => {} },
    scrollTop: 0,
    scrollHeight: 1000,
    clientHeight: 800,
    addEventListener: () => {},
    removeEventListener: () => {},
  },
  body: { style: {} },
  createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, style: {}, addEventListener: () => {}, removeEventListener: () => {} }),
  createComment: () => ({}),
  createTextNode: () => ({}),
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: (id) => ({ id, nodeType: 1, appendChild: () => {}, offsetTop: 0, offsetHeight: 100, setAttribute: () => {}, style: {}, addEventListener: () => {}, removeEventListener: () => {} }),
  addEventListener: () => {},
  removeEventListener: () => {},
}
try {
  Object.defineProperty(globalThis.navigator, 'clipboard', { value: { writeText: async () => {} }, configurable: true })
} catch {}

try {
  console.log('Testing App render...')
  await import('../dist/assets/index-oAEMLxae.js')
  console.log('App loaded without throwing error!')
} catch (e) {
  console.error('CRASH DETECTED:', e)
}
