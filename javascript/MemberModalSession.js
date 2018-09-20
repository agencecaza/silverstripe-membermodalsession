(function($) {

	$(document).ready(function() {


		var idleState = false;
	  var idleTimer = null;

	  $('*').bind('mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick', function (e) {
      clearTimeout(idleTimer);

      idleState = false;
      idleTimer = setTimeout(function () {

			$('.MemberModalSession').addClass('active');

					$('.MemberModalSession button.yes').click(function() {
						$('.MemberModalSession').removeClass('active');
						clearTimeout(idleTimer);
						clearInterval(downloadTimer);
						return false;
					});


					var timeleft = 60; // timeleft for displaying modal
					$(".MemberModalSession.active #seconds").html(timeleft);

					var downloadTimer = setInterval(function(){
						$(".MemberModalSession #seconds").html(--timeleft);
						if(timeleft <= 0) {
							clearTimeout(idleTimer);
							clearInterval(downloadTimer);
							console.log('quit');
							window.location.href = "Security/logout";
						}
					},1000);

					e.stopPropagation();

          idleState = true;

				}, 5 * 60 * 1000); // 5 minutes
	  });
	  $("body").trigger("mousemove");


		setInterval(function(){

			$.ajax({
				url: "membermodalsessionajax/keepalivesession",
				success: function(data) {

					if (data) {
						console.log('Keep session active while connected');
					}
				},
				error: function (data) {
					console.log(data);
				}

			});

		}, 1000 * 60 * 15); // 15 mins

	});



}(jQuery));
