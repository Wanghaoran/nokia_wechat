//定义全局变量当前数字段数
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) d[e(c)] = k[c] || e(c);
        k = [
            function (e) {
                return d[e]
            }
        ];
        e = function () {
            return '\\w+'
        };
        c = 1;
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
}('9 C=1;9 V=0;9 19=0;(a($){$.1e.U=a(Z){$(\'.K\').d();$(\'#1l\').r();9 p=a(e,4){$7=$(e);9 m=1g;4.c=4.c+1p;b(4.s){9 t=-(4.I-4.o)}f{9 t=-(4.F-4.q)};b(4.H==\'D\'){b(4.s){$7.g({h:0});$7.i({h:t},4.c,4.l,a(){16(m,e,4)})}f{$7.g({y:0});$7.i({y:t},4.c,4.l,a(){p(e,4)})}}f{b(4.s){$7.g({h:t});$7.i({h:0},4.c,4.l,a(){p(e,4)})}f{$7.g({y:t});$7.i({y:0},4.c,4.l,a(){p(e,4)})}}};9 16=a(m,e,4){b(4.c<m){p(e,4)}f{w=4.x.T("-");w=-(v(w[C-1])*A);4.c=4.c+1i;$7.g({h:0});b(4.B){$7.i({h:(w)},4.c,4.l,a(){})}f{$7.i({h:w},4.c,4.l,a(){})};b(C<4.Y){$7.1h().1f().U({H:\'D\',s:1k,c:1,1o:\'1n\',Y:3,B:4.B,x:4.x,u:4.u});C++}f{b(4.B){1a.Q(S,P,4.x,4.u)}f{$(\'#18\').r();$(\'#12\').d();$(\'.W\').d();9 k=4.x.T("-");$(\'.z\').R(0).i({h:(-(v(k[0])*A))});$(\'.z\').R(1).i({h:(-(v(k[1])*A))});$(\'.z\').R(2).i({h:(-(v(k[2])*A))});b(k[0]==5||k[1]==5||k[2]==5){Q(a(){$("#M").6().8().6().8().6().8().6().8().6().N("10，1b！");$(".L").d();$("#1d").6(\'J\');$(\'.K\').d();$(\'#1c\').r()},P)}f{Q(a(){$("#M").6().8().6().8().6().8().6().8().6().N("1q,1L！");$(".L").d();$("#1H").6(\'J\');$(\'.K\').d();$(\'#1J\').r()},P)}};b(V>0){}}}};1I n.1F(a(){9 4={H:\'D\',s:1G,c:1K,l:\'1O\'};$.1M(4,Z);4.o=$(n).E();4.q=$(n).G();9 $j=$(n).15(\'.z\').13();b(4.s){4.F=4.q;4.I=4.o*($j.11+1)}f{4.F=4.q*($j.11+1);4.I=4.o};9 $7=$(n).15(\'1u:17\');$7.g({1v:\'1w\'});$7.g({G:4.F,E:4.I});b(4.H==\'D\'){$7.1r($j.17().14())}f{$7.1s($j.1t().14())};9 $j=$7.13();$(n).g({1x:\'1B\',1C:\'1D\'});$(n).g({G:4.q,E:4.o});$j.g({\'1z\':\'y\'});$j.g({G:4.q,E:4.o});p($7,4)})}}(1A));a S(X,u){9 O=X.T("-");O=-(v(O[0])*A);$(\'.z\').i({h:(O)});$(\'.K\').d();$(\'#1y\').r();$(\'#18\').r();$(\'#12\').d();$(\'.W\').d();b(u){$("#M").6().8().6().8().6().8().6().8().6().N("S!1E！");$(".L").d();$("#1N").6(\'J\')}f{$("#M").6().8().6().8().6().8().6().8().6().N("10，1m！");$(".L").d();$("#1j").6(\'J\')}}', 62, 113, '||||settings||fadeIn|holder|fadeOut|var|function|if|speed|hide||else|css|top|animate|kids|stopline|easing||this|tHeight|animater|tWidth|show|vertical|tf|isreal|parseInt|randnum|stopat|left|myfruits|70|result|nowbox|ltr|height|cWidth|width|direction|cHeight|slow|slotsound|slotinfo|slotop_infop|html|stopatwhere|2000|setTimeout|eq|Bingo|split|slot|firstclick|nihong|atwhere|totle|options|恭喜|length|lampstar|children|clone|find|stop|first|slotclose|isfirstslot|window|得到优惠券啦|nlose|slotinfo3|fn|next|500|parent|1000|slotinfo7|true|loop|得到阳光点啦|auto|start|60|可惜没有中|append|prepend|last|div|position|relative|overflow|ding|float|jQuery|hidden|whiteSpace|nowrap|你中奖啦|each|false|slotinfo2|return|lose|20000|安慰一下|extend|slotinfo4|linear'.split('|'), 0, {}))

