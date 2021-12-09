function fadeIn(element, { isAfterOut, isSlow } = {}) {
  if (isAfterOut) {
    element.classList.remove(HIDDEN_CLASSNAME);
  }

  element.classList.add(VISIBLE_CLASSNAME);

  if (isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}

function fadeOut(element, { isAfterIn, isSlow } = {}) {
  if (isAfterIn) {
    element.classList.remove(VISIBLE_CLASSNAME);
  }

  element.classList.add(HIDDEN_CLASSNAME);

  if (isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}
