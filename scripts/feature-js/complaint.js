import { addComplaint, readAllComplaint } from "../firebase.js";

export function complaint() {
    document.querySelector('.js-features')
        .innerHTML = `

        <div class="complaint">
              <div class="complaint-title">Complaints</div>
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
                    <div class="complaint-list">
                    <img src="images/complaint.png" class="complaint-img">
                    <div class="user-info">
                    <div class="user-complaint">User complaint</div>
                    <div class="name-date">
                    <div class="complaint-date">date</div>|
                    <div class="user-name">User Name</div>
                    </div>
                    </div>
                    </div>
                     </div>
        
`;
    document.querySelector('.js-complaint-button')
        .addEventListener(('click'), async () => {
            addComplaint("ok fine");
        });
}

