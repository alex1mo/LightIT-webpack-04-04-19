let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  // watch: true,
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
      },
      {
        test: /.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextPlugin({
      filename: "styles.css"
    })
  ]
};
