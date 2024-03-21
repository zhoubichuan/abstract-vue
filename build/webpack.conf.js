"use strict";
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge"); //webpack-merge实现合并
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
const env = require("../config/dev.env");
var bundleConfig = require("../static/dll/libs-mainfest.json");

exports.default = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  devtool: config.dev.devtool, //调试模式
  devServer: {
    clientLogLevel: "warning",
    historyApiFallback: {
      //使用 HTML5 History API 时， 404 响应替代为 index.html
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(config.dev.assetsPublicPath, "index.html")
        }
      ]
    },
    hot: true, //热重载
    contentBase: false, // 提供静态文件访问
    compress: true, //压缩
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser, //npm run dev 时自动打开浏览器
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false, // 显示warning 和 error 信息
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable, //api代理
    quiet: true, //控制台打印警告和错误(用FriendlyErrorsPlugin 为 true)
    watchOptions: {
      // 检测文件改动
      poll: config.dev.poll
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": env
    }),
    new webpack.HotModuleReplacementPlugin(), //模块热替换插件，修改模块时不需要刷新页面
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(), //webpack编译错误的时候，中断打包进程，防止错误代码打包到文件中
    // 将打包编译好的代码插入index.html
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "index.html",
    //   inject: true,
    //   libJsName: bundleConfig['libs.js'],
    //   libCssName: bundleConfig['libs.css'],
    //   env: config.dev.env
    // }),
    // 提取static assets 中css 复制到dist/static文件
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.dev.assetsSubDirectory,
        ignore: [".*"] //忽略.*的文件
      }
    ]),
  ]
});
