var Quiz = +prompt(`즐겁게 문제를 푸시다가 지겨우면 그만 적으세요`);
var QNumber = 1;
var mScore = 0;
var pulsScore = 0;

while (true) {
  var random1 = Math.floor(Math.random() * 10) + 1;
  var random2 = Math.floor(Math.random() * 10) + 1;
  var qMath = Math.floor(Math.random() * 3) + 1;

  //random1 > random2 하는 방법 //콜라병이라고 생각하면 쉽다.
  if (random1 < random2) {
    var temp = random1;
    random1 = random2;
    random2 = random1;
  }

  //사칙연산 기호
  var symbol;
  if (qMath === 1) {
    symbol = "+";
    realAnswer = random1 + random2;
  } else if (qMath === 2) {
    symbol = "-";
    realAnswer = random1 - random2;
  }
  if (qMath === 3) {
    symbol = "x";
    realAnswer = random1 * random2;
  }

  var myAnswer = prompt(`Q${QNumber++}. ${random1} ${symbol} ${random2} = ??`);

  if (myAnswer === "그만") break;

  if (+myAnswer !== realAnswer) {
    alert(`정답이 아닙니다.`);
    mScore++;
  } else {
    alert(`정답입니다.`);
    pulsScore++;
  }
}
alert(`사칙연산을 종료합니다.
\n틀린 갯수는 ${mScore}, 정답은 ${pulsScore} 입니다`);
