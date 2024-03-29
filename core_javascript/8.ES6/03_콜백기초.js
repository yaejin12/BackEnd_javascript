//어떤 계산을 하는 함수
//나한테 식을 써서 보내 ~  코드를 파라미터화 하고싶음 -> 함수한테 함수는 보낼 수 있음

function operate(param) {
  console.log(`param: ${param}`);

  console.log("계산기 작동!!");
  const n1 = 10,
    n2 = 20;
  const result = param(n1, n2);
  return result;
}
const abc = "123";

function add(n1, n2) {
  return n1 + n2;
}

//operate(add(3, 8)); // 숫자 8을 넣는 것
//operate(add); // 함수 통째로 보내는 것
//operate 호출 -> 이름이 없는 함수가 위에 함수 pram으로 호출했다
operate(function (n1, n2) {
  return n1 + n2;
});
console.log(`result: ${result}`);
