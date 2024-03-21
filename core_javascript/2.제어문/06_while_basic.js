// var n = 10;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);

// while 은 계속 반복된다
//거짓이된다면 하단 코드로 내려간다. 거짓이 될때까지 while 에 올라가 확인한다
//~동안 어떤경우에? 참일 경우에 반복하여 적어라
// 증가한다면 <=  //감소 <=

var begin = 10,
  end = 0,
  step = 1;

var n = begin;

while (n >= end) {
  console.log(`${n}!!`);
  n -= step;
}

console.log("===============");

var n = 10;

while (n >= 0) {
  console.log(`${n}!!`);
  n -= 2;
}

console.log("===============");

var n = 1;
while (n <= 9) {
  console.log(`3 x ${n} = ${3 * n}`);
  n++;
}

console.log("===============");

var level = 6;
var n = 1;

while (n <= 9) {
  console.log(`${level} x ${n} = ${level * n}`);
  n++;
}

console.log("===============");
//10~34까지의 정수를 홀수만 출력 문제
var m = 10; //begin
while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}

//반복하고 있는데 조건문(if)을 넣으면 된다

console.log("===============");
//1~100까지의 누적합 문제
var i = 1;
var total = 0;
while (i <= 100) {
  total += i; //i를 total에 누적하세요.
  i++;
}

console.log(total);
