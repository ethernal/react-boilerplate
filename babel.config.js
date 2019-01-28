const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules    : isTest ? "commonjs": "auto",
        debug      : false,
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
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
    ],
    "syntax-trailing-function-commas",
    "react-hot-loader/babel",
    "babel-plugin-dynamic-import-node",
  ],
  exclude: ["node_modules"],
};
