function fadeIn(element, shouldBeSlow, isAfterOut, func = undefined) {
  const className = shouldBeSlow ? SLOW_APPEAR_CLASSNAME : APPEAR_CLASSNAME;
  element.classList.remove(HIDDEN_CLASSNAME);
  element.classList.add(className);
  if (func !== undefined) {
    func();
  }
  // Cleans up class name
  setTimeout(
    () => {
      element.classList.remove(className);
    },
    isAfterOut ? TRANSITION_DURATION * 2 : TRANSITION_DURATION
  ); // TODO: Check timeout
}

function fadeOut(element, shouldBeSlow, isAfterIn, func = undefined) {
  const className = shouldBeSlow
    ? SLOW_DISAPPEAR_CLASSNAME
    : DISAPPEAR_CLASSNAME;
  element.classList.add(className);
  setTimeout(() => {
    element.classList.add(HIDDEN_CLASSNAME);
    if (func !== undefined) {
      func();
    }
  }, TRANSITION_DURATION - 50);
  // Cleans up class name
  setTimeout(
    () => {
      element.classList.remove(className);
    },
    isAfterIn ? TRANSITION_DURATION * 2 : TRANSITION_DURATION
  );
}
