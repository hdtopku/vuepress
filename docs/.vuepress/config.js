const sidebar = require("./sidebar");

module.exports = {
  plugins: [
    ["@vuepress/back-to-top"],
    ["@vuepress/nprogress"],
    ["@vuepress/medium-zoom",true],
    "@vuepress-reco/vuepress-plugin-comments"
  ],
  sidebar: "auto",
  theme: "reco",
  themeConfig: {
    type: "blog",
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
    }
  },
  head: [
    ["script", { src: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js" }],
    ["script", { src: "/bdtj.js" }],
    ["script", { src: "https://cdn.bootcss.com/layer/2.3/layer.js" }],
    [
      "href",
      {
        src: "https://cdn.bootcss.com/layer/2.3/skin/layer.css",
        rel: "stylesheet"
      }
    ],
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  ],
  port: 8080
};
