function validateForm() {
    let valid = true;
    const uname = document.getElementById("uname").value;
    const pass = document.getElementById("pass").value;
    const unameError = document.getElementById("unameError");
    const passError = document.getElementById("passError");
    const errorDiv = document.getElementById("error");
  
    unameError.textContent = "";
    passError.textContent = "";
  
    if (uname.trim() === "") {
      unameError.textContent = "required";
      valid = false;
    }
  
    if (pass.trim() === "") {
      passError.textContent = "required";
      valid = false;
    }
    if (uname === "admin" && pass === "admin") {
      alert("Successful!");
    } else {
      errorDiv.textContent = "Invalid username or password.";
      errorDiv.style.display = "block";
    }
  
    return valid;
  }