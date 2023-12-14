
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
		$('.social-list').html(social_html);
	}
})