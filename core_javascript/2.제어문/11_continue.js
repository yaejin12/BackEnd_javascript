for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip
  console.log(i);
}
console.log("반목문 종료");

//continue 는 스킵해 라고 이해하면 쉽게 이해가 가능

for (var i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue; // skip
  console.log(i);
}
console.log("반복문 종료");

//
//
while (true) {
  var n = +prompt("숫자를 입력!");

  if (n === 0) break;
  else if (n === 1) continue;

  alert("메롱메롱");
}

alert("끝났지롱?");
