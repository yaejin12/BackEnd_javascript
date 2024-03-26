var phone = {
  company: "삼성",
  color: "펄 화이트",
  model: "갤럭시 S24",
  price: "120,000",
};

//오른쪽 :객체를 적어줌 왼쪽: 저장소
//값이 아닌 키가 반복됨
//객체는 반복문을 잘 쓰지는 않는다
for (var date in phone) {
  console.log(phone[date]); //[]사용해야한다
}

//객체 프로퍼티 유무 확인
//phone에 새로운 프로퍼티 추가하고 싶음. 메모리가 있으면 추가하지말고 .
console.log("memory" in phone); // 폰 안에 메모리가 있나요?

if (!("memory" in phone)) {
  phone.memory = "32GB";
}

console.log(phone);

//같은 문법 var로 변경해보기
var newkey = "memory";
if (!(newkey in phone)) {
  phone[newkey] = "32GB";
}

console.log(phone);
