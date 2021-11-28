const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("li:first-child button");

// let isOnHomeScreen = true;

function handleHomeBtnClick() {
  console.log("home clicked!");
}

console.log(homeButton);
// console.dir(homeButton);
homeButton.addEventListener("click", handleHomeBtnClick);
