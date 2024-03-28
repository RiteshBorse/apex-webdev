import { search } from '../scripts/utlis/fuse.js'
import { complaint } from './feature-js/complaint.js';
import { authenticate } from './utlis/check-auth.js';

authenticate();

let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
document.querySelector('.js-profile-user')
    .innerHTML = `Hii , ${data.firstName}`;


//Document Wallet
document.querySelector('.js-document-wallet')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : red ; font-size : 45px; "> Document Wallet will be loaded Here</p>
            `;
    });
//Complaint Tracking
document.querySelector('.js-complaint-track')
    .addEventListener(('click'), () => {
        complaint();
    });

    


document.querySelector('.js-ammenites-booking')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> Ammenites booking will be loaded Here</p>
            `;
    });

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
