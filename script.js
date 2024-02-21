    /*function login() 
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password')
    {
        document.getElementById('message').innerHTML = 'Login successful!';
    } else {
        document.getElementById('message').innerHTML = 'Invalid username or password. Please try again.';
    }
}*/
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var emailError = document.getElementById('emailError');

    usernameError.textContent = '';
    passwordError.textContent = '';
    emailError.textContent = '';


    if (username !== username.toLowerCase()) {
        usernameError.textContent = 'Username must be in lowercase letters only';
    }

    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
    }

    if (email.indexOf('@') === -1) {
        emailError.textContent = 'Email must contain @';
    }

}