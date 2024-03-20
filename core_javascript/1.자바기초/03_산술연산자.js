//js는 정수 나눗셈이어도 실수 결과값이 나옴
console.log(27 / 5);

//% : 나머지 연산
console.log(27 % 5);

//뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지, 몫은 0
console.log(4 % 10);

console.log(5 % 0); //나눗셈 불가
console.log(0 % 5); //몫과 나머지 전부 0

//제곱 연산
console.log(3 ** 4); //3의 4제곱

console.log("================================");
var x = 3;
x++; //하나 올림
++x;
x--; //하나 감소
console.log(`x: ${x}`);

//전위 연산, 후위 연산

var n1 = 10;
var n2 = n1++; //++가 뒤에 붙으면 나중에 연산된다
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
xx++;
xx *= 3;
xx /= 5;
xx **= 2; //제곱
xx %= 4; //나머지 몫
console.log(`xx: ${xx}`);

xx += 1; //xx=xx+1 단축코드
xx -= 1; //xx=xx-1 단축코드
