var ishamburgermenu = false;
const currentYear = new Date().getFullYear();

var linknavColor="#E74C3C";

function visit(url, param, blank) {
    if (param == null) {
        if (!blank) {
            location.href = url;
        } else {
            window.open(url);
        }
    } else {
        if (!blank) {
            location.href = url + "?" + param;
        } else {
            window.open(url + "?" + param);
        }

    }

}

$(document).ready(function () {
    var el_nav = $(".nav-links > li:not(:first-child)");
    if(ismobile()){
       el_nav.hide()
    }

    var waypoints = []
    $('.waypoint').each(function (index, value) {

        var waypoint = new Waypoint({
            element: value,
            handler: function () {
                switch (this.element.id) {
                    case "product":

                        break;
                    default:
                        break;
                }


            },
            offset: '50%'
        });
        waypoints.push(waypoint)
    });

    $("#curyear").text(currentYear)

    $(".nav-links li a").hover(
        function() {
            // Mouse enter: Change background color
            $(this).css("color", "#E74C3C");
        }, 
        function() {
            // Mouse leave: Reset background color
            $(this).css("color", linknavColor);
        }
    );
});



$(window).scroll(function () {
    var headerNav = $("#headerNav");
    var linkNav = $(".nav-links li a ");
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
        headerNav.css({
            "position": "fixed",
            "top": "0",
            "background-color": "#333"
        });
        linknavColor = "#cccccc";
        linkNav.css({
            "color": linknavColor
        })
    } else {
        headerNav.css({
            "position": "relative",
            "background-color": "transparent"
        });
        linknavColor = "#333";
        linkNav.css({
            "color": linknavColor
        })
    }
});

function hamburgermenu(){
    var el_nav = $(".nav-links > li:not(:first-child)");
    if(ishamburgermenu){
        el_nav.hide();
        ishamburgermenu=false;
    }else{
        ishamburgermenu=true;
        el_nav.show();
                var distance = 8;
        var i = 0;
        el_nav.each(function(){
            if(i>0){ distance = distance +40; }
            $(this).css({
                "padding":"8px",
                "text-align":"center",
                "position":"absolute",
                "display":"block",
                "left":"0",
                "margin-top":distance,
                "width":"100%",
                "background-color": "#000000",
                "border": "3px solid #000000",
                "color":"#fff"
            })
            i++;
        });
    }
}



function scrollToElement(el) {

    if(ismobile()){
        var el_nav = $(".nav-links > li:not(:first-child)")
        el_nav.hide()
        ishamburgermenu = false
    }


    $("html, body").animate({
        scrollTop: $("#" + el).offset().top - 80
    }, {
        duration: 500,
        easing: "swing" 
    });
}


function ismobile(){
    return window.innerWidth < 1000;
}
