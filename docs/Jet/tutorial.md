---
title: IntelliJ IDEA 使用教程(2019图文版) -- 从入门到上瘾
meta:
  - name: description
    content: IntelliJ IDEA 使用教程(2019图文版) -- 从入门到上瘾
  - name: keywords
    content: IntelliJ|激活|最新版|图文|IDEA|idea|破解教程|有效|使用教程
isShowComments: false
---

<!-- QQ卡片 -->
<div style="width:100%;display:flex;justify-content:space-around;border:1px solid #E5E5E4;">
  <img style="width:25%;padding-top:15px;" src="/images/jetbrains/jetbrains2.jpeg" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b', '_blank');" />

  <div style="display:flex;flex-direction:column;justify-content:space-around;">
    <div style="font-size:1.2rem;font-weight:bold;">
      <div>因版权问题或未及时更新，</div>
      <div>遇到任何问题请进群交流。</div>
    </div>
    <div style="padding-left:12%;position:relative;">
      <div>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="https://i.loli.net/2019/11/23/U3qbMEuC9n6YBRA.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="//shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">659892516</a>（新群）
      </div>
      <div>
      <br>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="https://i.loli.net/2019/11/23/U3qbMEuC9n6YBRA.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">909335010</a>
      <p>所有群里信息同步，多加拒绝入群</p>
      </div>
    </div>
  </div>
</div>

### 一、 IDEA VS Eclipse 核心术语比较
    由下图可见：两者最大的转变就在于工作空间概念的转变，并且在IDEA当中，Project和  Module是作为两个不同的概念，对项目结构是具有重大意义的，这也恰恰是许多IDEA初学者觉得困扰的地方。

<img src="https://upload-images.jianshu.io/upload_images/8069210-1f60e92b9a8d5559.png?imageMogr2/auto-orient/strip|imageView2/2/w/648/format/webp" />

#### 1、 为什么要取消工作空间？

答： 简单来说，IDEA不需要设置工作空间，因为每一个Project都具备一个工作空间！！对于每一个IDEA的项目工程（Project）而言，它的每一个子模块（Module）都可以使用独立的JDK和MAVEN配置。这对于传统项目迈向新项目的重构添加了极大的便利性，这种多元化的灵活性正是Eclipse所缺失的，因为开始Eclipse在初次使用时已经绑死了工作空间。

#### 2、 此外，很多新手都会问，为什么IDEA里面的子工程要称为Module ？

答：其实就是模块化的概念，作为聚合工程亦或普通的根目录，它称之为Project，而下面的子工程称为模块，每一个子模块之间可以相关联，也可以没有任何关联。

### 二、 当前项目配置VS 默认配置 

#### 1、 为什么有了当前项目配置，还需要默认配置呢？

答：因为IDEA没有工作空间的概念，所以每个新项目（Project）都需要设置自己的JDK和MAVEN等相关配置，这样虽然提高了灵活性，但是却要为每个新项目都要重新配置，这显然不符合我们的预期。在这个背景下，默认配置给予当前项目配置提供了Default选项，问题自然就迎刃而解了。

**最新补充**：IDEA为了明确这个新项目配置的概念，在2018.2之后的正式版本已正式将“Default Settings”名字修改“ Default Settings /ProjectStructs”，即“默认配置”就是指“新项目配置”。

#### 2、 初始化步骤

* 打开默认配置：顶部导航栏 -> File -> Other Settings -> Default Settings /ProjectStructs 

* 打开当前配置：顶部导航栏 -> File -> Settings / ProjectStructs

     示例图：

<img src="https://upload-images.jianshu.io/upload_images/8069210-ac73a71f4046699e.png?imageMogr2/auto-orient/strip|imageView2/2/w/494/format/webp" />

如果当前项目想覆盖默认配置，直接在Settins/Project Structure设置即可。

### 三、 全局JDK（默认配置）

**具体步骤**：顶部工具栏  File ->Other Settins -> Default Project Structure -> SDKs -> JDK

示例： 根据下图步骤设置JDK目录，最后点击OK保存。

<img src="https://upload-images.jianshu.io/upload_images/8069210-fa02a9132d9aaee2.png?imageMogr2/auto-orient/strip|imageView2/2/w/683/format/webp" />

注：SDKs全称是Software Development Kit  ，因为IDEA支持JDK等多种开发工具包。

同理，当前项目在Project Structure可为工程和各模块设置喜欢的JDK版本。

