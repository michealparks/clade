$(document).ready(function()
{
	var $login = $('#login');
	var $register = $('#register');
	var $login_form = $('#login_form');
	var $registration_form = $('#registration_form');
	var $enter = $('#enter');
	var $registration_submit = $('#registration_submit');
	var $welcome_title = $('#welcome_title');
	var $logged_in = $('#logged_in');
	var $login_back = $('#login_back');
	var $registration_back = $('#registration_back');

	$login
		.click(function()
		{
			$login.add($register)
				.animate({'opacity': 0}, 500)
				.delay(500)
				.queue(function(nxt)
				{
					$(this)
						.css('display', 'none');
					$login_form
						.css('display', 'block')
						.animate({'opacity': 1}, 500);
						nxt();
				});

			/*setTimeout(function()
			{
				$login_form
					.css('display', 'block')
					.animate({'opacity': 1}, 500);
			}, 500);*/
		});

	$register
		.click(function()
		{
			$login.add($register)
				.animate({'opacity': 0}, 500)
				.delay(500)
				.queue(function(nxt)
				{
					$(this)
						.css('display', 'none');
					$registration_form
						.css('display', 'block')
						.animate({'opacity': 1}, 500);	
						nxt();
				});

			/*setTimeout(function()
			{
				$login.add($register)
					.css('display', 'none');
				$registration_form
					.css('display', 'block')
					.animate({'opacity': 1}, 500);	
			}, 500);	*/
		});

	$enter.add($registration_submit)	
		.click(function()
		{
			$welcome_title.add($login_form)
				.animate({'opacity': 0}, 500)
				.delay(500)
				.queue(function(nxt)
				{
					$(this)
						.css('display', 'none');
					$logged_in
						.css('display', 'block')
						.animate({'opacity': 1}, 500);	
				});
			
			/*setTimeout(function()
			{
				$welcome_title.add($login_form)
					.css('display', 'none');
				$logged_in
					.css('display', 'block')
					.animate({'opacity': 1}, 500);			
			}, 500);*/
		});

/*
	$('#login_back, #registration_back')
		.click(function()
		{
			$('.form')
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$('.form')
					.css('display', 'none');
				$('#welcome_title, #login, #register')
					.css('display', 'block')
					.animate({'opacity': 1}, 500);
			}, 500);	
		});
*/

	$login_back
		.click(function()
		{
			$login_form
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$login_form
					.css('display', 'none');
				$welcome_title.add($login).add($register)
					.css('display', 'block')
					.animate({'opacity': 1}, 500);
			}, 500);
		});

	$registration_back
		.click(function()
		{
			$registration_form
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$registration_form
					.css('display', 'none');
				$welcome_title.add($login).add($register)
					.css('display', 'block')
					.animate({'opacity': 1}, 500);
			}, 500);
		});
});