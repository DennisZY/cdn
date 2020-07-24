# firefly

> website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 因数据量比较少，没有启用后台项目，数据处理以及页面纯前端开发

##### 前端基本架构
1. webpack+vuejs+vue-router
2. es6 + sass
3. 最低兼容IE10+
4. 还有其他不同的插件

##### 项目结构

使用vue-cli脚手架快速开发
- build (webpack配置项)
- config (配置相关)
- dist (打包后的文件)
- node_modules (开发需要引入的模块)
- src (主代码目录)
    - assets (项目静态资源存放目录)
    - components (组件)
    - eui (按需引入elementUI库)
    - router (路由)
    - views (页面)
    - main.js (全局主js代码)
    - App.vue (全局项目入口vue文件)
- static (静态目录)
- babelrc (es6转es5)
- ....以下略

本地部署流程
1. 安装nodejs
2. 安装npm
3. 安装依赖 (package.json内容)

启动命令
1. 在当前目录打开shell输入npm run dev， 启动开发模式
2. 打包命令npm run build 会在dist下生成打包好的文件。

改动：
需要修改src -> products -> products.vue文件的图片路径， 将前面的IP地址改成对应服务器的域名地址（前提是你已经部署了nginx在自己的服务器上， 使用nginx默认路径，即html下）