import { readdata } from '../scripts/firebase.js';
let isSuccess = false;
const button = document.querySelector(`.js-login-button`);



button.addEventListener(("click") , () => {
    let enteredUser = {
        inputApartId : document.querySelector('.js-apartid').value,
        inputUsername : document.querySelector('.js-username').value,
        inputPassword : document .querySelector('.js-password').value
    };
   
    if(check === '')
    {
        alert('User not found ');
    }
    else if(check.apartmentName === enteredUser.inputApartId)
    {
        if(check.password === enteredUser.inputPassword)
        {
            alert('Login Successful');
        }
        else {
            alert('Check Password');
        }
    }
});