var random = Math.floor(Math.random() * 10) + 1;
var countdoun = 5;

while (true) {
  var number = +prompt(`1 ~10 사이의 숫자를 ${countdoun--}번 안에 맞춰보세요`);
  if (number < random) {
    alert("UP!");
  } else if (number > random) {
    alert("Down!");
  } else break;

  if (countdoun <= 0) {
    alert(`기회가 모두 소진되었습니다. 정답은 ${random}입니다`);
  }
}
alert(`짝짝짝!! ${random} 정답입니다`);
