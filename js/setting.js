const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");
const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("li:first-child");
const settingButton = navigationBar.querySelector("li:last-child");

// let isOnHomeScreen = true;

homeButton.addEventListener("onclick", handleHomeButtonClick);
settingButton.addEventListener("onclick", handleSettingButtonClick);
