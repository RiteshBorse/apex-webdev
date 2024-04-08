import { addComplaint, readAllComplaint } from "../firebase.js";

//Function to create div for new complaint
export function complaint() {
    document.querySelector('.js-features')
        .innerHTML = `
        <div class="complaint-title">Complaints</div>
        <div class="complaint">
              
                  <div class="complaint-box">
                  <div class="complaint-input">
                  <div class="complaint-input-title">New Complaint</div>
                  <input type="text" class="complaint-input-data" placeholder="Please provide detailed information about the complaint" >
                  <style>
             
                     input[type="text"]::placeholder {     
                         color: #c5c3c3; 
                     }
                  </style>
                      </div>
                         <div class="complaint-button-div">
                          <button class="js-complaint-button complaint-button">Create New Complaint</button>
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
            addComplaint(complaint);
            readAllComplaint();
            document.querySelector('.complaint-input-data').value = '';
        });
        readAllComplaint();
}

