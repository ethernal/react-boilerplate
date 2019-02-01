const path = require("path");

module.exports = {
  rootDir               : path.join(__dirname, ".."),
  collectCoverage       : false,
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
};
