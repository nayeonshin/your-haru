const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const toDoButton = navigationBar.querySelector("div li:nth-child(2) button");
const settingButton = navigationBar.querySelector("div li:last-child button");
const smileButton = navigationBar.querySelector(".js-navigation__smile-button");

const smileModal = document.querySelector(".js-background__smile-modal");

const ADDED_CLASSNAME = "added";

let isOnHomeScreen = true;
let isOnToDoScreen = false;
let isOnSettingScreen = false;

function _switchScreens(currentScreen, newScreen) {
  // Is after fadeIn when user switches screens more than once
  fadeOut(currentScreen, { isAfterIn: true });
  setTimeout(() => {
    fadeIn(newScreen, { isAfterOut: true });
  }, TRANSITION_DURATION);

  if (currentScreen === homeScreen) {
    isOnHomeScreen = false;
  } else if (currentScreen === TO_DO_SCREEN) {
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
    currentScreen = TO_DO_SCREEN;
  } else {
    currentScreen = settingScreen;
  }

  if (isHomeClicked && !isOnHomeScreen) {
    _switchScreens(currentScreen, homeScreen);
    isOnHomeScreen = true;
  }

  if (isToDoClicked && !isOnToDoScreen) {
    _switchScreens(currentScreen, TO_DO_SCREEN);
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

function enableButtons() {
  navigationBar.classList.add("signed-in");

  homeButton.addEventListener(CLICK_EVENT, handleHomeClick);
  toDoButton.addEventListener(CLICK_EVENT, handleToDoClick);
  settingButton.addEventListener(CLICK_EVENT, handleSettingClick);
  smileButton.addEventListener("mouseover", () => {
    smileModal.classList.add(ADDED_CLASSNAME);
  });
  smileButton.addEventListener("mouseleave", () => {
    smileModal.classList.remove(ADDED_CLASSNAME);
  });
}
