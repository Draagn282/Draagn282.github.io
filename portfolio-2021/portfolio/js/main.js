$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".header_main_div").addClass("header_main_div_sticky");
      $(".header_butn").addClass("header_butn_sticky");
    } else {
      $(".header_main_div").removeClass("header_main_div_sticky");
      $(".header_butn").removeClass("header_butn_sticky");
    }

    if (this.scrollY < 500) {
      $(".scroll_up_butn").addClass("show");
    } else {
      $(".scroll_up_butn").removeClass("show");
    }
  });
});
$(".header_butn_appear").click(function () {
  $(".header_butn_appear").toggleClass("active1");
  $(".header_main_div").toggleClass("active2");
  $(".header_leftside_div").toggleClass("active2");
  $(".header_rightside_div").toggleClass("active2");
  $(".header_butn").toggleClass("active2");
});
var typed = new Typed(".typing", {
  strings: ["Gamer", "Developer", "Scout leiding", "Havist"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing_2", {
  strings: ["Believe", "Achieve", "Recieve"],
  typeSpeed: 50,
  backSpeed: 10,
  loop: true,
});
