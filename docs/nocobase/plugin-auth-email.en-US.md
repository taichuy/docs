---
title: plugin-auth-email
order: 0
toc: content
---

# Taichu y Plugin - Email Authentication

## Introduction (Paid)

Enable the plugin to support email registration and login authentication in NocoBase.

<img src="./plugin-auth-email.assets/image-20260111131354184.png" alt="image-20260111131354184" style="zoom:50%;" />

![image-20260115171855223](./plugin-auth-email.assets/image-20260115171855223.png)

### Fees:

| License Type                     | Price          | Benefits                                                                                                                                            | Suitable Scenarios                                                                     |
| :------------------------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Package License**              | $49            | 1. Plugin installation package for a specific version<br>2. One-time purchase, permanent use license<br>3. Basic installation guidance              | Stable deployment in production environment without frequent updates                   |
| **Package + Source Code Access** | $99/First Year | 1. All benefits of the package license above<br>2. One year of access to the GitHub private repository<br>3. Continuous update support for one year | Need to follow NocoBase upgrades or require secondary development based on source code |
| **Source Code Renewal**          | $49/Year       | 1. Continued access to the GitHub private repository after renewal<br>2. Continuous update support during the renewal period                        | Existing package users who want to continue receiving updates                          |

For details, please visit: https://docs.taichuy.com/nocobase

## 1. Dependent Plugin Check:

The email verification plugin requires the following official native plugins to be enabled for full verification code sending functionality.

![image-20260110233406435](./plugin-auth-email.assets/image-20260110233406435.png)

The following Email Notification plugin is disabled by default and needs to be enabled in the Plugin Manager.

![image-20260110233333386](./plugin-auth-email.assets/image-20260110233333386.png)

## 2. Configure Email Verification:

![image-20260110233516332](./plugin-auth-email.assets/image-20260110233516332.png)

Below is an example of my personal 163 mailbox notification configuration:
![image-20260110233606199](./plugin-auth-email.assets/image-20260110233606199.png)

## 3. Configure Verification Code and Email Content:

![image-20260110233713391](./plugin-auth-email.assets/image-20260110233713391.png)

Email verification code configuration content:

Among them:

```shell
Your verification code is {{code}}
```

`{{code}}` is required, which is the placeholder for the randomly generated verification code.

![image-20260115171244254](./plugin-auth-email.assets/image-20260115171244254.png)

The email content supports HTML, so you can have AI generate a dedicated HTML for it.

![image-20260115172104190](./plugin-auth-email.assets/image-20260115172104190.png)

## Final - Configure User Authentication

![image-20260110234033917](./plugin-auth-email.assets/image-20260110234033917.png)

### Configuration Content Example:

After enabling automatic login for non-existent users:

1. Support automatic registration using the default password set by the administrator.

2. Support users to register and set their own passwords first, followed by one-click registration and login.

![image-20260115171444017](./plugin-auth-email.assets/image-20260115171444017.png)

![image-20260115171855223](./plugin-auth-email.assets/image-20260115171855223.png)

![image-20260115171907088](./plugin-auth-email.assets/image-20260115171907088.png)

![image-20260115171919101](./plugin-auth-email.assets/image-20260115171919101.png)

## About Email Verification (Optional)

![image-20260114152357678](./plugin-auth-email.assets/image-20260114152357678.png)

NocoBase has a verification function. I saw it available for SMS, and SMS verification login can only be performed after enabling SMS verification. So I implemented a similar one here. However, I haven't imposed mandatory restrictions; users can still log in via email without binding. But I feel some people might find it useful later, so I've included it.

![image-20260114153351897](./plugin-auth-email.assets/image-20260114153351897.png)

![image-20260114153411707](./plugin-auth-email.assets/image-20260114153411707.png)

After binding the email, the user's email field attribute will be automatically updated.
