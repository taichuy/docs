---
title: Plugin Packaging Example
order: 0
toc: content
---

# NocoBase Packaging Example

## Background

Previously, some source code plugins were open-sourced, but some users wanted a tutorial on how to customize packaging and building. Therefore, this article introduces how to package your own version of a plugin from scratch, using the login page configuration as a development example.

Source Code Download:
NocoBase GitHub: https://github.com/nocobase/nocobase

Plugin Example — Home Page Configuration Plugin: https://github.com/taichuy/nocobase-plugin-login-lite

Official Documentation Reference:

Git Source Code Compilation and Download: https://v2.docs.nocobase.com/en-US/get-started/installation/git

Plugin Packaging: https://docs-cn.nocobase.com/development/your-fisrt-plugin

## Prerequisites:

> Please ensure you have:
>
> - Installed Git, Node.js 20+, Yarn 1.22.x
> - Since we are only demonstrating packaging, the database doesn't matter.

## Preparation

```shell
git clone https://github.com/nocobase/nocobase.git -b main --depth=1 nocobase
```

You can also download the corresponding version from the repository and package a specific version of the plugin. Here, version 1.9.19 is used for demonstration, while the current plugin repository version is 1.9.6.

![image-20260111111317497](./plugin-build-example.assets/image-20260111111317497.png)

Enter the NocoBase source directory:

```shell
cd nocobase
```

Configure Mirror (Optional: to prevent slow downloads):

```shell
yarn config set disable-self-update-check true

yarn config set registry https://registry.npmmirror.com/
```

Download Dependencies:

```shell
yarn install --frozen-lockfile
```

Create Plugin:

```shell
yarn pm create @xxxx/XXXXXXX
```

Example:

```shell
yarn pm create @taichuy/plugin-login-lite
```

After successful creation, check with the command:

```shell
taichuy@taichuy-work:~/git/nocobase$ ls packages/plugins/@taichuy/
plugin-login-lite
```

## Environment Setup:

```shell
taichuy@taichuy-work:~/git$ ls
nocobase             nocobase-plugin-login-lite-main
nocobase-1.9.19.zip  nocobase-plugin-login-lite-main.zip
taichuy@taichuy-work:~/git$ ls nocobase
benchmark             generate-npmignore.sh  README.zh-CN.md
CHANGELOG.md          lerna.json             release.sh
CHANGELOG.zh-CN.md    LICENSE-AGPL.txt       scripts
cnpm-sync.js          LICENSE.txt            SECURITY.md
commitlint.config.js  locales                storage
deploy-docs-cn.sh     node_modules           tsconfig.json
deploy-docs.sh        package.json           tsconfig.paths.json
docker                packages               tsconfig.server.json
docker-compose.yml    patches                vitest.config.mts
Dockerfile            playwright.config.ts   yarn.lock
Dockerfile.pro        README.ja-JP.md
examples              README.md
taichuy@taichuy-work:~/git$ ls nocobase-
nocobase-1.9.19.zip                  nocobase-plugin-login-lite-main.zip
nocobase-plugin-login-lite-main/
taichuy@taichuy-work:~/git$ ls nocobase-plugin-login-lite-main
client.d.ts  LICENSE-AGPL.txt  README_EN.md  server.d.ts  src
client.js    package.json      README.md     server.js
taichuy@taichuy-work:~/git$
taichuy@taichuy-work:~/git$ ls nocobase/packages/plugins/@taichuy/
plugin-login-lite
taichuy@taichuy-work:~/git$
```

Modify the version number to match the NocoBase version:

```shell
vim nocobase-plugin-login-lite-main/package.json
```

![](./plugin-build-example.assets/image-20260111113831194.png)

Copy the plugin source code over:

```shell
rsync -av --progress --delete nocobase-plugin-login-lite-main/ nocobase/packages/plugins/@taichuy/plugin-login-lite/
```

Execution command to confirm copying:

```shell
taichuy@taichuy-work:~/git$ cat nocobase/packages/plugins/@taichuy/plugin-login-lite/package.json
{
  "name": "@taichuy/plugin-login-lite",
  "displayName": "taichuy-plugin-login-lite",
  "displayName.zh-CN": "太初y登录插件-lite",
  "description": "Support custom login theme and color page. ",
  "description.zh-CN": "1.支持自定义登录页面样式主题和颜色页面.",
  "version": "1.9.19",
  "homepage": "https://docs.taichuy.com/en-US/nocobase/plugin-login-lite",
  "homepage.zh-CN": "https://docs.taichuy.com/nocobase/plugin-login-lite",
  "main": "dist/server/index.js",
  "dependencies": {
    "markdown-it": "14.1.0"
  },
  "devDependencies": {
    "@nocobase/plugin-auth": "1.x",
    "markdown-it": "14.1.0",
    "react-router-dom": "6.28.1",
    "react-router": "6.28.1"
  },
  "peerDependencies": {
    "@nocobase/client": "1.x",
    "@nocobase/plugin-auth": "1.x",
    "@nocobase/server": "1.x",
    "@nocobase/test": "1.x"
  },
  "keywords": [
    "login",
    "html",
    "index",
    "lite"
  ]
}
taichuy@taichuy-work:~/git$
```

## Start Building and Packaging:

Enter the NocoBase project root directory:

```shell
cd nocobase
```

The copied plugin needs its dependencies installed:

```shell
yarn install --frozen-lockfile
```

A full build of the entire project is required, which may take some time:

```shell
yarn build
```

Package the plugin:

```shell
yarn build @taichuy/plugin-login-lite --tar
```

Once successfully packaged, you can deploy the plugin to your production environment:

```shell
taichuy@taichuy-work:~/git/nocobase$ ls storage/tar/@taichuy/
plugin-login-lite-1.9.19.tgz
taichuy@taichuy-work:~/git/nocobase$
```

### Packaging Notes

Sometimes NocoBase packaging may encounter strange errors; just focus on whether your plugin has compiled successfully.

For example, if the compilation for `plugin-login-lite` has already passed, you can proceed with packaging.

```shell
yarn build @taichuy/plugin-login-lite --tar
```

![image-20260111121554790](./plugin-build-example.assets/image-20260111121554790.png)

If you want to retry downloading dependencies, you can run:

## Redownload and Recompile:

```shell
yarn nocobase clean
yarn rimraf -rf node_modules
yarn install --frozen-lockfile
yarn build
```

## NocoBase Plugins by Taichu y Team

---

During our deep use of NocoBase for internal systems development, the Taichu y team has accumulated a series of practical plugins.

In the spirit of open source, we share some simple and practical plugins for free. Meanwhile, to balance R&D costs, we charge for some complex plugins with significant development investment to support continuous development.

### 📞 Contact Us

**GitHub Organization**: [https://github.com/taichuy](https://github.com/taichuy)  
**Technical Consultation**: Follow the WeChat Official Account `taichuy-com` or email `taichu2021@gmail.com`

**Follow us on WeChat for latest updates:**

Reply with the keyword: `太初y的nocobase插件` in the official account to get the pre-packaged plugins.

<img src="https://raw.githubusercontent.com/taichuy/docs/main/public/wechat_office_taichuy.jpg" alt="Taichu WeChat" style="zoom: 33%;" />
