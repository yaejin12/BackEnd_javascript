/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...num) {
  var totalAdd = 0;
  for (var i of num) {
    totalAdd += i;
  }
  var calcAdd = totalAdd / num.length;

  return { total: totalAdd, avg: calcAdd };
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
