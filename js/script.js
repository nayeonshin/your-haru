const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function handleLogInSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", handleLogInSubmit);
