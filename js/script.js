const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLogInBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", handleLogInBtnClick);
