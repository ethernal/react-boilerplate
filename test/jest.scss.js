const path = require("path");

module.exports = {
  rootDir               : path.join(__dirname, ".."),
  runner                : "jest-runner-stylelint",
  displayName           : "stylelint",
  moduleFileExtensions  : ["css", "scss"],
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
  testMatch             : ["./src/**/*.css", "./src/**/*.scss"],
  collectCoverage       : false,
};
