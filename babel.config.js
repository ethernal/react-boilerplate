const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

/*
the `sp-` (3rd argument of presets and plugins configuration) prefix for plugins and presets is due t DOCZ using the same preset in it's configuration and Babel is complaining when running yarn docz:dev about `Error: Duplicate plugin/preset detected.`.
*/

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules    : isTest ? "commonjs": "auto",
        debug      : false,
        useBuiltIns: "usage",
      },
      "sp-env",
    ],
    ["@babel/preset-react", {}, "sp-preset-react"],
    ["@emotion/babel-preset-css-prop", {}, "sp-emotion-css-prop"],
    ["@babel/preset-typescript", {}, "sp-preset-typescript"],
  ],

  env: {
    production: {
      plugins: [
        [
          "emotion",
          {
            // sourceMap is on by default but source maps are dead code eliminated in production
            sourceMap          : false,
            autoLabel          : !isProd,
            labelFormat        : "[local]",
            cssPropOptimization: true,
          },
          "sp-emotion",
        ],
        ["syntax-trailing-function-commas", {}, "sp-trailing-commas"],
      ],
    },
    development: {
      plugins: [
        [
          "emotion",
          {
            // sourceMap is on by default but source maps are dead code eliminated in production
            sourceMap          : true,
            autoLabel          : !isProd,
            labelFormat        : "[local]",
            cssPropOptimization: true,
          },
          "sp-emotion",
        ],
        ["syntax-trailing-function-commas", {}, "sp-trailing-commas"],
        ["react-hot-loader/babel", {}, "sp-rhl"],
      ],
    },
    test: {
      plugins: [
        [
          "emotion",
          {
            // sourceMap is on by default but source maps are dead code eliminated in production
            sourceMap          : true,
            autoLabel          : !isProd,
            labelFormat        : "[local]",
            cssPropOptimization: true,
          },
          "sp-emotion",
        ],
        ["syntax-trailing-function-commas", {}, "sp-trailing-commas"],
        ["react-hot-loader/babel", {}, "sp-rhl"],
        ["babel-plugin-dynamic-import-node", {}, "sp-din"],
      ],
    },
  },

  exclude: ["node_modules"],
};
