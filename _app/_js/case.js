//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend wow.min.js

$(document).ready(function () {
    new WOW().init();
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
    $(function () {
        var hdr = $('header');
        $('.modal-menu').on('click', function () {
            if (!hdr.hasClass('visible')) {
                hdr.addClass('visible').css('left', '0')
                $('header.visible .header-links li').click(function () {
                    $('header').css("left", "-200px").removeClass('visible');
                })
            } else {
                hdr.css("left", "-200px").removeClass('visible');

            }
        })
    });
    /*Конец документа*/
});