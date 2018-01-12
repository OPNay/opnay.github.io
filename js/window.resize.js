(function ($) {
    "use strict";
	var $win = $(window),
        prev_mode = 0,
        mode = 0, // 0: mobile, 1: tablet, 2: desktop
        resizeWin = function () {
			var a = $('html'), width = $win.width();
			if ((width >= 1024)) {
                mode = 2;
			} else if ((width >= 768) && (width < 1024)) {
                mode = 1;
			} else if ((width < 768)) {
                mode = 0;
			}

			if ((width >= 1300) && !a.hasClass('wide')) {
				a.addClass('wide');
			} else if ((width < 1300) && a.hasClass('wide')) {
				a.removeClass('wide');
			}
            if (prev_mode !== mode) {
                a.removeClass('desktop tablet mobile')
                    .addClass(mode === 0 ? 'mobile' : (mode === 1 ? 'tablet' : 'dekstop'));
                if (mode === 2) {
				    // side always show
				    $('.side').toggleClass('active', false);
                    $('.cover').remove();
                }
                prev_mode = mode;
            }
		};

	// Add resize trigger and Run when load document
	$win.resize(resizeWin);
    resizeWin();
})(jQuery);
