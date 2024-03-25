var foodList = ["닭꼬치", "볶음밥", "짜장면", "족발"];

//indexof(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = "짜장면";
var index = foodList.indexOf(target);
console.log(`${index}`);

/*위 함수를 풀어 쓴다면
for (var i = 0; i < foodList.length; i++) {
  if (target === foodList[i]) {
    index = i;
    break;
  }
}
*/
console.log("=================================================");
//include(): 특정 데이터가 있는지 없는지 논리로 확인 (true, false로 알려준다)
var flag = foodList.includes("족발");
console.log(`flag: ${flag}`);

//slice(): 배열을 원하는 범위만큼 추출
var sliced = foodList.slice(0, 4);
console.log(sliced);
var slice2 = foodList.slice(2); //2~끝까지
console.log(slice2);

// 전체 복사
var sliced3 = foodList.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음
console.log(foodList);

// reverse(): 배열을 역정렬
// 원본이 변경됨
console.log("=================================================");
var nums = [10, 20, 30, 40, 50];
var numsCopy = nums.slice(); // 카피본 생성

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

// concat() : 배열을 결합한 사본을 갖다줌
console.log("==================");
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);

//splice(): 배열의 삭제 및 삽입 , 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
console.log("=====================================");

console.log(foodList);
foodList.splice(1, 2, "파스타", "보쌈"); //1번 인덱스부터 2개 지우세요. 그리고 '파스타' 추가
console.log(foodList);

foodList.splice(2, 0, "마라탕"); // 2번 자리에 0 안지우고, 마라탕을 삽입한다
console.log(foodList);

foodList.splice(2); //2번부터 끝까지 싹 지워라
console.log(foodList);
