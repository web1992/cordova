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
        didiJK.didiPluginFun();
    })

});