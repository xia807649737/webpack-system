const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack的配置文件遵循CommonJS规范
module.exports = {
    entry: './src/index.js',            //程序的入口文件
    output: {                           //文件打包后存入的位置
        // path.resolve() : 解析当前相对路径的绝对路径
        // path: path.resolve('./dist/'),
        // path: path.resolve(__dirname,'./dist/'),
        path: path.join(__dirname, './dist/'),
        // filename: 'main.js',        //输出后的文件名
        filename: 'bundle.js',         //输出后的文件名
    },
    mode: 'development',                // 默认为production
    // watch: true                     // 自动开启监听模式，与调试处 webpack --watch指令用法一样

    devServer: {
        // 添加以下代码保证webpack-dev-server正常启动
        // static: {
        //     directory: path.join(__dirname, './'),
        //     watch: true
        // },
        // 热更替的配置在4.30以上版本不需要安装插件
        open: true,
        compress: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ],
    // module: {
    //     rules: [
    //         // 配置是用来解析.cc文件的loader(style-loader和css-loader)
    //         {
    //             test: /\.css$/,
    //             // webpack底层调用这些包的顺序是从右到左
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]

    // }
}
