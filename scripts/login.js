import { readdata  } from '../scripts/firebase.js';

document.querySelector('.js-login-button')
    .addEventListener(('click'), async () => {
        let enteredUser = {
            inputApartId: document.querySelector('.js-apartid').value,
            inputUsername: document.querySelector('.js-username').value,
            inputPassword: document.querySelector('.js-password').value
        };
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
            const firebaseEnteredUser = await readdata(enteredUser);
            console.log(firebaseEnteredUser);
            if (firebaseEnteredUser.apartmentId === enteredUser.inputApartId) {
                if (firebaseEnteredUser.username === enteredUser.inputUsername) {
                    if (firebaseEnteredUser.password === enteredUser.inputPassword) {
                        document.querySelector('.js-right')
                        .innerHTML += `
                        <p class="alert">Login Successfully</p>
                        `;
                        sessionStorage.setItem('loggeduserdata' , JSON.stringify(firebaseEnteredUser));
                         setTimeout(() => {
                            const alertElement = document.querySelector('.js-right .alert');
                            if (alertElement) {
                                alertElement.remove();
                                window.location.href = 'home-u.html';
                            }
                        }, 1000);
                        
                    }
                    else {
                        document.querySelector('.js-right')
                        .innerHTML += `
                        <p class="alert" style="background-color : red; color : darkred;">Login Failed</p>
                        `;
                    }
                }
                else {
                    document.querySelector('.js-right')
                    .innerHTML += `
                    <p class="alert" style="background-color : red; color : darkred;">Login Failed</p>
                    `;
                }
            }
            else {
                document.querySelector('.js-right')
                .innerHTML += `
                <p class="alert" style="background-color : red; color : darkred;">Login Failed</p>
                `;
            }
            
        }
       
        
    });

