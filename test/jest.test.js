const path = require("path");
const { defaults } = require("jest-config");

module.exports = {
  verbose          : true,
  displayName      : "test",
  rootDir          : path.join(__dirname, ".."),
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
  setupTestFrameworkScriptFile: require.resolve("./setupTest.js"),
  // look for ts files
  testMatch             : ["**/__tests__/**/*.+(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
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
  collectCoverage    : true,
  collectCoverageFrom: ["./**/src/**/*.+{js|ts|jsx|tsx}"],
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
