const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        messageDiv.textContent = "Please enter your email address.";
        messageDiv.style.color = "red";
    } else if (!isValidEmail(email)) {
        messageDiv.textContent = "Please enter a valid email address.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Thank you for signing up in Royal Estates!";
        messageDiv.style.color = "green";

        // You can add your code here to send the email address to your server
    }
});

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}