const path = require("path");
const webpack            = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin  = require("copy-webpack-plugin");

const HTMLMinifier = require("html-minifier");

//based on: https://blog.wax-o.com/2018/05/webpack-loaders-babel-sourcemaps-react-hot-module-reload-typescript-modules-code-splitting-and-lazy-loading-full-tutorial-to-transpile-and-bundle-your-code/

module.exports = env => {
    //eslint-disable-next-line no-console
    console.log("NODE_ENV:", env.NODE_ENV);
    const isDevelopment = env.NODE_ENV === "development";
    const plugins       = [new CleanWebpackPlugin(["dist"])];

    if (isDevelopment) {
        plugins.push(new webpack.NamedModulesPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    } else {
        plugins.push(
            new CopyWebpackPlugin(
                [
                    {
                        from: "src/index.html",
                        to  : path.resolve(__dirname, "dist"),
                        transform(htmlAsBuffer) {
                            return Buffer.from(
                                HTMLMinifier.minify(
                                    htmlAsBuffer.toString("utf8"),
                                    {
                                        collapseWhitespace         : true,
                                        collapseBooleanAttributes  : true,
                                        collapseInlineTagWhitespace: true
                                    }
                                )
                            );
                        }
                    }
                ],
                {}
            )
        );
    }

    let module = {};
    if (!isDevelopment)
        module = {
            rules: [
                {
                    test   : /\.js$/,
                    exclude: /(node_modules)/,
                    use    : {
                        loader: "babel-loader"
                    }
                }
            ]
        };

    return {
        entry : "./src/index.js",
        output: {
            path      : path.resolve(__dirname, "dist/"),
            filename  : "index.js",
            publicPath: "/dist/"
        },
        mode     : isDevelopment ? "development": "production",
        devServer: {
            contentBase     : path.resolve(__dirname, "src"),
            hotOnly         : true,
            overlay         : true,
            publicPath      : "/dist/",
            watchContentBase: false
        },
        module,
        plugins
    };
};
