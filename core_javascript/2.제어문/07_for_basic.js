var i = 1;
while (i <= 5) {
  console.log("hello");
  i++;
}

console.log("======================================");
for (var i = 1; i <= 5; i++) {
  console.log("hello");
}

// for(begin ; end; step)

//1~10 누적합
var total = 0;
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);
