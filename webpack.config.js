const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test   : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use    : {
                    loader: "babel-loader"
                }
            }
        ]
    },

    entry : "./src/index.js",
    output: {
        path    : path.resolve(__dirname, "dist/"),
        filename: "index.js"
    },
    mode: "none",

    devServer: {
        contentBase: path.resolve(__dirname, "src")
    }
};
