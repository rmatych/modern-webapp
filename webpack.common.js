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
        'use': [
          {
            'loader': 'eslint-loader',
          },
        ],
      },

      {
        'test': /.jsx?$/,
        'exclude': /node_modules/,
        'use': [
          {
            'loader': 'babel-loader',
            'options': {
              'presets': [
                'env',
                'react',
                'es2015',
              ],
            },
          },
        ],
      },
    ],
  },

  'plugins': [
    new HTMLWebpackPlugin({
      'template': './index.html',
    }),
  ],
};
