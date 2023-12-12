var $ = jQuery.noConflict();

const head = {
	'menu_list' : [
		{
			'menu_title': 'Home',
			'menu_link' : '/option2/',
			'menu_class' : 'menu-item-home current-menu-item current_page_item',
			'menu_child' : []
		},
		{
			'menu_title': 'About',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
		{
			'menu_title': 'Services',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : [
				{
					'menu_title': 'General Dentistry',
					'menu_link' : '#',
					'menu_child' : []
				},
				{
					'menu_title': 'Implants',
					'menu_link' : '#',
					'menu_child' : []
				},
			]
		},
		{
			'menu_title': 'Patients',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
		{
			'menu_title': 'Contact',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
	]
};

const social = [
	{
		'icon' : 'assets/images/fb-icon.png',
		'link' : '#',
		'class' : 'fb-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/yelp-icon.png',
		'link' : '#',
		'class' : 'yelp-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/ig-icon.png',
		'link' : '#',
		'class' : 'ig-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/gg-icon.png',
		'link' : '#',
		'class' : 'gg-icon',
		'target' : '_blank',
	},
]

function header_data(head){
	if($('#menu-main-menu').length > 0){
		let menu_html = '';
		$.each(head.menu_list, function(i, item){
			menu_html += `<li id="menu-item-${i}" class="menu-item menu-item-type-post_type menu-item-object-pag ${item.menu_class ? item.menu_class : ''} ${item.menu_child.length > 0 ? 'menu-item-has-children submenu' : ''}">`;
			menu_html += `<a href="${item.menu_link}"><span>${item.menu_title}</span</a>`;
			if(item.menu_child.length > 0){
				menu_html += '<a class="menu-toggle" href="#" role="link" aria-label="Toggle submenu"></a>';
				menu_html += '<ul class="sub-menu">';
				$.each(item.menu_child,function(j, child_item){
					menu_html += `<li id="menu-item-${i}_${j}" class="menu-item menu-item-type-post_type menu-item-object-page ${child_item.menu_class ? child_item.menu_class : ''}">`;
					menu_html += `<a href="${child_item.menu_link}"><span>${child_item.menu_title}</span</a>`;
					menu_html += '</li>';
				});
				menu_html += '</ul>';
			}
			menu_html += '</li>';
		});
		$('#menu-main-menu').html(menu_html);
	}

	if(social.length > 0){
		let social_html = '';
		$.each(social, function(i, item){
			social_html += `<li class="${item.class}"><a href="${item.link}" target="${item.target}"><img src="${item.icon}"></a></li>`;
		});
		$('#Action_bar .social').html(social_html);
	}
}

$(window).ready(function () {
	header_data(head);
});