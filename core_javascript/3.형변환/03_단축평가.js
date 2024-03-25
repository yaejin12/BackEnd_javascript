true && true; //t
true && false; //f
false && true; //f
false && false; //f

true || true; //t
true || false; //t
false || true; //t
false || false; //f

//or연산 : 첫번째 truthy를 반환
console.log("hello" || "bye");
console.log(null || "안뇽");

console.log("====================================");

//and연산: 첫번째 falsy 를 반환
console.log("메롱" && "즐~~");
console.log(0 && "룰루랄랄");

if (조건) {
  alert("haHa");
}

조건 && alert("haHa"); //조건이 참이라서 haHa를 출력
/*
<h1>안녕하세요</h1>
login && <h2>xxx님 환영합니다</h2>

쿠폰당첨여부 && sendCoupon();
내게시물여부 && <button>삭제</button>

!쿠폰당첨여부 && sendMessage();
*/
