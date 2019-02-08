const path = require("path");

module.exports = {
  rootDir          : path.join(__dirname, ".."),
  collectCoverage  : false,
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "../src"),
    __dirname,
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      "./empty-mock.js",
    ),
    "\\.(sc|sa)ss$"   : "identity-obj-proxy",
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$"         : require.resolve("./empty-mock.js"),
  },
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
  watchPlugins          : [
    "jest-runner-eslint/watch-fix",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
    "jest-watch-suspend",
  ],
};
