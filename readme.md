Overview
---
	cordova 滴滴打车插件demo

插件地址：[didisdk](https://github.com/web1992/didisdk)

![](http://i.imgur.com/cXEKz9v.png)

添加平台支持
---
    cordova platform add ios --save
    cordova platform add android --save

构建前的依赖检查
---
     cordova requirements


构建安卓apk
---
    cordova build android
    cordova build ios

添加插件
---
    cordova plugin add https://github.com/web1992/didisdk#0.0.3 --save
    # 或者把项目下载到本地，指定目录安装插件
    cordova plugin add /data/www/didisdk --save

更多的插件安装命令 [cordova-cli](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#deprecated-platforms)
	
查询插件
---
    cordova plugin ls

删除插件
----
   cordova plugin rm info.linlong.didisdk

谷歌调试：
---
    chrome://inspect/#devices

参考
---
[cordova命令](http://www.hangge.com/blog/cache/detail_1158.html)
