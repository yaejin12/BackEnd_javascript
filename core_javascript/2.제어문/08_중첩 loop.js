var count = 0;
for (var i = 0; i < 3; i++) {
  // 3회 반복
  for (var j = 0; j < 2; j++) {
    // 2회 반복
    console.log("메롱" + ++count);
    // console.log(`${i}, ${j}`);
  }
  console.log("냠냠" + count);
}

// 구구단 2단
// 단수
for (var level = 2; level <= 9; level++) {
  console.log(`# 구구단 ${level}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${level} x ${line} = ${level * line}`);
  }
  console.log("======================");
}

console.log("======================");
//문제

// 가로길이, 세로길이
var width = +prompt("한 변 (1): ");
var height = +prompt("한 변 (2): ");

// 사각형을 저장할 변수
var rectangle = "";

for (var i = 0; i < width; i++) {
  // .... 3번
  for (var j = 0; j < height; j++) {
    // .... 15번
    rectangle += "* ";
  }
  rectangle += "\n";
}

alert(rectangle);
