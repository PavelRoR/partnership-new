//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    /*Фиксед шапка*/
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $("header").addClass('header-stick');
                //				$(".header-stick").css("display",'flex');

            } else {
                $("header").removeClass('header-stick');
                //				$(".header-stick").css('display','none');

            }
        })

    });
    $(function () {
        var location = window.location.href;
        var cur_url = '../cases/' + location.split('/').pop();
        $('.header-links li a').each(function () {
            var link = $(this).attr('href');
            if (cur_url == link) {
                $(this).addClass('active');
            }
        });
    });

    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });

    /*Конец документа*/
});