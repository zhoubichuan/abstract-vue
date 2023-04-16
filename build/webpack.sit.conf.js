"use strict";
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge"); //webpack-merge实现合并
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin"); //webpack的提示错误和日志信息的插件
const { devWebpackConfig } = require("./webpack.dev.conf");
const env = require("../config/sit.env");
const portfinder = require("portfinder"); // 查看空闲端口位置，默认情况下搜索8000这个端口
devWebpackConfig.plugins[0] = new webpack.DefinePlugin({
  "process.env": env
});
const sitWebpackConfig = devWebpackConfig;

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    //查找端口号
    if (err) {
      reject(err);
    } else {
      //端口被占用时就重新设置evn和devServer的端口
      process.env.PORT = port;
      sitWebpackConfig.devServer.port = port;
      // npm run dev成功的友情提示
      sitWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${sitWebpackConfig.devServer.host}:${port}`
            ]
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        })
      );
      resolve(sitWebpackConfig);
    }
  });
});
