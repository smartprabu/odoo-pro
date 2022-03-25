odoo.define('check_website_responsiveness.responsive_checker', function (require) {
	'use strict';

	var core = require('web.core');
	var websiteNavbarData = require('website.navbar');

	var websiteResponsiveChecker = websiteNavbarData.WebsiteNavbarActionWidget.extend({
		selector: '#responsive-menu',
		start: function () {
			var self = this;
			$(window).resize(() => {
				self.resize_to_viewport();
			});
			$('#screencheck_url').focus();
			self.resize_to_viewport()

			$('#scereenwidth').html(screen_width + ' x ' + screen_height + ' [ ' + screen_type + ' ] ');
			$('#custom_screen_width').val(screen_width);
			$('#custom_screen_height').val(screen_height);

			$('#screen_frame').on('load', function () {
				$('#screen_frame').contents().find('#oe_main_menu_navbar').remove();
				$('#screen_frame').contents().find('body').removeClass('o_connected_user');
			});

			$('.responsive-nav .responsive_top_menu').click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				var w_std = $(window).width();
				$('.custom-menu').css('display', 'none');
				var top_menu_chlid = $(this).parent().find('.sub-menu');
				if (top_menu_chlid.css('display') == 'block') {
					$('.sub-menu').css('display', 'none');
					top_menu_chlid.css('display', 'none');
				}
				else {
					$('.sub-menu').css('display', 'none');
					top_menu_chlid.css('display', 'block');
					if (w_std > 767 && w_std < 1100) {
						w_std = 606;
						$('nav.responsive-nav ul.sub-menu').css({ 'width': w_std + 'px' });
					}
					else {
						$('nav.responsive-nav ul.sub-menu').css({ 'width': '1000px' });
					}
				}
			});
			$('.contentoutercon').click(function (e) {
				self.close_selection_menu();
			});
			$('.top_menu_custom').click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				$('.sub-menu').css('display', 'none');
				if ($('.custom-menu').css('display') == 'block') {
					$('.custom-menu').css('display', 'none');
				}
				else {
					$('.custom-menu').css('display', 'block');
				}
			});

			$('.sub-menu li a').click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				$('.sub-menu').css('display', 'none');
				var screen_temp = $(this).attr('href');
				var screen_temp = screen_temp.split('|brk|');
				if (screen_temp.length == 3) {
					screen_width = screen_temp[0];
					screen_height = screen_temp[1];
					screen_type = screen_temp[2];
					self.screen_reset();
				}
			});

			$('#custom_screen_go').click(function (e) {
				screen_width = screen_width_temp;
				screen_height = screen_height_temp;
				screen_type = 'Custom Screen';
				self.screen_reset();
			});
			$('#custom_screen_width').keyup(function (e) {
				if (isNaN($(this).val())) {
					$(this).val(screen_width_temp);
				}
				else {
					screen_width_temp = $(this).val();
				}
			});
			$('#custom_screen_height').keyup(function (e) {
				if (isNaN($(this).val())) {
					$(this).val(screen_height_temp);
				}
				else {
					screen_height_temp = $(this).val();
				}
			});
			$('#screen_rotater').click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				var screen_rotate_temp = screen_width;
				screen_width = screen_height;
				screen_height = screen_rotate_temp;
				self.screen_reset();
			});

			$('#screen_scrolling').click(function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();
				if (screen_scrolling == 'no') {
					screen_scrolling = 'yes';
					$('#screen_frame').attr('scrolling', 'yes');
					$('#screen_scrolling_no').css('display', 'none');
					$('#screen_scrolling_yes').css('display', 'block');
				}
				else {
					screen_scrolling = 'no';
					$('#screen_frame').attr('scrolling', 'no');
					$('#screen_scrolling_yes').css('display', 'none');
					$('#screen_scrolling_no').css('display', 'block');
				}
				$('#screen_frame').attr('src', $('#screen_frame').attr('src'));
				$('#screencheck_width').attr('value', screen_width);
				$('#screencheck_height').attr('value', screen_height);
				$('#screencheck_type').attr('value', screen_type);
				$('#screencheck_scrolling').attr('value', screen_scrolling);
			});
			$('#screen_refresh').click(function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();
				$('#screen_frame').attr('src', $('#screen_frame').attr('src'));
			});
			return this._super.apply(this, arguments);
		},
		screen_reset:function() {
			$('#scereenwidth').html(screen_width + ' x ' + screen_height + ' [ ' + screen_type + ' ] ');
			$('#screen_frame').animate({ width: screen_width, height: screen_height }, 1000, function () { });
			$('#custom_screen_width').val(screen_width);
			$('#custom_screen_height').val(screen_height);
			$('#screencheck_width').attr('value', screen_width);
			$('#screencheck_height').attr('value', screen_height);
			$('#screencheck_type').attr('value', screen_type);
			$('#screencheck_scrolling').attr('value', screen_scrolling);
			if(screen_height < 510){
				$('.left_wraper').css({ 'min-height': '600px' });
				$('.contentoutercon .container_ah').css({ 'min-height': '625px' });
			}
			else{
				$('.left_wraper').css({ 'min-height': parseInt(screen_height) + 91 + 'px' });
				$('.contentoutercon .container_ah').css({ 'min-height': screen_height - 107 + 'px' });
			}
			$('#screen_frame').attr('src', window.location.href);
			$('#screencheck_url').val(window.location.href);
		
		},
		resize_to_viewport:function() {
			var w_std = $(window).width();
			var h_std = $(window).height();
			if (w_std < 1024) {
				w_std = 1024;
				h_std = 786;
			}
			
			if(screen_height < 510){
				$('.left_wraper').css({ 'min-height': '600px' });
				$('.contentoutercon .container_ah').css({ 'min-height': '625px' });
			}
			else{
				$('.left_wraper').css({ 'min-height': parseInt(screen_height) + 91 + 'px' });
				$('.contentoutercon .container_ah').css({ 'min-height': h_std - 107 + 'px' });
			}
			
			$('.contentoutercon').css({ 'min-width': w_std - 10 + 'px' });
		
			$('.modal_responsive .modal-content').css({ 'height': h_std - 5 + 'px' });
			$('.modal_responsive .modal-dialog').css({ 'width': w_std - 10 + 'px' });
		
			if (w_std > 767 && w_std < 1100) {
				w_std = 606;
				$('nav.responsive-nav ul.sub-menu').css({ 'width': w_std + 'px' });
			}
			else{
				$('nav.responsive-nav ul.sub-menu').css({ 'width': '1000px' });
			}
			$('#screen_frame').contents().find('#oe_main_menu_navbar').remove();
			$('#screen_frame').contents().find('body').removeClass('o_connected_user');
			$('#screen_frame').attr('src', window.location.href);
			$('#screencheck_url').val(window.location.href);
		},
		close_selection_menu: function(){
			debugger;
			$('.custom-menu').css('display', 'none');
			var top_menu_chlid = $(this).find('.sub-menu');
			$('.sub-menu').css('display', 'none');
			top_menu_chlid.css('display', 'none');
		},
	
	});

	websiteNavbarData.websiteNavbarRegistry.add(websiteResponsiveChecker, '#responsive-menu');

	return {
		websiteResponsiveChecker: websiteResponsiveChecker
	};
});
