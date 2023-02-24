### 初始化项目产生package.json的文件
# npm init -y

### 在项目中安装webpack
# npm i webpack webpack-cli -D

### webpack调试指令配置到package.json
# build: webpack=>默认webpack.config.js的配置文件
# build: webpack --watch=>默认监控webpack.config.js的配置文件

# webpack中监听watch的2种配置方式
# 1.在配置文件中（webpack.config.js)直接设置watch:true
# 2.在package.json文件中设置指令  watch：webpack --watch

### webpack-dev-server的用法
# devServer依赖于webpack
# devServer会在内存中生成一个打包好的bundle.js,供开发使用，修改代码后自动重新打包以及刷新浏览器
# devServer直接访问内存中根目录下的压缩文件（具体看配置文件的出口文件名），不在硬盘的dist目录下（dist/***.js)
# devServer提供热模块更换功能，针对修改的内容进行打包，效率高
