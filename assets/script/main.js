$(function(){
  $(".js_menu_bar").click(function(){
    const navMenu = $('.sp_nav_menu')
    if(navMenu.css('display') === 'none'){
      navMenu.fadeIn();
    }else{
      navMenu.fadeOut();
    }
  });

  $(".sec3_tag2").click(function(){
    $(".sec3_wrapper1").css('display', 'none');
    $(".sec3_wrapper2").css('display', 'block');
    $(".sec3_tag2").css('background-color', '#f2f9ff');
    $(".sec3_tag1").css('background-color', '#f0f0f0');
  });

  $(".sec3_tag1").click(function(){
    $(".sec3_wrapper2").css('display', 'none');
    $(".sec3_wrapper1").css('display', 'block');
    $(".sec3_tag1").css('background-color', '#f2f9ff');
    $(".sec3_tag2").css('background-color', '#f0f0f0');
  });
});