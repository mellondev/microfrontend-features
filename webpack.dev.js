const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/microfrontend-features'),
    port: 5000,
  },
  output: {
    publicPath: 'http://localhost:5000/',
  },
});
