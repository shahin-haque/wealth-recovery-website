const bgMenu = document.querySelector(".bg-menu");
const menuIcon = document.querySelector(".menu-icon");
const navLinksWrapper = document.querySelector(".nav-links-wrapper");

// Nagigation Link Script
bgMenu.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  if (menuIcon.classList.contains("open")) {
    navLinksWrapper.classList.add("open");
  } else {
    navLinksWrapper.classList.remove("open");
  }
});

navLinksWrapper.addEventListener("click", () => {
  navLinksWrapper.classList.remove("open");
  menuIcon.classList.toggle("open");
});

//Contact Form  Script
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // Validate email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("response").innerHTML =
      '<div id="error">Invalid email address.</div>';
    return;
  }

  // Validate phone number
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("response").innerHTML =
      '<div id="error">Invalid phone number. Please enter 10 digits.</div>';
    return;
  }

  // If all validations pass, send the data to the server (this is a dummy example, no actual server communication here)
  document.getElementById("response").innerHTML =
    '<div id="success">Form submitted successfully!</div>';
  // You can add an AJAX request here to send form data to the server
  name = "";
  email = "";
  phone = "";
  message = "";
});
