# Airbnb

Airbnb 是一个高仿 Airbnb 房源网，拥有房源搜索、地区房源、更多地区房源、房源详情、个人信息。

> 如果对您有帮助，可以给 [Airbnb 存储库](https://github.com/coder-hxl/airbnb) 点个 star 支持一下！

## 技术栈

- 开发工具: Visual Studio Code
- 编程语言: TypeScript 4
- 构建工具: Create React App
- 前端框架: React 18
- 路由工具: React Router Dom
- 状态管理: Redux Tookit
- UI 框架: Ant Design / Material UI
- CSS 预编译: Less
- CSS 编写方式: Styled Components
- HTTP 工具: Axios

**更多请查看 package.json 文件**

## 介绍

只对核心部分讲解。组件具体实现需要到对应的文件查看。

### 组件

#### 通用组件

##### ScrollView 组件

该组件时一个滚动组件，用于需要横向滚动内容，并且左右侧控件在有可以的滚动内容才会显示。

##### Indicator 组件

该组件是一个轮播图的指示器组件，其特点在当 items 超出容器时，在滚动时，多出的 item 会一直在容器中间滚动，开头 item 和结尾 item 不受影响。

##### PictureBorwser 组件

该组件是一个图片浏览器，使用 Indicator 组件当底部的预览器。

**更多请查看 src/base-ui**

#### 特殊组件

##### Header 组件

该组件用于进行搜索房源、控制登录弹窗等操作。中间的搜索框包含两种动画，展示效果由 Store 的 Main State 属性决定, 可设置 fixed 和 alpha 属性。

##### RoomItem 组件

该组件用作展示一个房间。会根据图片数量是否展示轮播效果，并使用 Indicator 组件当指示器。被点击时跳转到 Room 页。

**更多请查看 src/components**

### 页面

- 头部: 使用 Header 组件。

- 内容: 通过 Router 展示 Home / Area / Room / User。

- 底部: 使用 Footer 组件。

##### Home

- 数据来源：派发 Action (发起网络请求将 Home 数据存入 Store 的 Home State 中)，并从 Store 的 Home State 获取数据。
- 内容：
  - Header：修改 Header 组件，派发 Action 将 Store 的 Main State 的 fixed 和 alpha 设置为 true 。
  - Banner：展示大长图 。
  - 精彩之地：请求 `/api/home/wonderfulplace` 。使用 HomeSectionV2 组件展示房源数据。
  - 热门目的地：请求 `/api/home/hotplace` 。使用 HomeSectionV2 组件展示房源数据。
  - 你可能想去：请求 `/api/home/longfor` 。使用 HomeLongFor 组件展示地区数据。
  - 高分好评：请求 `/api/home/highscore` 。使用 HomeSectionV1 组件展示房源数据。
  - 高性价比：请求 `/api/home/goodprice` 。使用 HomeSectionV1 组件展示房源数据。	
  - plus房源：请求 `/api/home/plus` 。使用 HomeSectionV3 组件展示房源数据。
- 子组件
  - HomeSectionV1：内部使用 RoomItem 组件展示房间数据。
  - HomeSectionV2：内部使用 ScrollView 组件对 Tab 栏数据进行展示，使用 RoomItem 组件展示房间数据。
  - HomeSectionV3：内部使用 ScrollView 组件对 RoomItem 组件进行展示。
  - HomeLongFor：内部使用 ScrollView 组件对地区数据进行展示。


##### Area

- 数据来源：派发 Action (根据 offset 和 size 发起网络请求将 Area 数据存入 Store 的 Area State 中)，并从 Store 的 Area State 获取数据。
- 内容：
  - Header：修改 Header 组件，派发 Action 将 Store 的 Main State 的 fixed 设置为 true，alpha 设置为 false。
  - 区域房间：请求 `/api/area/:areaName` 。使用 RoomItem 组件展示房间数据。
  - 分页器组件：使用 Material UI 的 Pagination 组件。

##### Room

- 数据来源：从 Store 的 Room State 获取数据。
- 内容：
  - Header：修改 Header 组件，派发 Action 将 Store 的 Main State 的 fixed 和 alpha 设置为 false。
  - 房间图像：请求 `/api/room/193581217` 。点击图片或查看图片，会显示 PictureBorwser 组件。
  - 详情信息：请求 `/api/room/193581217` 。
  - 评论数据：请求 `/api/room/review` 。使用 Material UI 的 Pagination 组件控制评论分页展示。

##### User

- 数据来源：派发 Action (根据用户 id 发起网络请求将 User 数据存入 Store 的 User State 中)，并从 Store 的 Home State 获取数据。
- 内容：
  - Header：修改 Header 组件，派发 Action 将 Store 的 Main State 的 fixed 和 alpha 设置为 false。
  - 侧边栏：请求 `/api/user/:userId` 。展示用户头像等，使用  Ant Design 进行更新头像和裁剪头像。
  - 信息：请求 `/api/user/:userId` 。展示用户信息，更新信息功能。

**更多请查看 src/views**

## API 文档

API 文档: https://documenter.getpostman.com/view/19782726/2s8Z6yWsaF

## 后端

Airbnb-API Github 地址: https://github.com/coder-hxl/airbnb-api

Airbnb-API Gitee 地址: https://gitee.com/coderhxl/airbnb-api
