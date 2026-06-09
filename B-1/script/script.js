$(".menu li").mouseover(function(){
    $(".sub-menu").show();
})
$(".menu li").mouseleave(function(){
    $(".sub-menu").hide();
})
$(".gallry").hide();
$(".notice-btn").click(function(){
    $(".notice").show();
    $(".gallry").hide();
})
$(".gallry-btn").click(function(){
    $(".notice").hide();
    $(".gallry").show();
})

$(".open-pop").click(function(){
    $(".pop").show();
})
$(".close-pop").click(function(){
    $(".pop").hide();
})