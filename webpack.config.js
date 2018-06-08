const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build',
    hot: true
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: ['babel-loader']
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]
}