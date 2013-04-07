$(document).ready(function()
{
	$('#login')
		.click(function()
		{
			$('#login, #register')
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$('#login, #register')
					.css('display', 'none');
				$('#login_form')
					.css('display', 'block')
					.animate({'opacity': 1}, 500);
			}, 500);
		});

	$('#register')
		.click(function()
		{
			$('#login, #register')
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$('#login, #register')
					.css('display', 'none');
				$('#registration_form')
					.css('display', 'block')
					.animate({'opacity': 1}, 500);	
			}, 500);	
		});

	$('#enter, #registration_submit')	
		.click(function()
		{
			$('#welcome_title, #login_form')
				.animate({'opacity': 0}, 500);
			setTimeout(function()
			{
				$('#welcome_title, #login_form')
					.css('display', 'none');
				$('#logged_in')
					.css('display', 'block')
					.animate({'opacity': 1}, 500);			
			}, 500);
		});

	$('#login_back, #registration_back')
		.click(function()
		{
			if ($('form').css('opacity'
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

});