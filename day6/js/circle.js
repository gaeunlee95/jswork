// class_circle.html
//원의 둘레와 면적
// 원의 둘레 = 2 * PI * 반지름 
// 원의 면적 = PI * 반지름 * 반지름 
function Circle(radius){
  this.radius = radius;   //멤버변수, 필들

  //원의 둘레 구하는 함수
  this.length = function(){
    return 2 * Math.PI * this.radius;
  }

  //원의 면적을 계산하는 함수 정의
  this.area = function(){
    return Math.PI * this.radius * this.radius;
  }
}

//원 1개 생성
let c1 = new Circle(4);

document.write("원의 둘레 : " + c1.length().toFixed(2) + "cm<br>");
document.write("원의 면적 : " + c1.area().toFixed(2) + "cm<sup>2<br>");
