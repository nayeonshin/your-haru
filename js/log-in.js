const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__log-in"
);
const loginInput = loginForm.querySelector(".js-log-in__input");

function showGreeting(username) {
  setTimeout(() => {
    GREETING.classList.add(HIDDEN_CLASSNAME);

    setTimeout(() => {
      GREETING.innerText = `Hello, ${username}!`;
      GREETING.classList.remove(HIDDEN_CLASSNAME);
      GREETING.classList.add(VISIBLE_CLASSNAME);
    }, TRANSITION_DURATION);
  }, TRANSITION_DURATION);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing

  loginFormBackground.classList.remove(VISIBLE_CLASSNAME);
  loginFormBackground.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(VISIBLE_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const inputUsername = loginInput.value;

  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

function askForUsername() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    setTimeout(() => {
      loginFormBackground.classList.add(VISIBLE_CLASSNAME);
      loginFormBackground.classList.add(SLOW_CLASSNAME);
      loginForm.classList.add(VISIBLE_CLASSNAME);
      loginForm.classList.add(SLOW_CLASSNAME);
    }, 500);

    loginForm.addEventListener("submit", handleLogInSubmit);
  } else {
    GREETING.innerText = `Hello, ${savedUsername}!`;
  }
}

askForUsername();
