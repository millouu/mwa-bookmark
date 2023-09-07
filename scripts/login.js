var loginForm = document.getElementById("login-form");
var username = "";
const usernameRegex = /^[a-zA-Z0-9._]+$/;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  username = document.getElementById("login-form-username-field").value;
  var password = document.getElementById("login-form-password-field").value;
  var loginFormError = document.querySelector(".login-form-error");

  if (username === "" || password === "") {
    $("#login-form-username-field").popover("show");
    $("#login-form-password-field").popover("show");
  }

  if (usernameRegex.test(username) === false) {
    $("#login-form-username-field").popover("show");
  }
  if (username !== "admin" && password !== "admin123") {
    loginFormError.classList.toggle("login-form-error");
  } else {
    alert("Hello " + username + "! You are now logged in.");
    window.location.href = "index.html";
  }
});

