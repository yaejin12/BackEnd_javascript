/*
console.log(`김철수님 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

//코드 100줄정도 작성

console.log(`이예진님 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

//코드 100줄정도 작성

console.log(`문지은님 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

//코드 100줄정도 작성
*/

//함수를 정의(만든다)
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요!`);
  console.log("오늘도 즐거운 하루되세요!");
}

//함수 호출(사용한다)
sayHello("둘리");
sayHello("루피");

function makeLine() {
  console.log("========================");
}

//나의 프로그램에는 원의 넓이를 자주 구함
const PI = 3.14159265;

//반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r ** 2;
}

//반지름이 5인 원의 넓이
var circle1 = PI * 5 ** 2;
console.log(circle1);

//게시글을 삭제하는 함수
function removeBoardArticle() {}
