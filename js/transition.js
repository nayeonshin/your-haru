const SLOW_CLASSNAME = "slow";
const VISIBLE_CLASSNAME = "visible";

function fadeIn(element, { isSlow, isAfterOut } = {}) {
  if (isAfterOut) {
    element.classList.remove(HIDDEN_CLASSNAME);
  }

  element.classList.add(VISIBLE_CLASSNAME);

  if (isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}

function fadeOut(element, { isSlow, isAfterIn } = {}) {
  if (isAfterIn) {
    element.classList.remove(VISIBLE_CLASSNAME);
  }

  element.classList.add(HIDDEN_CLASSNAME);

  if (isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}
