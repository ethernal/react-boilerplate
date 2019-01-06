const path = require("path");

module.exports = {
    rootDir               : path.join(__dirname, ".."),
    runner                : "jest-runner-eslint",
    displayName           : "eslint",
    moduleFileExtensions  : ["js", "json", "jsx", "node", "ts", "tsx"],   // tells it that ts/tsx files are valid modules
    testPathIgnorePatterns: ["node_modules", "dist"],
    testMatch             : ["**/*.(js|ts|tsx)"]
};
