const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // contentBase: './dist',
    static: './dist',
    hot: true,
  },
  devtool: 'source-map',
  stats: 'errors-only',
};

module.exports = merge(baseConfig, devConfig);
