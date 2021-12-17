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
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
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
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});
