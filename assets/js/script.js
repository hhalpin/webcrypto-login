(function() {

    var username =  document.getElementById('username-field');
    var password = document.getElementById('password-field');
    var loginBtn = document.getElementById('login-btn');
    var selectedTextArea = document.activeElement;


    username.addEventListener("input", function() {
        checkForm();
    }, true);
    password.addEventListener("input", function() {
        checkForm();
        console.log('hello');
    }, true);

    function checkForm() {
        if(username.value && password.value && loginBtn.className != 'active') {
            loginBtn.className += 'active';
        } else if (!username.value || !password.value) {
            loginBtn.className = '';
        }
    }

})();
