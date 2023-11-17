//watch.html

//시계 생성
setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleTimeString(); //시간만 출력
  console.log(time);

  let watch = document.getElementById("show");
  // watch.innerHTML = time;
  // watch.style.color = "blue";
  if(now.getHours >= 12){
    watch.innerHTML = time.replace("오전", "am");
  }else{
    watch.innerHTML = time.replace("오후", "pm");
  }
}

