const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__sign-in"
);
const loginInput = loginForm.querySelector(".js-sign-in__input");

const loginMessage = loginForm.querySelector(".js-sign-in__message");

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

  enableButtons();

  fadeOut(loginFormBackground, { isSlow: true, isAfterIn: true });
  fadeOut(loginForm, { isSlow: true, isAfterOut: true });

  const inputUsername = loginInput.value.trim();

  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

function changeMessage(event, message) {
  loginInput.addEventListener(event, () => {
    fadeOut(loginMessage, { isAfterIn: true });

    setTimeout(() => {
      loginMessage.innerText = message;
      fadeIn(loginMessage, { isAfterOut: true });
    }, TRANSITION_DURATION);
  });
}

function askForUsername() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    setTimeout(() => {
      fadeIn(loginFormBackground, { isSlow: true });
      fadeIn(loginForm, { isSlow: true });

      changeMessage("focus", "Press 'Enter' to confirm");
      changeMessage("blur", "You can always change it later.");
    }, TRANSITION_DURATION);

    loginForm.addEventListener("submit", handleLogInSubmit);
  } else {
    enableButtons();
    GREETING.innerText = `Hello, ${savedUsername}!`;
  }
}

askForUsername();
