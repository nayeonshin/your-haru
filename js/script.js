const loginFormBackground = document.querySelector(".form-background");
const loginForm = loginFormBackground.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing
  loginFormBackground.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginFormBackground.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLogInSubmit);
} else {
  showGreeting(savedUsername);
}
