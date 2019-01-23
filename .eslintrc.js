const path = require("path");

module.exports = {
  parser: "pluggable-babel-eslint",
  env   : {
    es6: true,
  },
  parserOptions: {
    ecmaVersion   : 2018,
    sourceType    : "module",
    jsx           : true,
    plugins       : ["typescript"],
    excludePlugins: ["bigInt"],
  },
  rules: {
    "no-console"             : "warn",
    "no-unexpected-multiline": "error",
    "comma-dangle"           : ["error", "always-multiline"],
  },
  overrides: [
    {
      files   : ["**/__tests__/**"],
      settings: {
        "import/resolver": {
          jest: {
            jestConfigFile: path.join(__dirname, "./jest.config.js"),
          },
        },
      },
    },
  ],
};
