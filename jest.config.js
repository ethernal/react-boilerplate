module.exports = {
  //testEnvironment: "jest-environment-node",
  testEnvironment : "jest-environment-jsdom",
  moduleNameMapper: {
    "\\module\\.?s(c|a)ss$": "identity-obj-proxy",
    "\\.?s(c|a)ss$"        : require.resolve("./test/style-mock.js"),
  },
  projects: [
    "./test/jest.lint.js",
    "./test/jest.scss.js",
    "./test/jest.tsc.js",
    "./test/jest.test.js",
  ],
  watchPlugins: ["jest-runner-eslint/watch-fix"],
};
