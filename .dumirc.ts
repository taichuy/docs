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
            { title: '首页插件', link: '/nocobase/home-plugin' },
            { title: '父级筛选传递值', link: '/nocobase/parent-filter' },
          ],
        },
      ],
      '/en-US/nocobase': [
        {
          children: [
            { title: 'Introduction', link: '/en-US/nocobase' },
            { title: 'Home Plugin', link: '/en-US/nocobase/home-plugin' },
            { title: 'Parent Filter Value Transfer', link: '/en-US/nocobase/parent-filter' },
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
