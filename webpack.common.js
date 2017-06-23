const path = require('path');

const srcDir = path.resolve(__dirname, './src/');
const buildDir = path.resolve(__dirname, './build/');

module.exports = {
  context: srcDir,

  entry: {
    app: './app.js'
  },

  output: {
    path: buildDir,
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [

    ]
  },

  plugins: [

  ]
}
