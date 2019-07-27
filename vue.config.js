var webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_JSON': JSON.stringify(require('./package.json'))
      })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}