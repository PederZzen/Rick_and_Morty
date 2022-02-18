const form = document.querySelector(".contact_form");
form.addEventListener("submit", formValidator);

const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");
const subjectInput = document.querySelector("input#subject");
const addressInput = document.querySelector("input#address");

function formValidator (e) {
    e.preventDefault();

    // Name validation
    let enteredName = nameInput.value.trim();
    console.log("Name: " + enteredName);

    if (enteredName.length < 2) {
        console.error("Name is to short");
    }
    if (/\d/.test(enteredName)) {
        console.error("Name cannot contain any digits.. Unless you are the child of Elon Musk?");
    }

    // Email validation
    let enteredEmail = emailInput.value.trim();
    console.log("Email: " + enteredEmail);

    let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; //https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

    if (!emailPattern.test(enteredEmail)) {
        console.error("Enter a valid email");
    }

    // Subject validation
}