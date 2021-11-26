const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleLogInSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLogInSubmit);
