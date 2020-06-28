function validateForm() {
    document.getElementById('error-container').innerHTML = "";
    const first_name = document.getElementById('first_name');
    const middle_name = document.getElementById('middle_name');
    const last_name = document.getElementById('last_name');

    const validateName = new RegExp('^[A-z]+$')

    if ((!validateName.test(first_name.value) || first_name.value.length < 3)) {
        addError('First Name should only contain letter and lenght should be greater than 3!')
    }
    if ((!validateName.test(middle_name.value) || middle_name.value.length < 3)) {
        addError('Middle Name should only contain letter and lenght should be greater than 3!')
    }

    if ((!validateName.test(last_name.value) || last_name.value.length < 3)) {
        addError('Last Name should only contain letter and lenght should be greater than 3!')
    }

    const password = document.getElementById('password').value;
    const password_confirm = document.getElementById('password_confirm').value;
    const check1 = !Boolean(password.match(/[0-9]/));
    const check2 = !Boolean(password.match(/[A-Z]/));
    const check3 = !Boolean(password.match(/[@#$&]/));

    if (password.length < 8 || password.length > 16) {
        addError('Password length should be between 8 and 16')
    } else if (String(password) != String(password_confirm)) {
        addError('Password and Confirm password do not match!')
    } else if (check1 || check2 || check3) {
        addError('Password should contain at-least one ‘capital letter’, one ‘numeric’, and ‘one special character (@,#,$, or &).')
    }
    if (!errors_found) {
        alert('Form validation successful!');
        errors_found = true;
    }
}


(function () {
    document.getElementById('gender_male').addEventListener('click', function () {
        document.getElementById('avatar').src = 'boy.png'
    })

    document.getElementById('gender_female').addEventListener('click', function () {
        document.getElementById('avatar').src = 'girl.png'
    })

    document.getElementById('last_name').addEventListener('keyup', function () {
        if (document.getElementById('first_name').value != "") {
            document.getElementById('email').value = document.getElementById('first_name').value + "." + document.getElementById('last_name').value + "@std.uaar.edu.pk"
        }
    })

    document.getElementById('first_name').addEventListener('keyup', function () {
        if (document.getElementById('last_name').value != "") {
            document.getElementById('email').value = document.getElementById('first_name').value + "." + document.getElementById('last_name').value + "@std.uaar.edu.pk"
        }
    })
})();

function addError(message) {
    let error_container = document.getElementById('error-container')

    var err = document.createElement('div')
    err.classList.add('error')
    err.innerHTML = message
    error_container.appendChild(err)
}