const form = document.querySelector(".contact_form");
form.addEventListener("submit", formValidator);

const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");
const addressInput = document.querySelector("input#address");
const subjectInput = document.querySelector("input#subject");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const subjectError = document.querySelector("#subjectError");

function formValidator (e) {

    let validName = true;
    let validEmail = true;
    let validSubject = true;
    let validAddress = true;

    e.preventDefault();

    // Name validation
    let enteredName = nameInput.value.trim();
    console.log("Name: " + enteredName);

    if (enteredName.length < 2) {
        console.error("Name is to short");
        nameError.innerHTML = "* Name is to short";
        validName = false;
    } 
    if (enteredName == "") {
        console.error("Name must be filled out");
        nameError.innerHTML = "* Name must be filled out";
        validName = false;
    }
    if (/\d/.test(enteredName)) {
        console.error("Name cannot contain any digits.. Unless you are the child of Elon Musk?");
        nameError.innerHTML = "* Name cannot contain any digits";
        validName = false;

    } else {
        validName = true;
    }

    // Email validation
    let enteredEmail = emailInput.value.trim();
    console.log("Email: " + enteredEmail);

    let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

    if (!emailPattern.test(enteredEmail)) {
        console.error("Enter a valid email");
        emailError.innerHTML = "* Enter a valid email";
        validEmail = false;
    } else {
        validEmail = true;
    }

    // Address validation

    let enteredAddress = addressInput.value.trim();
    console.log("Address: " + enteredAddress);

    if (enteredAddress.length < 25) {
        console.error("Address must have a minimum length of 25");
        addressError.innerHTML = "* Address must have a minimum length of 25 digits";
        validAddress = false;
    } else {
        validAddress = true;
    }

    // Subject validation

    let enteredSubject = subjectInput.value;
    console.log("Subject: " + enteredSubject);

    if (enteredSubject.length < 10) {
        console.error("Subject must contain at least 10 digits");
        subjectError.innerHTML = "* Subject must contain at least 10 digits";
        validSubject = false;
    } else {
        validSubject = true;
    }

    // Validates form if all inputs are valid

    if (validName == true && validEmail == true && validSubject == true && validAddress == true)  {

        form.submit();

    } 
}