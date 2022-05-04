const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({
    title: "Virtual keyboard",
    filename: "index.html",
    template: "./src/index.html"
  }), new ESLintWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i, //exec - css for connect css files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i, //exec - css for connect css files
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  devServer: {
    static: './dist',
    port: 3001
  }
};