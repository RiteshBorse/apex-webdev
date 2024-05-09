import { search } from '../scripts/utlis/fuse.js'
import { ammBooking } from './feature-js/amm-booking.js';
import { annPost } from './feature-js/ann-post.js';
import { complaint } from './feature-js/complaint.js';
import { documentWallet } from './feature-js/document-wallet.js';
import { eventCalender } from './feature-js/event-calender.js';
import { expenses } from './feature-js/expenses.js';
import { residentDetails } from './feature-js/resident-details.js';
import { visitorEntry } from './feature-js/vistor-entry.js';
import { authenticate } from './utlis/check-auth.js';

//Check if the user is logged in 
authenticate();

//Top right corner shows the name of the user logged in by this function
let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
document.querySelector('.user-element')
    .innerHTML = ` 
                 <div>
                    <img src="assets/icons8-verified-user-96.png" alt="">
                    <div class="user-name js-profile-user">${data.firstName} <br> <span>${data.post}</span></div>
                    <button class="logout-button">Logout</button>
                </div>
                <div> 
                    <img src="assets/icons8-tick-50.png" alt="">
                    <p>Apex Verified User</p>
                </div>
`;

//Check if the user is security guard
if(data.post == 'Security Guard')
{
    document.querySelector('.sidebar-element-mid')
        .innerHTML = `
        
        <div class="mid-child js-vistor-entry">
                    <div><img class="icons" src="assets/icons8-guest-50.png" alt=""></div>
                     <div>Visitor Entry</div>
                </div>
        
        `;
    
    //Visitor Entry on click
    document.querySelector('.js-vistor-entry')
    .addEventListener(('click') , ()=> {
        visitorEntry();
});
}
else{

//Document Wallet on click
document.querySelector('.js-document-wallet')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : red ; font-size : 45px; "> Document Wallet will be loaded Here</p>
            `;
    });
//Document Wallet on click
document.querySelector('.js-document-wallet')
    .addEventListener(('click') , () => {
        documentWallet();
    });

//Complaint Tracking on click
document.querySelector('.js-complaint-track')
    .addEventListener(('click'), () => {
        complaint();
    });

//Ammenites booking on click
document.querySelector('.js-ammenites-booking')
    .addEventListener(('click'), () => {
       ammBooking();
    });

//Resident details on click
document.querySelector('.js-resident-details')
    .addEventListener(('click') , () => {
            residentDetails();
    });

//Announcment post on click
    document.querySelector('.js-ann-post')
    .addEventListener(('click') , () => {
            annPost();
    });

//Visitor Entry on click
document.querySelector('.js-vistor-entry')
    .addEventListener(('click') , ()=> {
        visitorEntry();
    });

//Event Calender on click
document.querySelector('.js-event-calender')
    .addEventListener(('click') , ()=> {
        eventCalender();
});

//Expenses on click
document.querySelector('.js-expenses')
    .addEventListener(('click') , ()=>{
        expenses();
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
} 

//Logout button
const logoutbutton = document.querySelector('.logout-button');
logoutbutton.addEventListener(('click') , ()=> {
    sessionStorage.removeItem('loggeduserdata');
    window.location.reload();
});