//const env = process.env.NODE_ENV || 'development'

//module.exports = require(`./webpack.config.${env}.js`)

const path               = require("path");
const webpack            = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin  = require("copy-webpack-plugin");

const webpack_rules   = [];
const webpack_plugins = [];

const webpackOption = {
    resolve: {
        extensions: [".js", ".json", ".ts", ".jsx", ".tsx"]
    },

    entry  : "./src/index.tsx",
    devtool: "cheap-module-eval-source-map",
    output : {
        path    : path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: webpack_rules
    },
    plugins: webpack_plugins
};
let babelLoader = {
    test   : /\.+(js|ts|tsx|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use    : {
        loader: "babel-loader"
    }
};

let copyIndexStaticFile = new CopyWebpackPlugin([
    { from: "./src/index.html", to: "./" }
]);

webpack_rules.push(babelLoader);
webpack_plugins.push(copyIndexStaticFile);
module.exports = webpackOption;
