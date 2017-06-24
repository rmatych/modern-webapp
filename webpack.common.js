const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, './src/');
const buildDir = path.resolve(__dirname, './build/');

module.exports = {
  'context': srcDir,

  'entry': {
    'index': './index.js',
  },

  'output': {
    'path': buildDir,
    'filename': '[name].bundle.js',
  },

  'resolve': {
    'extensions': ['.js', '.jsx', '.json'],
  },

  'module': {
    'rules': [
      {
        'enforce': 'pre',
        'test': /.jsx?$/,
        'exclude': /node_modules/,
        'loader': 'eslint-loader',
      },
    ],
  },

  'plugins': [
    new HTMLWebpackPlugin({
      'template': './index.html',
    }),
  ],
};