### 四、 全局Maven（默认配置）

**具体步骤：** 顶部工具栏  File ->Other Settings -> Default Settings -> Build & Tools -> Maven

**示例：** 理论上只要配置了Maven主目录即可，实际开发推荐采用User Settins file .

<img src="https://upload-images.jianshu.io/upload_images/8069210-ac73a71f4046699e.png?imageMogr2/auto-orient/strip|imageView2/2/w/494/format/webp" />

这里提醒一下，Apache Maven 本地仓库的地址是自动生成的，通常在C盘的用户目录里，所以在实际开发中推荐大家指定本地仓库的地址，避免因重装系统或被第三方安全工具清理而丢失数据。Maven的配置很简单，删掉注释后一目了然。如图：

<img src="https://upload-images.jianshu.io/upload_images/8069210-4a650d97f12da50d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1188/format/webp" />
settings.xml

#### 打开Maven神器

还在Eclipse使用Update命令苦苦挣扎的童鞋，请火速尝试IDEA提供的Maven插件，其操作的便利性将给你带来前所未有的愉快感！！

**具体步骤：** 右侧工具栏 Maven -> 点击展开某工程或模块 ->快速执行Maven命令。

<img src="https://upload-images.jianshu.io/upload_images/8069210-134fc5bf3ae4fdb1.png?imageMogr2/auto-orient/strip|imageView2/2/w/429/format/webp" />

### 五、 版本控制Git/Svn （默认配置）

**具体步骤：** 顶部工具栏  File ->Other Settings -> Default Settings -> Version Control -> Git

**使用说明：** IDEA默认集成了对Git/Svn的支持  直接设置执行程序，右边Test提示成功即可。

**问题反馈：** 有部分小伙伴反馈说IDEA无法找到svn.exe，解决方法：重装SVN，配置项重新选择command line client tools 即可。

<img src="https://upload-images.jianshu.io/upload_images/8069210-9bbaa622cf3daeed.png?imageMogr2/auto-orient/strip|imageView2/2/w/1026/format/webp" />

PS: IDEA内置的Git插件灰常好用，尤其是解决冲突性的代码。另外Git客户端推荐SourceTree。

### 六、 自动导包和智能移除 （默认配置）

**具体步骤**：顶部工具栏  File ->Other Settings -> Default Settings -> Auto Import

**使用说明**：在网上看到很多人在提问IDEA为什么不能优化导包而Eclipse可以，这不是低端黑嘛， 所以特意抽出来跟大家分享IDEA如何优化导包。

<img src="https://upload-images.jianshu.io/upload_images/8069210-d66b1318a29ab251.png?imageMogr2/auto-orient/strip|imageView2/2/w/1028/format/webp" />

### 七、 Tomcat Server（当前项目配置） 

很多小伙伴刚开始都找不到Tomcat的配置，其实很简单，Tomcat或者Jetty这些都是部署的容器，自然会联想到Deployment ，打开部署配置，可以看到应用服务器的配置。

**配置Tomcat方法：** File -> Settings -> Deployment -> Application Servers -> Tomcat Server  

具体配置方法，如下图：

<img src="https://upload-images.jianshu.io/upload_images/8069210-4d628299a415e63d.png?imageMogr2/auto-orient/strip|imageView2/2/w/968/format/webp" />

### 八、 自动编译

**具体步骤：** 顶部工具栏  File ->Other Settings -> Default Settings -> Auto Import

**说明：** 开启自动编译之后，结合Ctrl+Shift+F9 会有热更新效果。

<img src="https://upload-images.jianshu.io/upload_images/8069210-e10620f9da31fe9c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1023/format/webp" />

#### 自动编译（Runtime）

**具体步骤：** 敲击 Ctrl + Shift + Alt + /  然后双击Shift搜索进入Registry ，找到`compiler.automake.allow.when.app.running` ，然后勾选上。

<img src="https://upload-images.jianshu.io/upload_images/8069210-0734034dd7995cf4.png?imageMogr2/auto-orient/strip|imageView2/2/w/371/format/webp" />

<img src="https://upload-images.jianshu.io/upload_images/8069210-3a4d633c2c0496f5.png?imageMogr2/auto-orient/strip|imageView2/2/w/846/format/webp" />

### 九、 取消大小写敏感
**具体步骤：**

`File | Settings | Editor | General | Code Completion Case | Sensitive Completion = None`

