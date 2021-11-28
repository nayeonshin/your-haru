const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("li:first-child button");
const settingButton = navigationBar.querySelector("li:last-child button");

// let isOnHomeScreen = true;

function handleHomeBtnClick() {
  console.log("home clicked!");
}

function handleSettingBtnClick() {
  console.log("setting clicked!");
}

console.log(homeButton);
homeButton.addEventListener("onclick", handleHomeBtnClick);
settingButton.addEventListener("onclick", handleSettingBtnClick);
