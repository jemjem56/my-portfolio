import '@testing-library/jest-dom/vitest'

window.matchMedia =
  window.matchMedia ||
  ((query) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }))
window.scrollTo = () => {}
