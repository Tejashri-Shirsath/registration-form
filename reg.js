document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
  
    var isValid = true;
  
    // Validate username
    if (username.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters long.";
      isValid = false;
    } else {
      usernameError.textContent = "";
    }
  
    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Validate password
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });
  