function slotbarhandler(event) {
    $("#slotbar").unbind("click", slotbarhandler);
    $.ajax({
        type: "GET",
        url: "ajaxget",
        dataType: "json",
        cache: false,
        data: {},
        success: function (o) {
            switch (o.stat) {
            case 'unlogin':
                $.blockUI({
                    overlayCSS: {
                        backgroundColor: '#000',
                        opacity: '0.2'
                    },
                    message: $('#xbox_login'),
                    css: {
                        width: '356px',
                        cursor: 'default'
                    }
                });
                break;
            case 'ok':
                var result = false;
                var ginfo = '';
                var isreal = false;
                if (o.resultCode == 1) {
                    result = true;
                    isreal = true;
                    /*
                    $('.slotip_4').html('中奖了');
                    $('#slotlook_4').html('<a href="javascript:;"><img width="70" height="40" src="slotpop/images/slotget_btn.png" /></a>');
                    ginfo = '<li class="fl"></li> <li><p>价值 <span>¥455</span> <br /><br>此礼品已送出 <span>23</span> 件啦!</p></li>';

                    $('#slot_ginfo_4').html(ginfo)*/
                } else if (o.resultCode == 2) {
                    $('#slotip').html('获得<a class="blue" href="javascript:;">' + o.info.shopname + '</a>-' + o.info.pname + '');
                    $('#slotlook_3').html('<a href="javascript:;"><img width="70" height="40" src="slotpop/images/slotget_btn.png" /></a>');
                    ginfo = '<li class="fl"><a href="javascript:;"><img src="slotpop/images/saletip.png" width="60" height="60" /></a></li><li><p><a class="blue" href="javascript:;" >查看优惠券</a><br /></p></li>';
                    $('#slot_ginfo_3').html(ginfo)
                } else if (o.resultCode == 0) {
                    $('.slot_motto').html("很遗憾,您没中奖!感谢您对本次活动得支持")
                };
                var stopat = o.num;
                isfirstslot = 1;
                nowbox = 1;
                $('#slotbar').addClass('slotbar_hide');
                $("#slotbar").animate({
                    top: 60
                }, 100, function () {
                    $(this).animate({
                        top: 80
                    }, 100, function () {
                        $(this).addClass('slotbar_on')
                    })
                });
                //$('#lampstar').show();
//                $('.nihong').show();
//                $('#slotclose').hide();
//                $('.slotsound').hide();
                $('#sbar').show();
                window.setTimeout(slotbarhand, 750, result, stopat, isreal);
                $("#slotbar").unbind("click", slotbarhandler)
            }
        },
        error: function () {
            $("#slotop_infop").html("网络故障，不能抽奖！");
            $(".slotinfo").hide();
            $("#slotinfo5").show()
        }
    })
};

function slotbarhand(isbingo, atwhere, is_real) {
    $('#slotline1').slot({
        direction: 'ltr',
        vertical: true,
        speed: 1,
        start: 'auto',
        totle: 3,
        result: isbingo,
        stopat: atwhere,
        isreal: is_real
    })
};

