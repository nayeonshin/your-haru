const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do-list__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do-list__list");

// TODO: Add a check button -> strikethrough

function showToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoForm.reset();
  showToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
