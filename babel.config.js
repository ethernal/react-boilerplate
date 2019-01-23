const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

const includeDynamicImportInTesting = () => {
  return isTest ? "babel-plugin-dynamic-import-node": null;
};

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules    : isTest ? "commonjs": "auto",
        debug      : false,
        useBuiltIns: "usage",
        targets    : {
          node    : "current",
          browsers: ["last 2 versions"],
        },
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
    "babel-plugin-styled-components",
    "react-hot-loader/babel",
    //isTest ? "babel-plugin-dynamic-import-node": null,
  ],
  exclude: ["node_modules"],
};
