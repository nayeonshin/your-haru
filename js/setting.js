const setting = document.querySelector(".js-background__setting");
const renameInput = setting.querySelector(".rename__input");
const twentyFourSwitch = setting.querySelector(
  ".twenty-four-hour__toggle .toggle__switch"
);
const darkThemeSwitch = setting.querySelector(
  ".dark-theme__toggle .toggle__switch"
);
const leftMenuSwitch = setting.querySelector(
  ".left-menu__toggle .toggle__switch"
);
const resetButton = setting.querySelector(".reset__button");

const CLICK_EVENT = "click";

// console.dir(twentyFourSwitch);

function handleResetClick(event) {
  event.preventDefault();
}

function handleLeftMenuClick() {}

function handleDarkThemeClick() {}

function handleTwentyFourClick() {}

function handleRenameSubmit(event) {
  console.log("here!");
  //   event.preventDefault();
}

renameInput.addEventListener("submit", handleRenameSubmit);
twentyFourSwitch.addEventListener(CLICK_EVENT, handleTwentyFourClick);
darkThemeSwitch.addEventListener(CLICK_EVENT, handleDarkThemeClick);
leftMenuSwitch.addEventListener(CLICK_EVENT, handleLeftMenuClick);
resetButton.addEventListener(CLICK_EVENT, handleResetClick);
