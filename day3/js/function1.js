//function1.html
//함수 정의
//매개 변수(입력)가 없는 함수
function sayHello(){
  document.write("안녕하세요<br>")
}

//매개 변수가 있는 함수(매개변수에 자료형이)
function sayHello2(name){
  document.write("안녕하세요~ " + name + "<br>")
}

//구구단을 출력하는 함수 정의
function gugudan(dan){
  for(var i = 1; i <= 9; i++){
    document.write(dan + "x" + i + "=" + (dan*i) + "<br>")
  }
}

//함수 사용 - 호출
sayHello2();
sayHello2("소희");
sayHello2("Elsa");

//구구단 호출
gugudan(4);