# vue+element-ui+express
### 内容简介：

模块基于vuejs2.9.3javascript框架、element-ui前端模板、以express为服务的前端整站开发模式。前端展示采用的是element-ui前端模板，后端交互调用express接口，本程序后端接口模块统一在目录./api/目录下。

当做纯前端来使用，模板与api模块下接口交互。如果作为整站来使用，可以配置express的数据库模块，扩展下api直接操作数据库。

### 技术文档：

vuejs、vuerouter、vuex、element-ui、Express

运行方式：

1、首先安装模块 sudo cnpm install，运行命令cnpm run start,

2、数据接口目录 /api,模板编译文件目录/dist,前端模板开发目录/src,编译配置目录/build

3、如果不想采用express做服务可以把/dist目录下内容copy出来放到nginx、apache等服务的根目录下即可

4、qq:602742031

### 效果图片：

![login](https://raw.githubusercontent.com/lcqiang521/vue-express/master/static/images/login.png)

> 登录页面（admin,111111）

![list](https://github.com/lcqiang521/vue-express/blob/master/static/images/list.png?raw=true)

> 列表页面

