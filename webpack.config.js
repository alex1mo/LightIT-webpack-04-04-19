let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    pug: "./src/pug/index.js",
    handlebars: "./src/handlebars/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.pug?$/,
        loader: "pug-loader"
      },
      {
        test: /\.handlebars?$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
