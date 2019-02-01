const path = require("path");
const { defaults } = require("jest-config");

module.exports = {
  ...require("./jest.autoconfig"),
  verbose          : true,
  displayName      : "test",
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "test"),
    "shared",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      "./empty-mock.js",
    ),
    "\\.(sc|sa|c)ss$": "identity-obj-proxy",
  },
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
  collectCoverage           : true,
  coveragePathIgnorePatterns: ["<rootDir>/src/assets", "node_modules"],
  collectCoverageFrom       : [
    "<rootDir>/src/**/*.ts",
    "<rootDir>/src/**/*.tsx",
    "<rootDir>/src/**/*.js",
    "<rootDir>/src/**/*.jsx",
  ],
  coverageThreshold: {
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
