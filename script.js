
//Program name: patient-form.html//
//Author: Ranadheer Reddy Aienala//
//Date created: 10/14/2024//
//Date last edited: 10/16/2024//
//Version: 2.0//
//Description: A medical registration form for patients.//

function displayDate() {
    const date = new Date();
    document.getElementById("dynamic-date").innerText = date.toLocaleDateString();
}

function reviewForm() {
    const reviewSection = document.getElementById("review-section");
    reviewSection.style.display = "block";
    reviewSection.classList.add("slide-down");

    // Smooth scroll to the review section
    reviewSection.scrollIntoView({ behavior: 'smooth' });
    var firstName = document.getElementById("first-name").value;
    var middleInitial = document.getElementById("middle-initial").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var ssn = document.getElementById("ssn").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address1 = document.getElementById("address1").value;
    var feeling = document.getElementById("feeling-slider").value;
   
    var conditions = document.querySelectorAll('input[name="conditions"]:checked');
    var checkedConditions = [];
    conditions.forEach(function(condition) {
        checkedConditions.push(condition.value);
    });
    var conditions = checkedConditions.length ? checkedConditions.join(", ") : "None";

    var gender = document.querySelector('input[name="gender"]:checked');
    var gender = gender ? gender.value : "Not specified";


    var vaccinated = document.querySelector('input[name="vaccinated"]:checked');
    var vaccinated = vaccinated ? vaccinated.value : "Not specified";

    
    var insurance = document.querySelector('input[name="insurance"]:checked');
    var insurance = insurance ? insurance.value : "Not specified";

    document.getElementById("review-first-name").textContent = firstName;
    document.getElementById("review-middleiinitial").textContent = middleInitial;
    document.getElementById("review-last-name").textContent = lastName;
    document.getElementById("review-dob").textContent = dob;
    document.getElementById("review-ssn").textContent = ssn;
    document.getElementById("review-phone").textContent = phone;
    document.getElementById("review-email").textContent = email;
    document.getElementById("review-address1").textContent = address1;
    document.getElementById("review-feeling").textContent = feeling;
    document.getElementById("review-conditions").textContent = conditions;
    document.getElementById("review-gender").textContent = gender;
    document.getElementById("review-vaccinated").textContent = vaccinated;
    document.getElementById("review-insurance").textContent = insurance;
    
    document.getElementById("review-section").style.display = "block";
}

function updateSliderValue(value) {
    document.getElementById("slider-value").textContent = value;
}

function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value; // corrected ID
    const userId = document.getElementById("user-id").value.toLowerCase(); // corrected ID
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\\/><.,`~]).{8,30}$/;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    if (!regex.test(password)) {
        alert("Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.");
        return false;
    }
    if (password.includes(userId) || password.includes(userId.split('_')[0])) {
        alert("Password cannot contain your User ID or part of it.");
        return false;
    }
    return true;
}

function validateUserId() {
    const userIdInput = document.getElementById("user-id");
    let userId = userIdInput.value.trim();

    if (/^[a-z][a-z0-9_-]{4,29}$/i.test(userId)) {
        userId = userId.toLowerCase(); 
        userIdInput.value = userId;  
        return true;
    } else {
        alert("Invalid User ID! Must be 5-30 characters, start with a letter, and contain only letters, numbers, underscores, or dashes.");
        return false;
    }
}

function validateDates() {
    const dobElement = document.getElementById("dob").value;
    if (!dobElement) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    const birthDate = new Date(dobElement);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minBirthDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

    if (birthDate > today) {
        alert("Birthdate cannot be in the future.");
        return false;
    }
    if (birthDate < minBirthDate) {
        alert("Birthdate must be within the last 120 years.");
        return false;
    }

    return true;
}

function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!phonePattern.test(phone)) {
        alert("Invalid phone number! Format should be 123-456-7890.");
        return false;
    }
    return true;
}

function validateForm() {
    if (
        validateUserId() &&
        validatePasswords() && 
        validateDates() &&
        validatePhoneNumber()
    ) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Check any errors before submitting.");
        return false;
    }
}



