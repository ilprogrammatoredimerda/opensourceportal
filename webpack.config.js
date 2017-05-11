const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/frontend');

const config = {
  context: APP_DIR,
  entry: {
    app: './index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "/"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
