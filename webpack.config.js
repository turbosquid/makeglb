const path = require('path')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const debug = argv.mode !== 'production'

  const plugins = []
  if (debug) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'makeglb.js',
      library: 'MakeGLB',
      libraryTarget: 'umd',
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    externals: {
      sharp: 'sharp',
      os: 'os',
      fs: 'fs'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'sample'),
      hot: true,
      port: 3000
    },
    plugins: plugins
  }
}
