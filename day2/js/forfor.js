//forfor.html

//중첩 for문
//5행 5열에 문자 출력
for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= 5; j++){
    document.write("$")
  }
  document.write("<br>")
}

//구구단
/*for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= 5; j++){
    document.write(i + " x " + j + " = " + (i*j) + "<br>");
  }
  document.write("<br>")
}*/

//직각 삼각형 모양으로 출력
for(let i = 1; i <= 5; i++){ //행
  for(let j = 1; j <= i; j++){  //열
    document.write("$")
  }
  document.write("<br>")
}

document.write("<br>");

for(let i = 1; i <= 5; i++){ //행
  for(let j = 1; j <= 6-i; j++){  //열
    document.write("$")
  }
  document.write("<br>")
}

document.write("<br>");

//j--로 감소시켜서 출력하기
for(let i = 1; i <= 5; i++){ //행
  for(let j = 5; j >= i; j--){  //열
    document.write("$")
  }
  document.write("<br>")
}

document.write("<br>");

// 1~20 출력
for(let i = 0; i < 4; i++){
  for(let j = 1; j <= 5; j++){
    document.write(5 * i + j)
  }
  document.write("<br>")
}