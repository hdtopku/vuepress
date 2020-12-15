---
title: ajax相关-get和post请求的区别
meta:
  - name: description
    content: 最全解释ajax相关-get和post请求的区别
  - name: keywords
    content: ajax|get|post
isShowComments: false
---

<!-- QQ卡片 -->
<div style="width:100%;display:flex;justify-content:space-around;border:1px solid #E5E5E4;">
  <img style="width:25%;padding-top:15px;" src="h/images/jetbrains/jetbrains2.jpeg" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b', '_blank');" />

  <div style="display:flex;flex-direction:column;justify-content:space-around;">
    <div style="font-size:1.2rem;font-weight:bold;">
      <div>因版权问题或未及时更新，</div>
      <div>遇到任何问题请进群交流。</div>
    </div>
    <div style="padding-left:12%;position:relative;">
      <div>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="/images/jetbrains/qq.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="//shang.qq.com/wpa/qunwpa?idkey=ae59f469b427c038c95f118ceeefc6f9eba7a9d90ce9aae72bde58d09cc1013b" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">865478884</a>（新群）
      </div>
      <div>
      <br>
      <img style="width:6%;position:relative;top:3px;cursor:pointer;" src="/images/jetbrains/qq.png" onclick="window.open('http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e', '_blank');" />
      <a href="http://shang.qq.com/wpa/qunwpa?idkey=22ed6bd53a50f9764493ef41746bfb3006123cbe097729a106fee0c46b6e0b9e" style="font-size:1.2rem;text-decoration:underline;color:red;" target="_blank">659892516</a>
      <p>所有群里信息同步，多加拒绝入群</p>
      </div>
    </div>
  </div>
</div>

<div style="width:100%;height:200px;display:flex;justify-content:space-around;">
  <div style="width:50%;line-height:200px;font-size:30px;color:black;font-weight:bold;text-align:center;background-color:#C6C475">GET</div>
  <div style="width:50%;line-height:200px;font-size:30px;color:white;font-weight:bold;text-align:center;background-color:#5E6766">POST</div>
</div>

### 一、完整的URL由以下几部分组成：  

* scheme：通信协议，常用的有：http/ftp。  

* host：主机，服务器（计算机）域名或IP地址。  

* port：端口，整数，可选，省略时使用默认端口，http的默认端口是80。  

* path：路径，由零或多个“/”符号隔开的字符，一般用来表示主机的一个目录或者文件地址。  

* query：查询，可选，用于给动态网页（如用CGI、ISAPI、PHP/ASP/JSP/ASP.NET等技术制作的网页）传递参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。  

* fragment：信息片段、字符串，用于指定网络资源中的片段。例如一个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。

### 二、get和post请求的区别  

1、get请求没有请求头，post请求要有请求头，请求会带上content—type告诉服务器post过去的数据格式和url的参数的数据一样。  

2、post发送的数据在请求体中，用户看不到；get发送的数据在地址栏中，用户能看到，不安全。  

3、涉及隐私数据的时候用post请求比较安全，发送大量数据的时候用post,发送少量数据用get。

### 三、XML HttpRequest返回值类型有xml和json  

js解析xml格式  

1、根据xml文本内容创建xml对象

```
JavaScript
function createXml(data){
	if(!data){
		return null;
	}
	var xml = null;
	try{
		xml = new ActiveXObject("Microsoft.XMLDOM");
		xml.loadXML(data);
	}catch(e){
		try{
		xml = (new DOMParser()).parseFromString(data)
	}catch(e){
		return null;
	}
}
```

2、获取元素节点的文本内容

```
JavaScript
function getNodeText(node){
	if(window.ActiveXObject){
		return node.text;
	}else{
		if(node.nodeType = 1){
			return node.textContent;
		}
	}
}
```

3、获取元素的属性

```
JavaScript
function getNodeAttribute(node,attrName){
	if(window.ActiveXObject){
		return node.getAttributeNode(attrName);
	}else{
		if(node.nodeType == 1){
			return node.attributes[attrName]
		}else{
			return undefined;
		}
	}
}
```

### 四、GET幂等，POST不幂等

幂等是指同一个请求方法执行多次和仅执行一次的效果完全相同。

1、按照RFC规范，PUT，DELETE和安全方法都是幂等的。虽说是规范，但服务端实现是否幂等是无法确保的。

2、引入幂等主要是为了处理同一个请求重复发送的情况，比如在请求响应前失去连接，如果方法是幂等的，就可以放心地重发一次请求。这也是浏览器在后退/刷新时遇到POST会给用户提示的原因：POST语义不是幂等的，重复请求可能会带来意想不到的后果。

3、比如在微博这个场景里，GET的语义会被用在「看看我的Timeline上最新的20条微博」这样的场景，而POST的语义会被用在「发微博、评论、点赞」这样的场景中。

### 总结:

GET的语义是请求获取指定的资源。GET方法是安全、幂等、可缓存的（除非有 Cache-Control Header的约束）,GET方法的报文主体没有任何语义。

POST的语义是根据请求负荷（报文主体）对指定的资源做出处理，具体的处理方式视资源类型而不同。POST不安全，不幂等，（大部分实现）不可缓存。
