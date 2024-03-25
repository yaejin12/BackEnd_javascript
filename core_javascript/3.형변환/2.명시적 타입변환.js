// 문자를 숫자로 바꾸는 방법

var x = "30",
  y = "40";

var result1 = Number(x) + Number(y);
var result2 = parseInt(x) + parseInt(y); //주의사항 만약 문자를 숫자로 바꿀때 정수로 바꾼다. 소수점이면 소수점을 버림.//parseDouble을 사용하면 소수점을 지킬 수 있음.
var result3 = +x + +y;
console.log(result1);
console.log(result2);
console.log(result3);

//제일 쉬운 방법

var m = "" + 10 + 20;
console.log(m);

var f = "" + false;

console.log("=================================================");

console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(!!999);
console.log(!!undefined);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem("LOGIN_ACCESS_TOKEN");
}

const isLogin = () => !!window.localStorage.getItem("LOGIN_ACCESS_TOKEN");
