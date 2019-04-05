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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
