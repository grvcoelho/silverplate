const webpack = require('webpack')
const { resolve  } = require('path')

const context = resolve(__dirname, 'app')

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './index.js'
]

const output = {
  path: resolve(__dirname, 'build'),
  filename: 'bundle.js',
  publicPath: '/'
}

const rules = [
  {
    test: /\.html$/,
    use: ['file-loader?name=[name].[ext]']
  },
  {
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader?modules',
      'postcss-loader'
    ]
  }
]

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]

module.exports = {
  context,
  entry,
  output,
  plugins,
  module: { rules }
}
