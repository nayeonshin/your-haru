// TODO: Check if 24-hour clock when pm works
const clock = document.querySelector(".js-background__clock");
const clockNumbers = document.querySelector(".js-clock__numbers");
const clockAmPm = clock.querySelector(".js-clock__am-pm");

const calendar = document.querySelector(".js-background__calendar");

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

const INVISIBLE_CLASSNAME = "invisible";
const RED_TEXT_CLASSNAME = "red-text";

function changeClockColor(currentClock) {
  const shouldClockBeRed = () => {
    [_, currentMinutes, currentSeconds] = currentClock;
    return parseInt(currentMinutes) === 59 && parseInt(currentSeconds) >= 55;
  };

  if (shouldClockBeRed()) {
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

  const isCurrentAm = currentHours < 12 ? true : false;
  const amPm = isCurrentAm ? "am" : "pm";
  const is24HourOn = localStorage.getItem(TWENTY_FOUR_KEY) === "true";

  if (!is24HourOn) {
    clockAmPm.classList.remove(INVISIBLE_CLASSNAME);
    if (currentHours === 0) {
      currentClock[0] = "12"; // When 12 a.m., displays 12
    } else if (!isCurrentAm && currentHours > 12) {
      currentClock[0] = String(currentClock[0] - 12).padStart(2, "0");
    }
  } else {
    clockAmPm.classList.add(INVISIBLE_CLASSNAME);
  }

  clockNumbers.innerText = currentClock.join(":");
  clockAmPm.innerText = amPm;

  changeClockColor(currentClock);
}

function updateCalendar(currentTime) {
  const currentDay = days[currentTime.getDay()];
  const currentMonth = months[currentTime.getMonth()];
  const currentDate = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  calendar.innerText = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  CALENDAR = calendar.innerText;
}

function getTime() {
  const currentTime = new Date();

  updateCalendar(currentTime);
  updateClock(currentTime);
}

getTime(); // Calls immediately in the first place
setInterval(getTime, 1000);
