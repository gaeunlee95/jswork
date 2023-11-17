//date1.html
//Date 객체(현재 날짜와 시간)

const NOW = new Date();

document.write("현재 년도: " + NOW.getFullYear() + "<br>");
document.write("현재 월: " + (NOW.getMonth() + 1) + "<br>");
document.write("현재 일: " + (NOW.getDate()) + "<br>");

document.write("현재 시: " + (NOW.getHours()) + "<br>");
document.write("현재 분: " + (NOW.getMinutes()) + "<br>");
document.write("현재 초: " + (NOW.getSeconds()) + "<br>");

// 현재까지의 시간 측정(1970. 1. 1. 자정부터 밀리초로 반환)
document.write("현재까지의 시간: " 
      + (NOW.getTime()/1000) + "<br>");

document.write("현재까지의 지난날(일)로 환산: " 
      + Math.floor(NOW.getTime()/(24*60*60*1000)) + "<br>");



