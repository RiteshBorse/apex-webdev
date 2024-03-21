import { users } from '../data/users.js';
import { writeUserData } from '../scripts/firebase.js';
let isSuccess = false;
const button = document.querySelector(`.js-login-button`);
button.addEventListener(("click") , () => {
    let enteredUser = {
        inputApartId : document.querySelector('.js-apartid').value,
        inputUsername : document.querySelector('.js-username').value,
        inputPassword : document .querySelector('.js-password').value
    };
    users.forEach((user) => {
        if(enteredUser.inputApartId == user.apartId)
        {
            if(enteredUser.inputUsername == user.username)
            {
                if(enteredUser.inputPassword == user.password)
                {
                    alert(`Login Successful`);
                    
                    isSuccess = true;
                    
                }
                else {
                    alert('login unsuccessful');
                }
            }
            else {
                alert('login unsuccessful');
            }   
        }
        else {
            alert('login unsuccessful');
        }
    });
    if(isSuccess)
    {
       
        window.location.href = "home-u.html";
    }
    console.log(enteredUser);
})
