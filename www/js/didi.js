/**
 * Created by Administrator on 2016/10/17.
 */

var didiJK=null


;$(function() {
    document.addEventListener('deviceready', function() {
        console.log('didiJK run');
        //require("cordova!info.linlong.didisdk");
        didiJK = cordova.require('info.linlong.didisdk');
        console.log('didiJK run'+didiJK);
    });

    $('#opendidi').click(function () {
        console.log('didiJK click'+didiJK);
	//var str="{fromlat:\"121.487872\",fromlng;\"31.174141\",tolat:\"121.487872\",tolng:\"31.174141\",biz:\"2\"}";
	var str="[\"39.976694\",\"116.306169\",\"39.976694\",\"116.306169\",\"2\"]";
        didiJK.didiPluginFun(str);
        //didiJK.didiPluginFun();
    })

});
