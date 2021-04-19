const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInPut = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "";

function paintToDo(textgogo) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = textgogo;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInPut.value;
  paintToDo(currentValue);
  toDoInPut.value = "";
}

function loadToDo() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
