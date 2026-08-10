# 叶奕含的个人简历页（React 版）

一个使用 React 构建的个人简历与项目展示站，包含个人介绍、项目详情和轻量问答入口。

[在线查看](https://yvaine-s-resume.vercel.app/) · [新版 Vue 作品集源码](https://github.com/Yva1nne/portfolio)

> 本仓库是历史版本，保留 React / Vercel 实现；新的交互式作品集在 `Yva1nne/portfolio` 中继续迭代。这里的经历日期与项目状态是历史快照，不代表最新简历信息。

## 功能

- 个人介绍与项目列表
- 项目详情、图片轮播与响应式布局
- 基于 Serverless Function 的简历问答入口
- GitHub Pages 路径适配与 Vercel 部署配置

当前问答接口是轻量生成式演示，只使用公开的基础身份提示，不接入项目知识库或 RAG，也不应被视为完整的个人事实数据库。

## 技术栈

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Vercel Serverless Function

## 本地运行

建议使用 Node.js 20 或 22 LTS；当前依赖中的 `better-sqlite3` 不支持 Node.js 26。

```bash
npm ci
npm run dev
```

类型检查与生产构建：

```bash
npm run lint
npm run build
```

`npm run dev` 可以运行静态页面。若要同时调试 `api/chat.js`，请使用 Vercel CLI，或通过 `VITE_CHAT_API_URL` 指向已部署的后端。

## 环境变量

| 变量 | 位置 | 说明 |
| --- | --- | --- |
| `OPENAI_API_KEY` | 服务端 | `api/chat.js` 当前读取的历史变量名，实际用于调用智谱兼容接口 |
| `VITE_CHAT_API_URL` | 前端，可选 | 覆盖默认的 `/api/chat` 地址 |

API 密钥只能放在服务端环境。不要在前端配置 `GEMINI_API_KEY`，也不要使用任何 `VITE_*` 变量保存秘密，因为它们会进入浏览器构建产物。

当前 Serverless Function 仅用于演示，尚未实现完整的认证、限流、输入长度限制和请求超时，不应直接作为生产服务公开复用。

## 目录说明

```text
src/components/        页面与问答组件
src/data.ts            公开展示内容
api/chat.js            Vercel Serverless Function
public/                头像与项目图片
PROJECTS.md            本仓库历史项目文档
```

## 内容边界

- README 和页面只应使用已确认、可公开的经历与项目信息。
- 不提交真实密钥、客户数据、内部截图或未公开架构。
- 本仓库未提供开源许可证；个人内容和图片请勿直接转载。
