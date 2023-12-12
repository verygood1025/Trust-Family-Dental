var $ = jQuery.noConflict();

function check_touch() {
    if ("ontouchstart" in document.documentElement) {
        $('body').removeClass("no_touch");
    } else {
        $('body').addClass("no_touch");
    }
}

function startup_site() {
    $('.apm-col:not(.col-submit, .col-agree) .wpcf7-form-control-wrap').on('click', function(event) {
        event.preventDefault();
        $(this).find('.wpcf7-not-valid-tip').remove();
        $('.wpcf7-response-output').hide();
    });

    var y = new Date();
    $('year').html(y.getFullYear());


    if ($(window).scrollTop() > 0) {
        $('body:not(.header-open) #Top_bar').addClass('is-sticky');
        $('#back_to_top').addClass('sticky');
        $('body').addClass('is-sticky');
    } else {
        $('body:not(.header-open) #Top_bar').removeClass("is-sticky");
        $('#back_to_top').removeClass("sticky");
        $('body').removeClass("is-sticky");
    }

    $('.error404 .title').html('Page Not Found');
    $('.error404 .breadcrumbs li:last-child').html('404 - Page Not Found');


    $('body:not(.home) #Header').addClass('header-internal');
}

function container(){
    var wh = $(window).height() - ($('#Footer').outerHeight() + $('#Header_wrapper').outerHeight());
    $('body').css('--ct-h',wh+'px');
}

$(window).ready(function () {
    check_touch();
    startup_site();
    container();
});

$(window).on('load',function () {
    $('.kenw-loadding').hide();
    new WOW().init(); 
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('body:not(.header-open) #Top_bar').addClass('is-sticky');
        $('#back_to_top').addClass('sticky');
        $('body').addClass('is-sticky');
    } else {
        $('body:not(.header-open) #Top_bar').removeClass("is-sticky");
        $('#back_to_top').removeClass("sticky");
        $('body').removeClass("is-sticky");
    }
});

$(window).on('resize', function () {
    check_touch();
    container();
});

//some Function
window.onhashchange = function() {
    // if($('body.home').length == 0){
    //     location.reload();
    // }
}

//hook class contact form 7
document.addEventListener( 'wpcf7mailsent', function( event ) {
    $('.wpcf7-response-output').remove();
    var booking_id = $('input[name=booking_id]').val();
    booking_id++;
    $('input[name=booking_id]').val(booking_id);
    window.open('/thank-you', '_self');
}, false );
document.addEventListener( 'wpcf7invalid', function( event ) {
    $('.wpcf7-response-output').show();
    $('.wpcf7-response-output').addClass('alert alert-danger');
}, false );
document.addEventListener( 'wpcf7spam', function( event ) {
    $('.wpcf7-response-output').show();
    $('.wpcf7-response-output').addClass('alert alert-warning');
}, false );
document.addEventListener( 'wpcf7mailfailed', function( event ) {
    $('.wpcf7-response-output').show();
    $('.wpcf7-response-output').addClass('alert alert-warning');
}, false );