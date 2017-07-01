const Merge = require('webpack-merge');
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
    ],
  },
});
