var x = 99; //global scope: 전역 변수

function foo() {
  var x = "홍길동"; //local scope : 지역 변수 //함수 호출이 지나면 지워진다
  return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y:  ${y}`);

console.log("======================================================");

//중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  //m도 지역변수이다
  var n = "outer local n";
  var v = "outer local v";
}

outer("outer");
