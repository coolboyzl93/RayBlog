# 使用nodeJS和ajax的get请求实现网站流量的统计

------
首先说原理，其实很简单，一般用ajax请求的场景是用户要点击某些表单操作或者文件的上传和下载，但我们只要一旦进入页面就立刻执行ajax请求，用get方法因为速度快，且不需要传递数据。

然后在nodeJS服务器端设置一个计数器变量。每次有人进入页面就让这个计数器变量加1,这样我们就可以在一个服务器的终端看自己网站的流量了，是不是很兴奋啊，
不BB，上代码了。
前端代码中引入这个personCount.js
```
var xhr = new XMLHttpRequest()
xhr.open("GET","/getCount")
xhr.send();

```
后端nodeJS中express简单搭建服务器,前端html文件放在同目录下的public文件夹中
```
const express = require("express")
const app = express()
app.use(express.static("public"))
var netTraffic = 0//一个监控流量的变量
app.get("/getCount", function(req,res){
//每次请求的时候都加都会使流量加1；
	console.log(`网站index.html的流量是 ${++netTraffic}`);
})
app.listen(3000, function(err){
	if(err){
		console.log(err)
		return
	}
	console.log("server is running...")
})
```
流量监控的截图


![image.png](http://upload-images.jianshu.io/upload_images/5222756-921165279ba46054.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)