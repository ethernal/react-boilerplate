const path = require("path");

module.exports = {
  ...require("./jest.autoconfig"),
  runner: "jest-runner-stylelint",
  displayName: "stylelint",
  moduleFileExtensions: ["js", "css", "scss"],
  testMatch: ["**/*.css", "**/*.scss"],
};
