//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    /*Фиксед шапка*/

    $(function () {
        var revsDone = false;
        var revsTop = $("#revs").offset().top;
        var aVideo = false;
        var akvTop = $("#presentation").offset().top;
        var allPhotos = false;
        var allPhotosSec = $("#photos").offset().top;

        function insertRevs() {
            $('.revs-title').after('<div class="row"><div class="col-md-4 col-sm-4" ><h5 class="rev-title">Игорь Крестинин о партнерской программе Master Vision</h5><div class="video-wrapper video-wrapper-rev" data-vim="410965594"><iframe src="https://player.vimeo.com/video/410965594" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""></iframe></div></div><div class="col-md-4 col-sm-4"><h5 class="rev-title">Отзыв партнера Артура об обучении партнеров</h5><div class="video-wrapper video-wrapper-rev" data-vim="410965772"><iframe src="https://player.vimeo.com/video/410965772" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" ></iframe></div ></div><div class="col-md-4 col-sm-4" ><h5 class="rev-title">Отзыв партнера Александра об обучении партнеров</h5><div class="video-wrapper video-wrapper-rev" data-vim="410965793"><iframe src="https://player.vimeo.com/video/410965793" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""></iframe></div></div></div>');
            revsDone = true;
        }

        function akVideo() {
            $('.video-wrapper-presentation').html('<iframe src="https://player.vimeo.com/video/410598532?autoplay=1" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>');
            aVideo = true;
        }

        function addPhotos() {
            $('.photo-img').each(function () {
                var a = $(this).attr('data-src');
                $(this).attr('src', a);
            });
            $('.photo-img').removeAttr('data-src');
            allPhotos = true;
            // console.log(a)
        }

        $(window).scroll(function () {
            // if ($(this).scrollTop() >= 50) {
            //     $("header").addClass('header-stick');
            // } else {
            //     $("header").removeClass('header-stick');
            // }
            if ((($(this).scrollTop() + 500) > revsTop)) {
                if (!revsDone) {
                    insertRevs();
                }
            }
            if ((($(this).scrollTop() + 500) > akvTop)) {
                if (!aVideo) {
                    akVideo();
                }
            }
            if ((($(this).scrollTop() + 200) > allPhotosSec)) {
                if (!allPhotos) {
                    addPhotos();
                }
            }
        });
    });

    $(function () {
        $(".header-links li a").click(function (f) {
            f.preventDefault();
            var a = $(this).attr("href"),
                b = $(a).offset().top;
            $("body,html").animate({
                scrollTop: b
            }, 500);
        });
    });

    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                // check.next().css({
                //     'color': 'red',
                //     'transition': 'all .4s ease'
                // });
                // check.next().children().css({
                //     'color': 'red',
                //     'transition': 'all .4s ease'
                // });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            // check.next().css({
            //     "color": "#000",
            //     'transition': 'all .4s ease'
            // });
            // check.next().children().css({
            //     "color": "#000",
            //     'transition': 'all .4s ease'
            // });
            message.slideUp(500);
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
    $(".button-modal-up,.politics-link").fancybox();
    // /*Отзывы*/
    // $(function () {
    //     $('#certs').owlCarousel({
    //         slideSpeed: 200,
    //         paginationSpeed: 200,
    //         items: 4,
    //         loop: true,
    //         margin: 20,
    //         // nav: true,
    //         navText: ["‹", "›"],
    //         dots: false,
    //         autoHeightClass: 'owl-height',
    //         autoHeight: true,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             480: {
    //                 items: 2
    //             },
    //             767: {
    //                 items: 3
    //             },
    //             992: {
    //                 items: 4
    //             }
    //         }
    //     });
    // });
    // $(".video-wrapper-rev img").click(function (e) {
    //     var a = $(this).parent().attr("data-vim");
    //     $(this).parent().html('<iframe src="https://player.vimeo.com/video/' + a + '?autoplay=1&mute=1"  allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>')
    // });
    /*Конец документа*/
});