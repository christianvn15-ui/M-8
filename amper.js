function login() {
  const email = document.getElementById("keyword").value;
  const password = document.getElementById("password").value;
  if (email === "Iloveyou" && password === "8") {
    alert("Login successful");
    window.location.href = "loginopen.html"; // changed this line
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").textContent = "Invalid username or password";
  }
}