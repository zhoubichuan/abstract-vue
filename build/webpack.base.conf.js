"use strict";
const path = require("path"); // node自带的文件路径工具
const webpack = require("webpack");
const utils = require("./utils"); // 工具函数集合
const config = require("../config"); // 配置文件
const vueLoaderConfig = require("./vue-loader.conf"); // 工具函数集合
/**
 * 获取"绝对路径"
 * @method resolve
 * @param {String} dir 相对于本文件的路径
 * @return {String}   绝对路径
 */
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  //入口js文件(默认为单页面所以只有app一个入口)
  entry: {
    app: "./src/main.js"
  },
  //配置出口
  output: {
    path: config.build.assetsRoot, //打包编译的根路径(dist)
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath //发布路径
  },
  resolve: {
    extensions: [".js", ".vue", ".json"], // 自动补全的扩展名
    //别名配置
    alias: {
      "@": resolve("src"), // eg:"src/components" => "@/components"
      static: resolve("static")
    }
  },
  module: {
    rules: [
      //使用vue-loader将vue文件编译转换为js
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      //通过babel-loader将ES6编译压缩成ES5
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client"),
          resolve("node_modules/web-elementui")
        ]
      },
      //使用url-loader处理(图片、音像、字体)，超过10000编译成base64
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  //nodeJs全局变量/模块，防止webpack注入一些nodeJs的东西到vue中
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("../public/libs-mainfest.json") // 指向生成的manifest.json
    })
  ]
};
