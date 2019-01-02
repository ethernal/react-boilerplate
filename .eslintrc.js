module.exports = {
    parser: "pluggable-babel-eslint",
    env   : {
        es6: true
    },
    parserOptions: {
        ecmaVersion   : 2018,
        sourceType    : "module",
        jsx           : true,
        plugins       : ["typescript"],
        excludePlugins: ["bigInt"]
    },
    rules: {
        "no-console": "warn"
    }
};
