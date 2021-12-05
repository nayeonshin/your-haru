// TODO: When log in form is visible, disable clicking on nav bar
// TODO: Fix transition

const homeScreen = document.querySelector(".js-background main");
const toDoScreen = document.querySelector(".js-background__to-do");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const toDoButton = navigationBar.querySelector("div li:nth-child(2) button");
const settingButton = navigationBar.querySelector("div li:last-child button");

let isOnHomeScreen = true;
let isOnToDoScreen = false;
let isOnSettingScreen = false;

function _switchScreens(currentScreen, newScreen) {
  fadeOut(currentScreen, false);

  setTimeout(() => {
    fadeIn(newScreen, false);
  }, TRANSITION_DURATION);

  if (currentScreen === homeScreen) {
    isOnHomeScreen = false;
  } else if (currentScreen === toDoScreen) {
    isOnToDoScreen = false;
  } else {
    isOnSettingScreen = false;
  }
}

function switchScreens({
  isHomeClicked,
  isToDoClicked,
  isSettingClicked,
} = {}) {
  let currentScreen;

  if (isOnHomeScreen) {
    currentScreen = homeScreen;
  } else if (isOnToDoScreen) {
    currentScreen = toDoScreen;
  } else {
    currentScreen = settingScreen;
  }

  if (isHomeClicked && !isOnHomeScreen) {
    _switchScreens(currentScreen, homeScreen);
    isOnHomeScreen = true;
  }

  if (isToDoClicked && !isOnToDoScreen) {
    _switchScreens(currentScreen, toDoScreen);
    isOnToDoScreen = true;
  }

  if (isSettingClicked && !isOnSettingScreen) {
    _switchScreens(currentScreen, settingScreen);
    isOnSettingScreen = true;
  }
}

function handleSettingClick() {
  switchScreens({ isSettingClicked: true });
}

function handleToDoClick() {
  switchScreens({ isToDoClicked: true });
}

function handleHomeClick() {
  switchScreens({ isHomeClicked: true });
}

homeButton.addEventListener("click", handleHomeClick);
toDoButton.addEventListener("click", handleToDoClick);
settingButton.addEventListener("click", handleSettingClick);
