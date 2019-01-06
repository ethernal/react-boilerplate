module.exports = {
    projects: [
        "./test/jest.lint.js",
        "./test/jest.scss.js",
        "./test/jest.tsc.js",
        "./test/jest.test.js"
    ],
    watchPlugins: ["jest-runner-eslint/watch-fix"]
};
