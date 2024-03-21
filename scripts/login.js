import { readdata , retrivedData } from '../scripts/firebase.js';
let isSuccess = false;
const button = document.querySelector(`.js-login-button`);



button.addEventListener(("click") , () => {
    let enteredUser = {
        inputApartId : document.querySelector('.js-apartid').value,
        inputUsername : document.querySelector('.js-username').value,
        inputPassword : document .querySelector('.js-password').value
    };
   readdata(inputUsername);
    if(check === '')
    {
        alert('User not found ');
    }
    else if(retrivedData.apartmentName === enteredUser.inputApartId)
    {
        if(retrivedData.password === enteredUser.inputPassword)
        {
            alert('Login Successful');
        }
        else {
            alert('Check Password');
        }
    }
});