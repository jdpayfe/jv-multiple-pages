# vue-webpack-multiple-pages
Multiple pages configurable based on Vue CLI 3


### 一、基本
该项目由Vue CLI 3自动化构建 <br/>
包含以下基本默认设置
+ Babel
+ SCSS/SASS
+ Router
+ Vuex
+ ESLint + Standard config

配置文件位于单独文件

Node >= 8.9

**目前处于试用状态根据官方文档有可能更改**

### 二、运行
默认本地ip，默认端口8080
```
// 本地运行
npm run dev

// 本地运行https
npm run devssl
```

默认编译打包后的目录为dist，静态资源统一打包到dist/static下
```
npm run build
```

### 三、项目层级
- 入口html文件位于 /public
- 项目共用 api、assets、service、util、components位于 /src对应目录下
- 各单页vue及对应资源位于 /pages对应目录下







