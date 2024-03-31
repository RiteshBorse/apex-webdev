import { registerMember } from '../scripts/firebase.js';

//Input data from the user
document.querySelector('.js-login-button')
 .addEventListener(('click') , async ()=> {
    const newUser = {
        apartmentId : document.querySelector('.js-apartid').value ,
        firstName : document.querySelector('.js-first').value ,
        middleName : document.querySelector('.js-middle').value ,
        lastName : document.querySelector('.js-last').value ,
        post : document.querySelector('.js-post').value ,
        username : document.querySelector('.js-username').value ,
        password : document.querySelector('.js-password').value
    
    };
//Function to register a user
    let val = await registerMember(newUser);
    if(val)
    {
        document.querySelector('.js-right')
        .innerHTML += `
        <p class="alert">User Registered Successfully</p>
        `;
    }
    else {
        document.querySelector('.js-right')
        .innerHTML += `
        <p class="alert" style="background-color : red; color : darkred;">User Registration Failed </p>
        `;
    }
    setTimeout(() => {
        const alertElement = document.querySelector('.js-right .alert');
        if (alertElement) {
            alertElement.remove();
        }
    }, 1000);
 })
