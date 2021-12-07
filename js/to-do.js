const toDoCalendar = TO_DO_SCREEN.querySelector(".titles__header h3");
const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do-list__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do-list__list");

// TODO: Add a check button -> strikethrough
// TODO: Calendar

function deleteTodo(event) {
  console.log(event.target);
}

function showToDo(newToDo) {
  const li = document.createElement("li");
  li.classList.add("list__to-do");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const deleteButton = document.createElement("button");
  const xImage = document.createElement("img");
  xImage.src = "img/x.png";
  deleteButton.appendChild(xImage);

  deleteButton.addEventListener(CLICK_EVENT, deleteTodo);
  xImage.addEventListener(CLICK_EVENT, deleteTodo);

  const span = document.createElement("span");
  span.innerText = newToDo;

  li.appendChild(checkbox);
  li.appendChild(deleteButton);
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
