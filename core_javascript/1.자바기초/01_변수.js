var result; //  변수 선언 , 저장소를 만든다

result = 10 + 20; //값을 변수에 할당(대입)
// '=' 우항에있는 값을 좌항에 있는 값을 저장해라 라는 말이다

var multiple = result * 3;
console.log(multiple);

//변수 선언 언어 : var,let,const
//  변수 선언 방법 : var 변수명

var fruit;
fruit = "자몽";
console.log(fruit);
//undefined :값을

//변수의 초기화는 값을 넣는다는 말이다. 지우는 말이 아니다!
// 초기화할때는 var를 붙이는게 아니다.
var food = "볶음밥";
food = "돈까스";
console.log(food);

//변수 이름 규칙
var 숫자number; //숫자가 앞에있으면 안된다
var num7ber; //숫자가 중간이나 끝에 있는건 된다
//var user mane; //띄어쓰기 하면 안된다
var current_login_user_phone_number; //snake case (all 대문자이면 사용 가능)
var currentLoginUserPhoneNumber; //camel case (js에는 이 표기법으로 띄어쓰기 해야한다)

var apple;
var APPLE;
var Apple; //셋다 다른 변수이다. 독립된 저장공간

//$, _ 이 특수 문자는 사용가능하지만 나머지 특수 문자는 사용 불가능

//var for; //변수 이름  불가능!!

//상수//

const $orange = "#ffa808"; //영원히 이 값이야.
console.log($orange);
