const path = require('path')
const wepback = require('webpack')

module.exports = {
  context: path.join(__dirname, './app'),

  entry: {
    jsx: './index.js',
    html: './index.html'
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.css']
  },

  module: {
    preLoaders: preLoaders(),
    loaders: loaders()
  },

  postcss: function() {
    return [
      require('lost')
    ]
  }
}
function preLoaders () {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        'eslint-loader'
      ]
    }
  ]
}

function loaders () {
  return [
    {
      test: /\.html$/,
      loaders: [
        'file?name=[name].[ext]'
      ]
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader'
      ]
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }
  ]
}
