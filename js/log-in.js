const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__log-in"
);
const loginInput = loginForm.querySelector(".js-log-in__input");

function showGreeting(username) {
  setTimeout(() => {
    fadeOut(GREETING);

    setTimeout(() => {
      GREETING.innerText = `Hello, ${username}!`;
      fadeIn(GREETING, { isAfterOut: true });
    }, TRANSITION_DURATION);
  }, TRANSITION_DURATION);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing

  fadeOut(loginFormBackground, { isSlow: true, isAfterIn: true });
  fadeOut(loginForm, { isSlow: true, isAfterOut: true });

  const inputUsername = loginInput.value;

  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

function askForUsername() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    setTimeout(() => {
      fadeIn(loginFormBackground, { isSlow: true });
      fadeIn(loginForm, { isSlow: true });
    }, TRANSITION_DURATION);

    loginForm.addEventListener("submit", handleLogInSubmit);
  } else {
    GREETING.innerText = `Hello, ${savedUsername}!`;
  }
}

askForUsername();
