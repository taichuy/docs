---
title: plugin-auth-email
order: 0
toc: content
---

# Taichu y Plugin - Email Authentication

## Introduction (Paid)

Enable the plugin to support email registration and login authentication in NocoBase.

<img src="./plugin-auth-email.assets/image-20260111131354184.png" alt="image-20260111131354184" style="zoom:50%;" />

![image-20260110235451810](./plugin-auth-email.assets/image-20260110235451810.png)

### Fees:

| License Type                     | Price          | Benefits                                                                                                                                            | Suitable Scenarios                                                                     |
| :------------------------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Package License**              | $49            | 1. Plugin installation package for a specific version<br>2. One-time purchase, permanent use license<br>3. Basic installation guidance              | Stable deployment in production environment without frequent updates                   |
| **Package + Source Code Access** | $99/First Year | 1. All benefits of the package license above<br>2. One year of access to the GitHub private repository<br>3. Continuous update support for one year | Need to follow NocoBase upgrades or require secondary development based on source code |
| **Source Code Renewal**          | $49/Year       | 1. Continued access to the GitHub private repository after renewal<br>2. Continuous update support during the renewal period                        | Existing package users who want to continue receiving updates                          |

For details, please visit: https://docs.taichuy.com/nocobase

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

![image-20260112104056054](./plugin-auth-email.assets/image-20260112104056054.png)

## Final Step - Configure User Authentication

![image-20260110234033917](./plugin-auth-email.assets/image-20260110234033917.png)

Configuration content example:

![image-20260111130630438](./plugin-auth-email.assets/image-20260111130630438.png)

![image-20260110235442885](./plugin-auth-email.assets/image-20260110235442885.png)

![image-20260110235451810](./plugin-auth-email.assets/image-20260110235451810.png)

![image-20260110235559329](./plugin-auth-email.assets/image-20260110235559329.png)

Successfully logged in by entering the verification code. For new users, registration will be automatically enabled, and it also supports email login with password verification.

![image-20260111130703898](./plugin-auth-email.assets/image-20260111130703898.png)

You can set whether to enable automatic registration here.
