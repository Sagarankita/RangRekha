const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        let errorMessage = "";

        if (nameField.value.trim() === "") {
            isValid = false;
            errorMessage += "Name is required.\n";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        if (passwordField.value.trim().length < 8) {
            isValid = false;
            errorMessage += "Password must be at least 8 characters long.\n";
        }

        if (passwordField.value !== confirmPasswordField.value) {
            isValid = false;
            errorMessage += "Passwords do not match.\n";
        }

        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    }); 