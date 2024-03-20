var num = 27;
console.log(typeof num);

console.log(num / 5);

var foodName = "깐풍기";

var foodName = num;
console.log(foodName);

var element = "<nav>\n\t<ul><li>딸기</li></ul></nav>";
console.log(element);

var elem = `
<nav>
  <ul>
    <li>딸기</li>
  </ul>
</nav>
  `;

console.log(elem);

console.log("=========================");

var month = 4;
var day = 5;
var anni = "식목일";
var sentence = month + "월 " + day + "일은 " + anni + "입니다.";
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`; // ``사용하면 편하게 사용가능
console.log(sentence2);

//boolean : 논리
var userAge = 30;

var flag = userAge > 19;
console.log(typeof flag);

//undefined : 아직 값이 없는 상태 (고의로 값을 안넣은게 아님, 아직 안넣은거임)
var petName;
console.log(petName); //undefined 뜬다

//null : 일부러 값을 없앤 상태 (고의로 값을 없앰, 데이터가 없는 것.)
var myHobby = "산책";
myHobby = null;
