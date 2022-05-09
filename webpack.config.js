const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/pages/index.tsx',
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
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
