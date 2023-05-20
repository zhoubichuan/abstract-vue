var path = require("path");
var utils = require("./utils");

var webpack = require("webpack");
var config = require("../config");
var utils = require("./utils");
var dllConfig = require("./webpack.dll.conf");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var chalk = require("chalk");
var rm = require("rimraf");
var ora = require("ora");
var spinner = ora({
  color: "green",
  text: "正为生产环境打包dll包，耐心点，不然自动关机。。。"
});
spinner.start();
rm(path.resolve(__dirname, "../public"), err => {
  if (err) throw err;
  webpack(dllConfig, function(err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );

    console.log(chalk.cyan("  dll打包完成.\n"));
  });
});
