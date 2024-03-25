var n1 = 10; //숫자
var n2 = "20"; //문자

console.log(n1 + n2);

var n3 = n1 + ""; //
console.log(typeof n3);

var n4 = n2 - n1;
console.log(n4); // 암묵적으로 문자가 숫자로 변환한다

var n6 = "hello" * 3;
console.log(n6); //NAN -> NOT A Number

console.log("=========================================");

var n7 = +"99"; //+를 쓰면 숫자로 인식하는 이유!!!!
/*
console.log(true + true); //논리랑 논리랑 더한다?
console.log(false + false); //논리랑 논리랑 더한다?

true = 1
false = 0 
으로 인식한다
*/

console.log("=========================================");

// falsy : 0, '', null, undefined, NaN ->외우기, 이 것 빼고는 다 true

if (true) console.log("hello-1");
if (false) console.log("hello-2");
if (0) console.log("hello-3");
if ("") console.log("hello-4");
if (null) console.log("hello-5");
if (undefined) console.log("hello-6");
if (NaN) console.log("hello-7");

if (99) console.log("hello-8"); //true 로 판단하여 출력된다. 0이 아닌 모든 숫자는 출력된다
if (`알룡?`) console.log("hello-9"); //true
if (" ") console.log("hello-10"); //true
if ([10, 20, 30]) console.log("hello-11"); //true
if ([]) console.log("hello-12"); //true
if (function () {}) console.log("hello-13"); //true

for (var i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 홀수입니다`);
  } else {
    console.log(`${i}는 짝수입니다`);
  }
}

var apple = 10;
if (apple > 0) {
  //꼭 apple > 0 이렇게 표현하지 않고 1,0 으로 표현할 수 있다, 또는 apple
  console.log(`사과가 있습니다`);
} else {
  console.log`사과가 없습니다`();
}

var n = 20;
var flag = n > 10;

if (flag) {
} //true
if (!flag) {
} //false
