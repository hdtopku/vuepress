const sidebarCn = [
  {
    title: "Jetbrains",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      ["/Jet/cdkey", "激活码激活"],
      ["/Jet/account", "账号激活"],
      ["/Jet/server", "注册服务器激活"]
    ]
  }
];

module.exports = { sidebarCn };
