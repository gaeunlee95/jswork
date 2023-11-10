//function-retrun.html
//return이 있는 함수

//제곱수를 계산하는 함수
//어떤수를 입력받아 제곱하는 함수
/* function square(x){
  let num = x * x;
  retrun num; //변수 리턴
} */

let square = function(x){
  return x * x;
}

/* function add(x, y){
  return x + y; //구문 리턴
} */

let add = function(x, y){
  return x + y;
}

console.log(square(5));

let result = add(4, 5);
console.log(result);
//console.log(add(4, 5));