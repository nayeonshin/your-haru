const clock = document.querySelector(".js-background__clock");
const hours = clock.querySelector("span:first-child");
const minutes = clock.querySelector("span:nth-child(2)");
const seconds = clock.querySelector("span:nth-child(3)");
const amPm = clock.querySelector("span:last-child");

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

function updateCalendar(currentTime) {
  const currentDay = days[currentTime.getDay()];
  const currentMonth = months[currentTime.getMonth()];
  const currentDate = currentTime.getDate();
  const currentYear = currentTime.getFullYear();

  calendar.innerText = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
}

function updateClock(currentTime) {
  const currentClock = [
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds(),
  ].map((number) => String(number).padStart(2, "0"));
  const currentHours = parseInt(currentClock[0]);

  const isCurrentAm = currentHours < 12 ? true : false;
  if (!isCurrentAm) {
    currentClock[0] = currentHours - 12;
  }

  [hours.innerText, minutes.innerText, seconds.innerText] = currentClock;
  amPm.innerText = `${isCurrentAm ? "am" : "pm"}`;
}

function getTime() {
  const currentTime = new Date();
  updateCalendar(currentTime);
  updateClock(currentTime);
}

getTime();
setInterval(getTime, 1000);
