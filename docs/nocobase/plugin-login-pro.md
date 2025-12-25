---
title: 太初y登录插件-pro
order: 0
toc: content
---

# 太初 y 登录插件-pro

@taichuy/plugin-login-pro

NocoBase 登录页自定义配置插件 (Pro 专业版)。
本插件不仅包含 Lite 版的所有自定义外观功能，还集成了微信生态的登录能力，支持微信服务号扫码登录和小程序接入，实现微信用户统一身份认证。

## 主要功能

- **自定义登录页**: 完整的登录页外观配置（背景、Logo、布局等）。
- **微信服务号扫码登录**: 支持通过微信服务号（Service Account）发送带参数二维码，用户扫码后关注公众号即可完成登录或注册。（注意一定是认证服务号才可以这样做）
- **小程序接入**: 提供小程序登录配置，支持与 NocoBase 账号体系打通。
- **统一身份认证**: 在微信生态下（公众号、小程序），才可以实现用户身份的唯一标识和统一管理。备注：需要在微信公开平台开通关联才可：https://open.weixin.qq.com/

## 使用说明

1.  **开启插件**: 进入 NocoBase 插件管理器，搜索 `@taichuy/plugin-login-pro` 并启用。
2.  **访问配置**: 启用插件后，刷新页面，在系统设置或侧边栏中找到并点击“登录配置”菜单。
3.  **添加配置**: 点击“添加”按钮，您可以选择创建以下类型的配置：
    - **首页配置**: 自定义登录页界面。
    - **微信公众号配置**: 配置微信服务号相关参数。
    - **微信小程序配置**: 配置微信小程序相关参数。
4.  **应用配置**: 在配置列表中，打开对应配置的“启用”开关。

## 内容展示：

插件已经完成多语言化支持中文和英文。

<img src="./plugin-login-pro.assets/image-20251225151147456.png" alt="image-20251225151147456" style="zoom:50%;" />

![image-20251225152014741](./plugin-login-pro.assets/image-20251225152014741.png)

![image-20251225151939762](./plugin-login-pro.assets/image-20251225151939762.png)

![](./plugin-login-pro.assets/image-20251225160750406.png)

![image-20251225160808556](./plugin-login-pro.assets/image-20251225160808556.png)

## 配置微信服务号扫码登录

首先在认证中新增：

![image-20251225163543703](./plugin-login-pro.assets/image-20251225163543703.png)

<img src="./plugin-login-pro.assets/image-20251225163840133.png" alt="image-20251225163840133" style="zoom:50%;" />

只有在认证器中添加认证之后，公众号才会介入 nocobase 的认证体系中，与 nocobase 用户绑定

建议标识使用：wechat-official

![image-20251225164032745](./plugin-login-pro.assets/image-20251225164032745.png)

开始配置公众号信息：
公众号需要先添加再调试，因为只有保存配置文件，才能在扫码认证中会回调消息

其中认证器标识，要与我们上面的一致，我们默认是 wechat-official

![image-20251225165352027](./plugin-login-pro.assets/image-20251225165352027.png)

前往微信开发者后台配置服务号回调消息：

参考文档：https://developers.weixin.qq.com/doc/subscription/guide/dev/push/

一定要先添加，要不然数据库中没有数据，微信后台回调解码验证是过不了

```http
http(s):IP+端口///api/wechat/callback
```

![image-20251225170433998](./plugin-login-pro.assets/image-20251225170433998.png)

依次按照操作点击上面三个按钮来诊断配置是否有问题

检查结果正常之后那么就可以正常页面使用了。

本插件的微信扫码登录采用"参数二维码"机制，具体交互流程如下：

1.  **获取二维码**

    - 前端向插件后端请求登录二维码。
    - 后端生成唯一的场景值 `sceneStr`（作为本次登录会话的标识），并将其存储在 `other_message` 集合中。
    - 后端调用微信接口 `qrcode/create` 生成带参数的二维码，并将二维码 URL 和 `sceneStr` 返回给前端。

2.  **用户扫码**

    - 用户使用微信扫描二维码。
    - **未关注用户**：扫码后进入关注页，关注后微信推送 `subscribe` 事件（带场景值）。
    - **已关注用户**：扫码后直接进入公众号会话，微信推送 `SCAN` 事件（带场景值）。

