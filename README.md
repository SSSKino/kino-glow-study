# Kino 的微光书房

一个可交互的 3D 个人书房网站，采用柔和粉彩与动态霓虹灯光，支持桌面和手机访问。

## 打开网页

推荐下载整个仓库后打开 `index.html`：初次加载约 9.1 MiB，音乐、相册原图和 PDF 按需读取。发布网站时也以 `index.html` 为入口，并一起保留 `scene-web.js`、`three-inline.tmp.js` 和 `assets/web/`。

需要单个文件携带时，打开 `pastel-study.html`，所有媒体仍内嵌，约 51.8 MiB。两种入口功能一致；外部链接需要联网，音乐需要点击后播放。本地明信片仍使用原来的存储键，不清空收藏。

## 修改与构建

- `scene-app.js`：场景、交互、响应式界面和内嵌媒体资源。
- `room-i18n.js`：统一中英文切换、界面翻译与场景标签翻译。
- `page-shell.html`：页面头部和二维加载动画。
- `three-inline.tmp.js`：随网页打包的 Three.js。
- `assets/audio/credits.json`、`assets/fonts/`：音频来源和字体授权说明。

安装 Node.js 后运行：

```sh
node build.cjs
```

同时输出单文件 `pastel-study.html` 与按需加载入口 `index.html` / `scene-web.js` / `assets/web/`，无需安装 npm 依赖。`scene-web.js` 为构建产物，修改源文件后重新构建。

## 交互

右侧菜单列出可交互物品；悬停或键盘聚焦会高亮对应物体。手机上可展开菜单。支持工作经历相册、论文链接、奖状和简历预览、钢琴曲与唱片播放、音响控制、一键静音、灯光开关、可拖动椅子和自主活动的兔子。

## 素材来源

音频来源和授权信息保留在网页唱片面板及 `assets/audio/credits.json` 中。字体说明见 `assets/fonts/`。个人照片、简历、原创歌词和用户提供的音频属于其各自权利人；本仓库未为这些素材授予统一开源许可。Three.js 保留其内嵌 MIT 许可声明。

右下角可切换中文 / English，选择会保存在当前浏览器。弹窗内也可以切换。原始简历 PDF、证书、照片及外部网页预览保留原件语言。

### Window reference and artwork
The pastel gouache window illustration was generated using the built-in image tool, with a photograph from [Morton: 49/1 Macquarie Street, Bennelong Apartments](https://www.morton.com.au/lease/nsw/sydney-city/sydney/residential/unit/8593362), as its geographical reference. Source photograph rights remain with its respective owner; this material is not covered by a project code license. The final illustration keeps the bridge connected to the banks and the Opera House at a moderate distance. Camera motion shifts the crop; tap the window or choose its menu entry to look closer, then drag within the image. Water and clouds animate gently, with a reduced-motion fallback. This is an illustrated panorama, not a surveyed 3D reconstruction. See `assets/harbour-art.json` for generation provenance and prompt.

## 手机与 iPad 性能

静态模型按材质合并绘制，保留原来的碰撞和点击代理。模拟 iPad 每帧绘制调用由 1,344 降至 697，三角形由约 494k 降至 325k。触屏使用较低几何细节、分辨率和一张 1024px 阴影贴图；空闲 30 fps，拖动期间目标 60 fps，慢设备会进一步降低分辨率。后台页面及打开详情时暂停房间动画。保留单指旋转、双指平移/缩放、44px 以上触控目标、横竖屏重排、安全区和原有双语切换。

验证覆盖 360×800、844×390、820×1180、1180×820 和桌面模拟；这些结果来自 Windows Edge / Chromium，不代表已在实体 iPhone / iPad Safari 上验证。确认了 29 张照片与 5 份 PDF 字节未变、九段录音可加载、窗景拖动、相册、简历、音响控制及兔子/椅子碰撞。源音频保留，网页播放副本为 96 kbps MP3；选定字体采用保留全部字形的 WOFF，原始 TTF 和许可文件不变。
