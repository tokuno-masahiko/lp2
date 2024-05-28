$(document).ready(function() {
  let profiles = ['.voice__content__square1', '.voice__content__square2', '.voice__content__square3', '.voice__content__square4', '.voice__content__square5'];
  let profileIndex = 0;
  let indicatorIndex = 0;

  function showProfile(index) {
      $('.js-profile').removeClass('js-active');
      $(profiles[index]).addClass('js-active');
  }

  function updateIndicators(index) {
    $('.voice__indicator--item').removeClass('js-active');
    $('.voice__indicator--item[data-index=' + index + ']').addClass('js-active');
  }

  function updateDisplay() {
    showProfile(profileIndex);
    updateIndicators(indicatorIndex);
  }

  $('.voice__content--left').click(function() {
    profileIndex = (profileIndex - 1 + profiles.length) % profiles.length;
    indicatorIndex = (indicatorIndex - 1 + 6) % 6;
    updateDisplay();
  });

  $('.voice__content--right').click(function() {
    profileIndex = (profileIndex + 1) % profiles.length;
    indicatorIndex = (indicatorIndex + 1) % 6;
    updateDisplay();
  });

  $('.voice__indicator--item').click(function() {
    indicatorIndex = $(this).data('index');
    profileIndex = indicatorIndex % profiles.length;
    updateDisplay();
  });
});