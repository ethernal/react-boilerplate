module.exports = {
  //testEnvironment: "jest-environment-node",
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    //"\\module\\.?scss$"                                                                           : "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$": require.resolve(
      "./test/empty-mock.js",
    ),
    "\\.?s(c|a)ss$": require.resolve("./test/empty-mock.js"),
  },
  projects: [
    "./test/jest.test.js",
    "./test/jest.lint.js",
    "./test/jest.scss.js",
    "./test/jest.tsc.js",
  ],
  watchPlugins: [
    "jest-runner-eslint/watch-fix",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
    "jest-watch-select-projects",
  ],
};
