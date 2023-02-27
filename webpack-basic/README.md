### 初始化项目产生package.json的文件
# npm init -y

### 在项目中安装webpack
# npm i webpack webpack-cli -D

### webpack调试指令配置到package.json
# 1.build: webpack=>默认webpack.config.js的配置文件
# 2.build: webpack --watch=>默认监控webpack.config.js的配置文件

# webpack中监听watch的2种配置方式
# 1.在配置文件中（webpack.config.js)直接设置watch:true
# 2.在package.json文件中设置指令  watch：webpack --watch

### webpack-dev-server的用法
# 1.devServer依赖于webpack
# 2.devServer会在内存中生成一个打包好的bundle.js,供开发使用，修改代码后自动重新打包以及刷新浏览器
# 3.devServer直接访问内存中根目录下的压缩文件（具体看配置文件的出口文件名），不在硬盘的dist目录下（dist/***.js)
# 4.devServer提供热模块更换功能，针对修改的内容进行打包，效率高

### html插件（html-webpack-plugin）
# 1.插件是解决loader（对源代码的转化）不能解析的内容
# 2.安装插件 npm i html-webpack-plugin -D
# 3.在webpack.config.js中的plugins节点下配置
# 4.插件会在打包中自动引入动态的压缩文件，不用每次都去修改引用路径
# 5.devServer时可以根据模板自动生成html(类似于devServer生成内存中bundle.js)
# 6.devServer时自动引入bundle.js
# 7.打包时会自动生成index.html

### webpack-dev-middleware
# 1.html插件是基于当前第三方中间件封装好的打包工具，该插件适用于有特殊定制，更偏于原理的打包工具
# 2.安装express，webpack-dev-middleware,   npm i express webpack-dev-middleware -D
# 3.新建server.js
# 4.配置package.json中的scripts:"server":"node server.js"
# 5.如果要是有middleware,必须使用html-webpack-plugin插件，否则html文件无法正确的输出到express服务器的根目录

### 总结
# 只有在开发的时候才需要用到自动编译工具，例如：webpack-dev-server，项目上线时都会直接使用webpack进行打包构建，不需要使用这些自动编译工具，自定编译工具只是为了提高开发体验

### loader  用于对模块的源代码进行转换
# 1.安装css-loader插件    npm i css-loader style-loader -D
# 2.安装less-loader插件   npm i less less-loader -D
# 3.安装sass-loader插件   npm i node-sass sass-loader -D
# 4.注意：sass-loader插件在node版本与node-sass版本不匹配的情况下，会一直安装报错，对应的在网上查下匹配的版本，node v14及以下版本可以直接安装，node v16及以上在package.json文件中直接添加属性"sass":"1.32"; "sass-loader"："^10.0.5"
# 5.安装file-loader插件   npm i file-loader -D ，ps：不知道为啥这里没有装file-loader这个插件也可以引用图片
# 6.安装url-loader插件，基于file-loader对小图片进行base64处理  npm i url-loader -D