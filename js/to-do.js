const toDoCalendar = TO_DO_SCREEN.querySelector(".titles__header h3");
const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do-list__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do-list__list");

const TODOS_KEY = "to-dos";

let toDos = [];

// TODO: Add a check button -> strikethrough
// TODO: Transition on removing and adding to-dos

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const toDo = event.target.parentElement;
  toDo.remove();
}

function showToDo(newToDo) {
  const li = document.createElement("li");
  li.classList.add("list__to-do");

  const span = document.createElement("span");
  span.innerText = newToDo;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";

  deleteButton.addEventListener(CLICK_EVENT, deleteTodo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", function () {
    span.classList.toggle("checked");
  });

  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoForm.reset();

  toDos.push(newToDo);
  showToDo(newToDo);
  saveToDos();
}

function showSavedToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((toDo) => {
      showToDo(toDo);
    });
  }
}

showSavedToDos();

toDoCalendar.innerText = CALENDAR;
toDoForm.addEventListener("submit", handleToDoSubmit);
