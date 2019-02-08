module.exports = {
  ...require("./test/jest.autoconfig.js"),
  //testEnvironment: "jest-environment-node",
  testEnvironment: "jest-environment-jsdom",

  coveragePathIgnorePatterns: [
    "<rootDir>/src/assets/**",
    "<rootDir>/node_modules/**",
    "__tests__",
    "test",
    "**/**/*.d.ts",
    "**/src/ignore-src",
  ],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,ts,tsx}",
    "!**/test/**",
    "!**/assets/**",
    "!**/*.d.ts",
    "!**/__tests__/**",
    "!**/node_modules/**",
    "!<rootDir>/src/index.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches  : 0,
      lines     : 0,
      functions : 0,
    },
  },
  projects: [
    "./test/jest.test.js",
    "./test/jest.lint.js",
    "./test/jest.style.js",
    "./test/jest.tsc.js",
  ],
};
