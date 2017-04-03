$(function() {

	$("#message-firstname-welsh").validate({
		expression: "if (VAL != 'Enw Cyntaf') return true; else return false;"
	});
	$("#message-lastname-welsh").validate({
		expression: "if (VAL != 'Cyfenw') return true; else return false;"
	});
	$("#message-telephone-welsh").validate({
		expression: "if (VAL != 'Rhif Ffôn') return true; else return false;"
	});
	$("#message-message-welsh").validate({
		expression: "if (VAL != 'Neges') return true; else return false;"
	});
	$("#message-email-welsh").validate({
		expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9\\_\\-\\.]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;"
	});

	$("#message-firstname-english").validate({
		expression: "if (VAL != 'First Name') return true; else return false;"
	});
	$("#message-lastname-english").validate({
		expression: "if (VAL != 'Last Name') return true; else return false;"
	});
	$("#message-telephone-english").validate({
		expression: "if (VAL != 'Telephone Number') return true; else return false;"
	});
	$("#message-message-english").validate({
		expression: "if (VAL != 'Message') return true; else return false;"
	});
	$("#message-email-english").validate({
		expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9\\_\\-\\.]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;"
	});

	var scriptURL = 'http://dev.clickymedia.co.uk/ccfw-messaging.php';

	$('#message-send').click(function(e) {
		e.preventDefault();
		$('input, textarea').blur();
		if ($('.ErrorField').length === 0 && !$('#message-send').hasClass('sent')) {
			$('#message-send').text('Sending...');
			$.getJSON(
				scriptURL + '?Callback=?', 
				{
					FirstName: $('.message-firstname').val(),
					LastName: $('.message-lastname').val(),
					Email: $('.message-email').val(),
					Phone: $('.message-telephone').val(),
					Message: $('.message-message').val()
				}, 
				function(Response) {
					if (typeof Response.Error != "undefined") {
						alert(Response.Error);
						$('#message-send').text('Send');
					}
					if (typeof Response.Message != "undefined") {
						alert(Response.Message);
						$('#message-send').text('Sent!').addClass('sent');
					}
				}
			);
		}
	});

});