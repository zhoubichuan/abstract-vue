'use strict'                                    // js的严格模式
require('./check-versions')()                   // node和npm的版本检查

process.env.NODE_ENV = 'production'             // 设置环境变量为生产环境

// 导进各模块
const ora = require('ora') // loading模块
const rm = require('rimraf') // 用于删除文件
const path = require('path') // 文件路径工具
const chalk = require('chalk') // 在终端输出带颜色的文字
const webpack = require('webpack') // 引入webpack.js
const config = require('../config') // 引入配置文件
const webpackConfig = require('./webpack.prod.conf') // 引入生产环境配置文件
// 在终端显示loading效果, 并输出提示
const spinner = ora('building for production...')
spinner.start()

/*
    rm方法删除dist/static文件夹
        若删除中有错误则抛出异常并终止程序
        若没有错误则继续执行，构建webpack
            结束动画
            若有异常则抛出
            标准输出流，类似于console.log
*/
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,                     // 增加控制台颜色开关
      modules: false,                   // 是否增加内置模块信息
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,                    // 允许较少的输出
      chunkModules: false               // 不将内置模块信息加到包信息
    }) + '\n\n')                        // 编译过程持续打印
    // 编译出错的信息
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 编译成功的信息
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})