//총점과 평균 구하는 값을 구하기

var scores = [83, 99, 100, 57];
var total = 0;
/*
for (var s of scores.length){
  total += s;
 }
*/
for (var i = 0; i < scores.length; i++) {
  total += scores[i];
}

var average = total / scores.length;

console.log(`총점: ${total}점, 평균: ${average}점`);
