import { readdata , response , addComplaint} from '../scripts/firebase.js';

document.querySelector('.js-login-button')
    .addEventListener(('click'), async () => {
        let enteredUser = {
            inputApartId: document.querySelector('.js-apartid').value,
            inputUsername: document.querySelector('.js-username').value,
            inputPassword: document.querySelector('.js-password').value
        };
        readdata(enteredUser.inputUsername);
        let check = false;
        for (const key in enteredUser) {
            if (enteredUser[key] === '') {
                check = true;
                break;
            }
        }
        if (check) {
            alert('Enter all login details');
        }
        else {
            await readdata(enteredUser.inputUsername);
            const firebaseEnteredUser = await response;
            if (firebaseEnteredUser.apartmentName === enteredUser.inputApartId) {
                if (firebaseEnteredUser.username === enteredUser.inputUsername) {
                    if (firebaseEnteredUser.password === enteredUser.inputPassword) {
                        alert('Login Successful');
                        localStorage.setItem('loggeduserdata' , JSON.stringify(firebaseEnteredUser));
                         window.location.href = 'home-u.html';
                    }
                    else {
                        alert('Login Unsuccessful');
                    }
                }
                else {
                    alert('Login Unsuccessful');
                }
            }
            else {
                alert('Login Unsuccessful');
            }
        }
       
        
    });

