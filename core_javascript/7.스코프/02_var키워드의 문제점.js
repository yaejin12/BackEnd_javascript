// 1. 변수의 중복선언을 암묵적으로 허용
// var x = 10;
// let x = 10;

// .... 10만줄

// var x = 'ddd';
// let x = 'ddd';
// console.log(`x : ${x}`);

// 2. 블록 레벨 스코프를 지원하지 않음
//let 을 사용하면 for문이 끝나도 '메롱'이라는 변수로 돌아갈 수 있다
let i = "메롱";

for (let i = 0; i < 2; i++) {
  console.log(`for - i: ${i}`);
}

console.log(`global-i : ${i}`);

//3. 호이스팅: 선언위치와 관계없이 참조가능
hobby = "댄스";

//...code

var hobby;

console.log(hobby);
