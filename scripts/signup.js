import { writeUserData } from '../scripts/firebase.js';


const button = document.querySelector('.js-signup-button');
button.addEventListener(("click") , () => {
    const newUser = {
        firstName : document.querySelector('.js-name').value,
        middleName : document.querySelector('.js-middlename').value,
        surName : document.querySelector('.js-surname').value,
        apartmentName : document.querySelector('.js-apartment-name').value,
        street : document.querySelector('.js-street').value,
        pincode : document.querySelector('.js-pincode').value,
        country : document.querySelector('.js-country').value,
        state : document.querySelector('.js-state').value,
        district : document.querySelector('.js-district').value,
        flats : document.querySelector('.js-no-of-flats').value,
        residents : document.querySelector('.js-no-of-res').value,
        shops : document.querySelector('.js-no-of-shops').value,
        username : document.querySelector('.js-set-username').value,
        password : document.querySelector('.js-set-password').value
    };
        writeUserData(newUser);
});





