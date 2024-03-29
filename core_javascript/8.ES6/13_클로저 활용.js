/*
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
*/

// const countClosure = () => {
//   let count = 0;
//   const increase = () => ++count;
//   const decrease = () => --count;

//   return {
//     increase,
//     decrease,
//   };
// };

const { increase, decrease } = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  };
})();
// console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());

// createCounter라는 클로저함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면
// 해당 숫자부터 카운트가 증가합니다.

const counterFromFive = createCounter(5);
console.log(counterFromFive()); // 6
console.log(counterFromFive()); // 7
