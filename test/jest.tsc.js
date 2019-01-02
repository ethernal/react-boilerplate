const path = require("path");

module.exports = {
    rootDir    : path.join(__dirname, ".."),
    runner     : "jest-runner-tsc",
    displayName: "typecheck",
    // tells it that ts/tsx files are valid modules
    moduleFileExtensions  : ["js", "json", "jsx", "node", "ts", "tsx"],
    testPathIgnorePatterns: ["node_modules", "dist"],
    testMatch             : ["**/*.(ts|tsx)"]
};
