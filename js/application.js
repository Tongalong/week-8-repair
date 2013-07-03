jQuery(document).ready(function($) {
	$('#submit').click(function(event) {
	<!-- #5 missing # in front sumbit-->
		console.log("Submit button was clicked");
	});
	$('#form').validate({

		<!--#6 missing $ in front of the ()-->
		<!--#7 missing # in front of form ()-->
		
		rules : {
			<!--#8 missing : after rules-->
			username :{
				required: true,
				email : true
			},

			password : {
				required :true,
				minlength : 6,
				maxlength : 10
			}
		},

		messages : {
			username : {
				required : "Come on don't be shy",
				email : "Your email looks funny"
			},

			password :{
				required :"Enter your password",
				minlength : jQuery.format("Your password is at least {0} characters long"),
				maxlength : jQuery.format("Your password can't be longer than {0} characters")
			} <!--#9 missing } to close password :{ -->
		}

	});
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

