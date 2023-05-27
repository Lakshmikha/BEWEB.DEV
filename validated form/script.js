const username = document.getElementById("username");
const password = document.getElementById("password");

const validateForm = function () {
  let u = username.value.trim();
  let p = password.value.trim();
  if (u === "" || p == "") {
    alert("No blank values allowed.");
    return false;
  } else {
    return true;
  }
};
