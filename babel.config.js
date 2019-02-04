const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

/*
the `bp-` (3rd argument of presets and plugins configuration) prefix for plugins and presets is due t DOCZ using the same preset in it's configuration and Babel is complaining when running yarn docz:dev about `Error: Duplicate plugin/preset detected.`.
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
      "bp-env",
    ],
    ["@babel/preset-react", {}, "bp-preset-react"],
    ["@babel/preset-typescript", {}, "bp-preset-typescript"],
  ],
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
      "bp-emotion",
    ],
    ["syntax-trailing-function-commas", {}, "bp-trailing-commas"],
    ["react-hot-loader/babel", {}, "bp-rhl"],
    ["babel-plugin-dynamic-import-node", {}, "bp-din"],
  ],
  exclude: ["node_modules"],
};