3.  **回调处理**

    - 微信服务器将事件推送到插件配置的回调 URL (`/api/wechat/callback`)。
    - 插件后端验证签名，解析 XML 数据。
    - 根据 OpenID 查找系统中绑定的用户：
      - **已绑定**：直接匹配现有用户。
      - **未绑定**：若开启"自动注册"，则自动创建新用户并绑定；否则仅记录扫码状态。
    - 后端根据回调中的 `EventKey` (即 `sceneStr`) 找到对应的 `other_message` 记录，将识别到的用户 ID 更新到该记录中，并将状态标记为已扫码。

4.  **轮询登录**
    - 前端使用 `sceneStr` 定时轮询后端接口 (`/api/wechat/scan-result`)。
    - 一旦后端检测到该 `sceneStr` 对应的记录已有用户 ID，即生成登录 Token (JWT)。
    - 前端接收 Token，完成登录跳转。

对应接口已经 swagger 中：
![image-20251225171759206](./plugin-login-pro.assets/image-20251225171759206.png)

下面就是消息推送表

建议设置定时任务清理过期推送消息：

![image-20251225170549789](./plugin-login-pro.assets/image-20251225170549789.png)

可以自行搭建区块表进行管理的调试

![image-20251225171956668](./plugin-login-pro.assets/image-20251225171956668.png)

## nocobase 作为小程序后端：

![image-20251225172344808](./plugin-login-pro.assets/image-20251225172344808.png)

配置小程序：

![image-20251225191110310](./plugin-login-pro.assets/image-20251225191110310.png)

小程序认证接口：

参考微信小程序登录参考文档：

https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.pluginLogin.html

```http
curl --location --request POST 'https://域名+端口/api/auth:signIn' \
--header 'x-authenticator: 在用户认证你填入标识' \
--header 'Content-Type: application/json' \
--data-raw '{"code":"用户标志凭证（code）"}'
```

nocobase 登录成功之后返回值：

```shell
{
    "data": {
        "user": {
            "createdAt": "2025-12-25T11:13:00.498Z",
            "updatedAt": "2025-12-25T11:13:00.498Z",
            "systemSettings": {},
            "id": 12,
            "nickname": "微信用户-06cIBC6E",
            "username": "wx_1766661180496_7lumpuk3",
            "createdById": null,
            "updatedById": null,
            "email": null,
            "phone": null,
            "passwordChangeTz": null,
            "appLang": null
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJ0ZW1wIjp0cnVlLCJpYXQiOjE3NjY2NjExODAsInNpZ25JblRpbWUiOjE3NjY2NjExODA2MTYsImV4cCI6MTc2Njc0NzU4MCwianRpIjoiNGNjOGQyNDUtZDcxZi00MWI0LThhOWEtZDU4Y2UwOTVmYjU2In0.6VymIeIBF0o8uGzOmjYsgFqlbdCany3vgy0i2MBkIlI"
    }
}
```

后续开发者 token 就是用户 nocobase 认证信息了

![image-20251225191320467](./plugin-login-pro.assets/image-20251225191320467.png)

## 配置项说明

### 1. 首页配置 (Home Configuration)

用于自定义登录页面的外观和行为。

| 字段名称                     | 类型       | 说明                                                                 | 默认值                 |
| :--------------------------- | :--------- | :------------------------------------------------------------------- | :--------------------- |
| **标题** (Title)             | 文本框     | 该配置的名称，仅用于后台管理区分。                                   | -                      |
| **描述** (Description)       | 文本域     | 该配置的简要描述。                                                   | -                      |
| **是否使用系统自带系统名称** | 单选框     | 是否直接显示系统设置中的应用名称。                                   | 是                     |
| **自定义系统对外展示名字**   | 文本框     | 自定义显示的系统名称。仅当“是否使用系统自带系统名称”选“否”时出现。   | -                      |
| **左侧内容展示**             | 单选框     | 选择登录页左侧区域展示的内容类型：图片、HTML 嵌入 或 网页嵌入。      | 图片                   |
| **左侧图片地址**             | 文本框     | 左侧显示的图片 URL 地址。仅当选择“图片”时出现。                      | Bing 每日壁纸          |
| **网页嵌入地址**             | 文本框     | 左侧嵌入的网页 URL 地址 (iframe)。仅当选择“网页嵌入”时出现。         | -                      |
| **HTML 嵌入代码**            | 文本域     | 左侧渲染的自定义 HTML 代码。仅当选择“HTML 嵌入”时出现。              | -                      |
| **开放登录方式**             | 多选框     | 允许用户使用的登录方式。支持：**账号密码登录**、**微信公众号登录**。 | 账号密码登录           |
| **备案信息** (Markdown)      | Markdown   | 页面底部显示的备案或其他页脚信息，支持 Markdown 语法。               | Modified by taichuy    |
| **背景主题颜色**             | 颜色选择器 | 登录页面的整体背景颜色。                                             | #000                   |
| **字体颜色**                 | 颜色选择器 | 页面主要文本的颜色。                                                 | #fff                   |
| **登录表单主题颜色**         | 颜色选择器 | 登录框容器的背景颜色。                                               | rgba(255,255,255,0.12) |
| **登录表单文字颜色**         | 颜色选择器 | 登录框内部的文字颜色。                                               | #fff                   |
| **按钮背景颜色**             | 颜色选择器 | 登录按钮的背景颜色。                                                 | rgba(255,255,255,0.2)  |
| **按钮文字颜色**             | 颜色选择器 | 登录按钮的文字颜色。                                                 | #fff                   |
| **启用**                     | 开关       | 是否立即启用当前配置。                                               | 是                     |

