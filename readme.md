

添加平台支持
---
    cordova platform add ios --save
    cordova platform add android --save

构建前的依赖检查
---
     cordova requirements

重新构建插件依赖等
---
    cordova platform update android --save
    cordova platform update ios --save

构建安卓apk
---
    cordova build android
    cordova build ios

添加插件
---
    cordova plugin add https://github.com/web1992/didisdk#0.0.1 --save
    cordova plugin add /data/www/didisdk --save
	
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
