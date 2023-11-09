// fee-repeat.html

while(true){
  let key = prompt("계속 반복할까요?", "y/n");
  if(key == 'y' || key == 'Y'){
    alert("계속 반복합니다.")
  }else if(key == 'n' || key == 'N'){
    alert("반복을 중단합니다.")
    break;
  }else{
    alert("지원하지 않는 키입니다.")
  }
}
document.write("<h1>프로그램 종료!!</h1>")