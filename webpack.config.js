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
    alias: {
      '@': path.resolve(__dirname, '/src'),
      'components': path.join(__dirname, '/src/components'),
      'features': path.join(__dirname, '/src/features'),
      'pages': path.join(__dirname, '/src/pages'),
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
