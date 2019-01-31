const path = require("path");

module.exports = {
  rootDir               : path.join(__dirname, ".."),
  runner                : "jest-runner-stylelint",
  displayName           : "stylelint",
  moduleFileExtensions  : ["js","css", "scss"],
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
  testMatch             : ["**/*.css", "**/*.scss"],
  collectCoverage       : false,
};
