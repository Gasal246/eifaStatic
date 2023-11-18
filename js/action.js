$(document).ready(function(){

    // SCROLLING ACTIONS
    $("#btnScrollToTop").click(function(){
        $("html, body").animate({
            scrollTop: $(".header").offset().top
        }, 500)
    })
    $("#adminbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#row6").offset().top
        }, 500)
    })
    $(".efteambtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#row6").offset().top
        }, 500)
    })
    $("#aboutbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#row2").offset().top
        }, 500)
    })
    $(".mssnvssnbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#missionrow").offset().top
        }, 500)
    })
    $(".coachesbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#coachesrow").offset().top
        }, 500)
    })
    $(".adtrainingbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#adtrainingrow").offset().top
        }, 500)
    })
    $(".fdmessagebtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#fdmessagerow").offset().top
        }, 500)
    })
    $(".regbtn").click(function(){
        $("html, body").animate({
            scrollTop: $("#row3").offset().top
        }, 500)
    })

    // NAVBAR SPAN ICONS HOVER EFECT
    $(".homebtn").mouseenter(function(){
        $(".homeic").css({"color":"rgb(255, 217, 0)"})
    })
    $(".homebtn").mouseleave(function(){
        $(".homeic").css({"color":"#ffe8e8"})
    })
    $(".explorebtn").mouseenter(function(){
        $(".exploreic").css({"color":"rgb(255, 217, 0)"})
    })
    $(".explorebtn").mouseleave(function(){
        $(".exploreic").css({"color":"#ffe8e8"})
    })
    $(".gallbtn").mouseenter(function(){
        $(".gallic").css({"color":"rgb(255, 217, 0)"})
    })
    $(".gallbtn").mouseleave(function(){
        $(".gallic").css({"color":"#ffe8e8"})
    })
    $("#aboutbtn").mouseenter(function(){
        $(".aboutic").css({"color":"rgb(255, 217, 0)"})
    })
    $("#aboutbtn").mouseleave(function(){
        $(".aboutic").css({"color":"#ffe8e8"})
    })
    $("#adminbtn").mouseenter(function(){
        $(".adminic").css({"color":"rgb(255, 217, 0)"})
    })
    $("#adminbtn").mouseleave(function(){
        $(".adminic").css({"color":"#ffe8e8"})
    })
    $("#contactusbtn").mouseenter(function(){
        $(".contactic").css({"color":"rgb(255, 217, 0)"})
    })
    $("#contactusbtn").mouseleave(function(){
        $(".contactic").css({"color":"#ffe8e8"})
    })

    // FOUNDER BUTTONS
    $(".founderbtn").click(function(){
        $(".founderpara").slideToggle(500)
        $(".founderbtnup").toggle()
        $(".founderbtn").toggle()
    })
    $(".founderbtnup").click(function(){
        $(".founderpara").slideToggle(500)
        $(".founderbtnup").toggle()
        $(".founderbtn").toggle()
    })
    $(".directorbtn").click(function(){
        $(".directorpara").slideToggle(500)
        $(".directorbtnup").toggle()
        $(".directorbtn").toggle()
    })
    $(".directorbtnup").click(function(){
        $(".directorpara").slideToggle(500)
        $(".directorbtnup").toggle()
        $(".directorbtn").toggle()
    })
    
    // NAVBAR MENU-ICONBARS ANIMATION
    $(".menuicons").click(function(){
        $(".iconx").toggle(300)
        $(".iconbars").toggle(300)
    })

    // SIDEBAR MENU-ICONBARS ANIMATION
    $(".sidebars").click(function(){
        $(".sdiconx").toggle(300)
        $(".sdiconbars").toggle(300)
        $(".sidebaricons").slideToggle(300)
    })

    
})
