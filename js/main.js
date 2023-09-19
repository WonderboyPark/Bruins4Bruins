$(document).ready(function () {

  var position = $(window).scrollTop();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      $(".header-logo").addClass("header-logo-small");
      $(".header").addClass("header-small");
    } else {
      $(".header-logo").removeClass("header-logo-small");
      $(".header").removeClass("header-small");
    }
    position = scroll;
  });

  let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
  let progressStartValue = 0,
    progressEndValue = 72,
    speed = 30;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}% of 1,890 Donors`;
    circularProgress.style.background = `conic-gradient(#6ab3e7 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  $(".owl-carousel").owlCarousel({
    margin: 25,
    loop: true,
    autoWidth: true,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout: 5000,
    center: true,
    smartSpeed: 1500,
  });
});
