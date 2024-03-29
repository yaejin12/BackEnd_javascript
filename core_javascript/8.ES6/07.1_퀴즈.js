const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },

  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];
/*
// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const add = [];
traders
  .filter((twentyTwo) => twentyTwo.year === 2022)
  .map((twentyTwo) => twentyTwo.trader)
  .forEach((result) => add.push(result));
console.log(add);

console.log("===============================================");
// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const cityAll = traders.map((user) => user.trader.city);
const check = [];
for (var i of cityAll) {
  if (!check.includes(i)) {
    check.push(i);
  }
}

console.log(check);

console.log("===============================================");

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

traders
  .filter((user) => user.trader.city === "대전")
  .map((user) => console.log(user.trader));

console.log("===============================================");
// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const all = [];
traders.map((user) => all.push(user.trader.name));
console.log(all);

console.log("===============================================");
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
let total = 0;
const findValue = traders
  .filter((user) => user.trader.city === "서울")
  .map((user) => user.value);
for (let i = 0; i < findValue.length; i++) {
  total += findValue[i];
}

console.log(`거래총액: ${total}`);

console.log("===============================================");
// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.

let valueTotal = 0;
const find = traders
  .filter((user) => user.year === 2023 && user.trader.city === "대전")
  .map((user) => user.value);

for (let i = 0; i < find.length; i++) {
  valueTotal += find[i];
}

console.log(valueTotal);

console.log("===============================================");
// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.
const bUser = traders
  .filter((find) => find.trader.city === "부산")
  .map((find) => find.trader.name);
console.log(bUser);

console.log("===============================================");
// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.//
let min = null;
const user = traders.map((high) => high.value);
user.reduce((a, b) => (min = a > b ? a : b));
console.log(min);
const findHigh = traders.filter((result) => result.value === min);

console.log(`높은 거래액 : ${findHigh[0].trader} ${findHigh[0].value}`);

console.log("===============================================");
// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.

const totalSB = {}; // { 서울: 500000, 대전: 30032030, ... }

for (const price of traders) {
  if (totalSB[price.trader.city]) {
    // 이 도시는 한번 누적된 적이 있음
    totalSB[price.trader.city] += price.value;
  } else {
    // 이 도시는 한번도 나온적이 없던 도시임
    totalSB[price.trader.city] = price.value;
  }
}
console.log(totalSB);

/*
const totalSB = traders.reduce((totalFour, price) => {
  if (price.trader.city in totalFour) {
    totalFour[price.trader.city] += price.value;
  } else {
    totalFour[price.trader.city] = price.value;
  }
  return totalFour;
}, {});

console.log(totalSB);
*/

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.

// 최종 결과 객체
const trsOver700kByYear = {};
/*
for (const trs of traders) {
  if (trs.value >= 700000) {
    // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!trsOver700kByYear[yearString]) {
      trsOver700kByYear[yearString] = [trs];
    } else {
      // 지금 거래년도가 저장되어 있다면
      trsOver700kByYear[yearString].push(trs);
    }
  }
}
console.log(JSON.stringify(trsOver700kByYear, null, 2));


//같은 문제 다른 풀이

const trsOver700kByYear = traders 
  .filter(trs => trs.value >= 700000)
  .reduce((transactions, trs) => {
    const yearString = trs.year.toString();
    if (!transactions[yearString]) transactions[yearString] = [trs];
    else transactions[yearString].push(trs);
    return transactions;
  }, {});

console.log(JSON.stringify(trsOver700kByYear, null, 2));
*/

/* 내 답
const findSeven = traders
  .filter((user) => user.value > 700000)
  .reduce((yearTotal, inFor) => {
    if (inFor.year in yearTotal) {
      yearTotal[inFor.year] += inFor;
    } else {
      yearTotal[inFor.year] = inFor;
    }
    return yearTotal;
  }, {});

console.log(JSON.stringify(findSeven));
*/
console.log("=========================================================");
// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.

const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) {
    // 이 사람이름이 처음 등장했으면
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});

// console.log(trsDataByName);

// 평균 구하기
for (const key in trsDataByName) {
  trsDataByName[key].average =
    trsDataByName[key].total / trsDataByName[key].count;
}

console.log(trsDataByName);
// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.
