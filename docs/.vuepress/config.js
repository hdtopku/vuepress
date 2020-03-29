const sidebar = require("./sidebar");

module.exports = {
  title: '淘精灵',
  description: '专注互联网分享',
  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/nprogress"],
    ["@vuepress/medium-zoom",true],
    "@vuepress-reco/vuepress-plugin-comments",
    [
      'redirect',
      {
        // 提供多语言重定向功能
        // 它会自动从 `/foo/bar/` 定向到 `/:locale/foo/bar/`，如果对应的页面存在
        redirectors: [
          // 定制化重定向
          {
            base: '/', // 将 `/my-plugins/` 自动重定向到某个子页面
            storage: true, // 保存最后一次访问的结果到 `localStorage`，供下次重定向使用
            alternative: [
              // 提供一个备选列表，如果都找不到就只能 404 Not Found 喽
              '/Jet/cdkey'
            ],
          },
        ],
      },
    ]
  ],
  theme: "reco",
  themeConfig: {
    author: "淘精灵",
    logo: '/images/head.jpeg',
    sidebar: sidebar.sidebarCn,
    nav: [
      { text: "Home", link: "/" },
      { text: "Jet", link: "/Jet/introduction" },
      { text: "External", link: "https://google.com" }
    ],
    noFoundPageByTencent: false,
    valineConfig: {
      type: '',
      appId: 'UQREJWUE9BHErBak3vFXjxBJ-gzGzoHsz',// your appId
      appKey: '4yKdo2re4cY0yyyb9htwMeVx', // your appKey
      notify: true,
      visitor: true
    },
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2017'
  },
  head: [
    ["script", { src: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js" }],
    ["script", { src: "https://cdn.bootcss.com/layer/2.3/layer.js" }],
    [
      "href",
      {
        src: "https://cdn.bootcss.com/layer/2.3/skin/layer.css",
        rel: "stylesheet"
      }
    ]
  ],
  port: 1688
};
