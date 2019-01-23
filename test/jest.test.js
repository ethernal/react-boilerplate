const path = require("path");

module.exports = {
  displayName      : "test",
  rootDir          : path.join(__dirname, ".."),
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "test"),
    "shared",
  ],
  setupTestFrameworkScriptFile: require.resolve("./setupTest.js"),
  // look for ts files
  testMatch             : ["**/__tests__/**/*.+(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],

  // explicitly transform ts/tsx with babel
  transform: {
    "^.+\\.((t|j)sx?)$": "babel-jest",
  },
  collectCoverage    : true,
  collectCoverageFrom: ["../**/src/**/*.+{js|ts|jsx|tsx}"],
  coverageThreshold  : {
    global: {
      statements: 0,
      branches  : 0,
      lines     : 0,
      functions : 0,
    },
    "./src/index.tsx": {
      statements: 0,
      branches  : 0,
      lines     : 0,
      functions : 0,
    },
  },
};
