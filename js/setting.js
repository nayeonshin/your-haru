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

// TODO: Try changing this with toggle()
function changeState(shouldChange, element, className) {
  if (shouldChange) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function checkIsOn(key) {
  const isOn = localStorage.getItem(key) === "true";
  const shouldBeOn = isOn ? false : true;
  localStorage.setItem(key, String(shouldBeOn));
  return shouldBeOn;
}

function handleLeftMenuClick() {
  const shouldChange = checkIsOn("isLeftMenuOn");
  changeState(shouldChange, menu, LEFT_MENU_CLASSNAME);
}

function handleDarkThemeClick() {
  const shouldChange = checkIsOn("isDarkThemeOn");
  changeState(shouldChange, darkBackground, DARK_THEME_CLASSNAME);
}

function handleTwentyFourClick() {
  const _ = checkIsOn(TWENTY_FOUR_KEY);
}

function showModal(message) {
  const firstDelay = TRANSITION_DURATION / 2;
  setTimeout(() => {
    renameModal.innerText = message;
    fadeIn(renameModal, false);
  }, firstDelay);
  // Waits a little more for the message
  setTimeout(() => {
    renameModal.classList.add(DISAPPEAR_CLASSNAME);
  }, firstDelay + TRANSITION_DURATION * 2);
  setTimeout(() => {
    renameModal.classList.add(HIDDEN_CLASSNAME);
    renameModal.classList.remove(DISAPPEAR_CLASSNAME);
  }, firstDelay + TRANSITION_DURATION * 3 - 50);
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
  const is24HourOn = localStorage.getItem("is24HourOn") === "true";
  const isDarkThemeOn = localStorage.getItem("isDarkThemeOn") === "true";
  const isLeftMenuOn = localStorage.getItem("isLeftMenuOn") === "true";

  changeState(isDarkThemeOn, darkBackground, DARK_THEME_CLASSNAME);
  changeState(isLeftMenuOn, menu, LEFT_MENU_CLASSNAME);

  if (is24HourOn) {
    twentyFourSwitch.checked = true;
  }

  if (isDarkThemeOn) {
    darkThemeSwitch.checked = true;
  }

  if (isLeftMenuOn) {
    leftMenuSwitch.checked = true;
  }
}

showInitialStates();

renameForm.addEventListener("submit", handleRenameSubmit);
twentyFourSwitch.addEventListener(CLICK_EVENT, handleTwentyFourClick);
darkThemeSwitch.addEventListener(CLICK_EVENT, handleDarkThemeClick);
leftMenuSwitch.addEventListener(CLICK_EVENT, handleLeftMenuClick);
resetButton.addEventListener(CLICK_EVENT, handleResetClick);
