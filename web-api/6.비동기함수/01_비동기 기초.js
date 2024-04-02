//비동기함수 setTimeout
//코드를 순서대로 진행시키는게 아닌 시간차로 진행시킬 수 있게 함

console.log("오늘할일은 뭘까요");
setTimeout(() => {
  console.log("오늘은 집에서 쉴거에요");
}, 200);

/////////////////////////////////////////////////////

setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(`hello${i}`);
  }
}, 200); //뒤에 숫자는 밀리초: 1-> 1000초

setTimeout(() => {
  for (let i = 0; i < 4; i++) {
    console.log(`bye${i}`);
  }
}, 0);
