$(document).ready(function(){
    //====================================
    //--------- Functions ----------------
    //====================================

    //====================================
    //--------- Custom Scripts -----------
    //====================================

    function scrollToTop(btn) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150 && !btn.hasClass('scrolling')) {
                btn.addClass('active');
            } else {
                btn.removeClass('active');
            }
        });

        btn.click(function () {
            btn.removeClass('active').addClass('scrolling');
            $('body,html').animate({
                scrollTop: 0
            }, 800, function () {

                btn.removeClass('scrolling');
            });
        });
    }

    scrollToTop($('#toTop'));

    //====================================
    //--------- Setting libs -------------
    //====================================

    //====================================
    //-------- Only this site ------------
    //====================================

});
