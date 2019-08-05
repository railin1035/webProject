$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        controls: false,
        autoControls: false,
        stopAutoOnClick: false,
        pager: true,
        speed: 800,
        slideWidth: 1920,
    });
    
    $('.subslider').bxSlider({
        auto: false,
        autoControls: true,
        stopAutoOnClick: false,
        pager: false,
        minSlides: 3,
        maxSlides: 3,
        speed: 1200,
        slideWidth: 324,
        slideMargin: 144,
        controls:true,
        
    });
    
    $('#movie .play img').click(movie)
    function movie(){
        $('header #playing').fadeIn()
    }
    $('header #playing .close').click(close)
    function close(){
        var vid = $('video').get(0)
        vid.pause()
        $('header #playing').hide()
        
    }
    
    
   /* $('.selectMenu li').click();
    
    function menu() {
        var menu = $(this).attr('class');
        if()
    }*/
});
       
