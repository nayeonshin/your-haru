const setting = document.querySelector(".js-background__setting");
const renameForm = setting.querySelector(".js-setting__rename");
const renameInput = renameForm.querySelector(".js-rename__input");
const twentyFourSwitch = setting.querySelector(
  ".js-twenty-four-hour__toggle .js-toggle__switch"
);
const darkThemeSwitch = setting.querySelector(
  ".js-dark-theme__toggle .js-toggle__switch"
);
const leftMenuSwitch = setting.querySelector(
  ".js-left-menu__toggle .js-toggle__switch"
);
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
}

renameForm.addEventListener("submit", handleRenameSubmit);
twentyFourSwitch.addEventListener(CLICK_EVENT, handleTwentyFourClick);
darkThemeSwitch.addEventListener(CLICK_EVENT, handleDarkThemeClick);
leftMenuSwitch.addEventListener(CLICK_EVENT, handleLeftMenuClick);
resetButton.addEventListener(CLICK_EVENT, handleResetClick);
