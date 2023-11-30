
import '@testing-library/jest-dom'
import './__mocks__/routerMock'

// jest.setup.js
class ResizeObserver {
    observe() {
      // Mock implementation
    }
    unobserve() {
      // Mock implementation
    }
    disconnect() {
      // Mock implementation
    }
  }
  
  global.ResizeObserver = ResizeObserver;
  