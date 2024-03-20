//특정 상황에서 if 대신 사용이 가능하다. 더 간결하다.

var season = prompt("선호하는 계절을 입력하세요!");

//조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야함 )
switch (season) {
  case "봄":
  case "spring": // 봄 또는 spring
    console.log("봄에는 여의도로 가세요");
    break;
  case "여름":
  case "summer":
    console.log("여름에는 바다로 가세요");
    break;
  case "가을":
  case "fall":
    console.log("가을에는 북한산으로 가세요");
    break;
  case "겨울":
  case "winter":
    console.log("겨울에는 스키장으로 가세요");
  default: //다른 단어를 입력했을때 나오는 문구
    alert("봄, 여름, 가을, 겨울 중 하나를 입력하세요!");
}
