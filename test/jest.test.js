const path = require("path");
const { defaults } = require("jest-config");

module.exports = {
  ...require("./jest.autoconfig"),
  verbose          : true,
  displayName      : "test",
  collectCoverage  : true,
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "test"),
    "shared",
  ],

  setupFilesAfterEnv: [require.resolve("./setupTest.js")],
  // look for ts files
  testMatch: ["**/__tests__/**/*.+(js|jsx|ts|tsx)"],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "js",
    "jsx",
    "ts",
    "tsx",
    "node",
    "json",
  ],

  // explicitly transform ts/tsx with babel
  transform: {
    //"^.+.(ts|tsx)$": "ts-jest",
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
};
