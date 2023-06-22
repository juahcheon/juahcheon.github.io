$(function(){

    // 바탕화면 아이콘 테두리
    $(".Wallpapers_icon").on("click", function(){
        $(this).css({
            "background-color" : "#80b9ee72",
            "border" : "1px solid #add7ff7d"
        });
        $(this).addClass("onclick");
        $(".Wallpapers_icon").not(this).css({
            "background-color" : "transparent",
            "border" : "none"
    });
    });

    $(".bg").on("click",function(){
        $(".Wallpapers_icon").css({
            "background-color" : "transparent",
            "border" : "none"
        });
        $(".Wallpapers_icon").removeClass("onclick");
    });


    // 바탕화면 아이콘 hover효과
    $(".Wallpapers_icon").hover(function(){
        $(this).css({
            "background-color" : "#559de464",
            "border" : "1px solid #add7ff7d",
            "width" : "71px"
        });
    }, function(){
        if( $(this).hasClass("onclick") ) {
            $(this).css("background-color", "#80b9ee72")
        } else {
            $(this).css({
                "background-color" : "transparent",
                "border" : "none"
            })
        }
    });
    

    // 바탕화면 lnb 아이콘 hover
    function pick() {
        const colorThief = new ColorThief();
        const color = colorThief.getColor($('.bgimg')[0]);
        document.querySelector('#c1').style.backgroundColor='rgb('+color+')';
        var colors = colorThief.getPalette($('.bgimg')[0], 10);
        console.log(color);
        for(var i=0; i<colors.length; i++) {
            $("#c1").after($('<div style="display:inline-block; width:100px; height:100px; border-radius:50%;">').css("background-color", "rgb("+colors[i]+")"));
        }
    }
    
    $(".gnb_btn").on("click", pick());

    





});