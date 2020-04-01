const sidebar = require("./sidebar");

module.exports = {
  title: '激活码',
  description: '专注互联网分享',
  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/nprogress"],
    ["@vuepress/medium-zoom",true],
    "@vuepress-reco/vuepress-plugin-comments"
  ],
  theme: "reco",
  themeConfig: {
    author: "idea激活码",
    logo: '/images/head.jpeg',
    sidebar: sidebar.sidebarCn,
    nav: [
      { text: "Home", link: "/" },
      { text: "Jet", link: "/Jet/account" },
      // { text: "External", link: "https://google.com" }
    ],
    noFoundPageByTencent: false,
    valineConfig: {
      type: '',
      appId: 'UQREJWUE9BHErBak3vFXjxBJ-gzGzoHsz',// your appId
      appKey: '4yKdo2re4cY0yyyb9htwMeVx', // your appKey
      notify: true,
      visitor: true
    },
    record: '闽ICP备19012238号',
    recordLink: 'http://www.beian.miit.gov.cn',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: 'https://boke112.com/goto/beian',
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
  port: 10606
};
