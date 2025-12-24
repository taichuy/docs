---
title: taichuy-plugin-login-pro
order: 0
toc: content
---

# taichuy-plugin-login-pro

Custom Login Page Configuration Plugin for NocoBase (Pro Version).
This plugin not only includes all the custom appearance features of the Lite version but also integrates WeChat ecosystem login capabilities, supporting WeChat Service Account scan code login and Mini Program integration, realizing unified identity authentication for WeChat users.

## Key Features

- **Custom Login Page**: Complete login page appearance configuration (background, Logo, layout, etc.).
- **WeChat Service Account Scan Login**: Supports sending QR codes with parameters via WeChat Service Account. Users can complete login or registration by scanning the code and following the Official Account.
- **Mini Program Integration**: Provides Mini Program login configuration, supporting integration with the NocoBase account system.
- **Unified Identity Authentication**: Realizes unique identification and unified management of user identities within the WeChat ecosystem (Official Account, Mini Program).

## Usage

1.  **Enable Plugin**: Go to the NocoBase Plugin Manager, search for `@taichuy/plugin-login-pro`, and enable it.
2.  **Access Configuration**: After enabling, refresh the page, find and click the "Login Configuration" menu in the system settings or sidebar.
3.  **Add Configuration**: Click the "Add" button, and you can choose to create the following types of configurations:
    - **Home Configuration**: Customize the login page interface.
    - **WeChat Official Account Configuration**: Configure WeChat Service Account related parameters.
    - **WeChat Mini Program Configuration**: Configure WeChat Mini Program related parameters.
4.  **Apply Configuration**: In the configuration list, turn on the "Enable" switch for the corresponding configuration.

## Configuration Options

### 1. Home Configuration

Used to customize the appearance and behavior of the login page.

| Field Name                    | Type         | Description                                                                             | Default Value          |
| :---------------------------- | :----------- | :-------------------------------------------------------------------------------------- | :--------------------- |
| **Title**                     | Input        | The name of this configuration (for internal management).                               | -                      |
| **Description**               | Text Area    | A brief description of this configuration.                                              | -                      |
| **Use system name**           | Radio        | Whether to display the system's application name.                                       | Yes                    |
| **Custom system name**        | Input        | Custom display name. Visible only when "Use system name" is set to "No".                | -                      |
| **Left side content display** | Radio        | Choose what to display on the left side of the login page: Image, HTML, or Webpage.     | Image                  |
| **Left side image URL**       | Input        | The URL of the image to display. Visible when "Image" is selected.                      | Bing Daily Wallpaper   |
| **Webpage embed URL**         | Input        | The URL of the webpage to embed (iframe). Visible when "Webpage embed" is selected.     | -                      |
| **HTML embed code**           | Text Area    | Custom HTML code to render. Visible when "HTML embed" is selected.                      | -                      |
| **Open login methods**        | Checkbox     | Allowed login methods. Supports: **Password Login**, **WeChat Official Account Login**. | Password Login         |
| **Copyright settings**        | Markdown     | Copyright text displayed at the bottom of the page. Supports Markdown.                  | Powered by NocoBase    |
| **ICP filing information**    | Markdown     | ICP filing or additional footer information. Supports Markdown.                         | Modified by taichuy    |
| **Background theme color**    | Color Picker | The background color of the entire login page.                                          | #000                   |
| **Font color**                | Color Picker | The primary text color of the page.                                                     | #fff                   |
| **Login form theme color**    | Color Picker | The background color of the login form container.                                       | rgba(255,255,255,0.12) |
| **Login form text color**     | Color Picker | The text color inside the login form.                                                   | #fff                   |
| **Button background color**   | Color Picker | The background color of the login button.                                               | rgba(255,255,255,0.2)  |
| **Button text color**         | Color Picker | The text color of the login button.                                                     | #fff                   |
| **Enable**                    | Switch       | Whether to activate this configuration immediately.                                     | Yes                    |

### 2. WeChat Official Account Configuration

Used to configure WeChat Service Account scan code login.

| Field Name                          | Type      | Description                                                                              | Default Value     |
| :---------------------------------- | :-------- | :--------------------------------------------------------------------------------------- | :---------------- |
| **Title**                           | Input     | Configuration name.                                                                      | -                 |
| **Description**                     | Text Area | Configuration description.                                                               | -                 |
| **AppID**                           | Input     | WeChat Official Account AppID.                                                           | -                 |
| **AppSecret**                       | Input     | WeChat Official Account AppSecret.                                                       | -                 |
| **Token**                           | Input     | Token in WeChat server configuration.                                                    | -                 |
| **EncodingAESKey**                  | Input     | EncodingAESKey in WeChat server configuration.                                           | -                 |
| **New user automatic registration** | Switch    | Whether to automatically create a new account if the user does not exist after scanning. | No                |
| **QR code expiration time**         | Number    | The validity period of the login QR code (seconds).                                      | 180               |
| **QR code type**                    | Radio     | Temporary QR code (QR_STR_SCENE) or Permanent QR code (QR_LIMIT_STR_SCENE).              | Temporary QR code |
| **Authenticator identifier**        | Input     | Authenticator identifier used to simulate login request Header (X-Authenticator).        | wechat-official   |
| **Message encryption method**       | Radio     | WeChat message encryption method: Plaintext, Compatible, or Safe mode.                   | Plaintext         |
| **Enable**                          | Switch    | Whether to enable this Official Account configuration.                                   | Yes               |

### 3. WeChat Mini Program Configuration

Used to configure WeChat Mini Program integration parameters.

| Field Name      | Type      | Description                                        | Default Value             |
| :-------------- | :-------- | :------------------------------------------------- | :------------------------ |
| **Title**       | Input     | Configuration name.                                | -                         |
| **Description** | Text Area | Configuration description.                         | -                         |
| **AppID**       | Input     | WeChat Mini Program AppID.                         | -                         |
| **AppSecret**   | Input     | WeChat Mini Program AppSecret.                     | -                         |
| **Proxy URL**   | Input     | Proxy address for WeChat API (if needed).          | https://api.weixin.qq.com |
| **Enable**      | Switch    | Whether to enable this Mini Program configuration. | Yes                       |

## Taichu y Team's NocoBase Plugins

---

Our Taichu y team has accumulated a series of practical plugins during the in-depth use of NocoBase to develop internal systems.

Adhering to the spirit of open source, we share some simple and practical plugins for free. At the same time, to balance R&D costs, we charge for some plugins with complex functions and high development investment to support continuous development.

### 📞 Contact Us

**GitHub Organization**: [https://github.com/taichuy](https://github.com/taichuy)  
**Technical Consultation**: Follow the WeChat Official Account `taichuy-com` or email `taichu2021@gmail.com`

**Official Account**:

<img src="https://raw.githubusercontent.com/taichuy/docs/main/public/wechat_office_taichuy.jpg" alt="Taichuy Official Account" style="zoom: 33%;" />
