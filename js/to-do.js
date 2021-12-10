const toDoCalendar = TO_DO_SCREEN.querySelector(".titles__header h3");
const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do-list__form");
const toDoCounter = toDoForm.querySelector(".js-form__counter");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do-list__list");

const TODOS_KEY = "to-dos";

let toDos = [];

// TODO: Strikethrough transition

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function updateCounter() {
  const toDoCount = String(toDos.length).padStart(2, "0");

  const checkedToDos = toDos.filter((toDo) => toDo.isChecked === true);
  const checkedCount = String(checkedToDos.length).padStart(2, "0");

  toDoCounter.innerText = `${checkedCount}/${toDoCount} Done`;
}

function deleteTodo(event) {
  const li = event.target.parentElement;

  fadeOut(li, { isAfterIn: true }); // Is always after fading in
  setTimeout(() => {
    li.remove();
  }, TRANSITION_DURATION);

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();

  updateCounter();
}

function showToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.classList.add("list__to-do");

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";

  deleteButton.addEventListener(CLICK_EVENT, deleteTodo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const toDo = toDos[toDos.findIndex((toDo) => toDo.id === parseInt(li.id))];
  if (toDo.isChecked) {
    checkbox.checked = true;
    span.classList.add(CHECKED_CLASSNAME);
  }

  checkbox.addEventListener(CLICK_EVENT, function () {
    span.classList.toggle(CHECKED_CLASSNAME);

    if (toDo.isChecked) {
      toDo.isChecked = false;
    } else {
      toDo.isChecked = true;
    }

    updateCounter();
    saveToDos();
  });

  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  li.appendChild(span);

  toDoList.appendChild(li);
  li.classList.add(HIDDEN_CLASSNAME);
  setTimeout(() => {
    fadeIn(li, { isAfterOut: true }); // true removes .hidden
  }, 10);

  updateCounter();
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const toDoText = toDoInput.value;
  toDoForm.reset();

  const toDo = {
    id: Date.now(),
    text: toDoText,
  };
  toDos.push(toDo);
  showToDo(toDo);
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

    updateCounter();
  }
}

setTimeout(() => {
  updateCalendar(new Date(), { isToDoCalendar: true }); // In time.js
}, 1000);

showSavedToDos();

toDoForm.addEventListener("submit", handleToDoSubmit);
