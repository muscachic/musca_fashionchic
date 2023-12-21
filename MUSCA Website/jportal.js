$(".card").on("click", function(){
    $(".detail").addClass("active");
});

$(".fi-xwluxl-times-wide").on("click", function(){
    $(".detail").removeClass("active");
});

$(".menu-bar").on("click", function(){
    $(".sidebar").addClass("active");
});

$(".logo").on("click", function(){
    $(".detail").removeClass("active");
});
