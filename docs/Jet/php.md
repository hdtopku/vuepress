---
title: php多版本的composer安装过程命令
meta:
  - name: description
    content: 完整版php多版本的composer安装过程命令
  - name: keywords
    content: php|composer|安装命令
date: 2020-03-28
isShowComments: false
---

<!-- QQ卡片 -->
<div style="width:100%;display:flex;justify-content:space-around;border:1px solid #E5E5E4;">
  <img style="width:25%;padding-top:15px;" src="http://img.taojingling.cn/WechatIMG60.jpeg" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b', '_blank');" />

  <div style="display:flex;flex-direction:column;justify-content:space-around;">
    <div style="font-size:1.2rem;font-weight:bold;">
      <div>因版权问题或未及时更新，</div>
      <div>遇到任何问题请进群交流。</div>
    </div>
    <div style="padding-left:12%;position:relative;">
      <div>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="https://i.loli.net/2019/11/23/U3qbMEuC9n6YBRA.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="//shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">909335010</a>（新群）
      </div>
      <div>
      <br>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="https://i.loli.net/2019/11/23/U3qbMEuC9n6YBRA.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">323784710</a>
      <p>所有群里信息同步，多加拒绝入群</p>
      </div>
    </div>
  </div>
</div>

第一步、首先去官网下载composer.phar ；下载链接：https://getcomposer.org/download/composer.phar

第二步、composer.phar 复制到项目根目录，比如我的是:F:/wamp/bin/php/php7.0.10/php

第三步、执行 F:/wamp/bin/php/php7.0.10/php composer.phar update [这里我的安装路径是F:/wamp/bin/php/php7.0.10/php]

第四步、安装依赖包：F:/wamp/bin/php/php7.0.10/php composer.phar require laravel/scout



温馨提示：设置完成后查看命令 > php -v ,如还是原来的php版本，建议重启电脑。

如果你想切换其它php版本，按照以上步骤操作