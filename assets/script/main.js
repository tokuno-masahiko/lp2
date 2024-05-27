$(document).ready(function() {
  let profiles = ['.voice__content__square1', '.voice__content__square2', '.voice__content__square3', '.voice__content__square4', '.voice__content__square5'];
  let currentIndex = 0;

  function showProfile(index) {
      $('.js-profile').removeClass('js-active');
      $(profiles[index]).addClass('js-active');
  }
  $('.voice__content--left').click(function() {
      currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
      showProfile(currentIndex);
  });

  $('.voice__content--right').click(function() {
      currentIndex = (currentIndex + 1) % profiles.length;
      showProfile(currentIndex);
  });
});