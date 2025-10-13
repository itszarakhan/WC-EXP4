function validateForm() {
  let valid = true;

  // Clear previous errors
  document.getElementById("fnameError").innerHTML = "";
  document.getElementById("lnameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("mobileError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";

  // First Name validation
  let fname = document.getElementById("fname").value.trim();
  if (!/^[A-Za-z]+$/.test(fname) || fname.length < 3) {
    document.getElementById("fnameError").innerHTML = "Only alphabets, min 3 chars.";
    valid = false;
  }

  // Last Name validation
  let lname = document.getElementById("lname").value.trim();
  if (lname === "") {
    document.getElementById("lnameError").innerHTML = "Last name cannot be empty.";
    valid = false;
  }

  // Password validation
  let password = document.getElementById("password").value;
  if (!isPasswordValid(password)) {
    document.getElementById("passwordError").innerHTML = "Password does not meet all requirements.";
    valid = false;
  }

  // Email validation
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format (e.g., name@domain.com).";
    valid = false;
  }

  // Mobile validation
  let mobile = document.getElementById("mobile").value.trim();
  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").innerHTML = "Must be exactly 10 digits.";
    valid = false;
  }

  // Address validation
  let address = document.getElementById("address").value.trim();
  if (address === "") {
    document.getElementById("addressError").innerHTML = "Address cannot be empty.";
    valid = false;
  }

  return valid;
}

function isPasswordValid(password) {
  if (password.length < 6) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (!/[@$!%*?&]/.test(password)) return false;
  return true;
}

function validatePasswordConstraints() {
  const password = document.getElementById("password").value;
  
  document.getElementById("lengthConstraint").classList.toggle("valid", password.length >= 6);
  document.getElementById("uppercaseConstraint").classList.toggle("valid", /[A-Z]/.test(password));
  document.getElementById("lowercaseConstraint").classList.toggle("valid", /[a-z]/.test(password));
  document.getElementById("numberConstraint").classList.toggle("valid", /\d/.test(password));
  document.getElementById("specialConstraint").classList.toggle("valid", /[@$!%*?&]/.test(password));
}
