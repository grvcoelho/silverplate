const webpack = require('webpack')
const { resolve } = require('path')

const context = resolve(__dirname, 'app')

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
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
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: ['eslint-loader']
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[local]--[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  }
]

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        require('lost'),
      ]
    }
  })
]

module.exports = {
  context,
  entry,
  output,
  plugins,
  module: { rules }
}
