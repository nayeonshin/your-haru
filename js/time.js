const clock = document.querySelector(".js-background__clock");
const hours = clock.querySelector("span:first-child");
const minutes = clock.querySelector("span:nth-child(2)");
const seconds = clock.querySelector("span:nth-child(3)");
const amPm = clock.querySelector("span:last-child");

const calendar = document.querySelector(".js-background__calendar");

function getClock() {
  const currentDate = new Date();
  const currentTime = [
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
  ].map((number) => String(number).padStart(2, "0"));
  const currentHours = parseInt(currentTime[0]);

  const isCurrentAm = currentHours < 12 ? true : false;
  if (!isCurrentAm) {
    currentTime[0] = currentHours - 12;
  }

  [hours.innerText, minutes.innerText, seconds.innerText] = currentTime;
  amPm.innerText = `${isCurrentAm ? "am" : "pm"}`;
}

getClock();
setInterval(getClock, 1000);
