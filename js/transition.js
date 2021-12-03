function _fadeOut(options) {
  let element;
  let isSlow;
  let func;
  [element, _, isSlow, func] = options;

  const className = isSlow ? SLOW_DISAPPEAR_CLASSNAME : DISAPPEAR_CLASSNAME;

  element.classList.add(className);
  setTimeout(() => {
    element.classList.add(HIDDEN_CLASSNAME);
    if (func !== undefined) {
      func();
    }
  }, TRANSITION_DURATION - 50);

  setTimeout(() => {
    element.classList.remove(className);
  }, TRANSITION_DURATION);
}

function _fadeIn(options) {
  let element;
  let isSlow;
  let func;
  [element, _, isSlow, func] = options;

  const className = isSlow ? SLOW_APPEAR_CLASSNAME : APPEAR_CLASSNAME;
  element.classList.remove(HIDDEN_CLASSNAME);
  element.classList.add(className);

  if (func !== undefined) {
    func();
  }

  setTimeout(() => {
    element.classList.remove(className);
  }, TRANSITION_DURATION * 2);
}

function _fade(isIn, params) {
  let isAfterInOrOut;
  [_, isAfterInOrOut, _, _] = params;

  if (isAfterInOrOut) {
    setTimeout(() => {
      isIn ? _fadeIn(params) : _fadeOut(params);
    }, TRANSITION_DURATION - 50); // - 50 necessary?
  } else {
    isIn ? _fadeIn(params) : _fadeOut(params);
  }
}

function fadeIn(element, isAfterOut, shouldBeSlow, func = undefined) {
  const params = [element, isAfterOut, shouldBeSlow, func];
  _fade(true, params);
}

function fadeOut(element, isAfterIn, shouldBeSlow, func = undefined) {
  const params = [element, isAfterIn, shouldBeSlow, func];
  _fade(false, params);
}
