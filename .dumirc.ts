import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['/taichuy-logo.png'],
  themeConfig: {
    name: '太初y',
    logo: '/logo.svg',
    nav: {
      'zh-CN': [
        { title: 'NocoBase插件', link: '/nocobase' },
        { title: '太初y', link: 'https://www.taichuy.com' },
      ],
      'en-US': [
        { title: 'NocoBase Plugins', link: '/en-US/nocobase' },
        { title: 'taichu Y', link: 'https://www.taichuy.com' },
      ],
    },
    sidebar: {
      '/nocobase': [
        {
          children: [
            { title: '简介', link: '/nocobase' },
            {
              title: 'nocobase插件打包示例',
              link: '/nocobase/plugin-build-example',
            },
            { title: '父级筛选传递值', link: '/nocobase/parent-filter' },
            { title: '登录配置-lite', link: '/nocobase/plugin-login-lite' },
            {
              title: '登录插件-pro：接入微信',
              link: '/nocobase/plugin-login-pro',
            },
            { title: '邮箱认证', link: '/nocobase/plugin-auth-email' },
          ],
        },
      ],
      '/en-US/nocobase': [
        {
          children: [
            { title: 'Introduction', link: '/en-US/nocobase' },
            {
              title: 'plugin-build-example',
              link: '/en-US/nocobase/plugin-build-example',
            },
            {
              title: 'plugin-block-filters-value',
              link: '/en-US/nocobase/parent-filter',
            },
            {
              title: 'plugin-login-lite',
              link: '/en-US/nocobase/plugin-login-lite',
            },
            {
              title: 'plugin-auth-email',
              link: '/en-US/nocobase/plugin-auth-email',
            },
          ],
        },
      ],
    },
    prefersColor: { default: 'light', switch: true },
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
});
