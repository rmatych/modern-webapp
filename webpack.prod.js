const Webpack = require('webpack');
const Merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
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
    ],
  },

  'plugins': [
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
  ],

  'resolve': {
    'alias': {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
});
