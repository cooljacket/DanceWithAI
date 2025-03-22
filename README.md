# DanceWithAI Hugo主题

想做一个高度可定制化（且很清楚知道怎么定制、很容易定制）的hugo博客主题！！！

为啥呢？因为我想用某个主题的时候，发现有的功能全，但UI好丑，有的样式、排版又不是自己喜欢的，然后又很难清晰的知道要如何配置主题的内容，反正总之就是没有非常打动我的hugo主题。

然后现在AI编程特别容易了，我就想直接跟大模型（这里主要是Claude-3.5-Sonnet + TRAE，感谢赛博菩萨们）抱团取暖，UI样式可以随心设计，想怎么排版都容易更换，想定制页面模板也非常简单。

后边我会出一系列博客讲解这个过程具体是怎么做到的，原理是啥。

## 特色功能

- 🌓 明暗主题切换 - 支持自动和手动切换深色/浅色模式
- 📱 响应式设计 - 完美适配桌面端和移动端
- 🎨 现代化UI - 简洁优雅的设计风格
- 📝 Markdown增强 - 支持扩展的Markdown语法
- 🏷️ 标签云支持 - 直观展示文章标签
- 📅 文章时间线 - 清晰的文章归档

## 快速开始

1. 在Hugo站点的themes目录下克隆本主题：
   ```bash
   git clone https://github.com/cooljacket/DanceWithAI.git themes/DanceWithAI
   ```

2. 在Hugo配置文件中启用主题：
   ```toml
   theme = "DanceWithAI"
   ```

## 主题配置

在你的站点配置文件（config.toml）中添加以下配置：

```toml
[params]
  # 博客介绍
  blog_introduction = "你的博客介绍"
  
  # 社交媒体链接（可选）
  github = "你的GitHub主页"
  twitter = "你的Twitter主页"
```

## 开发路线图

### 已完成功能

- [x] 基础博客布局
- [x] 响应式设计
- [x] 明暗主题切换
- [x] 文章列表页面
- [x] 文章详情页面
- [x] 标签云功能
- [x] 基础Markdown样式
- [x] 国际化支持（决定不做了，现在翻译工具这么发达，后续也是大量AI搜索了，不需要）
- [x] mermaid图表
- [x] 数学公式支持
- [x] 文章目录（TOC）（2025-03-22 已支持）

### 开发中功能

- [ ] 双链引用（参考双链笔记）
- [ ] 阅读时间估算
- [ ] 评论系统集成
- [ ] 搜索功能
- [ ] SEO优化（能否是面向 AI搜索的优化呢？）
- [ ] 社交分享按钮

### 计划中功能

- [ ] 文章系列功能
- [ ] 性能优化
- [ ] PWA支持

## 许可证

本项目采用MIT许可证。