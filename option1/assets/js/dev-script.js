fixed_social2 = [
    {
        'icon' : 'assets/images/phone-icon.png',
        'link' : '#',
        'title' : 'Call',
        'class' : 'phone-icon show-all',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/fb-icon.png',
        'link' : '#',
        'title' : 'Facebook',
        'class' : 'fb-icon show-mob',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/yelp-icon.png',
        'link' : '#',
        'title' : 'Yelp',
        'class' : 'yelp-icon show-mob',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/ig-icon.png',
        'link' : '#',
        'title' : 'Instagram',
        'class' : 'ig-icon show-mob',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/gg-icon.png',
        'link' : '#',
        'title' : 'Google',
        'class' : 'gg-icon show-mob',
        'target' : '_blank',
    },
]

$(window).ready(function(){
	if(fixed_social2.length > 0){
		let social_html = '';
		$.each(fixed_social2, function(i, item){
			social_html += `<li class="${item.class}"><a href="${item.link}" target="${item.target}"><img src="${item.icon}"></a></li>`;
		});
		$('.fixed-socials ul').html(social_html);
	}
})
