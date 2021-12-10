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

      loginInput.addEventListener("focus", () => {
        fadeOut(loginMessage, { isAfterIn: true });

        setTimeout(() => {
          loginMessage.innerText = "Press 'Enter' to confirm";
          fadeIn(loginMessage, { isAfterOut: true });
        }, TRANSITION_DURATION);
      });

      loginInput.addEventListener("blur", () => {
        fadeOut(loginMessage, { isAfterIn: true });

        setTimeout(() => {
          loginMessage.innerText = "You can always change it later";
          fadeIn(loginMessage, { isAfterOut: true });
        }, TRANSITION_DURATION);
      });
    }, TRANSITION_DURATION);

    loginForm.addEventListener("submit", handleLogInSubmit);
  } else {
    enableButtons();
    GREETING.innerText = `Hello, ${savedUsername}!`;
  }
}

askForUsername();
