$(document).ready(function() {
  let profiles = ['.voice__content__square1', '.voice__content__square2', '.voice__content__square3', '.voice__content__square4', '.voice__content__square5'];
  let profileIndex = 0;
  let indicatorIndex = 0;
  const profilesPerView = 3;
  const totalViews = Math.ceil(profiles.length / profilesPerView);
  
  if ($(window).width() < 767.9) {
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

} else {

  function showProfiles(index) {
    $('.js-profile').removeClass('js-active');
    if (index === 0) {
      for (let i = 0; i < profilesPerView; i++) {
          $(profiles[i]).addClass('js-active');
      }
    } else {
      for (let i = profilesPerView; i < profiles.length; i++) {
          $(profiles[i]).addClass('js-active');
      }
    }
    updateIndicators(index);
  }

  function updateIndicators(index) {
      $('.voice__indicator--item').removeClass('js-active');
      $('.voice__indicator--item[data-index=' + index + ']').addClass('js-active');
  }

  $('.voice__content--left').click(function() {
      indicatorIndex = (indicatorIndex - 1 + totalViews) % totalViews;
      showProfiles(indicatorIndex);
  });

  $('.voice__content--right').click(function() {
      indicatorIndex = (indicatorIndex + 1) % totalViews;
      showProfiles(indicatorIndex);
  });

  $('.voice__indicator--item').click(function() {
      indicatorIndex = $(this).data('index');
      showProfiles(indicatorIndex);
  });
  showProfiles(indicatorIndex);
}

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
});
