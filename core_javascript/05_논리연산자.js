var t = true,
  f = false;

//and 연사  :논리합 - &&    /로그인을 생각하면 쉽다
console.log(t && t); //t
console.log(t && f); //f
console.log(f && t); //f
console.log(f && f); //f

//or 연산 : 논리곱 - ||
console.log("=========================");
console.log(t || t); //t
console.log(t || f); //t
console.log(f || t); //t
console.log(f || f); //f

//not연산 : 논리반전 - !

console.log("=========================");
console.log(!t); //f

var money = 1000;
if (!money) {
  console.log("나는 돈이 있어요!");
} else {
  console.log("나는 빈털털이에여");
}
