// ===================================
// Lesson 10 Task 10.1
// Exercise 1: Basic Events
// ===================================

const clickButton = document.createElement("button");

clickButton.textContent = "Click Me";

document.body.appendChild(clickButton);


// Event listener using function
clickButton.addEventListener("click", function () {
    console.log("Button clicked!");
});


// Arrow function
clickButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

// ===================================
// Mouse Events Practice
// ===================================

clickButton.addEventListener("mouseenter", () => {
    console.log("Mouse entered the button");
});


clickButton.addEventListener("mouseleave", () => {
    console.log("Mouse left the button");
});


clickButton.addEventListener("dblclick", () => {
    console.log("Double clicked!");
});

// ===================================
// Keyboard Events Practice
// ===================================

document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

// ===================================
// Click Counter
// ===================================

let counter = 0;


const countDisplay = document.createElement("h2");
countDisplay.textContent = `Count: ${counter}`;

document.body.appendChild(countDisplay);


// Increase button
const increaseButton = document.createElement("button");
increaseButton.textContent = "+";

document.body.appendChild(increaseButton);


// Decrease button
const decreaseButton = document.createElement("button");
decreaseButton.textContent = "-";

document.body.appendChild(decreaseButton);


// Reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

document.body.appendChild(resetButton);


// Increase
increaseButton.addEventListener("click", () => {
    counter++;
    countDisplay.textContent = `Count: ${counter}`;
});


// Decrease
decreaseButton.addEventListener("click", () => {

    if (counter > 0) {
        counter--;
    }

    countDisplay.textContent = `Count: ${counter}`;
});


// Reset
resetButton.addEventListener("click", () => {
    counter = 0;
    countDisplay.textContent = `Count: ${counter}`;
});

// ===================================
// Task 10.2
// The Event Object
// ===================================

document.addEventListener("click", function(event) {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

    console.log("Event Type:", event.type);

    console.log(
        "Mouse Position:",
        event.clientX,
        event.clientY
    );

});

// ===================================
// Keyboard Event Details
// ===================================

document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);
    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);

});

// ===================================
// Ctrl + S Shortcut
// ===================================

document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "s") {

        event.preventDefault();

        alert("Saved!");
    }

});

// ===================================
// Escape Clears Form
// ===================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        console.log("Form cleared.");

    }

});

// ===================================
// Task 10.3
// Event Bubbling
// ===================================

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// ===================================
// Task 10.3
// Event Delegation
// ===================================

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", function(event) {

    const clickedItem = event.target.closest("li");

    if (clickedItem) {
        console.log("You clicked:", clickedItem.textContent.trim());
    }

});

// ===================================
// Task 10.4
// Form Handling
// ===================================
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

console.log(form);
console.log(nameInput);
console.log(emailInput);

// ===================================
// Task 10.4
// Real-time Validation
// ===================================

nameInput.addEventListener("input", function(event) {

    const value = event.target.value;

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
        console.log("Name is valid");
    }

});


emailInput.addEventListener("input", function(event) {

    const value = event.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }

});

// ===================================
// Error Message Functions
// ===================================

function showError(input, message) {

    input.classList.add("error");

    let errorMessage = input.nextElementSibling;

    if (!errorMessage || !errorMessage.classList.contains("error-message")) {

        errorMessage = document.createElement("p");
        errorMessage.className = "error-message";

        input.after(errorMessage);
    }

    errorMessage.textContent = message;
}


function clearError(input) {

    input.classList.remove("error");

    const errorMessage = input.nextElementSibling;

    if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
    }

}