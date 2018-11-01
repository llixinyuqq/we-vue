'use strict'
const utils = require('./utils')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')

const tsWebpackConfig = merge(baseWebpackConfig, {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './packages/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../ts-webpack'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: true, usePostCSS: true })
  },
  devtool: 'source-map',
  externals: ['vue']
})

module.exports = tsWebpackConfig
