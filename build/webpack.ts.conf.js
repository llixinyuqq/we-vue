'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const address = require('address')

const tsWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
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
  // cheap-module-eval-source-map is faster for development
  devtool: 'source-map'
})

module.exports = tsWebpackConfig
