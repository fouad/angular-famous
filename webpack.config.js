var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    'angular-famous': './index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'angular-famous.js',
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /.*/,
        loader: 'babel-loader',
      }
    ]
  }
};
