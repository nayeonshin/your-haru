function fadeIn(element, options = {}) {
  if (options.isAfterOut) {
    element.classList.remove(HIDDEN_CLASSNAME);
  }

  element.classList.add(VISIBLE_CLASSNAME);

  if (options.isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}

function fadeOut(element, options = {}) {
  if (options.isAfterIn) {
    element.classList.remove(VISIBLE_CLASSNAME);
  }

  element.classList.add(HIDDEN_CLASSNAME);

  if (options.isSlow) {
    element.classList.add(SLOW_CLASSNAME);
  }
}
