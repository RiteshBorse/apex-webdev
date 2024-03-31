import { search } from '../scripts/utlis/fuse.js'
import { complaint } from './feature-js/complaint.js';
import { authenticate } from './utlis/check-auth.js';

//Check if the user is logged in 
authenticate();

//Top right corner shows the name of the user logged in by this function
let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
document.querySelector('.js-profile-user')
    .innerHTML = `Hii , ${data.firstName}`;


//Document Wallet on click
document.querySelector('.js-document-wallet')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : red ; font-size : 45px; "> Document Wallet will be loaded Here</p>
            `;
    });

//Complaint Tracking on click
document.querySelector('.js-complaint-track')
    .addEventListener(('click'), () => {
        complaint();
    });

//Ammenites booking on click
document.querySelector('.js-ammenites-booking')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> Ammenites booking will be loaded Here</p>
            `;
    });

//Using search bar for searching functions
document.querySelector('.js-search-icon')
    .addEventListener(('click'), () => {
        const data = search();
        const obj = data[0];
        const item = obj.item.fun;
        console.log(`.js-${item}`);
    
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> ${item} will be loaded Here</p>
            `;
    });
