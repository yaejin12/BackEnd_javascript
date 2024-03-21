//양의정수 50 쓰면 50이하의 제곱수를 구하라

var number = +prompt("정수의 값:");

for (var i = 2; i <= number; i *= 2) {
  console.log(i);
}
alert(`${i}`);

// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
var n = +prompt("양의 정수를 입력하세요.");

for (var i = 2; i <= n; i *= 2) {
  alert(i);
}

//정수의값 쓰고 약수를 출력과 약수의 갯수

// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = 10;

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    console.log(i);
  }
}

// 약수 카운트를 저장할 변수

// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt("정수: ");

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = "";

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`;
alert(result);

//   \n :엔터를 한번씩 쳐라 (세로 정렬)
