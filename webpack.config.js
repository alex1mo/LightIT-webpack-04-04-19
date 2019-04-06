let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
