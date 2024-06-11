const swiper = new Swiper(".swiper", {
    loop: true,
    // 前後の矢印
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // スライドの表示枚数：500px未満の場合
    slidesPerView: 1,
    breakpoints: {
        // スライドの表示枚数：500px以上の場合
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
        }
    }
});

$(function(){
    $('.js_container').click(function(){
        $(this).find('.js_txt').slideToggle();
        $(this).find('.js_txt').css('display', 'flex');
        if ($(this).find('.js_up').css('display') == 'none') {
            $(this).find('.js_up').css('display', 'block');
            $(this).find('.js_down').css('display', 'none');
        } else {
            $(this).find('.js_up').css('display', 'none');
            $(this).find('.js_down').css('display', 'block');
        }
    });
});


$(document).ready(function () {
    $("#scrollToTopImage").hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#scrollToTopImage").fadeIn("fast");
        } else {
            $("#scrollToTopImage").fadeOut("fast");
        }
    });
    $('#scrollToTopImage').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});