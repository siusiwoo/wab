$(".menu>li").mouseover(function(){
    $(".sub-menu").show();
})
$(".menu>li").mouseleave(function(){
    $(".sub-menu").hide();
})
$(".gallry").hide()
$(".gallry-btn").click(function(){
    $(".gallry").show();
    $(".notice").hide();
})
$(".notice-btn").click(function(){
    $(".gallry").hide();
    $(".notice").show();
})

$(".open-pop").click(function(){
  
    $(".pop").show();
})
$(".close-pop").click(function(){
    $(".pop").hide();
  
})