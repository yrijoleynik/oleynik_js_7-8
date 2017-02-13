$(function () {
  $('.tab li:not(.active)').on('click', function () {
    console.log('click!!');
    $(this).addClass('active').siblings().removeClass('active');
    $('.content li').removeClass('active').eq($(this).index()).addClass('active');

  });
  $('.tab li:first-child').addClass('active');
  $('.content li:first-child').addClass('active');
});
