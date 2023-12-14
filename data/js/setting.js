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
    book_hq();
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

function toDate(dateStr) {
    var parts = dateStr.split("/");
    return new Date(parts[2], parts[0] - 1, parts[1]).getTime();
}

function toTime(timeSrt){
    var date = new Date(timeSrt);
    date.setDate(date.getDate() + 1);
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
    if(d < 10){
        d = '0'+ d;
    }
    if(m < 10){
        m = '0'+ m;
    }
    return  m + '/' + d + '/' + y;
}

function book_hq(){
    $(".fake-select input").attr('readonly','readonly');
    //date picker
    $(".date-picker").datetimepicker({
        timepicker:false,
        minDate:0,
        onGenerate:function( ct ){
            jQuery(this).find('.xdsoft_date.xdsoft_day_of_week0').addClass('xdsoft_disabled');
        },
        format:'m/d/Y'
    });

    if($("#datepicker").val() == ''){
        $("#timepicker").attr('disabled','');
    }

    $("#datepicker").on('change', function(event) {
        /* Act on the event */
        $("#timepicker").removeAttr('disabled');
        valu = $(this).val();
        if(valu == ''){
            $("#timepicker").attr('disabled','');
        }

        var oldate = new Date();
        var m = oldate.getMonth()+1;
        var d = oldate.getDate();
        var y = oldate.getFullYear();
        var oldtodate = toDate(m+'/'+d+'/'+y);

        var date = new Date();
        var m2 = date.getMonth()+1;
        var d2 = date.getDate()+1;
        var y2 = date.getFullYear();
        var todate = toDate(m2+'/'+d2+'/'+y2);
        var thisdate = toDate($(this).val());

        var inMinutes = (oldate.getMinutes()<10?'0':'')+ date.getMinutes();
        var intime = oldate.getHours()+''+inMinutes;
        var dates = new Date(thisdate).getDay();

        if(thisdate < oldtodate){
            $(this).val('');
            $("#timepicker").val('');
            $("#timepicker").attr('disabled','');
        }

        if(todate > thisdate){
            if(dates == 6){
                $('#timepicker-list p').each(function(index, el) {
                    if(parseInt($(this).attr('data-time'), 10) <= parseInt(intime, 10) || parseInt($(this).attr('data-time'), 10) >= 1730){
                        $(this).addClass('disable');
                    }else{
                        $(this).removeClass('disable');
                    }
                });
            } else if(dates == 0){
                $('#timepicker-list p').each(function(index, el) {
                    if(parseInt($(this).attr('data-time'), 10) <= parseInt(intime, 10) || parseInt($(this).attr('data-time'), 10) >= 1700 || parseInt($(this).attr('data-time'), 10) < 1030){
                        $(this).addClass('disable');
                    }else{
                        $(this).removeClass('disable');
                    }
                });
            } else {
                $('#timepicker-list p').each(function(index, el) {
                    if(parseInt($(this).attr('data-time'), 10) <= parseInt(intime, 10)){
                        $(this).addClass('disable');
                    }else{
                        $(this).removeClass('disable');
                    }
                });
            }
        }else{
            if(dates == 6){
                $('#timepicker-list p').each(function(index, el) {
                    if(parseInt($(this).attr('data-time'), 10) >= 1730){
                        $(this).addClass('disable');
                    }else{
                        $(this).removeClass('disable');
                    }   
                });
            } else if(dates == 0){
                $('#timepicker-list p').each(function(index, el) {
                    if(parseInt($(this).attr('data-time'), 10) >= 1700 || parseInt($(this).attr('data-time'), 10) < 1030){
                        $(this).addClass('disable');
                    }else{
                        $(this).removeClass('disable');
                    }
                }); 
            } else {
                $('#timepicker-list p').removeClass('disable');
            }
        }
    });

    $("#timepicker").on('focus', function(event) {
        event.preventDefault();
        $(this).removeAttr('disabled');
        $('#timepicker-list').addClass('active');
    });

    $("#timepicker-list p").on('click', function(event) {
        event.preventDefault();
        $("#timepicker-list p").removeClass('checked');
        $(this).addClass('checked');
        $('#timepicker').val($(this).html());
        $('#timepicker-list').removeClass('active');
    });

    $(".col-service input").on('focus', function(event) {
        event.preventDefault();
        $('#service-list').addClass('active');
    });

    $("#service-list p").on('click', function(event) {
        event.preventDefault();
        $("#service-list p").removeClass('checked');
        $(this).addClass('checked');
        $('.col-service input').val($(this).attr('data-sv'));
        $('#service-list').removeClass('active');
    });

    $(document).on('click', function (event) {
      if (!$(event.target).closest('#timepicker').length && !$(event.target).closest('#timepicker-list').length) {
        $('#timepicker-list').removeClass('active');
      }
      if (!$(event.target).closest('.col-service').length && !$(event.target).closest('#service-list').length) {
        $('#service-list').removeClass('active');
      }
    });

    // $('.apm-col').on('click', function(){
    //     $(this).find('.wpcf7-not-valid-tip').remove();
    // });
}

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