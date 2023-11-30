const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: ['url-loader']
    }],
  }
}

