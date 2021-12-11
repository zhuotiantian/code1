const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', //入口文件
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] //配置可以解析的文件后缀
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? '' : 'inline-source-map',
  devServer: {
    contentBase: './dist', //本地开发环境目录
    stats: 'errors-only', //仅在控制台打印错误信息
    compress: false, //是否启用压缩
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new HtmlWebpackPlugin({
      //编译前清理dist文件夹
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      //指定编译时使用的html模板
      template: './src/template/index.html'
    })
  ]
};
