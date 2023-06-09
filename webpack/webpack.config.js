const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  context: SRC_DIR,
  entry: './index.jsx',
  output: {
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [SRC_DIR],
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Test Nivo update',
      template: './index.html',
      publicPath: '/',
    }),
    new StatsWriterPlugin({
      filename: '../artifacts/webpack-stats.json',
      stats: {
        assets: true,
        chunks: true,
        modules: true
      }
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      },
    },
  },
};
