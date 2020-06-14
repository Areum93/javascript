

$(function(){
    $('.menu01').mouseenter(function(){
        $(".sub-navi").stop().slideDown();
    });
    $('.menu01').mouseleave(function(){
        $(".sub-navi").stop().slideUp();
    });
});