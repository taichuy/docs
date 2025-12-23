import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['/taichuy-logo.png'],
  themeConfig: {
    name: '太初y',
    logo: '/logo.svg',
    nav: {
      'zh-CN': [
        { title: 'NocoBase插件', link: '/nocobase' },
        { title: '太初y', link: 'https://y.taichu.xyz' },
      ],
      'en-US': [
        { title: 'NocoBase Plugins', link: '/en-US/nocobase' },
        { title: 'taichu Y', link: 'https://y.taichu.xyz' },
      ],
    },
    sidebar: {
      '/nocobase': [
        {
          children: [
            { title: '简介', link: '/nocobase' },
            { title: '父级筛选传递值', link: '/nocobase/parent-filter' },
            { title: '太初y登录插件-lite', link: '/nocobase/plugin-login-lite' },
            { title: '太初y登录插件-pro', link: '/nocobase/plugin-login-pro' },
          ],
        },
      ],
      '/en-US/nocobase': [
        {
          children: [
            { title: 'Introduction', link: '/en-US/nocobase' },
            { title: 'plugin-block-filters-value', link: '/en-US/nocobase/parent-filter' },
            { title: 'plugin-login-lite', link: '/en-US/nocobase/plugin-login-lite' },
            { title: 'plugin-login-pro', link: '/en-US/nocobase/plugin-login-pro' },

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
