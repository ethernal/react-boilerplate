module.exports = {
    projects: [
        "./test/jest.lint.js",
        "./test/jest.tsc.js",
        "./test/jest.testing.js"
    ],
    atchPlugins: ["jest-runner-eslint/watch-fix"]
};
