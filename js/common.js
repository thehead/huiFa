//搜索按钮显示隐藏
$(function () {
    $('#mSerch').on('click',function () {
        $('#serchInput').show().focus();
    });
    $('#serchInput').blur(function () {
        $(this).hide().val('');
    })
});

function resizeLb() {
    //重新算高度 赋值给swiper
    var height=$('.img').eq(0).height();
    $('.swiper-container').css('height',height);

    //进度点
    $('.pagination').css('top',height-30);
    console.log(height);
}
//        $(function () {
//            resizeLb();
//
//        });
window.onload = function () {
    resizeLb();
};
window.onresize=function () {
    resizeLb();
};


if(parseFloat(document.body.clientWidth)< 930){
    //导航效果
    var btnShow=false;
    $('.navBtn').on('click',function (e) {
        if(btnShow){
            $('.navList').removeClass('active');
            btnShow=false;
            e.stopPropagation()
        }else {
            $('.navList').addClass('active');
//                    $('.navList').css('overflow','auto');
            btnShow=true;
            e.stopPropagation();
        }
    });

    $('ul .navList li').on('click',function (e) {
        e.stopPropagation()
    });

//            $('body').on('click',function () {
//                $('.navList').removeClass('active');
//                btnShow=false;
//            })


    window.onload = function () {
        resizeLb();
        point();
    };
}