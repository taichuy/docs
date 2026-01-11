---
title: Taichu y Auth: Email
order: 0
---

# Taichu y Plugin - Email Authentication Plugin

![image-20260110232955810](./plugin-auth-email.assets/image-20260110232955810.png)

## 1. Dependency Check:

The Email Authentication plugin requires the following official native plugins to be enabled for full verification code delivery.

![image-20260110233406435](./plugin-auth-email.assets/image-20260110233406435.png)

The following email notification plugin is not enabled by default and needs to be enabled in the plugin manager.

![image-20260110233333386](./plugin-auth-email.assets/image-20260110233333386.png)

## 2. Configure Email Verification:

![image-20260110233516332](./plugin-auth-email.assets/image-20260110233516332.png)

Below is an example of my personal 163 email configuration for notifications:
![image-20260110233606199](./plugin-auth-email.assets/image-20260110233606199.png)

## 3. Configure Verification Code and Email Content:

![image-20260110233713391](./plugin-auth-email.assets/image-20260110233713391.png)

Email verification code configuration content:

Where:

```shell
Your verification code is {{code}}
```

`{{code}}` is mandatory, as it serves as the placeholder for the randomly generated verification code.

![image-20260110233747392](./plugin-auth-email.assets/image-20260110233747392.png)

## Final Step - Configure User Authentication

![image-20260110234033917](./plugin-auth-email.assets/image-20260110234033917.png)

Configuration content example:

![image-20260110234345181](./plugin-auth-email.assets/image-20260110234345181.png)

![image-20260110235442885](./plugin-auth-email.assets/image-20260110235442885.png)

![image-20260110235451810](./plugin-auth-email.assets/image-20260110235451810.png)

![image-20260110235559329](./plugin-auth-email.assets/image-20260110235559329.png)

Successfully logged in by entering the verification code. For new users, registration will be automatically enabled, and it also supports email login with password verification.

![image-20260110235716782](./plugin-auth-email.assets/image-20260110235716782.png)

You can set whether to enable automatic registration here.
