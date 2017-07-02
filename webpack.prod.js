const path = require('path');
const Webpack = require('webpack');
const Merge = require('webpack-merge');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  'entry': {
    'vendor': [
      'preact',
      'preact-compat',
    ],
  },

  'module': {
    'rules': [
      {
        'test': /.css$/,
        'exclude': /node_modules/,
        'use': ExtractTextPlugin.extract({
          'fallback': 'style-loader',
          'use': [
            {
              'loader': 'css-loader',
              'options': {
                'importLoaders': 1,
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
        }),
      },

      {
        'test': /.(sass|scss)$/,
        'use': ExtractTextPlugin.extract({
          'fallback': 'style-loader',
          'use': [
            {
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
        }),
      },
    ],
  },

  'plugins': [
    new HTMLWebpackPlugin({
      'template': './index.html',
      'hash': true,
      'minify': {
        'collapseWhitespace': true,
      },
    }),
    new ExtractTextPlugin('styles.css'),
    new Webpack.LoaderOptionsPlugin({
      'minimize': true,
      'debug': false,
    }),
    new Webpack.optimize.UglifyJsPlugin({
      'compress': {
        'unused': true,
        'dead_code': true,
        'warnings': false,
      },
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
      'names': [
        'common',
        'vendor',
      ],
      'minChunks': 2,
    }),
  ],

  'resolve': {
    'alias': {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
});
