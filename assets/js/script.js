(function() {

    var startScreen = document.getElementById('start-screen');
    var loginScreen =  document.getElementById('login-screen');
    var username =  document.getElementById('username-field');
    var password = document.getElementById('password-field');
    var loginBtn = document.getElementById('login-btn');
    var forgotPassword = document.getElementById('forgot-password-link');
    var passwordAuthBtn = document.getElementById('password-auth-btn');


    passwordAuthBtn.addEventListener('click', function() {
        loginScreen.style.display = 'block';
        startScreen.style.display = 'none';
    }, true);

    username.addEventListener('input', function() {
        checkForm();
    }, true);

    password.addEventListener('input', function() {
        checkForm();
    }, true);

    loginBtn.addEventListener('click', function() {
        if(loginBtn.className === 'active') {
            loginBtn.innerHTML = '';
            loginBtn.className += ' loading';
            loginBtn.innerHTML = '<?xml version="1.0"?>'
            + '<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<circle cx="60" cy="60" r="35"  stroke="rgba(255,255,255, 0.4)" stroke-width="5" fill=none />'
            + '<circle id="hilighted-circle" cx="60" cy="60" r="35" stroke="rgba(255,255,255, 1)" stroke-width="5" fill=none />'
            + '</svg>'
            forgotPassword.className += ' hidden';
        }
    }, true);



    function checkForm() {
        if(username.value && password.value && loginBtn.className != 'active') {
            loginBtn.className += 'active';
        } else if (!username.value || !password.value) {
            loginBtn.className = '';
        }
    }

})();
