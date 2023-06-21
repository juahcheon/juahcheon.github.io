$(function(){

    // 바탕화면 아이콘 테두리
    $(".Wallpapers_icon").on("click", function(){
        $(this).css("background-color", "#80b9ee72");
        $(".Wallpapers_icon").not(this).css("background-color", "transparent");
    });


    $(".bg").on("click",function(){
        $(".Wallpapers_icon").css("background-color", "transparent");
    });

    

    

    





});