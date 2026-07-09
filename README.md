# Personal Journal Blog

一个参照 `ursb.me` 信息架构与视觉气质搭建的个人博客站点。它不是复制原站内容，而是保留同类体验：个人首页、文章、归档、笔记、Moment、照片墙、友链、RSS、主题切换和静态构建。

## 常用命令

```bash
npm install
npm run dev
npm test
npm run build
```

## 写内容

- 长文：在 `src/content/blog/` 新增 Markdown 文件。
- 笔记：在 `src/content/notes/` 新增 Markdown 文件。
- Moment、照片、友链、个人信息：编辑 `src/data/site.ts`。

每篇长文至少需要：

```md
---
title: "文章标题"
description: "文章摘要"
date: 2026-07-08
tags: ["tag"]
---

正文
```

## 发布

本地构建产物在 `dist/`。可以部署到 GitHub Pages、Vercel、Netlify 或任意静态托管服务。
