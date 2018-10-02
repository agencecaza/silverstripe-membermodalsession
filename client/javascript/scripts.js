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

				var timeleft = $('.MemberModalSession').attr('data-timeleft'); // timeleft for displaying modal in seconds
				$(".MemberModalSession.active #seconds").html(timeleft);

				var downloadTimer = setInterval(function(){
					$(".MemberModalSession #seconds").html(--timeleft);
					if(timeleft <= 0) {
						clearTimeout(idleTimer);
						clearInterval(downloadTimer);
						console.log('logout');
						window.location.href = 'Security/logout?BackURL=' + $('.MemberModalSession').attr('data-redirect');
					}
				},1000);

				e.stopPropagation();
        idleState = true;

			}, $('.MemberModalSession').attr('data-timeout') * 60 * 1000); // in seconds
		});

	  $("body").trigger("mousemove");

		setInterval(function(){
			$.ajax({
				url: "membermodalsessionajax/keepalivesession",
				success: function(data) {
					if (data) {
						console.log('keep loggued in');
					}
				},
				error: function (data) {
					console.log(data);
				}
			});
		}, 15 * 60 * 1000); // 15 mins
	});

}(jQuery));
