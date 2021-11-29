const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const settingButton = navigationBar.querySelector("div li:last-child button");

let isOnHomeScreen = true;
let isOnSettingScreen = false;

// TODO: Refactor two functions into one

function handleHomeClick() {
  if (isOnSettingScreen) {
    settingScreen.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(() => {
      settingScreen.classList.add(HIDDEN_CLASSNAME);
    }, TRANSITION_DURATION - 100);
    setTimeout(() => {
      homeScreen.classList.add(APPEAR_CLASSNAME);
      homeScreen.classList.remove(HIDDEN_CLASSNAME);
    }, TRANSITION_DURATION);

    [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];

    setTimeout(() => {
      settingScreen.classList.remove(DISAPPEAR_CLASSNAME);
      homeScreen.classList.remove(APPEAR_CLASSNAME);
    }, TRANSITION_DURATION * 2);
  }
}

function handleSettingClick() {
  if (isOnHomeScreen) {
    homeScreen.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(() => {
      homeScreen.classList.add(HIDDEN_CLASSNAME);
    }, TRANSITION_DURATION - 100);
    setTimeout(() => {
      settingScreen.classList.add(APPEAR_CLASSNAME);
      settingScreen.classList.remove(HIDDEN_CLASSNAME);
    }, TRANSITION_DURATION);

    [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];

    setTimeout(() => {
      homeScreen.classList.remove(DISAPPEAR_CLASSNAME);
      settingScreen.classList.remove(APPEAR_CLASSNAME);
    }, TRANSITION_DURATION * 2);
  }
}

homeButton.addEventListener("click", handleHomeClick);
settingButton.addEventListener("click", handleSettingClick);
