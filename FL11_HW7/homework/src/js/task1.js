let email = prompt('Please, write your email here:', '');
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
const MIN_EMAIL_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 5;

//Step 1. Check login.
if (email.length <= 0) {
    alert('Canceled');
} else if (email.length < MIN_EMAIL_LENGTH) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === userEmail || email === adminEmail) {
    //Step 2. Check password.
    let password = prompt('Please, write your password here:', '');
    if (password.length <= 0) {
        alert('Canceled');
    } else if (email === userEmail && password === userPassword
        || email === adminEmail && password === adminPassword) {
        //Step 3. Change the password; the old password is correct to visitor's email.
        let response = confirm('Do you want to change your password?');
        if (response === true) {
            let oldPassword = prompt('Please, write your old password here:', '');
            if (oldPassword.length <= 0) {
                alert('Canceled');
            } else if (email === userEmail && oldPassword === userPassword
                || email === adminEmail && oldPassword === adminPassword) {
                //Step 3.3) Writing the new password and validating it as at Step 2.
                let newPassword = prompt('Please, write your new password here:', '');
                if (newPassword.length < MIN_PASSWORD_LENGTH) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    //Step 3.4) New password is correct.
                    let newPasswordConfirm = prompt('Please, write your new password again:', '');
                    if (newPassword === newPasswordConfirm) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}