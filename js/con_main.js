$(document).ready( function(){
    $('.tapTit').on('click' , function(){
        $('.tapTit').removeClass('active');
        $(this).addClass('active');
        $('.slideItem').fadeOut();
        $(this).siblings().fadeIn();
    });
    
    $('.selectMenu li').first().find('.tapTit').trigger('click');
});