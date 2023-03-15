const clock = document.querySelector(".js-home__clock");
const clockNumbers = document.querySelector(".js-clock__numbers");
const clockMeridiem = clock.querySelector(".js-clock__am-pm");

const date = document.querySelector(".js-home__date");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const RED_TEXT_CLASSNAME = "red-text";
const REMOVED_CLASSNAME = "removed";

function changeClockColor(currentClock) {
  const checkHasToBeRed = () => {
    [, currentMinutes, currentSeconds] = currentClock;
    return parseInt(currentMinutes) === 59 && parseInt(currentSeconds) >= 55;
  };

  if (checkHasToBeRed()) {
    clock.classList.add(RED_TEXT_CLASSNAME);
  } else {
    clock.classList.remove(RED_TEXT_CLASSNAME);
  }
}

function updateClock(currentTime) {
  const currentClock = [
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds(),
  ].map((number) => String(number).padStart(2, "0"));
  const currentHours = parseInt(currentClock[0]);

  const isCurrentAm = currentHours < 12;
  const meridiem = isCurrentAm ? "am" : "pm";
  const is24HourOn = localStorage.getItem(TWENTY_FOUR_KEY) === "true";

  if (is24HourOn) {
    clockMeridiem.classList.add(REMOVED_CLASSNAME);
  } else {
    clockMeridiem.classList.remove(REMOVED_CLASSNAME);
    if (currentHours === 0) {
      currentClock[0] = "12"; // When 12 a.m., displays 12
    } else if (!isCurrentAm && currentHours > 12) {
      currentClock[0] = String(currentClock[0] - 12).padStart(2, "0");
    }
  }

  clockNumbers.innerText = currentClock.join(":");
  clockMeridiem.innerText = meridiem;

  changeClockColor(currentClock);
}

function updateDate(currentTime, { isToDoDate } = {}) {
  const currentDay = days[currentTime.getDay()];
  const currentMonth = months[currentTime.getMonth()];
  const currentDate = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  const dateToShow = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  if (isToDoDate) {
    TO_DO_DATE.innerText = dateToShow;
  } else {
    date.innerText = dateToShow;
  }
}

function getTime() {
  const currentTime = new Date();

  updateDate(currentTime);
  updateClock(currentTime);
}

getTime(); // Calls immediately in the first place
setInterval(getTime, 1000);
