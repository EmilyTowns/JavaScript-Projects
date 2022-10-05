function validateForm() {
    let x = document.forms["contactForm"]["firstName"].value;
    if (x== "") {
        alert("Please fill in first name.");
        return false;
    }
    let y = document.forms["contactForm"]["lastName"].value;
    if (y== "") {
        alert("Please fill in last name.");
        return false;
    }
    let z = document.forms["contactForm"]["phone"].value;
    if (z== "") {
        alert("Please fill in phone number.");
        return false;
    }
}