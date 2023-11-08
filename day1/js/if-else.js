//if-else.html

//단독 if문
//if ~ else문

//속도를 입력받아 속도 위반을 판정하는 프로그램 작성
//null 처리
let limit_speed = prompt("주행 속도를 입력하세요", "50");

/* if(limit_speed >= 50){
  document.write("안전 속도 위반! 과태료 10만원 부과 대상.<br>")
}
document.write("시속 " + limit_speed + "km입니다."); */

if(limit_speed == null){
  document.write("입력이 취소되었습니다.")
}else{
  if(limit_speed >= 50){
    document.write("안전 속도 위반! 과태료 10만원 부과 대상.<br>")
  }else{
    document.write("안전 속도 준수!<br>")
  }
  document.write("시속 " + limit_speed + "km입니다.");
}



