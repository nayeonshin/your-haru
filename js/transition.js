function getTimeout(isAfterInOrOut, isSlow) {
  let timeout = isAfterInOrOut
    ? TRANSITION_DURATION * 2 - 50
    : TRANSITION_DURATION;
  timeout = isSlow ? timeout * 10 : timeout;
  return timeout;
}

// ===========================================================
// ===========================================================

// TODO: Fix timing
function _fadeIn(options) {
  let element;
  let isAfterOut;
  let isSlow;
  let func;
  [element, isAfterOut, isSlow, func] = options;

  const className = isSlow ? SLOW_APPEAR_CLASSNAME : APPEAR_CLASSNAME;
  element.classList.remove(HIDDEN_CLASSNAME);
  element.classList.add(className);

  if (func !== undefined) {
    func();
  }

  setTimeout(() => {
    element.classList.remove(className);
  }, TRANSITION_DURATION * 2);
  // // Cleans up class name
  // setTimeout(() => {
  //   element.classList.remove(className);
  // }, getTimeout(isAfterOut, shouldBeSlow)); // TODO: Check timeout
}

// TODO: Refactor out inner code of two functions into one func
function fadeIn(element, isAfterOut, shouldBeSlow, func = undefined) {
  const params = [element, isAfterOut, shouldBeSlow, func];
  if (isAfterOut) {
    setTimeout(() => {
      _fadeIn(params);
    }, TRANSITION_DURATION - 50);
  } else {
    _fadeIn(params);
  }
}

// ===========================================================
// ===========================================================

function _fadeOut(options) {
  let element;
  let isAfterIn;
  let isSlow;
  let func;
  [element, isAfterIn, isSlow, func] = options;

  const className = isSlow ? SLOW_DISAPPEAR_CLASSNAME : DISAPPEAR_CLASSNAME;

  element.classList.add(className);
  setTimeout(() => {
    element.classList.add(HIDDEN_CLASSNAME);
    if (func !== undefined) {
      func();
    }
  }, TRANSITION_DURATION - 50);
  // // Cleans up class name
  setTimeout(() => {
    element.classList.remove(className);
  }, TRANSITION_DURATION);
  // console.log(element);

  // getTimeout(isAfterIn, shouldBeSlow)
}

function fadeOut(element, isAfterIn, shouldBeSlow, func = undefined) {
  const params = [element, isAfterIn, shouldBeSlow, func];
  if (isAfterIn) {
    setTimeout(() => {
      _fadeOut(params);
    }, TRANSITION_DURATION - 50);
  } else {
    _fadeOut(params);
  }
}
