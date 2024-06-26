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
        $(".Wallpapers_icon").not(this).removeClass("onclick");
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
    $(".work_btn").hover(function(){
        $(this).find("img").attr("src", "img/task02-remove.png");
    }, function(){
        $(this).find("img").attr("src", "img/task-remove.png");
    });

    
    // 바탕화면 아이콘 더블클릭 이벤트
    $(".chrome_btn").on("dblclick", function(){
        $(".page_modal").css({
            opacity: 1,
            "z-index": 1
        })
    });
    
    $(".maximum").on("click", function(){
        
        $(".page_modal").css({
            width: "100%",
            height: "100%",
            top : "50%"
        });

    });

    $(".modal_exit").on("click", function(){
        $(".page_modal").css({
            opacity: 0,
            "z-index": -1
        })
    });

    $(".netflix_btn").on("dblclick", function(){
        $(location).attr("href", "netflix.html")
    });

    $(".tomtoms_btn").on("dblclick", function(){
        $(location).attr("href", "TomToms.html")
    });

    $(".touslesjours_btn").on("dblclick", function(){
        $(location).attr("href", "touslesjours.html")
    });

    $(".escape_btn").on("dblclick", function(){
        $(location).attr("href", "http://kinn1.dothome.co.kr/index.html")
    });


    // lnb 달력 및 시계 구현
    var today = new Date;
    var todayDay = today.getDate();
    var todayMonth = today.getMonth() + 1;
    var todayYear = today.getFullYear();
    var hour = today.getHours();
    var hour2 = today.getHours() - 12;
    var minutes = today.getMinutes();
    

    if (hour <= 12) {
        $(".timeAndDate").find("p").text("오전 " + hour + ":" + minutes.toString().padStart(2,'0'));
    } else {
        $(".timeAndDate").find("p").text("오후 " + hour2 + ":" + minutes.toString().padStart(2,'0'));
    }
    
    $(".timeAndDate").find("span").text(todayYear + "-" + todayMonth.toString().padStart(2,'0') + "-" + todayDay.toString().padStart(2,'0'));


    /* more option onclick */
    var moreOptionLeft = $(".more_option").offset().left + 15;
    
    $(".more_wrap").css({
        left: moreOptionLeft,
        transform: "translatex(-50%)"
    });
    $(".more_wrap").hide();
    
    $(".more_option").on("click", function(){
        $(".more_wrap").toggle();
    });
    
    $(".open_page ul li").each(function(){
        if ( $(this).hasClass("active_page") ) {
            $(this).removeClass("hover_light");
        };
    })

    
    
    
    


});