const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
      }
    ]
  },
  devServer: {
    open: true,
    port: 3000
  }
};
