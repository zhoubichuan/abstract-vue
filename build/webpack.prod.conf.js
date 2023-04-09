'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
 
const env = require('../config/prod.env')
 
const webpackConfig = merge(baseWebpackConfig, {
 module: {
  rules: utils.styleLoaders({
   sourceMap: config.build.productionSourceMap,
   extract: true,
   usePostCSS: true
  })
 },
 devtool: config.build.productionSourceMap ? config.build.devtool : false,//是否开启调试模式
 output: {
  path: config.build.assetsRoot,
  filename: utils.assetsPath('js/[name].[chunkhash].js'),
  chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
 },
 plugins: [
  new webpack.DefinePlugin({
   'process.env': env
  }),
  new UglifyJsPlugin({//压缩js
   uglifyOptions: {
    compress: {
     warnings: false
    }
   },
   sourceMap: config.build.productionSourceMap,
   parallel: true
  }),
  new ExtractTextPlugin({//提取静态文件，减少请求
   filename: utils.assetsPath('css/[name].[contenthash].css'),
   allChunks: true,
  }),
  new OptimizeCSSPlugin({//提取优化压缩后(删除来自不同组件的冗余代码)的css
   cssProcessorOptions: config.build.productionSourceMap
    ? { safe: true, map: { inline: false } }
    : { safe: true }
  }),
  new HtmlWebpackPlugin({ //html打包压缩到index.html
   filename: config.build.index,
   template: 'index.html',
   inject: true,
   minify: {
    removeComments: true,//删除注释
    collapseWhitespace: true,//删除空格
    removeAttributeQuotes: true//删除属性的引号
   },
   chunksSortMode: 'dependency'//模块排序，按照我们需要的顺序排序
  }),
 
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.CommonsChunkPlugin({  // node_modules中的任何所需模块都提取到vendor
   name: 'vendor',
   minChunks (module) {
    return (
     module.resource &&
     /\.js$/.test(module.resource) &&
     module.resource.indexOf(
      path.join(__dirname, '../node_modules')
     ) === 0
    )
   }
  }),
  new webpack.optimize.CommonsChunkPlugin({
   name: 'manifest',
   minChunks: Infinity
  }),
  new webpack.optimize.CommonsChunkPlugin({
   name: 'app',
   async: 'vendor-async',
   children: true,
   minChunks: 3
  }),
  new CopyWebpackPlugin([//复制static中的静态资源（默认到dist里面）
   {
    from: path.resolve(__dirname, '../'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
   }
  ])
 ]
})
 
if (config.build.productionGzip) {
 const CompressionWebpackPlugin = require('compression-webpack-plugin')
 webpackConfig.plugins.push(
  new CompressionWebpackPlugin({
   asset: '[path].gz[query]',
   algorithm: 'gzip',
   test: new RegExp(
    '\\.(' +
    config.build.productionGzipExtensions.join('|') +
    ')$'
   ),
   threshold: 10240,
   minRatio: 0.8
  })
 )
}
 
if (config.build.bundleAnalyzerReport) {
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
 webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
 
module.exports = webpackConfig