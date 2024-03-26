// 객체 생성
//객체는 순서가 상관없을때 사용
// 우리 집 강아지 정보 저장
var name = "뽀삐";
var kind = "진돗개";
var age = 3;
var injection = true;
var favorite = ["산책", "간식"];
var bark = () => console.log("왈왈!");

var dog = [
  "뽀삐",
  "진돗개",
  3,
  true,
  ["산책", "간식"],
  () => console.log("왈왈!"),
];

var dog = {
  name: "뽀삐",
  kind: "진돗개",
  age: 3,
  injection: true,
  favorite: ["산책", "간식"],
  bark: () => console.log("왈왈!"),
};

console.log(dog.name);
console.log(dog.favorite); // 이름으로 불러내는 거라서 순서가 바뀌어도 상관없다

// 우리 집 고양이 정보 저장
var cat = {
  name: "냥냥",
  kind: "코숏",
  age: 2,
  injection: true,
  favorite: ["낮잠", "놀기"],
  bark: () => console.log("냐옹!"),
};

console.log(cat.name);
console.log(cat.favorite);

//객체 안에 객체를 작성 가능하다
/*
var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: "abc",
    닉네임: "깜찍이",
    가입일자: "2023-12-12",
  },
  글내용: "아아아아아",
};
console.log(게시판글.작성자.닉네임);


console.log("=================================");
//객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.favorite[1]); //favorite은 배열이라 [1]번째 취미를 불러 올 수 있다

//데이터 타입: 어떤 데이터가 할 수 있는 일을 정의
//하단 예시처럼 그타입의 명령어를 사용 가능
dog.age++; //가능, 왜? age는 숫자이기때문에
!dog.injection; //가능 왜? injection 은 논리이기때문에
dog.favorite.push("꼬리흔들기"); //가능 왜? favorite은 배열이기때문에

//응용
dog.favorite.slice(0).splice(1, 1); //slice는 원본에 영향이 안가고 사본에 적용되기때문에
console.log(dag.favorite);

console.log("=================================");

// 객체를 참조하는 두번째 방법
var key = "name";
console.log(dog.name);
console.log(dog["name"]);
console.log(dog[key]);
// console.log(dog[name]);

*/
console.log("=================================");
//프로퍼티 수정  (기존에 있는 key로 접근)
dog.age = 4;
cat.favorite[1] = "실뭉치";
console.log(dog);
console.log(cat);

console.log("=================================");
//프로퍼티 동적 추가 (기존에 없는 key로 접근)
cat.friend = "철수";

console.log("=================================");
//프로퍼티 삭제
delete cat.hate;
delete cat.friend;
console.log(dog);
console.log(cat);
