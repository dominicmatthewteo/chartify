var webpack = require('webpack');
var path = require('path');

var precss  = require('precss');
var cssnext = require('postcss-cssnext');
var vars    = require('postcss-simple-vars');
var nested  = require('postcss-nested');
var mixins  = require('postcss-mixins');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './main/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, '/main')
    }, {
      test: /\.css?$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { plugins: () => [...plugins] } }
        ]
      })
    }]
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: './[name].css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [precss, cssnext, vars, nested, mixins]
      }
    })
  ]
};