### 2. 微信公众号配置 (WeChat Official Account)

用于配置微信服务号扫码登录功能。

| 字段名称               | 类型   | 说明                                                           | 默认值          |
| :--------------------- | :----- | :------------------------------------------------------------- | :-------------- |
| **标题** (Title)       | 文本框 | 配置名称。                                                     | -               |
| **描述** (Description) | 文本域 | 配置描述。                                                     | -               |
| **AppID**              | 文本框 | 微信公众号的 AppID。                                           | -               |
| **AppSecret**          | 文本框 | 微信公众号的 AppSecret。                                       | -               |
| **Token**              | 文本框 | 微信服务器配置中的 Token。                                     | -               |
| **EncodingAESKey**     | 文本框 | 微信服务器配置中的 EncodingAESKey。                            | -               |
| **新用户自动注册**     | 开关   | 扫码后如果用户不存在，是否自动创建新账号。                     | 否              |
| **二维码过期时间**     | 数字   | 登录二维码的有效时长（秒）。                                   | 180             |
| **二维码类型**         | 单选框 | 临时二维码 (QR_STR_SCENE) 或 永久二维码 (QR_LIMIT_STR_SCENE)。 | 临时二维码      |
| **认证标识符**         | 文本框 | 用于模拟登录请求 Header 的认证器标识 (X-Authenticator)。       | wechat-official |
| **消息加解密方式**     | 单选框 | 微信消息的加密方式：明文模式、兼容模式或安全模式。             | 明文模式        |
| **启用**               | 开关   | 是否启用该公众号配置。                                         | 是              |

### 3. 微信小程序配置 (WeChat Mini Program)

用于配置微信小程序接入参数。

| 字段名称               | 类型   | 说明                            | 默认值                    |
| :--------------------- | :----- | :------------------------------ | :------------------------ |
| **标题** (Title)       | 文本框 | 配置名称。                      | -                         |
| **描述** (Description) | 文本域 | 配置描述。                      | -                         |
| **AppID**              | 文本框 | 微信小程序的 AppID。            | -                         |
| **AppSecret**          | 文本框 | 微信小程序的 AppSecret。        | -                         |
| **代理接口地址**       | 文本框 | 微信 API 的代理地址（如需要）。 | https://api.weixin.qq.com |
| **启用**               | 开关   | 是否启用该小程序配置。          | 是                        |

## 太初 y 团队的 NocoBase 插件

---

我们太初 y 团队在深入使用 NocoBase 开发内部系统的过程中，积累了一系列实用插件。

秉承开源精神，我们将部分简单实用的插件开源免费分享，同时为了平衡研发成本，对一些功能复杂、开发投入较大的插件进行收费，以支持持续开发。

### 📞 联系我们

**GitHub 组织**: [https://github.com/taichuy](https://github.com/taichuy)  
**技术咨询**: 关注微信公众号 `taichuy-com` 或邮件 `taichu2021@gmail.com`

**公众号**：

<img src="https://raw.githubusercontent.com/taichuy/docs/main/public/wechat_office_taichuy.jpg" alt="太初公众号" style="zoom: 33%;" />
