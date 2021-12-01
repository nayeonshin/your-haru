const setting = document.querySelector(".js-background__setting");
const renameForm = setting.querySelector(".js-setting__rename");
const renameInput = renameForm.querySelector(".js-rename__input");
const successModal = setting.querySelector(".setting__modal");

const twentyFourSwitch = setting.querySelector(
  ".js-twenty-four-hour__toggle .js-toggle__switch"
);
const darkThemeSwitch = setting.querySelector(
  ".js-dark-theme__toggle .js-toggle__switch"
);
const leftMenuSwitch = setting.querySelector(
  ".js-left-menu__toggle .js-toggle__switch"
);
// TODO: Implement reset feature after completing to-do list
const resetButton = setting.querySelector(".js-reset__button");

const CLICK_EVENT = "click";

function handleResetClick(event) {
  event.preventDefault();
}

function handleLeftMenuClick() {}

function handleDarkThemeClick() {}

function handleTwentyFourClick() {}

function handleRenameSubmit(event) {
  event.preventDefault();
  newUsername = renameInput.value;
  localStorage.setItem(USERNAME_KEY, newUsername);
  GREETING.innerText = `Hello, ${newUsername}!`;
  renameForm.reset();

  const firstAsync = TRANSITION_DURATION / 2;
  setTimeout(() => {
    successModal.classList.add(APPEAR_CLASSNAME);
    successModal.classList.remove(HIDDEN_CLASSNAME);
  }, firstAsync);
  setTimeout(() => {
    successModal.classList.add(DISAPPEAR_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 2); // Waits a little more
  setTimeout(() => {
    successModal.classList.add(HIDDEN_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 3 - 100);

  setTimeout(() => {
    successModal.classList.remove(APPEAR_CLASSNAME);
    successModal.classList.remove(DISAPPEAR_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 3);
}

renameForm.addEventListener("submit", handleRenameSubmit);
twentyFourSwitch.addEventListener(CLICK_EVENT, handleTwentyFourClick);
darkThemeSwitch.addEventListener(CLICK_EVENT, handleDarkThemeClick);
leftMenuSwitch.addEventListener(CLICK_EVENT, handleLeftMenuClick);
resetButton.addEventListener(CLICK_EVENT, handleResetClick);
