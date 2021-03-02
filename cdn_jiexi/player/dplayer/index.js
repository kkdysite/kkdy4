 //初始化参数
 window.addEventListener('error', function(e) {
    window.location.href = "../h5/" + window.location.search;
});
var xyplay = ("undefined" !== typeof parent.xyplay) ? parent.xyplay : parent.parent.xyplay;
var videoUrl = decodeURIComponent(_GET('url'));
var headtime = Number(getCookie("time_" + videoUrl) || _GET('headtime'));
var autoplay = _GET('autoplay') === "0" ? 0 : 1;
var seektime = _GET('seektime') === "0" ? 0 : 1;
var live = _GET('live') === "1" ? 1 : 0;
var danmaku = _GET('danmaku') === "1" ? 1 : 0;
var logo_off = _GET('logo_off') === "1" ? 1 : 0;
init();
 

//程序入口
function init(){
    player();
     //信息控件
    if (!$('#stats').length) {$("#video").append("<div id='stats'></div>");}
    //播放列表控件
    if (!$('#list').length) {
        $("#video").append('<div id="list"><div id="flaglist"></div><div id="playlist"></div></div>');
    }
   //显示时间    
     timeUpdate();

}

//初始化播放器
function player() {
    var type = 'normal';
    if (videoUrl.indexOf('.m3u8') > -1) {
        type = 'hls';
    } else if (videoUrl.indexOf('magnet:') > -1) {
        type = 'webtorrent';
    } else if (videoUrl.indexOf('.flv') > -1) {
        type = 'flv';
    } else if (videoUrl.indexOf('.mpd') > -1) {
        type = 'dash';
    }
    //播放参数
    var videoObject = {
        container: document.getElementById('video'),
        autoplay: autoplay,
        live: live,
        video: {
            url: videoUrl,
            type: type
        },

    };

    //LOGO
    if (logo_off) {
        videoObject["logo"] = "https://cdn.jsdelivr.net/gh/kkdysite/kkdy4@master/cdn_jiexi/player/dplayer/images/logo.png";
    }

    //弹幕
    if (danmaku) {
        videoObject["danmaku"] = {
            id: videoUrl,
            token: "299b6a5543616b5508c1ce8616ed530b",
            api: "https://dplayer.moerats.com/"
            // addition:['https://dplayer.moerats.com/v3/bilibili?aid=7100521']
        };

    }
    
    //自定义右键
   if("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.contextmenu && xyplay.contextmenu.off){
        videoObject["contextmenu"] = new Array();
        for (var key in xyplay.contextmenu.val) {
            videoObject["contextmenu"].push({
                text: key,
                link: xyplay.contextmenu.val[key]
            });
        }
    }
    //智能显示图片及控件
    if (is_mobile()) {
        videoObject["video"]["pic"] = "https://cdn.jsdelivr.net/gh/kkdysite/kkdy4@master/cdn_jiexi/player/dplayer/images/loading_wap" + _GET('ver') + ".gif";
    }else{
        videoObject["video"]["pic"] = "https://cdn.jsdelivr.net/gh/kkdysite/kkdy4@master/cdn_jiexi/player/dplayer/images/loading_pc.jpg";
    }
    if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.list_array) {

        if (xyplay.list_array && xyplay.list_array.length > 0 && xyplay.list_array[0]["video"].length > 1 && live === 0) {
            videoObject["next"] = "video_next";
            videoObject["list"] = "video_onlist";
            //监控鼠标
            control();
            if (!is_mobile()) {
                videoObject["front"] = "video_front";
            }
        }
    }

    // 调用dplayer, api参考 ：https://dplayer.js.org/#/zh-Hans/?id=api
    player = new DPlayer(videoObject);


    //绑定准备就绪回调
    player.on("loadedmetadata", function() {
        loadedmetadataHandler();
    });
    //绑定播放结束回调
    player.on("ended", function() {
        endedHandler();
    });
    //绑定错误回调
    player.on("error", function() {
        "undefined" !== typeof xyplay && xyplay.errorHandler();
    });
    //全屏
    player.on("fullscreen", function() {
        $("#stats").show();
    });
    //退出全屏
    player.on("fullscreen_cancel", function() {
        $("#stats").hide();
        $('#list').hide();
    });

     //移动浏览器video兼容
    $('body').find('video')
        .attr('playsinline', '')
        .attr('x5-playsinline', '')
        .attr('webkit-playsinline', '')
        .attr('x-webkit-airplay', 'allow')

   //检测是否启用右键
   if (!this.contextmenu_off) {
            /* 屏蔽右键信息   */
         $(".dplayer-menu.dplayer-menu-show").css('display','none;');
    }

}

//视频就绪回调,用来监控播放开始 
function loadedmetadataHandler() {
    if (seektime === 1 && !live && headtime > 0 && player.video.currentTime < headtime) {
        player.seek(headtime);
        player.notice("继续上次播放");

    } else {
        player.notice("视频已就绪");

    }
    player.on("timeupdate", function() {
        timeupdateHandler();
    });
    if (!is_mobile()) {
        $("#video").addClass("dplayer-hide-controller");
    } //隐藏控制栏
}
//播放进度回调  	
function timeupdateHandler() {
    setCookie("time_" + videoUrl, player.video.currentTime, 24);
}

