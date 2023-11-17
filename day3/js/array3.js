// array3.html

//1 ~ 10 자연수를 배열에 저장
//10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log("갯수: " + number.length);

//저장
// number[0] = 1;
for(let i=0; i<number.length; i++){
  number[i] = i + 1;
}

//출력
for(let i=0; i<number.length; i++){
  document.write(number[i] + " ");
}

/*for(let i in number){
  document.write(number[i] + " ");
}*/

//알파벳 대문자를 저장 - 26개
//문자셋 - 아스키코드(128개) 'A' : 65
//코드값으로 저장 출력(.charCodeAt()) - 아스키코드
//String.fromCharCode() - 코드값(65)으로 다시 저장
let alphabet = new Array(26);
let ch = 'ABCD';
// console.log(ch.charCodeAt());
ch = ch.charCodeAt(); //(인덱스) / 인덱스를 지정하지 않았을때 기본값으로 0이 들어감

//저장
for(let i=0; i<alphabet.length; i++){
  alphabet[i] = ch; //ch=65
  ch++;  //ch = ch + 1
}

//출력
for(let i=0; i<alphabet.length; i++){
  console.log(alphabet[i] + ", " + 
          String.fromCharCode(alphabet[i])); 
}
