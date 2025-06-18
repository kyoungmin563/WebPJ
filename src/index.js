//    구글 최적화 팝업창 쿠키 세팅
var agent = navigator.userAgent.toLowerCase();

cookiedata = document.cookie;
if (cookiedata.indexOf("port=done") < 0) {
  document.getElementById("alert").style.display = "block";
} else {
  document.getElementById("alert").style.display = "none";
}
//       쿠킹 세팅 함수
function setcookie(name, value, expiredays) {
  var todaydate = new Date();
  todaydate.setDate(todaydate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expaires=" +
    todaydate.toGMTString() +
    ";";
  //           쿠키 이름 ="done", path 도메인 이후 경로, expaires(기간) = 지정기간;
}
//        함수 : 쿠키세팅 + #alert{display : none;}
function today_closewin() {
  setcookie("port", "done", 1);
  //        얼마나 안보이게 할지 기간(일)
  document.getElementById("alert").style.display = "none";
}
//        함수 그냥 닫기
function closewin() {
  document.getElementById("alert").style.display = "none";
}

if (agent.indexOf("chrome") != -1) {
} else {
  alert("경고! 크롬 브라우저를 권장합니다.");
}

var win_w = $(window).width();
mobile_pop_no();

$(window).resize(function () {
  mobile_pop_no();
});

function mobile_pop_no() {
  win_w = $(window).width();
  if (win_w < 768) {
    $(".alert").css({ display: "none" });
  }
}
