const toDoCalendar = TO_DO_SCREEN.querySelector(".titles__header h3");
const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do-list__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do-list__list");

// TODO: Add a check button -> strikethrough
// TODO: Calendar
// TODO: If todo input is long, insert line breaks? (or put limit to char count)

function deleteTodo(event) {
  const toDo = event.target.parentElement;
  toDo.remove();
}

function showToDo(newToDo) {
  const li = document.createElement("li");
  li.classList.add("list__to-do");

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";

  deleteButton.addEventListener(CLICK_EVENT, deleteTodo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.innerText = newToDo;

  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoForm.reset();
  showToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
