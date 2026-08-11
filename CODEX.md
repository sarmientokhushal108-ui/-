# 在 Codex 中开发 Flora Personal OS

本项目可以完全在 Codex 工作区中开发和预览，不依赖 Vercel。

## 首次运行

在项目根目录执行：

```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

开发服务启动后，在 Codex 提供的端口预览中打开 `3000` 端口。如果当前客户端支持本地端口转发，也可打开 <http://localhost:3000>。

## 日常开发

- 首页内容：`app/page.tsx`
- 全局样式：`app/globals.css`
- 页面元数据：`app/layout.tsx`
- 项目命令：`package.json`

Next.js 开发服务支持热更新，修改代码并保存后即可在预览页中看到结果。

## 本地检查

```bash
npm run typecheck
npm run build
```

`typecheck` 检查 TypeScript 类型，`build` 验证项目能否生成可运行的生产版本。

## 启动生产版本（可选）

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

Codex 会话结束或运行环境重启后，开发服务可能停止。下次打开工作区时，重新执行开发命令即可。
