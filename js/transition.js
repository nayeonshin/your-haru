function getTimeout(isAfterInOrOut, isSlow) {
  let timeout = isAfterInOrOut
    ? TRANSITION_DURATION * 2 - 50
    : TRANSITION_DURATION;
  timeout = isSlow ? timeout * 10 : timeout;
  console.log(timeout);
  return timeout;
}

function _fadeIn(options) {
  let element;
  let isAfterOut;
  let shouldBeSlow;
  let func;
  [element, isAfterOut, shouldBeSlow, func] = options;

  const className = shouldBeSlow ? SLOW_APPEAR_CLASSNAME : APPEAR_CLASSNAME;
  element.classList.remove(HIDDEN_CLASSNAME);
  element.classList.add(className);
  if (func !== undefined) {
    func();
  }
  // Cleans up class name
  setTimeout(() => {
    element.classList.remove(className);
  }, getTimeout(isAfterOut, shouldBeSlow)); // TODO: Check timeout
}

// TODO: Refactor out inner code into a func
function fadeIn(element, isAfterOut, shouldBeSlow, func = undefined) {
  params = [element, isAfterOut, shouldBeSlow, (func = undefined)];
  if (isAfterOut) {
    setTimeout(() => {
      _fadeIn(params);
    }, TRANSITION_DURATION - 50);
  } else {
    _fadeIn(params);
  }
}

function fadeOut(element, isAfterIn, shouldBeSlow, func = undefined) {
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
  setTimeout(() => {
    element.classList.remove(className);
  }, getTimeout(isAfterIn, shouldBeSlow));
}
