$(document).ready(function()
{
	// HTML elements used more than once are cached.
	var $login = $('#login');
	var $register = $('#register');
	var $login_form = $('#login_form');
	var $registration_form = $('#registration_form');
	var $welcome_title = $('#welcome_title');

	$login
		.click(function()
		{
			$login.add($register)
				.fadeOut(250);
			$login_form
				.delay(251)
				.fadeIn(250);	
		});

	$register
		.click(function()
		{
			$login.add($register)
				.fadeOut(250);
			$registration_form
				.delay(251)
				.fadeIn(250);	
		});

	$('#enter').add($('#registration_submit'))
		.click(function()
		{
			$welcome_title.add($login_form)
				.fadeOut(250);
			$('#logged_in')
				.delay(251)
				.fadeIn(250);	
		});

	$('#login_back, #registration_back')
		.click(function()
		{
			$(this)
				.parent()
				.fadeOut(250);
			$welcome_title.add($login).add($register)
				.delay(251)
				.fadeIn(250);
		});

	$('#username')
		.click(function()
		{
			if ($(this).val().toLowerCase() == 'username or email' || $(this).val().toLowerCase() == 'username')
			{
				$(this).val('');
			}
		})
		.blur(function()
		{
			if ($(this).val() == '' || $(this).val().toLowerCase() == 'username')
			{
				$(this).val('Username or Email');
			}
		});

	$('#password, #new_password')
		.click(function()
		{
			if ($(this).val().toLowerCase() == 'password')
			{
				$(this).val('');
			}
		})
		.blur(function()
		{
			if ($(this).val() == '')
			{
				$(this).val('Password');
			}
		});	

	$('#new_username')
		.click(function()
		{
			if ($(this).val().toLowerCase() == 'username')
			{
				$(this).val('');
			}
		})
		.blur(function()
		{
			if ($(this).val() == '')
			{
				$(this).val('Username');
			}
		});		

	$('#repeat_password')
		.click(function()
		{
			if ($(this).val().toLowerCase() == 'repeat password')
			{
				$(this).val('');
			}
		})	
		.blur(function()
		{
			if ($(this).val() == '')
			{	
				$(this).val('Repeat Password');
			}
		});	

	$('#new_email')
		.click(function()
		{
			if ($(this).val().toLowerCase() == 'email')
			{
				$(this).val('');
			}
		})
		.blur(function()
		{
			if ($(this).val() == '')
			{
				$(this).val('Email');
			}
		});
});