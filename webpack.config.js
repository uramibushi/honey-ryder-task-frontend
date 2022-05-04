const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, '/src/components'),
    },
    extensions: ['.js', '.tsx'],
  },
  devServer: {
    open: true,
    port: 3000
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Honey Ryder Task',
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
