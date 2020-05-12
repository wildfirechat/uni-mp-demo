## 野火IM解决方案

野火IM是一套跨平台、核心功能开源的即时通讯解决方案，主要包含以下内容。

| 仓库                                                         | 说明                                                    | 备注 |
| ------------------------------------------------------------ | ------------------------------------------------------- | ---- |
| [android-chat](https://github.com/wildfirechat/android-chat) | 野火IM Android SDK源码和App源码                       |可以很方便地进行二次开发，或集成到现有应用当中      |
| [ios-chat](https://github.com/wildfirechat/ios-chat)         | 野火IM iOS SDK源码和App源码                            |可以很方便地进行二次开发，或集成到现有应用当中      |
| [pc-chat](https://github.com/wildfirechat/pc-chat)           | 基于[Electron](https://electronjs.org/)开发的PC平台应用 |      |
| [wx-chat](https://github.com/wildfirechat/wx-chat)           | 野火IM小程序SDK源码和Demo源码 | 可很方便地集成到微信小程序中     |
| [server](https://github.com/wildfirechat/server)             | IM server                                               |      |
| [app server](https://github.com/wildfirechat/app_server)     | 应用服务端                                          |      |
| [robot_server](https://github.com/wildfirechat/robot_server) | 机器人服务端                                        |      |
| [push_server](https://github.com/wildfirechat/push_server)   | 推送服务器                                              |      |
| [docs](https://github.com/wildfirechat/docs)                 | 野火IM相关文档，包含设计、概念、开发、使用说明          |      | |


### 说明
本仓库是通过[微信小程序转换为uni-app项目](https://github.com/zhangdaren/miniprogram-to-uniapp)，将[wx-chat](https://github.com/wildfirechat/wx-chat)转成了[uni-app](https://uniapp.dcloud.net.cn/)项目，以便对野火IM小程序SDK进行多端支持能力测试。

### 已知问题
1. UI展示不正常
2. UI上发送消息不正常
3. 但是能将会话列表和联系人等从服务端正常拉取，说明SDK工作正常。

### 测试
可通过修改```login.vue```里面，```wfc.connect(userId, token, '小程序平台名称，可选值为: wx、ali、qq、bd、tt；分别对应微信小程序、支付宝小程序、QQ小程序、百度小程序、今日头条小程序');```进行不同平台功能测试。

### 支持的小程序平台
1. wx，微信小程序
2. ali，支付宝小程序
3. qq，QQ小程序
4. bd，百度小程序
5. tt，今天头条小程序

### 欢迎提交PR