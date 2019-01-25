const path = require("path");

module.exports = {
  rootDir             : path.join(__dirname, ".."),
  runner              : "jest-runner-tsc",
  displayName         : "typecheck",
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],   // tells it that ts/tsx files are valid modules
  moduleNameMapper    : {
    "\\module\\.?scss$"                                                                           : "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$": require.resolve(
      "./empty-mock.js",
    ),
    "\\.?s(c|a)ss$": require.resolve("./empty-mock.js"),
  },
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],
  testMatch             : ["**/*.(ts|tsx)"],
  collectCoverage       : false,
};
