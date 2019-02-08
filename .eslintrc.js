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
  plugins: ["react-hooks"],
  rules  : {
    "no-console"                : "warn",
    "no-unexpected-multiline"   : "error",
    "comma-dangle"              : ["error", "always-multiline"],
    "react-hooks/rules-of-hooks": "error",
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
