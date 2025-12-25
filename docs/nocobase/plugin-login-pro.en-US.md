---
title: taichuy-plugin-login-pro
order: 0
toc: content
---

# taichuy-plugin-login-pro

@taichuy/plugin-login-pro

Custom Login Page Configuration Plugin for NocoBase (Pro Version).
This plugin not only includes all the custom appearance features of the Lite version but also integrates WeChat ecosystem login capabilities, supporting WeChat Service Account scan code login and Mini Program integration, realizing unified identity authentication for WeChat users.

## Key Features

- **Custom Login Page**: Complete login page appearance configuration (background, Logo, layout, etc.).
- **WeChat Service Account Scan Login**: Supports sending QR codes with parameters via WeChat Service Account. Users can complete login or registration by scanning the code and following the Official Account. (Note: This requires an authenticated Service Account).
- **Mini Program Integration**: Provides Mini Program login configuration, supporting integration with the NocoBase account system.
- **Unified Identity Authentication**: Realizes unique identification and unified management of user identities within the WeChat ecosystem (Official Account, Mini Program) after manually linking them in the [WeChat Open Platform](https://open.weixin.qq.com/).

## Usage

1.  **Enable Plugin**: Go to the NocoBase Plugin Manager, search for `@taichuy/plugin-login-pro`, and enable it.
2.  **Access Configuration**: After enabling, refresh the page, find and click the "Login Configuration" menu in the system settings or sidebar.
3.  **Add Configuration**: Click the "Add" button, and you can choose to create the following types of configurations:
    - **Home Configuration**: Customize the login page interface.
    - **WeChat Official Account Configuration**: Configure WeChat Service Account related parameters.
    - **WeChat Mini Program Configuration**: Configure WeChat Mini Program related parameters.
4.  **Apply Configuration**: In the configuration list, turn on the "Enable" switch for the corresponding configuration.

## Content Display

The plugin has completed multi-language support for Chinese and English.

<img src="./plugin-login-pro.assets/image-20251225151147456.png" alt="image-20251225151147456" style="zoom:50%;" />

![image-20251225152014741](./plugin-login-pro.assets/image-20251225152014741.png)

![image-20251225151939762](./plugin-login-pro.assets/image-20251225151939762.png)

![](./plugin-login-pro.assets/image-20251225160750406.png)

![image-20251225160808556](./plugin-login-pro.assets/image-20251225160808556.png)

## Configure WeChat Official Account Scan Login

First, add a new authenticator:

![image-20251225163543703](./plugin-login-pro.assets/image-20251225163543703.png)

<img src="./plugin-login-pro.assets/image-20251225163840133.png" alt="image-20251225163840133" style="zoom:50%;" />

Only after adding authentication in the authenticator will the Official Account be integrated into the NocoBase authentication system and bound with NocoBase users.

Recommended identifier: `wechat-official`

![image-20251225164032745](./plugin-login-pro.assets/image-20251225164032745.png)

Start configuring Official Account information:
The Official Account needs to be added before debugging, because only by saving the configuration file can callback messages be received during scan code authentication.

The authenticator identifier should be consistent with the one used above, default is `wechat-official`.

![image-20251225165352027](./plugin-login-pro.assets/image-20251225165352027.png)

Go to the WeChat Developer backend to configure Service Account callback messages:

Reference documentation: [WeChat Message Push Guide](https://developers.weixin.qq.com/doc/subscription/guide/dev/push/)

Be sure to add it first, otherwise there is no data in the database, and the WeChat backend callback decoding verification will fail.

```http
http(s)://IP+Port/api/wechat/callback
```

![image-20251225170433998](./plugin-login-pro.assets/image-20251225170433998.png)

Follow the operations and click the three buttons above to diagnose whether there are issues with the configuration.

After the check results are normal, it can be used on the page normally.

The WeChat scan code login of this plugin adopts the "Parameter QR Code" mechanism. The specific interaction flow is as follows:

1.  **Get QR Code**

    - The frontend requests a login QR code from the plugin backend.
    - The backend generates a unique scene value `sceneStr` (as the identifier for this login session) and stores it in the `other_message` collection.
    - The backend calls the WeChat interface `qrcode/create` to generate a QR code with parameters, and returns the QR code URL and `sceneStr` to the frontend.

2.  **User Scans**

    - The user scans the QR code using WeChat.
    - **Unfollowed Users**: After scanning, they enter the following page. After following, WeChat pushes a `subscribe` event (with the scene value).
    - **Followed Users**: After scanning, they directly enter the Official Account session. WeChat pushes a `SCAN` event (with the scene value).

3.  **Callback Processing**

    - The WeChat server pushes the event to the callback URL configured in the plugin (`/api/wechat/callback`).
    - The plugin backend verifies the signature and parses the XML data.
    - Look up the user bound in the system according to the OpenID:
      - **Bound**: Directly match the existing user.
      - **Unbound**: If "Automatic Registration" is enabled, a new user is automatically created and bound; otherwise, only the scan status is recorded.
    - The backend finds the corresponding `other_message` record based on the `EventKey` (i.e., `sceneStr`) in the callback, updates the record with the identified user ID, and marks the status as scanned.

4.  **Polling Login**
    - The frontend uses `sceneStr` to periodically poll the backend interface (`/api/wechat/scan-result`).
    - Once the backend detects that the record corresponding to the `sceneStr` already has a user ID, it generates a login Token (JWT).
    - The frontend receives the Token and completes the login redirection.

Corresponding interfaces are already in Swagger:
![image-20251225171759206](./plugin-login-pro.assets/image-20251225171759206.png)

Below is the message push table:

It is recommended to set up a scheduled task to clean up expired push messages:

![image-20251225170549789](./plugin-login-pro.assets/image-20251225170549789.png)

You can build your own block tables for management and debugging.

![image-20251225171956668](./plugin-login-pro.assets/image-20251225171956668.png)

## NocoBase as Mini Program Backend:

![image-20251225172344808](./plugin-login-pro.assets/image-20251225172344808.png)

Configure Mini Program:

![image-20251225191110310](./plugin-login-pro.assets/image-20251225191110310.png)

Mini Program Authentication Interface:

Reference WeChat Mini Program login documentation:

[WeChat Mini Program Login API](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.pluginLogin.html)

```http
curl --location --request POST 'https://Domain+Port/api/auth:signIn' \
--header 'x-authenticator: The identifier you entered in user authentication' \
--header 'Content-Type: application/json' \
--data-raw '{"code":"User identification credential (code)"}'
```

Return value after successful NocoBase login:

```json
{
  "data": {
    "user": {
      "createdAt": "2025-12-25T11:13:00.498Z",
      "updatedAt": "2025-12-25T11:13:00.498Z",
      "systemSettings": {},
      "id": 12,
      "nickname": "WeChat User-06cIBC6E",
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

The subsequent developer token is the user's NocoBase authentication information.

![image-20251225191320467](./plugin-login-pro.assets/image-20251225191320467.png)

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
