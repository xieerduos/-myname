# pizza-app-re

> 点餐系统

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

## 开发日志

### 第一部分
1. 搭建脚手架
2. 创建用到的组件
Header, Home, Admin, Login, Menu, Register, about/About

### 第二部分
1. 制作导航，
2. 设置路由
3. 展示内容 

#### 制作导航

1. 导航 有一个共同点所有的组件都应用于 一个相同的导航
2. 所以 把导航 抽离到 Header.vue 里面

3. 把 bootstrap.css 引入 index.html
4. 在 Header.vue 设置导航

#### 配置路由跳转

1. npm install vue-router --save
2. 在 main.js 配置路由
	