// TODO: When log in form is visible, disable clicking on nav bar

const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const settingButton = navigationBar.querySelector("div li:last-child button");

let isOnHomeScreen = true;
let isOnSettingScreen = false;

function _switchScreens(currentScreen, newScreen) {
  fadeOut(currentScreen, false);

  setTimeout(() => {
    fadeIn(newScreen, false);
  }, TRANSITION_DURATION);

  [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];
}

function switchScreens(isHomeClicked, isSettingClicked) {
  if (isHomeClicked && isOnSettingScreen) {
    _switchScreens(settingScreen, homeScreen);
  }

  if (isSettingClicked && isOnHomeScreen) {
    _switchScreens(homeScreen, settingScreen);
  }
}

function handleSettingClick() {
  switchScreens(false, true);
}

function handleHomeClick() {
  switchScreens(true, false);
}

homeButton.addEventListener("click", handleHomeClick);
settingButton.addEventListener("click", handleSettingClick);
