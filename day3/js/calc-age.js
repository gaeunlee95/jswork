// calc-age.html

//나이 계산 프로그램
//write() -> getElement
function calcAge(){
  //조건 : 현재 연도는 상수로 선언할 것
  //나이 = 현재연도 - 태어난해
  const year = 2023;
  let byear, age;

  //입력
  // byear = parseInt(prompt("태어난 연도를 입력하세요(YYYY)", "YYYY")); // 취소 -> parseInt(null) -> NaN
  byear = prompt("태어난 연도를 입력하세요(YYYY)", "YYYY"); //취소 -> null

  // document.write(byear);

  if(byear === null){ 
    document.getElementById("print").innerHTML 
      = "입력이 취소되었습니다.";
  }else if(isNaN(byear)){
    document.getElementById("print").innerHTML 
      ="숫자를 입력해주세요.";
  }else{
    byear = parseInt(byear);
    age = year - byear;
    document.getElementById("print").innerHTML 
      = year + "년 현재<br>" 
        + byear + "년에 태어난 사람의 나이는 " + age +"세 입니다.";
  }
}