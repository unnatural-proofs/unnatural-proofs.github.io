$( "#white_background" ).on( "click", function() {
    $("body").first().css("background-color","#fcfcfc");
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$( "#sepia_background" ).on( "click", function() {
    $("body").first().css("background-color","#f8f1e3");
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$( "#gray_background" ).on( "click", function() {
    $("body").first().css("background-color","#dcdcdc");
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});