const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

// 简立express服务器
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    // 编译好的文件放到服务器根目录下
    publicPath: '/'
}))

// 监听3000端口
app.listen(3000, function () {
    console.log('http://localhost:3000');
})