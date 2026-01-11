---
title: 太初y认证：邮件
order: 0
toc: content
---

# 太初 y 的插件-邮件认证插件

![image-20260110232955810](./plugin-auth-email.assets/image-20260110232955810.png)

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

![image-20260110233747392](./plugin-auth-email.assets/image-20260110233747392.png)

## 最终-配置用户认证

![image-20260110234033917](./plugin-auth-email.assets/image-20260110234033917.png)

配置内容示例：

![image-20260111130630438](plugin-auth-email.assets/image-20260111130630438.png)

![image-20260110235442885](./plugin-auth-email.assets/image-20260110235442885.png)

![image-20260110235451810](./plugin-auth-email.assets/image-20260110235451810.png)

![image-20260110235559329](./plugin-auth-email.assets/image-20260110235559329.png)

输入验证码登录成功，对于新增用户，会自动开启注册，也支持邮箱登录验证密码

![image-20260111130703898](plugin-auth-email.assets/image-20260111130703898.png)

可以在这里设置是否自动注册
