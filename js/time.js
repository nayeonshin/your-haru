const clock = document.querySelector(".js-background__clock");
const clockNumbers = clock.querySelector(".js-clock__numbers");
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

const RED_TEXT_CLASSNAME = "red-text";

function updateCalendar(currentTime) {
  const currentDay = days[currentTime.getDay()];
  const currentMonth = months[currentTime.getMonth()];
  const currentDate = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  calendar.innerText = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
}

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
  if (!isCurrentAm) {
    currentClock[0] = String(currentHours - 12);
  }

  let completeClock = "";
  currentClock.forEach((unit, index) => {
    if (index === currentClock.length - 1) {
      completeClock += unit;
    } else {
      completeClock += `${unit}:`;
    }
  });
  clockNumbers.innerText = completeClock;
  clockAmPm.innerText = amPm;

  changeClockColor(currentClock);
}

function getTime() {
  const currentTime = new Date();
  updateCalendar(currentTime);
  updateClock(currentTime);
}

getTime();
setInterval(getTime, 1000);
