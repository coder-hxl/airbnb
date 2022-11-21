# Airbnb

## 关于

Airbnb —— 基于 React、TS、RTK 等技术开发。

## 技术栈

* 开发工具: Visual Studio Code
* 编程语言: TypeScript 4
* 构建工具: Create React App
* 前端框架: React 18
* 路由工具: React Router Dom
* 状态管理: Redux Tookit
* UI 框架:  Ant Design / Material UI
* CSS 预编译: Less
* HTTP 工具: Axios

更多请查看 package.json 文件

## 功能

### 通用组件

可在其他项目使用

目录: src/base-ui

#### ScrollView组件

该组件时一个滚动组件，用于需要横向滚动内容，并且左右侧控件在有可以的滚动内容才会显示。(目前在 Home 页面使用)

#### Indicator组件

该组件是一个轮播图的指示器组件，其特点在当 items 超出容器时，在滚动时，多出的 item 会一直在容器中间滚动，开头 item 和结尾 item 不受影响。(目前在 Entre 页面使用)

#### PictureBorwser组件

该组件是一个图片浏览器，使用 Indicator 组件当底部的预览器。(目前在 Detail 页面使用)

### 组件

#### Header组件

该组件中间的搜索框包含两种动画，展示效果由 src/store/main 下的 State 属性决定, 可设置 fixed 和 alpha 属性。(目前在 Home / Entire / Detail 页面使用)

























