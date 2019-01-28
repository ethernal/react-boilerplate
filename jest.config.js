module.exports = {
  //testEnvironment: "jest-environment-node",
  testEnvironment: "jest-environment-jsdom",

  projects: [
    "./test/jest.test.js",
    "./test/jest.lint.js",
    "./test/jest.style.js",
    "./test/jest.tsc.js",
  ],
  watchPlugins: [
    "jest-runner-eslint/watch-fix",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
  ],
};
