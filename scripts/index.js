const currentUser = document.querySelector("login-container");
// currentUser.replaceWith(`<h2>User</h2>`);

const navigateButton = document.getElementById("loginButton");
navigateButton.addEventListener("click", function () {
  window.location.href = "login.html";
});
