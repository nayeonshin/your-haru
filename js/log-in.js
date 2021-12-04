const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__log-in"
);
const loginInput = loginForm.querySelector(".js-log-in__input");

function showGreeting(username) {
  setTimeout(() => {
    GREETING.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(() => {
      GREETING.classList.add(HIDDEN_CLASSNAME);
      GREETING.classList.remove(DISAPPEAR_CLASSNAME);
      GREETING.innerText = `Hello, ${username}!`;
      fadeIn(GREETING, false);
    }, TRANSITION_DURATION);

    setTimeout(() => {
      GREETING.classList.remove(APPEAR_CLASSNAME);
    }, TRANSITION_DURATION * 2);
  }, TRANSITION_DURATION);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing

  fadeOut(loginFormBackground, true);
  fadeOut(loginForm, true);

  const inputUsername = loginInput.value;

  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

function askForUsername() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    setTimeout(() => {
      fadeIn(loginFormBackground, true);
      fadeIn(loginForm, true);
    }, TRANSITION_DURATION * 2 - 100);

    loginForm.addEventListener("submit", handleLogInSubmit);
  } else {
    GREETING.innerText = `Hello, ${savedUsername}!`;
  }
}

askForUsername();
