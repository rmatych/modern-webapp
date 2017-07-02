const path = require('path');

const srcDir = path.resolve(__dirname, './src/');
const buildDir = path.resolve(__dirname, './build/');

module.exports = {
  'context': srcDir,

  'entry': {
    'index': './index.jsx',
  },

  'output': {
    'path': buildDir,
    'filename': '[name].bundle.js',
  },

  'resolve': {
    'extensions': [
      '.js',
      '.jsx',
      '.json',
    ],
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

      {
        'test': /.(eot|svg|ttf|woff|woff2)$/,
        'loader': 'file-loader',
      },

      {
        'test': /.(jpe?g|png|gif|svg)$/i,
        'use': [
          {
            'loader': 'file-loader',
          },
          {
            'loader': 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
