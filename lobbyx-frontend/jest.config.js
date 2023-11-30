const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // loading next.config.js and .env files in test environment
  dir: "./",
});

// custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/path/to/your/components/folder/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 61,
      functions: 61,
      lines: 61,
      statements: -34,
    }
  },
};

module.exports = createJestConfig(customJestConfig);
