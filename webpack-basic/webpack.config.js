const path = require('path');

// webpack的配置文件遵循CommonJS规范
module.exports = {
    entry: './src/index.js',  //程序的入口文件
    output: {                 //文件打包后存入的位置
        // path.resolve() : 解析当前相对路径的绝对路径
        // path: path.resolve('./dist/'),
        // path: path.resolve(__dirname,'./dist/'),
        path: path.join(__dirname, './dist/'),
        filename: 'main.js', //输出后的文件名
    },
    mode: 'production',   //默认为production
    watch: true  // 自动开启监听模式，与调试处 webpack --watch指令用法一样
}