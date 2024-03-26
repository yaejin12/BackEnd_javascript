//return은 함수의 탈출문(종료문)
//return 밑에 코드를 적으면 실행이 되지않는다
function add(n1, n2) {
  //console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2;
}

//반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
add(10, 20);
console.log(add(10, 20));

var result = add(10, 20) * add(add(1, 4), add(1, 1));
console.log(`result: ${result}`);

console.log("======================================");

//return이 없는 경우(결과만 보여주고 끝낼게. 저장은 안할거야.)
//return이 없는함수는 변수에 저장하지 말고
//다른 함수의 매개값으로도 쓰면 안됨

function multi(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
var r1 = multi(3, 4);
console.log(`r1: ${r1}`);

multi(add(2, 3), add(5, 6));
var r2 = add(5, multi(2, 2));
console.log(r2);

console.log("======================================");

// //데이터베이스를 접속하는 함수
// function connectDatabase() {
//   var connect = getConnection(id, pw, auth);

//   //...
//   //....
//   return true;
// }

console.log("======================================");

//return이 없는 함수에서 return을 break처럼 사용하기

function callName(nickName) {
  var prohibits = ["바보", "멍청이", "메롱"];
  if (prohibits.includes(nickName)) {
    console.log("나쁜말 쓰지 마셈");
    return; // 여기서 return 은 break처럼 종료의 의미로 된다
  } else {
    console.log(`${nickName}님 안녕하세요`);
  }
}

console.log("======================================");
callName("메롱"); //뽀로로님 안녕하세요 만 나오고 끝난다
