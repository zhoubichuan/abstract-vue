"use strict";
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin"); //webpack的提示错误和日志信息的插件
const webpackConfig = require("./webpack.conf").default;
const env = require("../config/dev.env");
const portfinder = require("portfinder"); // 查看空闲端口位置，默认情况下搜索8000这个端口
webpackConfig.plugins[0] = new webpack.DefinePlugin({
  "process.env": env
});
const devWebpackConfig = webpackConfig;

let sitConfig = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    //查找端口号
    if (err) {
      reject(err);
    } else {
      //端口被占用时就重新设置evn和devServer的端口
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;
      // npm run dev成功的友情提示
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`
            ]
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        })
      );
      devWebpackConfig.devServer.proxy = config.dev.proxyTable
      resolve(devWebpackConfig);
    }
  });
});
module.exports = sitConfig;