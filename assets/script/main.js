const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // spaceBetween: 40,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

    // // Swiperの初期化
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 3, // 768px以上では3枚表示
    //       slidesPerGroup: 3, // 768px以上では3枚ずつ移動
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //           if (index < 2) {
    //             return '<span class="' + className + '">' + (index + 1) + '</span>';
    //           }
    //           return '';
    //         },
    //       },
    //     },
    //     0: {
    //       slidesPerView: 1, // 768px未満では1枚表示
    //       slidesPerGroup: 1, // 768px未満では1枚ずつ移動
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //           return '<span class="' + className + '">' + (index + 1) + '</span>';
    //         },
    //       },
    //     }
    //   }
    // });



  // let profiles = ['.voice__content__square1', '.voice__content__square2', '.voice__content__square3', '.voice__content__square4', '.voice__content__square5', '.voice__content__square6'];
  // let currentIndex = 0;
  // let profilesPerView = 1; // 初期値として768px未満の表示枚数
  // let totalViews = Math.ceil(profiles.length / profilesPerView);

  // function updateDisplay() {
  //     $('.js-profile').removeClass('js-active');
  //     if (profilesPerView === 1) {
  //         $(profiles[currentIndex]).addClass('js-active');
  //     } else {
  //         for (let i = 0; i < profilesPerView; i++) {
  //             let index = (currentIndex + i) % profiles.length;
  //             $(profiles[index]).addClass('js-active');
  //         }
  //     }
  //     updateIndicators(currentIndex);
  // }

  // function updateIndicators(index) {
  //     $('.voice__indicator--item').removeClass('js-active');
  //     if (profilesPerView === 1) {
  //         $('.voice__indicator--item[data-index=' + index + ']').addClass('js-active');
  //     } else {
  //       if (index < 3) {
  //         $('.voice__indicator--item[data-index=0]').addClass('js-active');
  //       } else {
  //         $('.voice__indicator--item[data-index=1]').addClass('js-active');
  //       }
  //     }
  // }

  // $('.voice__content--left').click(function() {
  //     currentIndex = (currentIndex - profilesPerView + profiles.length) % profiles.length;
  //     updateDisplay();
  // });

  // $('.voice__content--right').click(function() {
  //     currentIndex = (currentIndex + profilesPerView) % profiles.length;
  //     updateDisplay();
  // });

  // $('.voice__indicator--item').click(function() {
  //     let index = $(this).data('index');
  //     currentIndex = index;
  //     updateDisplay();
  // });

  // function checkWindowSize() {
  //     if ($(window).width() >= 768) {
  //         profilesPerView = 3;
  //         totalViews = Math.ceil(profiles.length / profilesPerView);
  //         $('.indicator-container').html(`
  //             <div class="indicator active" data-index="0"></div>
  //             <div class="indicator" data-index="1"></div>
  //         `);
  //     } else {
  //         profilesPerView = 1;
  //         totalViews = profiles.length;
  //         $('.indicator-container').html(`
  //             <div class="indicator active" data-index="0"></div>
  //             <div class="indicator" data-index="1"></div>
  //             <div class="indicator" data-index="2"></div>
  //             <div class="indicator" data-index="3"></div>
  //             <div class="indicator" data-index="4"></div>
  //             <div class="indicator" data-index="5"></div>
  //         `);
  //     }
  //     updateDisplay();
  // }

  // $(window).resize(function() {
  //     checkWindowSize();
  // });

  // // 初期ロード時にチェック
  // checkWindowSize();


  for (let i = 1; i <= 5; i++) {
    $(`.js-container${i}`).click(function() {
      if ($(`.js-up${i}`).css('display') == 'none') {
        $(`.js-up${i}`).css('display', 'block');
        $(`.js-down${i}`).css('display', 'none');
        $(`.js-txt${i}`).css('display', 'flex');
      } else {
        $(`.js-up${i}`).css('display', 'none');
        $(`.js-down${i}`).css('display', 'block');
        $(`.js-txt${i}`).css('display', 'none');
      }
    });
  }
