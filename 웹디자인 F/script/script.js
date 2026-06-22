$(".menu > li").mouseover(function(){
    $(this).children(".sub-menu").show();
})
$(".menu > li").mouseleave(function(){
    $(this).children(".sub-menu").hide();
})

let cnt = 0;
setInterval(function(){
    if(cnt<2){
        cnt++;
    }else{
        cnt=0;
    }
    $(".slide li").eq(cnt).fadeIn();
    $(".slide li").eq(cnt).siblings().fadeOut();
},3000)
$(".gallery").hide();

$(".notice-btn").click(function(){
    $(".notice").show();
    $(".gallery").hide();
})

$(".gallery-btn").click(function(){
    $(".gallery").show();
    $(".notice").hide();
})

$(".open-pop").click(function(){
    $(".pop").show();
})

$(".close-pop").click(function(){
    $(".pop").hide();
})