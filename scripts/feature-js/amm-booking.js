import { addAmenity, addComplaint, readAllAmm, readAllComplaint } from "../firebase.js";

//Function to create div for new complaint
export function ammBooking() {
    document.querySelector('.js-features')
        .innerHTML = `
        <div class="complaint-title">Amenities Booking</div>
        <div class="complaint">
              
                  <div class="complaint-box">
                  <div class="complaint-input">
                  <div class="complaint-input-title">Book Amenities</div>
                  <input type="text" class="complaint-input-data" placeholder="Mention Amenity Details" >
                  <style>
             
                     input[type="text"]::placeholder {     
                         color: #c5c3c3; 
                     }
                  </style>
                      </div>
                         <div class="complaint-button-div">
                          <button class="js-complaint-button complaint-button">Apply</button>
                          </div>
                         </div>
                     </div>
                
                
                    <div class="display-complaint js-display-complaint">
                        <div class="loader"></div>
                     </div>
        
`;
let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
if(data.post == 'Chairman') {
    document.querySelector('.complaint').classList.add('complaint-hide');
}
    document.querySelector('.js-complaint-button')
        .addEventListener(('click'), async () => {
            let complaint = document.querySelector('.complaint-input-data').value;
            addAmenity(complaint);
            readAllAmm();
            document.querySelector('.complaint-input-data').value = '';
        });
        readAllAmm();
}

