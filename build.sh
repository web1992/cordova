#!/bin/sh

echo "build run"

cordova plugin rm info.linlong.didisdk
cordova plugin add /data/www/didisdk/ --save
cordova build android
