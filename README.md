# Kino 的微光书房

一个可交互的 3D 个人书房网站，采用柔和粉彩与动态霓虹灯光，支持桌面和手机访问。

## 打开网页

下载后直接打开 `pastel-study.html`。网页内已嵌入 Three.js、照片、字体、PDF 和音频；外部链接需要联网。音乐需要点击后播放。

## 修改与构建

- `scene-app.js`：场景、交互、响应式界面和内嵌媒体资源。
- `page-shell.html`：页面头部和二维加载动画。
- `three-inline.tmp.js`：随网页打包的 Three.js。
- `assets/audio/credits.json`、`assets/fonts/`：音频来源和字体授权说明。

安装 Node.js 后运行：

```sh
node build.cjs
```

输出为 `pastel-study.html`，无需安装 npm 依赖。媒体全部内嵌，因此文件约 71 MiB，首次下载可能需要一些时间。

## 交互

右侧菜单列出可交互物品；悬停或键盘聚焦会高亮对应物体。手机上可展开菜单。支持工作经历相册、论文链接、奖状和简历预览、钢琴曲与唱片播放、音响控制、一键静音、灯光开关、可拖动椅子和自主活动的兔子。

## 素材来源

音频来源和授权信息保留在网页唱片面板及 `assets/audio/credits.json` 中。字体说明见 `assets/fonts/`。个人照片、简历、原创歌词和用户提供的音频属于其各自权利人；本仓库未为这些素材授予统一开源许可。Three.js 保留其内嵌 MIT 许可声明。
