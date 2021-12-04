function fadeIn(element, isSlow) {
  const className = isSlow ? SLOW_APPEAR_CLASSNAME : APPEAR_CLASSNAME;
  element.classList.add(className);
  element.classList.remove(HIDDEN_CLASSNAME);
}

function fadeOut(element, isSlow) {
  const className = isSlow ? SLOW_DISAPPEAR_CLASSNAME : DISAPPEAR_CLASSNAME;
  element.classList.add(className);
  setTimeout(
    () => {
      element.classList.add(HIDDEN_CLASSNAME);
    },
    isSlow ? TRANSITION_DURATION * 2 - 50 : TRANSITION_DURATION
  );
}
