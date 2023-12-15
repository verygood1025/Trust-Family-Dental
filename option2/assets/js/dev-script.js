$(window).ready(function(){
	if(fixed_social.length > 0){
		let social_html = '';
		$.each(fixed_social, function(i, item){
			social_html += `<li class="${item.class}"><a href="${item.link}" target="${item.target}"><img src="${item.icon}"><span>${item.title}</span></a></li>`;
		});
		$('.fixed-socials ul').html(social_html);
	}

	if(social.length > 0){
		let social_html = '';
		$.each(social, function(i, item){
			social_html += `<li class="${item.class}"><a href="${item.link}" target="${item.target}"><img src="${item.icon}"></a></li>`;
		});
		$('.social-list, #Side_slide .social').html(social_html);
	}

	if($('#Side_slide .social').length > 0){
        let hour_html = `<div class="business-hours">
            <h4>Business Hours</h4>
            <p>Monday - Saturday<br>8:00 am - 6:00 pm</p>
            <p>Sunday: Closed </p>
        </div>`;
        $(hour_html).insertBefore('#Side_slide .social');
    }

    var social_lenght = $('.fixed-socials li.show-mob, .fixed-socials li.show-all').length;
    $('.fixed-socials').css('--item',social_lenght);
})