const food = "돈까스";
const userName = "스윙스";

console.log(`${food}의 왕 ${userName}`);

//브라우저 전용합수 : nodejs환경에서는 작동 불가
//prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
// alert() : 브라우저에서 알림창을 띄우는 함수

// var yourName = prompt(`당신의 이름을 입력하세요`);
// alert(`입력한 이름 : ${yourName}`);

// var resultFlag = confirm("혹시 얼마있니? 다 내놔");
// console.log(`나의 대답: ${resultFlag}`);

var n1 = +prompt("첫번째 수를 입력하세요"); //+prompt : + 를 붙이면 숫자로 인식한다
var n2 = +prompt("두번째 수를 입력하세요");

alert(`두수의 합: ${안녕 + 하세요}`); //안녕하세요로 출력된다 -> 그이유는 문자로 인식했기 때문에
alert(typeof n1);
alert(`두수의 합: ${n1 + n2}`);
