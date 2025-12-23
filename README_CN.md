# taichuy 文档站

[English](./README.md) | 简体中文

这是 [taichuy](https://y.taichu.xyz) 团队的官方文档站点仓库，基于 [dumi](https://d.umijs.org) 构建。我们在这里记录和分享 NocoBase 插件开发经验、太初y团队的开源项目文档以及相关技术沉淀。

## 🚀 快速开始

### 环境准备
- Node.js >= 14
- Yarn (推荐) 或 npm

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn start
# 或
yarn dev
```

启动后访问 `http://localhost:8000` 即可预览文档。

### 构建静态文件

```bash
yarn build
```

构建产物将输出到 `dist` 目录。

### 本地预览构建产物

```bash
yarn preview
```

## 📝 目录结构

```
.
├── docs/                  # 文档内容目录
│   ├── guide/             # 引导/指南文档
│   ├── nocobase/          # NocoBase 插件相关文档
│   └── index.md           # 站点首页文档
├── .dumirc.ts             # dumi 配置文件
├── .dumi/                 # dumi 主题与临时文件
├── public/                # 静态资源
└── package.json           # 项目配置
```

## 🤝 如何贡献

我们非常欢迎社区贡献文档！如果您发现文档有误，或想补充新的内容，请遵循以下步骤：

1. **Fork 本仓库**：点击右上角的 Fork 按钮。
2. **创建分支**：在您的 Fork 仓库中创建一个新分支（例如 `docs/fix-typo`）。
3. **修改文档**：
   - 文档位于 `docs/` 目录下，使用 Markdown 格式。
   - 图片资源请放置在对应文档同级的 `.assets` 文件夹中。
   - 请确保同时更新中文 (`.md`) 和英文 (`.en-US.md`) 版本（如果能力允许）。
4. **提交更改**：提交您的更改并推送到您的 Fork 仓库。
   - 提交信息请遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。
5. **提交 Pull Request**：向本仓库的 `main` 分支提交 PR。

## 📄 许可证

MIT License
