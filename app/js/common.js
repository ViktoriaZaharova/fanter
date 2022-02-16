const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
        },
    },
    mousewheel: true,
    hashnav: true,
    hashNavigation: {
        watchState: true
    },
    on: { slideChangeTransitionEnd () {
            $sections = $('.swiper-slide');
            $sections.each(function() {
                    var $section = $(this);
                    var hash = $section.attr('data-hash');
                    //console.log(hash);

                }
            );
            $('.hashing').removeClass('active');
            var url = window.location.hash;
            var hash = url.substring(url.indexOf('#'));
            console.log(hash);
            $('a[href="' + hash + '"]').addClass('active');
        } }
});


// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.btn-burger').on('click', function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close, .hashing, .overlay').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});
