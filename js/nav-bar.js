const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const settingButton = navigationBar.querySelector("div li:last-child button");

// TODO: When log in form is visible, disable clicking on nav bar

let isOnHomeScreen = true;
let isOnSettingScreen = false;

function _switchScreens(currentScreen, newScreen) {
  currentScreen.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    currentScreen.classList.add(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION - 100);
  newScreen.classList.add(APPEAR_CLASSNAME);
  setTimeout(() => {
    newScreen.classList.remove(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION);

  [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];

  // Cleans up transition class names
  setTimeout(() => {
    currentScreen.classList.remove(DISAPPEAR_CLASSNAME);
    newScreen.classList.remove(APPEAR_CLASSNAME);
  }, TRANSITION_DURATION * 2);
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
