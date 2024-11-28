// Toggle Background Color
const colorToggleButton = document.getElementById("colorToggleButton");
colorToggleButton.addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
});

// Slider for Adjusting Text Size
const textSizeSlider = document.getElementById("textSizeSlider");
const sliderValue = document.getElementById("sliderValue");
textSizeSlider.addEventListener("input", function() {
    const fontSize = textSizeSlider.value + "px";
    sliderValue.textContent = fontSize;
    document.body.style.fontSize = fontSize;
});

// Modal with Event Listeners
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModalButton");

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Form Validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let isValid = true;

    // Name validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        isValid = false;
    }

    // Email validation (basic check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain one uppercase letter and one number.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

// Dropdown Menu (Bonus)
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

dropdown.addEventListener("change", function() {
    const selectedOption = dropdown.value;
    switch (selectedOption) {
        case "option1":
            dropdownMessage.textContent = "You selected Option 1!";
            break;
        case "option2":
            dropdownMessage.textContent = "You selected Option 2!";
            break;
        case "option3":
            dropdownMessage.textContent = "You selected Option 3!";
            break;
        default:
            dropdownMessage.textContent = "";
            break;
    }
});
