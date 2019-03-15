$('.info-container > a').click( function(){
    if ( $(this).parent('section').hasClass('open') ) {
        $(this).parent('section').removeClass('open');
    } else {
        $('.info-container.open').removeClass('open');
        $(this).parent('section').addClass('open');
    }
});