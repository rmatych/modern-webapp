const path = require('path');
const Merge = require('webpack-merge');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  'module': {
    'rules': [
      {
        'test': /.css$/,
        'exclude': /node_modules/,
        'use': [
          {
            'loader': 'style-loader',
          }, {
            'loader': 'css-loader',
            'options': {
              'importLoaders': 1,
              'localIdentName': '[name]_[local]--[hash:base64:5]',
              'modules': true,
            },
          }, {
            'loader': 'postcss-loader',
            'options': {
              'config': {
                'path': './postcss.config.js',
              },
            },
          },
        ],
      },

      {
        'test': /.(sass|scss)$/,
        'use': [
          {
            'loader': 'style-loader',
          }, {
            'loader': 'css-loader',
            'options': {
              'importLoaders': 2,
              'modules': false,
            },
          }, {
            'loader': 'postcss-loader',
            'options': {
              'config': {
                'path': './postcss.config.js',
              },
            },
          }, {
            'loader': 'sass-loader',
            'options': {
              'includePaths': [
                path.resolve(__dirname, 'node_modules/bulma/sass'),
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
});
