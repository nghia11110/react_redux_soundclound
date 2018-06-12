const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    hot: true,
    historyApiFallback: true
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
    }),
    new webpack.DefinePlugin({
      __CLIENT_ID__: JSON.stringify(process.env.CLIENT_ID || '1fb0d04a94f035059b0424154fd1b18c'),
      __REDIRECT_URI__: JSON.stringify(process.env.REDIRECT_URI || 'http://localhost:8080/callback')
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  ]
};