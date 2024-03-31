import { registerApartment } from '../scripts/firebase.js';
import { generateApartId } from './utlis/apartid.js';

//Input for registration of apartment
document.querySelector('.js-signup-button')
    .addEventListener(("click") , async () => {
        const newApartment = {
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
            const id = generateApartId(0 , newApartment);
            await registerApartment(id ,newApartment);
            document.querySelector('.js-right')
                .innerHTML += `
                <p class="alert">Apartment Registered Successfully <br> <span>1. Your Apartment ID is "${id}". <br>2. Now you can SignUp with Apartment ID.<br>3. Make sure to take screenshot as this ID can't be regenerated</span></p>
                `;
});





