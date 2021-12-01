const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__log-in"
);
const loginInput = loginForm.querySelector(".js-log-in__input");

const greeting = document.querySelector(".js-background__greeting");

const USERNAME_KEY = "username";

function showGreeting(username) {
  greeting.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    greeting.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(DISAPPEAR_CLASSNAME);
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.add(APPEAR_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION - 100);

  setTimeout(() => {
    greeting.classList.remove(APPEAR_CLASSNAME);
  }, TRANSITION_DURATION * 2);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing
  loginFormBackground.classList.add(DISAPPEAR_CLASSNAME);
  loginForm.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    loginFormBackground.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION - 50);

  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  setTimeout(() => {
    loginFormBackground.classList.add(APPEAR_CLASSNAME);
    loginFormBackground.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(APPEAR_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION - 100);

  loginForm.addEventListener("submit", handleLogInSubmit);
} else {
  greeting.innerText = `Hello, ${savedUsername}!`;
}
