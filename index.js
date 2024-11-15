// Get the hamburger icon and nav links
// Get the hamburger icon, nav links, and close button
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

// Toggle the 'active' class on the nav links when the hamburger is clicked
hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close the nav menu when the close button is clicked
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});


function validateForm() {
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    if (name.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Validate Contact Number
    const contact = document.getElementById("contact").value;
    const contactError = document.getElementById("contactError");
    if (contact.trim() === "") {
      contactError.style.display = "block";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(contact)) {
      contactError.textContent = "Please enter a valid 10-digit contact number.";
      contactError.style.display = "block";
      isValid = false;
    } else {
      contactError.style.display = "none";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (email.trim() === "") {
      emailError.style.display = "block";
      emailError.textContent = "This field is required. Please enter a valid email address.";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validate Query
    const query = document.getElementById("query").value;
    const queryError = document.getElementById("queryError");
    if (query.trim() === "") {
      queryError.style.display = "block";
      isValid = false;
    } else {
      queryError.style.display = "none";
    }

    return isValid; // Return false to prevent form submission if validation fails
  }