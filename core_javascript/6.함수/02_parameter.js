//파라미터
//x부터 y까지의 누적합을 구해야 함

//x~y까지의 누적합 구하기

function calcRangeTotal(x, y) {
  //매개변수란 (x, y)쓰는 놈이 var 가지고 와
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  }
  return total;
}
var result1 = calcRangeTotal(1, 10);
console.log(result1);

var result2 = calcRangeTotal(5, 10);
console.log(result2);

//매개변수의 기본값
function sayHello(language = "한국어") {
  // (language = "한국어") => 아무것도 안넣으면 한국어

  switch (language) {
    case "한국어":
      console.log("안녕하세여");
      break;
    case "영어":
      console.log("헬로");
      break;
    case "중국어":
      console.log("따쟈하오");
      break;
    case "일본어":
      console.log("곤니찌와");
      break;
    default:
      console.log("우가우가");
  }
}

sayHello("중국어");
sayHello();

//매개변수가 없는 함수

function selectRandomPet(n) {
  var pets = ["멈멍이", "냐옹이", "짹짹이", "고라니"];
  var rn = Math.floor(Math.random() * pets.length);
  return pets[rn];
}

var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);
