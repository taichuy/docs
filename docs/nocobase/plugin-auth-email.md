---
title: 太初y认证：邮件
order: 0
toc: content
---

# 太初 y 的插件-邮件认证插件

## 介绍（付费）

开启插件插件，nocobase 支持邮箱注册登录认证

<img src="./plugin-auth-email.assets/image-20260111131354184.png" alt="image-20260111131354184" style="zoom:50%;" />

![image-20260115171855223](./plugin-auth-email.assets/image-20260115171855223.png)

### 费用：

| 授权类型                | 价格          | 包含权益                                                                             | 适合场景                                       |
| ----------------------- | ------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **安装包授权**          | 300 元        | 1. 指定版本插件安装包<br>2. 一次性买断，永久使用授权<br>3. 基础安装指导              | 生产环境稳定部署，无需频繁更新                 |
| **安装包+源码仓库权限** | 600 元/第一年 | 1. 包含上述安装包所有权益<br>2. GitHub 私有仓库一年访问权限<br>3. 一年内持续更新支持 | 需要跟随 NocoBase 升级，或需要基于源码二次开发 |
| **源码仓库续费**        | 300 元/年     | 1. 续费后继续获得 GitHub 私有仓库访问权限<br>2. 续费期内持续更新支持                 | 已购买过安装包的用户继续获取更新               |

详细查看：https://docs.taichuy.com/nocobase

## 1.依赖插件检查：

邮件验证插件需要开启下面的官方原生插件才能实现完整验证码发送

![image-20260110233406435](./plugin-auth-email.assets/image-20260110233406435.png)

下面这个邮件通知插件默认是不开启，需要到插件管理中开启

![image-20260110233333386](./plugin-auth-email.assets/image-20260110233333386.png)

## 2.配置邮箱验证：

![image-20260110233516332](./plugin-auth-email.assets/image-20260110233516332.png)

下面是我个人 163 邮箱配置通知示例：
![image-20260110233606199](./plugin-auth-email.assets/image-20260110233606199.png)

## 3.配置验证码和邮件内容：

![image-20260110233713391](./plugin-auth-email.assets/image-20260110233713391.png)

邮件验证码配置内容：

其中：

```shell
Your verification code is {{code}}
```

{{code}}是必填的，这个就是随机生成验证码的占位符

![image-20260115171244254](./plugin-auth-email.assets/image-20260115171244254.png)

邮箱内容支持 html，可以让 ai 生成专属 html 来生成

![image-20260115172104190](./plugin-auth-email.assets/image-20260115172104190.png)

## 最终-配置用户认证

![image-20260110234033917](./plugin-auth-email.assets/image-20260110234033917.png)

### 配置内容示例：

开启用户不存在自动登录之后：

1.支持自动注册时使用管理员设置默认密码

2.支持用户自行用户先注册设置密码，一键注册登录

![image-20260115171444017](./plugin-auth-email.assets/image-20260115171444017.png)

![image-20260115171855223](./plugin-auth-email.assets/image-20260115171855223.png)

![image-20260115171907088](./plugin-auth-email.assets/image-20260115171907088.png)

![image-20260115171919101](./plugin-auth-email.assets/image-20260115171919101.png)

## 关于邮箱验证（可选）

![image-20260114152357678](./plugin-auth-email.assets/image-20260114152357678.png)

nocobase 有一个验证功能，我看到短信有，只有开启了短信验证才可以进行短信验证登录，所以我这边照猫画虎也弄了一个，不过我没有做强制限制，不绑定也可以邮箱登录，但是感觉后续一些人可能会用的上，所以放上来。

![image-20260114153351897](./plugin-auth-email.assets/image-20260114153351897.png)

![image-20260114153411707](./plugin-auth-email.assets/image-20260114153411707.png)

绑定邮箱之后，用户邮箱字段属性会自动更新