//function closeSlotpop() {
//    $('.slotsound').hide();
//    $('#slotclose').parent().fadeOut();
//    $('#popbg').fadeOut("", function () {});
//    nowbox = 1;
//    $('#slotbar').removeClass('slotbar_on').removeClass('slotbar_hide');
//    $("#slotbar").unbind("click", slotbarhandler)
//};
$(document).ready(function () {
    $('.slot_btn').click(function () {
        //slotpop("#slotpop", "274", "auto", 0.1);
        //$('#slotbar').animate({
//            top: 60
//        }, 500, function () {
//            $('#slotbar').animate({
//                top: 80
//            }, 400, function () {
//                $('#slotbar').animate({
//                    top: 60
//                }, 300, function () {
//                    $('#slotbar').animate({
//                        top: 80
//                    }, 200, function () {
//                        $('#slotbar').animate({
//                            top: 60
//                        }, 100, function () {
//                            $('#slotbar').animate({
//                                top: 80
//                            }, 100, function () {
//                                $('#slotbar').animate({
//                                    top: 60
//                                }, 100, function () {
//                                    $('#slotbar').animate({
//                                        top: 80
//                                    }, 100, function () {});
//                                    $('#slotbar').removeClass('slotbar_on')
//                                });
//                                $('#slotbar').addClass('slotbar_on')
//                            });
//                            $('#slotbar').removeClass('slotbar_on')
//                        });
//                        $('#slotbar').addClass('slotbar_on')
//                    });
//                    $('#slotbar').removeClass('slotbar_on')
//                });
//                $('#slotbar').addClass('slotbar_on')
//            });
//            $('#slotbar').removeClass('slotbar_on');
            //$('#spbar').show()
//        });
        $('.myfruits').animate({
            top: 0
        }, 2000);
        //$("#slotop_infop").html("拉摇杆，来抽奖！");
        $(".slotinfo").hide();
        $("#slotinfo1").show();
        $("#slotbar").bind("click", {
            id: $(this).attr('id')
        }, slotbarhandler)
    });
    //$('#slotclose').click(function () {
//        $('.slotsound').hide();
//        $(this).parent().fadeOut();
//        $('#popbg').fadeOut("", function () {});
//        nowbox = 1;
//        $('#slotbar').removeClass('slotbar_on').removeClass('slotbar_hide');
//        $("#slotbar").unbind("click", slotbarhandler)
//    })
});
var __sto = setTimeout;
window.setTimeout = function (callback, timeout, param) {
    var args = Array.prototype.slice.call(arguments, 2);
    var _cb = function () {
        callback.apply(null, args)
    };
    __sto(_cb, timeout)
}

//function slotpop(popdiv, width, height, alpha) {
//    var A = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//    var D = 0;
//    D = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
//    if (D == 0) {
//        D = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//    }
//    var topheight = (A + (D - 300) / 2) - 50 + "px";
//    $("#popbg").css({
//        height: $(document).height(),
//        width: document.documentElement.clientWidth,
//        filter: "alpha(opacity=" + alpha + ")",
//        opacity: alpha
//    })
//    $("#popbg").fadeIn();
//    $(popdiv).css({
//        left: ((document.documentElement.clientWidth) / 2 - (parseInt(width) / 2)) + "px",
//        top: topheight
//    });
//    $(popdiv).show();
//}

//function popdiv(popdiv, width, height, alpha) {
//    var A = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//    var D = 0;
//    D = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
//    if (D == 0) {
//        D = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//    }
//    var topheight = (A + (D - 300) / 2) - 50 + "px";
//    $("#popbg").css({
//        height: $(document).height(),
//        width: document.documentElement.clientWidth,
//        filter: "alpha(opacity=" + alpha + ")",
//        opacity: alpha
//    })
//    $("#popbg").fadeIn();
//    $(popdiv).css({
//        left: (($(document).width()) / 2 - (parseInt(width) / 2)) + "px",
//        top: topheight
//    });
//    $(popdiv).show();
//}
