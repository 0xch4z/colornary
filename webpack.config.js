const { join } = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: join(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'colornary',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
      },
    ],
  },
};
