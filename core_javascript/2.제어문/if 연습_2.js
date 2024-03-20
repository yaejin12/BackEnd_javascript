/*정수a, 정수b, 정수c 값이 같은지 다른지 확인하는 코드 작업하기

var a = +prompt("정수A를 입력하세요");
var b = +prompt("정수B를 입력하세요");
var c = +prompt("정수c를 입력하세요");

if (a === b && b === c) {
  alert("정수 세개의 값이 같습니다");
} else if (a === b || b === c || a === c) {
  alert("정수 두개의 값이 같습니다");
} else {
  alert("정수 세개의 값이 틀립니다");
}

*/

/*정수 두개를 입력하고 그 값의 차이 입력하기 (앞과 뒤 정수 크기가 크든 작던 차이 구하기)

var A = +prompt("정수A를 입력하세요");
var B = +prompt("정수B를 입력하세요");

if (A > B) {
  alert(`두 수의 차이는 ${A - B} 입니다`);
} else if (B > A) {
  alert(`두 수의 차이는 ${B - A} 입니다`);
} else {
  alert("두 수의 차이는 없습니다");
}

*/

// 정수3개를 입력후 최소값 구하기

var a = +prompt("정수A를 입력하세요");
var b = +prompt("정수B를 입력하세요");
var c = +prompt("정수c를 입력하세요");

if (a > b > c) {
  alert("정수의 최소값은 c입니다");
} else if (a > b < c) {
  alert("정수의 최소값은 b입니다");
} else {
  alert("정수의 최소값은 a입니다");
}

/*================================= 선생님의 풀이 ========================================*/

// /*
// // 문제 1 : 세 수의 값이 같은지 판별

// /*
// var a = +prompt('정수 A');
// var b = +prompt('정수 B');
// var c = +prompt('정수 C');

// if (a === b && b === c) {
//   alert('3개 값이 모두 같습니다.');
// } else if (a === b || b === c || c === a) {
//   alert('2개 값이 같습니다.');
// } else {
//   alert('모두 다른 값입니다.');
// }
// */

// // 문제 2 : 두 수의 차이 구하기
// /*
// var a = +prompt('정수 A');
// var b = +prompt('정수 B');

// // 두 수의 차이 절대값으로 구하기
// var diff = (a > b) ? a - b : b - a;

// alert(`두 값의 차이는 ${diff}입니다.`);
// */

// // 문제 3 : 3개의 정수 중 최소값 구하기
// var a = +prompt('정수 A');
// var b = +prompt('정수 B');
// var c = +prompt('정수 C');

// // min : 최소값을 저장해 놓을 변수
// var min = a;                    //  a: 9 ,  b: 77,  c: 99
// if (b < min) min = b;           //  min : 9
// if (c < min) min = c;

// alert(`최소값은 ${min}입니다.`);
