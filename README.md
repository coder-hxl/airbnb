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
* CSS 编写方式: Styled Components
* HTTP 工具: Axios

<u>**详情请查看 package.json 文件**</u>

## 核心概念

### 基本

#### Axios

使用 TypeScript 对 Axios 进行封装。

### 通用组件

可在其他项目使用

#### ScrollView组件

该组件时一个滚动组件，用于需要横向滚动内容，并且左右侧控件在有可以的滚动内容才会显示。(目前在 Home 页面使用)

#### Indicator组件

该组件是一个轮播图的指示器组件，其特点在当 items 超出容器时，在滚动时，多出的 item 会一直在容器中间滚动，开头 item 和结尾 item 不受影响。(目前在 Entire 页面使用)

#### PictureBorwser组件

该组件是一个图片浏览器，使用 Indicator 组件当底部的预览器。(目前在 Detail 页面使用)

<u>**详情请查看 src/base-ui**</u>

### 特定组件

#### Header组件

该组件中间的搜索框包含两种动画，展示效果由 Store 的 Main State 属性决定, 可设置 fixed 和 alpha 属性。(目前在 Home / Entire / Detail 页面使用)

#### RoomItem组件

该组件用作展示一个房间，会根据图片数量是否展示轮播效果，并使用 Indicator 组件当指示器。(目前在 Home / Entire 页面使用)

<u>**更多组件请查看 src/components**</u>

### 页面

头部: 使用 Header 组件。

内容: 通过 Router 展示 Home / Entire / Detail 组件。

底部: 使用 Footer 组件。

#### Home

* 数据来源：派发 Action (发起网络请求将 Home 数据存入 Store 的 Home State 中)，并从 Store 的 Home State 获取数据。

* 修改 Header 组件：派发 Action 将 Store 的 Main State 的 fixed 和 alpha 设置为 true。

* 内容：

  1. Banner 组件。
  
  2. 房间区域组件：使用 ScrollView 组件对 Tab 栏数据进行展示，不同 Tab 对应着不同的房间列表，使用 RoomItem 组件展示房间数据。
  
  3. 地点展示组件：使用 ScrollView 组件对地点数据进行展示。
  
  4. 房间区域组件：使用 RoomItem 组件展示房间数据。
  
  5. 房间区域组件：使用 ScrollView 组件对 RoomItem 组件进行展示。

#### Entire

* 数据来源：派发 Action (根据 offset 和 size 发起网络请求将 Entire 数据存入 Store 的 Entire State 中)，并从 Store 的 Entire State 获取数据。

* 修改 Header 组件方式：派发 Action 将 Store 的 Main State 的 fixed 设置为 true，alpha 设置为 false。

* 内容：
  
  1. Filter 组件。
  
  2. 房间组件：使用 RoomItem 组件展示房间数据，房间被点击时会派发 Action 将当前房间数据传入 Store 的 Detail State 中。
  
  3. 分页器组件：根据页数 ，派发 Action 请求数据。

#### Detail

* 数据来源：从 Store 的 Detail State 获取数据。
* 修改 Header 组件：派发 Action 将 Store 的 Main State 的 fixed 和 alpha 设置为 false。
* 内容：

  1. 展示图片组件：点击图片或查看图片，会显示 PictureBorwser 组件。

  2. 详情信息组件：待完成。

<u>**详情请查看 src/views**</u>















