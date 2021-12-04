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

  // TODO: Fix
  if (currentScreen === homeScreen) {
    if (newScreen === toDoScreen) {
      [isOnHomeScreen, isOnToDoScreen] = [isOnToDoScreen, isOnHomeScreen];
    } else {
      [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];
    }
  } else if (currentScreen === toDoScreen) {
    if (newScreen === homeScreen) {
      [isOnToDoScreen, isOnHomeScreen] = [isOnHomeScreen, isOnToDoScreen];
    } else {
      [isOnToDoScreen, isOnSettingScreen] = [isOnSettingScreen, isOnToDoScreen];
    }
  } else {
    if (newScreen === homeScreen) {
      [isOnSettingScreen, isOnHomeScreen] = [isOnHomeScreen, isOnSettingScreen];
    } else {
      [isOnSettingScreen, isOnToDoScreen] = [isOnToDoScreen, isOnSettingScreen];
    }
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
  }

  if (isToDoClicked && !isOnToDoScreen) {
    _switchScreens(currentScreen, toDoScreen);
  }

  if (isSettingClicked && !isOnSettingScreen) {
    _switchScreens(currentScreen, settingScreen);
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
