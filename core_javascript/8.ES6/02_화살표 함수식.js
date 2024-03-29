// 함수 선언문
// function add(n1, n2) {
//   return n1 + n2;
// }

// 함수 표현식
// const add = function(n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수
const add = (n1, n2) => n1 + n2;

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

const sayHello = () => console.log("안녕하세요");

sayHello();

const kim = {
  name: "김철수",
  greeting: sayHello,
  dance: () => console.log("춤을 신나게 춥니다."),
};

kim.dance();
kim.greeting();

//화살표 함수
//function 대신 =>
//한줄이라면 {}생략 가능하고, return도 생략 가능하다.() 파라미터가 한개일때 생략 가능하다(대신 내용이 없으면 적어야한다)

console.log("=========================================================");

const pow = (n) => n ** 2;
console.log(pow(5));
