function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다

function addAll(numbers, others) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread문법
//... 붙이면 배열을 입력하지않아도 배열로 불러올 수 있다.
function addAllES6(first, second, ...numbers) {
  console.log(`numbers: ${numbers}`);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// 100만줄
var r1 = addAll([5, 9, 2, 10, 20], [1, 2, 3]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30, 40, 50);

console.log("=========================================");

//다중 반환값
//함수의 반환값은 언제나 하나다
//만약 return 값을 주고싶으면 배열로 저장하여 배열 순번을 불러오면 가능하다.
//대신 배열로 저장하면 순번이 바뀌면 결과도 바뀌기 때문에 객체로 사용하는 것이 좋다.
//변수는 2회 이상 사용할때 쓰는 것이 좋다

function arithmeticOperate(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return {
    add: addResult,
    sub: subResult,
    multi: multiResult,
    div: divResult,
    other: subResult ** divResult,
  };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

var r4 = arithmeticOperate(5, 3).multi;
