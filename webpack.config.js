const path = require("path");
const CleanWebpackPlugin       = require("clean-webpack-plugin");
const HtmlWebPackPlugin        = require("html-webpack-plugin");
const MiniCssExtractPlugin     = require("mini-css-extract-plugin");
const webpack                  = require("webpack");
var   CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry  : "./src/index.tsx",
  mode   : isDevelopment ? "development" : "production",
  devtool: "cheap-module-eval-source-map",
  output : {
    filename: isDevelopment ? "[name].js": "[name].[hash].js",
  },
  devServer: {
    contentBase       : path.join(__dirname, "src"),
    watchContentbase  : true,
    publicPath        : "/dist/",
    compress          : true,
    port              : 8080,
    overlay           : true,
    hotOnly           : true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test   : /\.js|.jsx|.tsx|.ts$/,
        loader : "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use : [
          "file-loader",
          {
            loader : "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality    : 65,
              },
              optipng: {
                enabled: !isDevelopment,
              },
              pngquant: {
                quality: "65-90",
                speed  : 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test  : /\.module\.(sa|sc|c)ss{1}$/,
        loader: [
          isDevelopment ? "style-loader": MiniCssExtractPlugin.loader,
          {
            loader : "css-loader",
            options: {
              modules       : true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              camelCase     : true,
              sourceMap     : isDevelopment,
            },
          },
          {
            loader : "sass-loader",
            options: {
              sourceMap: isDevelopment,
              camelCase: true,
              modules  : true,
            },
          },
        ],
      },
      {
        test   : /\.(sa|sc|c){1}ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader : [
          isDevelopment ? "style-loader": MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader : "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use : [
          {
            loader : "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use : [
          {
            loader : "file-loader",
            options: {
              name(file) {
                if (process.env.NODE_ENV === "development") {
                  return "[path][name].[ext]";
                } else {
                  return "[hash].[ext]";
                }
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use : [
          {
            loader : "html-loader",
            options: { minimize: !isDevelopment },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules   : ["node_modules", path.join(__dirname, "src"), "shared"],
  },
  // externals: {
  //   react      : "React",
  //   "react-dom": "ReactDOM",
  // },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CaseSensitivePathsPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename     : isDevelopment ? "[name].css": "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css"  : "[id].[hash].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
};
