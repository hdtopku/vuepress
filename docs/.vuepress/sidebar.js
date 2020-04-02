const sidebarCn = [
  {
    title: "Jetbrains",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      ["/Jet/cdkey", "激活码激活"],
      ["/Jet/account", "账号激活"],
      ["/Jet/server", "注册服务器激活"],
      ["/Jet/codes", "历史激活码"],
      ["/Jet/idea", "IntelliJ IDEA 注册码"],
      ["/Jet/idea2", "IDEA激活破解教程（永久）"],
      ["/Jet/tutorial", "IntelliJ IDEA 使用教程"],
      ["/Jet/pycharm", "pycharm永久激活"]
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
      ["/Jet/php", "php的composer命令"],
      ["/Jet/keyboard", "IntelliJ快捷键说明"],
      ["/Jet/distinction", "IJ商业版与免费版区别"]
    ]
  },
  {
    title: "leetcode",
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      {
        title: "1-20题",
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ["/leetcode/1", "1 两数之和"],
          ["/leetcode/2", "2 两数相加"],
          ["/leetcode/3", "3. 无重复字符的最长子串"],
          ["/leetcode/4", "4. add-two-numbers"],
          ["/leetcode/5", "5. longest-palindromic-substring"],
          ["/leetcode/6", "6. zigzag-conversion"],
          ["/leetcode/7", "7. reverse-integer"],
          ["/leetcode/8", "8. python-1xing-zheng-ze-biao-da-shi-by-knifezhu"],
          ["/leetcode/9", "9. 回文数"],
          ["/leetcode/10", "10. 正则表达式匹配"],
          ["/leetcode/11", "11. 盛最多水的容器"],
          ["/leetcode/12", "12. 整数转罗马数字"],
          ["/leetcode/13", "13. 罗马数字转整数"],
          ["/leetcode/14", "14. 最长公共前缀"],
          ["/leetcode/15", "15. 三数之和"],
          ["/leetcode/16", "16. 最接近的三数之和"],
          ["/leetcode/17", "17. 电话号码的字母组合"],
          ["/leetcode/18", "18. 四数之和"],
          ["/leetcode/19", "19. 删除链表的倒数第N个节点"],
          ["/leetcode/20", "20. 有效的括号"]
        ]
      },
      {
        title: "21-40题",
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ["/leetcode/21", "21. 合并两个有序链表"],
          ["/leetcode/22", "22. 括号生成"],
          ["/leetcode/23", "23. 合并K个排序链表"],
          ["/leetcode/24", "24. 两两交换链表中的节点 swap-no"],
          ["/leetcode/25", "25. K 个一组翻转链表"]
        ]
      }
    ]
  }
];

module.exports = { sidebarCn };
