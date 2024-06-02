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
      slidesPerGroup:3,
    }
  }
});



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
document.addEventListener('DOMContentLoaded', (event) => {
  const image = document.getElementById('scrollToTopImage');

  image.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
