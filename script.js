$('#submit').click(function() {
	what_the_user_typed = $('textarea').val();
	if (what_the_user_typed.length == 0) {
		alert('No text typed.');
	} else if(what_the_user_typed.length > 0 && what_the_user_typed.length <= 140) {
		$('#timeline').prepend('<div class="cell mini-profile">\
						<img src="http://placehold.it/75x75">\
						<p><b>Bob Jones</b><br>' + what_the_user_typed + '</p></div>');
		$('textarea').val('');
	} else {
		alert('Too much text!');
	}
});