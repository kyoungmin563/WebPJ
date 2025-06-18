$(".ham-icon").click(function () {
  $(".ham-menu").toggleClass("ham-top");
  $(".ham-icon").toggleClass("ham-close");
});

//    원 프로그레스
var circle = $(".section2");
var f = true;
$(window).scroll(function () {
  scr_top = $(window).scrollTop();
  circle_top = circle.offset().top;
  win_h = $(window).height();
  console.log("s" + scr_top);
  console.log("c" + circle_top);

  if (scr_top > circle_top - win_h * 0.8) {
    if (f == true) {
      circle_progress();
    }
    f = false;
  }
});
function circle_progress() {
  $(".circle1")
    .circleProgress({
      value: 0.8,
      size: 150,
      animation: { duration: 1400 },
      fill: {
        gradient: ["#01b9d8", "#00daff"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(80 * progress) + "<i>%</i>");
    });
  $(".circle2")
    .circleProgress({
      value: 0.5,
      size: 150,
      animation: { duration: 1400 },
      fill: {
        gradient: ["#e65f06", "#f8721a"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(50 * progress) + "<i>%</i>");
    });
  $(".circle3")
    .circleProgress({
      value: 0.8,
      size: 150,
      animation: { duration: 1400 },
      fill: {
        gradient: ["#ff4c00", "#f1672c"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(80 * progress) + "<i>%</i>");
    });
  $(".circle4")
    .circleProgress({
      value: 0.85,
      size: 150,
      animation: { duration: 1400 },
      fill: {
        gradient: ["#0099ff", "#36b1e2"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(85 * progress) + "<i>%</i>");
    });
  $(".circle5")
    .circleProgress({
      value: 0.5,
      size: 150,
      animation: { duration: 1400 },
      fill: {
        gradient: ["#ffc000", "#f1bf26"],
      },
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(50 * progress) + "<i>%</i>");
    });
}