//播放结束回调		
function endedHandler() {
    setCookie("time_" + videoUrl, "", -1);
    if (xyplay.playlist_array.length > Number(xyplay.part)) {
        player.notice("视频已结束,为您跳到下一集");
        setTimeout(function() {
            video_next();
        }, 500);
    } else {
        player.notice("视频播放已结束");
    }
}
//播放下集
function video_next() {
    if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.playlist_array)
        if (Number(xyplay.part) + 1 >= xyplay.playlist_array.length) {
            return false;
        }
    xyplay.part++;
    myplay(xyplay.playlist_array[xyplay.part]);
}
//播放上集	
function video_front() {
    if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.playlist_array)
        if (Number(xyplay.part) <= 0) {
            return false;
        }
    xyplay.part--;
    myplay(xyplay.playlist_array[xyplay.part]);

}
//调用播放
function myplay(url) {
    videoUrl = url;
    headtime = Number(getCookie("time_" + videoUrl));
    player.switchVideo({
        url: url
    });
    player.play();

    if ("undefined" !== typeof xyplay) {
        if (xyplay.title && !live) {
            parent.document.title = "正在播放:【" + xyplay.title + "】part " + (Number(xyplay.part) + 1) + "-- " + xyplay.mytitle;
        }

    }

}
/*  显示或隐藏播放列表   */
function video_onlist() {
    if ($('#list').css("display") === "none") {
        relist();
        $('#list').show();
        if (xyplay.lswap) {
            $(xyplay.player).hide();
        }

    } else {
        $('#list').hide();
        if (xyplay.lswap) {
            $(xyplay.player).show();
        }
    }
}


/*   刷新列表   */
function relist(autoflag) {
    reflaglist();
    replaylist(null, autoflag);
}

/*  刷新来源列表  */
function reflaglist(flag) {
    $('#flaglist').empty();
    xyplay.flaglist_array = [];
    for (var i = 0, len = xyplay.list_array.length; i < len; i++) {
        xyplay.flaglist_array.push(xyplay.list_array[i].flag);
        var flag_name = xyplay.list_array[i].flag_name ? xyplay.list_array[i].flag_name : xyplay.list_array[i].flag;
        if (i === xyplay.pflag) {
            $('#flaglist').append('<li   class="click_work" type="flag" val="' + xyplay.list_array[i].flag + '" num="' + i + '" style="' + xyplay.play.style.play_on + '">' + flag_name + '</li>');
        } else {
            $('#flaglist').append('<li   class="click_work" type="flag" val="' + xyplay.list_array[i].flag + '" num="' + i + '">' + flag_name + '</li>');
        }
    }
}

//刷新播放列表
function replaylist(flag, autoflag) {
    if (!flag) {
        flag = xyplay.pflag;
        //刷新换资源
        if (xyplay.play.off.autoflag === "1" && autoflag === true) {
            flag = getCookie("pflag");
            if (flag === "") {
                flag = 0;
            } else {
                flag++;
            }
            if (flag + 1 > xyplay.list_array.length) {
                flag = 0;
            }
            setCookie("pflag", flag, xyplay.timeout);
            xyplay.pflag = flag;
        }
    }

    if ("undefined" !== typeof xyplay.list_array[flag] && "undefined" !== typeof xyplay.list_array[flag].video) {
        $('#playlist').empty();
        xyplay.playlist_array = [];
        xyplay.namelist_array = [];
        var list = xyplay.list_array[flag].video;
        for (var i = 0, len = list.length; i < len; i++) {
            var array = list[i].split("$");
            //播放列表影片名过滤
            var pat = new RegExp(xyplay.play.match.video);
            if (!xyplay.play.video_match || !pat.test(array[0])) {
                xyplay.namelist_array.push(array[0]);
                xyplay.playlist_array.push(array[1]);

                if (i === Number(xyplay.part)) {
                    $('#playlist').append('<li class="click_work" type="list" num="' + i + '" style="' + xyplay.play.style.play_on + '">' + array[0] + '√</li>');
                } else {
                    $('#playlist').append('<li class="click_work" type="list" num="' + i + '">' + array[0] + '</li>');
                }
            }
        }

    }

}

//监控鼠标
function control() {

    //屏蔽右键
    $(document).ready(function() {
        $(document).bind("contextmenu", function(e) {
            return false;
        });
    });


    //列表 鼠标点击
    $(document).on('click', '.click_work', function() {
        var num = $(this).attr("num");
        var type = $(this).attr("type");
        //视频列表
        if (type === "list") {
            xyplay.part = Number(num);
            myplay(xyplay.playlist_array[xyplay.part]);
            $("#list").hide();
            replaylist();
            //if (xyplay.lswap) {$("#list").hide(); } else{replaylist();}
            //来源列表
        } else if (type === "flag") {
            xyplay.pflag = Number(num);
            reflaglist();
            replaylist(xyplay.pflag);
        }


    });

}

//时间更新
function timeUpdate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = "00" + date.getHours();
    hour = hour.substr(hour.length - 2);
    var minute = "00" + date.getMinutes();
    minute = minute.substr(minute.length - 2);
    var second = "00" + date.getSeconds();
    second = second.substr(second.length - 2);

    // $("#stats").html(year+"-"+month+"-"+day+" "+" "+hour+":"+minute+":"+second);

     $("#stats").html(hour + ":" + minute + ":" + second);
     setTimeout("timeUpdate()", 1000); 
}