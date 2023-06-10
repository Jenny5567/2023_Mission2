// menu
$(".nav-btn").click(function () {
    $(".nav-collapse").toggleClass("nav-collapse-show");
});

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1, /*768px顯示單欄*/
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2, /*768以上顯示雙欄*/
      slidesPerGroup: 1,
    },
    1070: {/*1070以上顯示雙欄*/
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


//dropdown-menu
$('.sort').click(function(e) {
  $('.dropdown-menu').toggleClass('show');
});

$('.new-to-old').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('show');
  $('.dropdown-text').text($('.new-to-old').text());
});

$('.old-to-new').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('show');
  $('.dropdown-text').text($('.old-to-new').text());
});

