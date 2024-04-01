document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const checkPasswordInput = document.getElementById('checkpassword');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let emailValid = validateEmail(emailInput.value);
        let passwordValid = validatePassword(passwordInput.value);
        let passwordMatch = (passwordInput.value === checkPasswordInput.value);
        let usernameValid = validateUsername(usernameInput.value);
        let phoneValid = validatePhone(phoneInput.value);

       
        if (!emailValid) {
            displayErrorMessage(emailInput, 'Please enter a valid email address.');
        }
        if (!passwordValid) {
            displayErrorMessage(passwordInput, 'Password must have 8 characters long one digit and one special character.');
        }

        if (!passwordMatch) {
            displayErrorMessage(passwordInput, 'Passwords do not match.');
            displayErrorMessage(checkPasswordInput, 'Passwords do not match.');
        }
        if (!usernameValid) {
            displayErrorMessage(usernameInput, 'Username must be 6 characters long and start with a letter.');
        }

        
        if (!phoneValid) {
            displayErrorMessage(phoneInput, 'Please enter a valid 10-digit phone number.');
        }

       
        if (!emailValid || !passwordValid || !passwordMatch || !usernameValid || !phoneValid) {
            return false; 
        }

        return true;
    });

    function validateEmail(email) {
        const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    }

    function validateUsername(username) {
        const re = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
        return re.test(username);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    function displayErrorMessage(inputElement, message) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = message;
        errorMessage.classList.add('text-red-500', 'text-sm', 'mt-1');
        inputElement.parentNode.appendChild(errorMessage);
    }

    function removeErrorMessages() {
        const errorMessages = form.querySelectorAll('.text-red-500');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });
    }
});
