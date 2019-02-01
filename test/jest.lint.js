const path = require("path");

module.exports = {
  ...require("./jest.autoconfig"),
  rootDir             : path.join(__dirname, ".."),
  runner              : "jest-runner-eslint",
  displayName         : "eslint",
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],   // tells it that ts/tsx files are valid modules
  testMatch           : ["**/*.(js|jsx|ts|tsx)"],
};
