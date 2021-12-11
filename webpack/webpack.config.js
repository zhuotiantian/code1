// webpack是node写出来的，需要使用node的写法
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", // production:生产模式 development:开发模式
  entry: "./src/index.js", // 入口
  output: {
    // chunkhash：同一个模块哈希值相同，修改一处,js和css的hash值都会发生改变
    // contenthash：根据文件内容产生的hash值，内容不同产生的contentHash值把不一样
    filename: "bundle.[contenthash:8].js", // 打包后的文件名
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
  },
  devServer: {
    // 开发服务器的配置，在内存中生成临时文件
    port: "3000",
    client: {
      progress: true, // 打包进度条
    },
    open: true, // 自动打卡浏览器
    compress: true, // 启用gzip压缩
  },
  plugins: [
    // 存储所有的webpack插件
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      // hash: true, // 为引入的文件添加hash值，文件发生变更之后重新打包会生成不一样的hash值
      minify: {
        removeAttributeQuotes: true, // 删除属性双引号
        collapseWhitespace: true, // 折叠空行
      },
    }),
  ],
  module: {
    // 模块
    rules: [
      // css-loader:解析@import
      // style-loader:把css插入head标签中
      // loader的特点是一个loader处理一件事
      // loader的顺序是从右向左执行
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "head",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
