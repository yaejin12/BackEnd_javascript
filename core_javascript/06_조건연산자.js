var money = 3000;

var food = money >= 8000 ? "돈까스" : "라면";
console.log(`선택한 음식: ${food}`);

// 같은 코드

var food;
if (money >= 8000) {
  food = "돈까스";
} else {
  food = "라면";
}
