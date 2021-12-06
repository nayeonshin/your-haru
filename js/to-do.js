const toDoForm = TO_DO_SCREEN.querySelector(".js-to-do__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = TO_DO_SCREEN.querySelector(".js-to-do__list");

function showToDo(newToDo) {
  console.log("I will show", newToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoForm.reset();
  showToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
