// 전역변수--------------------------------------------------------

const todos = [
  {
    id: 1,
    text: "할 일 1",
    done: false,
  },
  {
    id: 2,
    text: "할 일 2",
    done: false,
  },
  {
    id: 3,
    text: "할 일 3",
    done: false,
  },
];

//함수정의 영역----------------------------------------------------

//마크업 형성
function addTodoList() {
  //입력한 값을 가져와!
  const $addInputText = document.getElementById("todo-text");
  const inputTextValue = $addInputText.value;
  const $newLi = document.createElement("li");
  $newLi.classList.add("todo-list-item");
  $newLi.dataset.id = todos.length + 1;

  $newLi.innerHTML = ` <label class="checkbox">
  <input type="checkbox" />
  <span class="text">${inputTextValue}</span>
  </label>
  <div class="modify">
  <span class="lnr lnr-undo"></span>
  </div>
  <div class="remove">
  <span class="lnr lnr-cross-circle"></span>
  </div>`;
  document.querySelector(".todo-list").appendChild($newLi);
  //console.log($newLi);

  const newObj = {
    id: todos.length + 1,
    text: inputTextValue,
    done: false,
  };

  todos.push(newObj);
}

//함수 실행--------------------------------------------------------

//add 누르면 마크업 형성과 일정 추가
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); //form의 서버를 전달하지 않음
  addTodoList();
});
 
//remove 누르면 삭제
document.querySelector(".todo-list").addEventListener("click", (e) => {
  const li = e.target.closest(".todo-list-item");
  const liId = li.dataset.id;
  //console.log(liId);
  if (e.target.matches(".remove span")) {
    todos.splice(liId - 1, 1);

    li.remove();
  } else if (e.target.matches(".checkbox input[type=checkbox]")) {
    //체크박스 클릭시 글씨 클래서 추가 label .checked

    //////////////////////////
    //왜 add가 아닌 toggle인지!궁금해!
    e.target.closest(".checkbox").classList.toggle("checked");

    //////////////////////////
    //데이터 done = true로 바꾸기// 잘 바꼈는지 모르겠다
    const todo = todos.find((todo) => todo.id === liId);
    if (todo) {
      todo.done = !todo.done;
    }
  } else if (e.target.matches(".modify span")) {
    //lnr-checkmark-circle 아이콘이 있는지 확인
    const $lnrCheckmarkIcon = li
      .querySelector(".modify span")
      .classList.contains(".lnr-checkmark-circle");

    //lnr-checkmark-circle 아이콘 변경
    e.target.classList.toggle("lnr-checkmark-circle");
    //span을 input으로 변경
    if (!$lnrCheckmarkIcon) {
      const $newInput = document.createElement("input");
      $newInput.classList.add("modify-input");
      const $spanText = li.querySelector("span.text");
      li.querySelector("label.checkbox").replaceChild($newInput, $spanText);
    } else {
      const $newInput = li.querySelector(".modify-input");
      const $newSpan = document.createElement("span");
      $newSpan.classList.add("text");
      console.log(li.querySelector("label.checkbox"));

      li.querySelector("label.checkbox").replaceChild($newSpan, $newInput);
    }
  }
});
