const path = require("path");
const CleanWebpackPlugin   = require("clean-webpack-plugin");
const HtmlWebPackPlugin    = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack              = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode   : isDevelopment ? "development" : "production",
  devtool: "cheap-module-eval-source-map",
  output : {
    filename: isDevelopment ? "[name].js": "[name].[hash].js",
  },
  devServer: {
    contentBase       : path.join(__dirname, "dist"),
    compress          : true,
    port              : 8080,
    overlay           : true,
    hot               : true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test   : /\.js|.jsx$/,
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
        test  : /\.module\.s(a|c)ss$/,
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
            },
          },
        ],
      },
      {
        test   : /\.s(a|c)ss$/,
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
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".scss",
      ".gif",
      ".png",
      ".jpg",
      ".jpeg",
      ".svg",
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
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
