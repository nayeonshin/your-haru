// TODO: (local storage) If on, toggle switch's slider is on the right.
// i.e. Display states from local storage

const setting = document.querySelector(".js-background__setting");
const renameForm = setting.querySelector(".js-setting__rename");
const renameInput = renameForm.querySelector(".js-rename__input");
const renameModal = setting.querySelector(".js-setting__modal");

const twentyFourToggle = setting.querySelector(".js-twenty-four-hour__toggle");
const twentyFourSwitch = twentyFourToggle.querySelector(".js-toggle__switch");

const darkThemeToggle = setting.querySelector(".js-dark-theme__toggle");
const darkThemeSwitch = darkThemeToggle.querySelector(".js-toggle__switch");
const darkBackground = document.querySelector(".js-background__darkened");

const leftMenuToggle = setting.querySelector(".js-left-menu__toggle");
const leftMenuSwitch = leftMenuToggle.querySelector(".js-toggle__switch");
const menu = document.querySelector(".js-background__navigation");

const resetButton = setting.querySelector(".js-reset__button");

const CHECKED_CLASSNAME = "checked";
const DARK_THEME_CLASSNAME = "darker";
const LEFT_MENU_CLASSNAME = "left-menu";

const CLICK_EVENT = "click";

function handleResetClick(event) {
  event.preventDefault();
}

function turnOnOrOff(key) {
  const isOn = localStorage.getItem(key) === "true";
  let shouldBeOn;
  if (isOn) {
    shouldBeOn = false;
  } else {
    shouldBeOn = true;
  }
  localStorage.setItem(key, `${shouldBeOn}`);
  return shouldBeOn;
}

function changeState(shouldChange, element, className) {
  if (shouldChange) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function handleLeftMenuClick() {
  const isTurnedOn = turnOnOrOff("isLeftMenuOn");
  changeState(isTurnedOn, menu, LEFT_MENU_CLASSNAME);
}

function handleDarkThemeClick() {
  // TODO: Fix CSS when this is off
  const isTurnedOn = turnOnOrOff("isDarkThemeOn");
  changeState(isTurnedOn, darkBackground, DARK_THEME_CLASSNAME);
}

function handleTwentyFourClick() {
  turnOnOrOff(TWENTY_FOUR_KEY);
}

function showModal(message) {
  const firstAsync = TRANSITION_DURATION / 2;
  setTimeout(() => {
    renameModal.innerText = message;
    renameModal.classList.add(APPEAR_CLASSNAME);
    renameModal.classList.remove(HIDDEN_CLASSNAME);
  }, firstAsync);
  setTimeout(() => {
    renameModal.classList.remove(HIDDEN_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION);
  setTimeout(() => {
    renameModal.classList.add(DISAPPEAR_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 2); // Waits a little more than usual
  setTimeout(() => {
    renameModal.classList.add(HIDDEN_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 3 - 100);

  setTimeout(() => {
    renameModal.classList.remove(APPEAR_CLASSNAME);
    renameModal.classList.remove(DISAPPEAR_CLASSNAME);
  }, firstAsync + TRANSITION_DURATION * 3);
}

function handleRenameSubmit(event) {
  event.preventDefault();
  const newUsername = renameInput.value;
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (newUsername === savedUsername) {
    showModal(`⚠️ Username is already "${newUsername}".`);
  } else {
    localStorage.setItem(USERNAME_KEY, newUsername);
    GREETING.innerText = `Hello, ${newUsername}!`;
    renameForm.reset();

    showModal("Username successfully changed");
  }
}

function showInitialStates() {
  const isSavedDarkThemeOn = localStorage.getItem("isDarkThemeOn");
  const isSavedLeftMenuOn = localStorage.getItem("isLeftMenuOn");
  const isDarkThemeOn = isSavedDarkThemeOn === "true";
  const isLeftMenuOn = isSavedLeftMenuOn === "true";

  changeState(isDarkThemeOn, darkBackground, DARK_THEME_CLASSNAME);
  changeState(isLeftMenuOn, menu, LEFT_MENU_CLASSNAME);

  // Toggle switches
  changeState(isDarkThemeOn, darkThemeToggle, CHECKED_CLASSNAME);
  changeState(isLeftMenuOn, leftMenuToggle, CHECKED_CLASSNAME);
}

showInitialStates();

renameForm.addEventListener("submit", handleRenameSubmit);
twentyFourSwitch.addEventListener(CLICK_EVENT, handleTwentyFourClick);
darkThemeSwitch.addEventListener(CLICK_EVENT, handleDarkThemeClick);
leftMenuSwitch.addEventListener(CLICK_EVENT, handleLeftMenuClick);
resetButton.addEventListener(CLICK_EVENT, handleResetClick);
