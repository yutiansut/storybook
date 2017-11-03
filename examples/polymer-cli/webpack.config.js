const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/polymer-playground-app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/@webcomponents/webcomponentsjs/webcomponents*.js', flatten: true },
    ]),
  ],
  devServer: { historyApiFallback: true },
  devtool: 'eval-source-map',
};
