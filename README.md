# taichuy Documentation Site

[简体中文](./README_CN.md) | English

This is the official documentation repository for the [taichuy](https://y.taichu.xyz) team, built with [dumi](https://d.umijs.org). Here we document and share NocoBase plugin development experiences, documentation for open-source projects by the Taichuy team, and related technical insights.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 14
- Yarn (Recommended) or npm

### Install Dependencies

```bash
yarn install
```

### Start Development Server

```bash
yarn start
# or
yarn dev
```

Visit `http://localhost:8000` to preview the documentation.

### Build Static Files

```bash
yarn build
```

Artifacts will be output to the `dist` directory.

### Preview Build Locally

```bash
yarn preview
```

## 📝 Directory Structure

```
.
├── docs/                  # Documentation content directory
│   ├── guide/             # Guide documentation
│   ├── nocobase/          # NocoBase plugin documentation
│   └── index.md           # Homepage documentation
├── .dumirc.ts             # dumi configuration file
├── .dumi/                 # dumi theme and temporary files
├── public/                # Static assets
└── package.json           # Project configuration
```

## 🤝 How to Contribute

We welcome community contributions! If you find an error or want to add new content, please follow these steps:

1. **Fork this repository**: Click the Fork button in the top right corner.
2. **Create a branch**: Create a new branch in your Fork (e.g., `docs/fix-typo`).
3. **Modify documentation**:
   - Documentation is located in the `docs/` directory, using Markdown format.
   - Place image resources in the `.assets` folder at the same level as the document.
   - Please ensure both Chinese (`.md`) and English (`.en-US.md`) versions are updated (if possible).
4. **Commit changes**: Commit your changes and push to your Fork.
   - Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
5. **Submit a Pull Request**: Submit a PR to the `main` branch of this repository.

## 📄 License

MIT License
