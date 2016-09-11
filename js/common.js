$(document).ready(function () {
	$('.btn-up').click(function () {
		$(this).parent('.fixed-bottom').toggleClass('active');

		if ($(this).children('.fa').hasClass('fa-angle-up')) {
			$(this).children('.fa').removeClass('fa-angle-up');
			$(this).children('.fa').addClass('fa-angle-down');
		} else {
			$(this).children('.fa').removeClass('fa-angle-down');
			$(this).children('.fa').addClass('fa-angle-up');
		}
	});
});