取消大小敏感，在编写代码的时候，代码的自动提示将更加全面和丰富。

<img src="https://upload-images.jianshu.io/upload_images/8069210-60b6ee65a7b778a0.png?imageMogr2/auto-orient/strip|imageView2/2/w/954/format/webp" />

### 十、 调整字体类型和字体大小

默认的白色背景和细小的字体会影响大家的编码体验，这里特意提供了调整代码窗的快捷配置。打开配置，搜索Font，然后再Font可以调整字体类型，Size可以调整字体大小，如图：

<img src="https://upload-images.jianshu.io/upload_images/8069210-9d5a65fa1d5f809d.png?imageMogr2/auto-orient/strip|imageView2/2/w/957/format/webp" />

### 十一、 将快捷键设置为跟Eclipse一样

很多人可能并不习惯IDEA的快捷键，为了方便，这里我们将快捷键设置为跟 Eclipse一样。

**具体步骤:** File -> Settings -> Keymap - > 选择Eclipse .

<img src="https://upload-images.jianshu.io/upload_images/8069210-de1b7cb998e21a2d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1025/format/webp" />

从Eclipse转过来的小伙伴 可以放心使用

### 十二、 打开常用工具栏

**具体步骤：** 顶部导航栏 - View -> 勾选 Toolbar & Tool Buttons

如下图所示：

<img src="https://upload-images.jianshu.io/upload_images/8069210-575c85658a9b06fd.png?imageMogr2/auto-orient/strip|imageView2/2/w/534/format/webp" />

### 十三、 懒人必备快捷键

1. 按【鼠标中键】快速打开智能提示，取代alt+enter 。

File->Settings-> Keymap-> 搜索 Show Intention Actions -> 添加快捷键为鼠标中键。

2. 按【F2】快速修改文件名，告别双手操作。

File->Settings-> Keymap-> 搜索 Rename -> 将快捷键设置为F2 。

3. 按【F3】直接打开文件所在目录，浏览一步到位。

File->Settings-> Keymap-> 搜索 Show In Explorer -> 将快捷键设置为F3 。

4. 按【Ctrl+鼠标右键】直接打开实现类，方便开发查询。

File->Settings-> Keymap-> 搜索 implementation->  Add Mouse Shortcut 将快捷键设置为Ctrl+ 鼠标右键。

### 十四、 重度强迫症患者

1. 取消大小写敏感，让自动提示更齐全！  

File | Settings | Editor | General | Code Completion Case | Sensitive Completion = None。

2. 隐藏开发工具的配置目录 例如 *.idea;*.iml 

File | Settings | File Types | 在末尾加上 *.idea;*.iml

3. 收起注释，让源码阅读更为清爽！ 

File -> Settings -> Editor -> General -> Code Folding ->  Documentation comments 勾选。

如何想快速一键打开全部注释，则单击鼠标右键，选择Folding -> Expand Doc comments 。



### 十五、 IDEA十问十答

1、如何打开本地工程/已存在的工程？

答：点击File -> Open 打开 工程文件夹即可，注意先配置好JDK、Maven等基础配置。

2、IDEA如何删除项目工程？

答：问这个问题的Coder真的好可爱啊哈哈，很肯定的回答你，不需要删，
点击File-> Close Project 即可快速关闭当前项目； 示例：

什么？你还是想要干掉整个目录？那也阔以，右键Show In Explorer ，删掉文件夹即可。不过笔者建议还是直接Close关掉就好啦，万一以后用得上呢，你说呢？

<img src="https://upload-images.jianshu.io/upload_images/8069210-8fa3622b2e764134.png?imageMogr2/auto-orient/strip|imageView2/2/w/274/format/webp" />

3、如何在单个窗口打开多个Maven工程啊？

答：随便新建一个文件夹，然后将工程都扔进去，使用IDEA打开这个文件夹。

4、如何为当前项目工程添加多个模块啊？

答： 对着工程右键 -> 选择New -> Module -> 通常选择Spring Initializr  ，如图：

<img src="https://upload-images.jianshu.io/upload_images/8069210-64822a874d368f32.png?imageMogr2/auto-orient/strip|imageView2/2/w/563/format/webp" />

新增模块

<img src="https://upload-images.jianshu.io/upload_images/8069210-b1aa086b58e093c5.png?imageMogr2/auto-orient/strip|imageView2/2/w/304/format/webp" />

多模块工程
