const sidebarCn = [
  {
    title: "Jetbrains",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      ["/Jet/cdkey", "激活码激活"],
      ["/Jet/account", "账号激活"],
      ["/Jet/server", "注册服务器激活"],
      ["/Jet/codes", "历史激活码"]
    ]
  },
  {
    title: "jet其他",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      ["/Jet/download", "全家桶最新下载地址"],
      ["/Jet/news1", "激活码到期之后乱象"],
      ["/Jet/lang", "JetBrains系列汉化包"]
    ]
  },
  {
    title: "其他",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      ["/Jet/ajax", "ajax相关-get和post请求的区别"],
      ["/Jet/php", "php的composer命令"]
    ]
  }
];

module.exports = { sidebarCn };
