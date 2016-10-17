

添加平台支持
---
    cordova platform add ios --save
    cordova platform add android --save

构建前的依赖检查
---
     cordova requirements

重新构建插件依赖等
    cordova platform update android --save
    cordova platform update ios --save

构建安卓apk
---
    cordova build android
    cordova build ios

添加插件
---
    cordova plugin add https://github.com/web1992/didisdk#0.0.1 --save

查询插件
---
    cordova plugin ls


谷歌调试：
---
    chrome://inspect/#devices