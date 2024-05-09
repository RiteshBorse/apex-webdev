import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get ,push , update , remove} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { generateRandomNumber } from "./utlis/randomid.js";
import { complaint } from "./feature-js/complaint.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwISHPEBgBixOR9x5xSEdu7Fb5NpNtyQc",
    authDomain: "apex-webdev.firebaseapp.com",
    databaseURL: "https://apex-webdev-default-rtdb.firebaseio.com",
    projectId: "apex-webdev",
    storageBucket: "apex-webdev.appspot.com",
    messagingSenderId: "119052131768",
    appId: "1:119052131768:web:eb11313fde4d211585434d",
    measurementId: "G-FR7Z6FDJJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

/*
copy of write function 

calling : await writeUserData();

export async function writeUserData(username, newUser) {
    await set(ref(db, 'users/' + username), newUser);
};
*/

//Function to register a apartment
export async function registerApartment(id, newApartment) {
    await set(ref(db, `society/${id}/apartmentInfo/`), newApartment);
    await appendApartmentID(id);
};
export async function appendApartmentID(id) {
    await set(ref(db, `society/${id}/specialID/`), 
    {
        apartmentId : id
    });
};
//Function to register a member of apartment
export async function registerMember(newUser) {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${newUser.apartmentId}`));
    if (snapshot.exists()) {
        await set(ref(db, `society/${newUser.apartmentId}/users/${newUser.username}`), newUser);
        return true;
    }
    else {
        return false;
    }
};

//Funcion to read data of user
export async function readdata(enteredUser) {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${enteredUser.inputApartId}/users/${enteredUser.inputUsername}`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

//Function to add complaint 
export async function addComplaint(complaint) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    console.log(newId);
    await set(ref(db, `society/${data.apartmentId}/features/complaints/${newId}`),
        {
            name: data.firstName,
            date : new Date().toDateString(),
            complaint: complaint,
            status : '🔴 Not Resolved'
        }
    );
}

// Function to resolve a complaint
export async function resolveComplaint(id) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    update(ref(db, `society/${data.apartmentId}/features/complaints/${id}`),
        {
            status : '✅ Resolved'
        }
    );
    readAllComplaint();
}

//Function to read all complaint
export async function readAllComplaint()
{
    let allComplaint = '';
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/complaints/`))
        .then((snapshot) => {
            if(data.post == 'Chairman')
            {
                snapshot.forEach(element => {
                const status = element.val().status;
                const statusColor = status === '🔴 Not Resolved' ? 'red' : 'green';
                if(status == "✅ Resolved")
                {
                    allComplaint += `
                    <div class="complaint-list">
                    <img src="images/complaint.png" class="complaint-img">
                    <div class="user-info">
                    <div class="user-complaint">${element.val().complaint}</div>
                    <div class="name-date">
                    <div class="complaint-date">${element.val().date}</div>|
                    <div class="user-name">${element.val().name}</div>
                    <div class="complaint-status" style="color: ${statusColor};">${status} </div>
                    </div>
                    </div>
                    <div class="resolve resolve-show is-resolved js-resolve" data-id="${element.key}" >Resolved</div>
                    </div>
                    `
                }
                else{
                    allComplaint += `
                    <div class="complaint-list">
                    <img src="images/complaint.png" class="complaint-img">
                    <div class="user-info">
                    <div class="user-complaint">${element.val().complaint}</div>
                    <div class="name-date">
                    <div class="complaint-date">${element.val().date}</div>|
                    <div class="user-name">${element.val().name}</div>
                    <div class="complaint-status" style="color: ${statusColor};">${status} </div>
                    </div>
                    </div>
                    <div class="resolve resolve-show js-resolve" data-id="${element.key}" >Resolve</div>
                    </div>
                    `
                }

                   
               });
            }
            else {
                snapshot.forEach(element => {
                    const status = element.val().status;
                    const statusColor = status === '🔴 Not Resolved' ? 'red' : 'green';
                    allComplaint += `
                   <div class="complaint-list">
                   <img src="images/complaint.png" class="complaint-img">
                   <div class="user-info">
                   <div class="user-complaint">${element.val().complaint}</div>
                   <div class="name-date">
                   <div class="complaint-date">${element.val().date}</div>|
                   <div class="user-name">${element.val().name}</div>
                   <div class="complaint-status" style="color: ${statusColor};">${status}</div>
                   </div>
                   </div>
                   <div class="resolve">Resolve</div>
                   </div>
                   `
               });
            }
            if(allComplaint)
               { 
                   document.querySelector('.js-display-complaint')
                   .innerHTML = allComplaint;
               }
               else {
                   document.querySelector('.js-display-complaint')
                   .innerHTML = '';
               }

            document.querySelectorAll('.js-resolve')
                .forEach((button) => {
                    button.addEventListener(('click') , () => {
                        const element = button.dataset.id;
                        resolveComplaint(element);
                    });
                })          
        })
}


//Function to add annoucment 
export async function addAnn(title , description) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    await set(ref(db, `society/${data.apartmentId}/features/announcement/${newId}`),
        {
           title : title,
           description : description
        }
    );
}

//Function to read annoucment
export async function readAllAnn()
{
    let allAnn = '';
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/announcement/`))
        .then((snapshot) => {
            if(data.post == 'Chairman')
            {
                snapshot.forEach(element => {
                    allAnn += `
                   
                    <div class="banner">
                        <div class="heading js-banner-heading">${element.val().title}</div>
                        <div class="description js-banner-description">
                            ${element.val().description}
                        </div>
                    </div>
               
                     
                    `
                });
            }
            else {
                snapshot.forEach(element => {
                   allAnn += `
                  
                   <div class="banner">
                       <div class="heading js-banner-heading">${element.val().title}</div>
                       <div class="description js-banner-description">
                           ${element.val().description}
                       </div>
                   </div>
              
                    
                   `
               });
            }
            if(allAnn)
               { 
                   document.querySelector('.js-ann-list')
                   .innerHTML = allAnn;
               }
               else {
                   document.querySelector('.js-ann-list')
                   .innerHTML = '';
               }
        })
}

//Function to add guest
export async function addGuest(guest , time) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    await set(ref(db, `society/${data.apartmentId}/features/visitor-entry/${newId}`),
        {
           name : data.firstName,
           username : data.username,
           guest : guest,
           time : time,
           entry : '-',
           status : 'unapprove'
        }
    );
}

//Function to read specific  visitor-entry
export async function readmyGuest()
{
    let allGuest = '';
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/visitor-entry/`))
        .then((snapshot) => {
            
                snapshot.forEach(element => {
                    if(data.username === element.val().username || data.firstName === element.val().name)
                     {
                        allGuest += `
                   
                        <div class="visitor-child">
                            <p>Name of Visitor : ${element.val().guest}</p>
                            <p>Time of Visitor : ${element.val().time}</p>
                        </div>
                     
                    `;
                }
                });
                if(allGuest) {
                    document.querySelector('.js-visitor-list').innerHTML = allGuest;
                }
                else {
                    document.querySelector('.js-visitor-list').innerHTML = '';
                }
                
        });
      
}

//Function to remove the delete all the visitor entries
export async function deleteVisitorEntry() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    await remove(ref(db, `society/${data.apartmentId}/features/visitor-entry`));
};

//Function to read all the Visitors for Security Guard
export async function readAllGuest()
{
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let allGuest = '';
    const db = getDatabase();
    const dbRef = ref(db);
    let time = new Date().toLocaleString();
    get(child(dbRef,`society/${data.apartmentId}/features/visitor-entry/`))
        .then((snapshot) => {
            
                snapshot.forEach(element => {
                    if(element.val().status == 'approve')
                    {
                        allGuest += `
                        <div class="visitor-child">
                            <p>Resident : ${element.val().name}</p>
                            <p>Name of Guest : ${element.val().guest}</p>
                            <p>Expected Arival Time: ${element.val().time}</p>
                            <p>Entry Time : ${element.val().entry}</p>
                            <button class="entry-time is-approved" data-id="${element.key}">Approved</button>
                        </div>
                    `;
                    }
                    else{
                        allGuest += `
                        <div class="visitor-child">
                            <p>Resident : ${element.val().name}</p>
                            <p>Name of Guest : ${element.val().guest}</p>
                            <p>Expected Arival Time: ${element.val().time}</p>
                            <p>Entry Time : ${element.val().entry}</p>
                            <button class="entry-time" data-id="${element.key}">Approve</button>
                        </div>
                    `;
                    }
                });
                if(allGuest) {
                    document.querySelector('.js-visitor-list').innerHTML = allGuest;
                }
                else {
                    document.querySelector('.js-visitor-list').innerHTML = '';
                }
                
                document.querySelectorAll('.entry-time')
                .forEach((button) => {
                    button.addEventListener(('click') , () => {
                        const element = button.dataset.id;
                          console.log(element);
                          updateEntry(element);
                      
                    });
                })    
        });    

}
//Function to add guest
export async function addNewGuest( resident,  guest , time) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    await set(ref(db, `society/${data.apartmentId}/features/visitor-entry/${newId}`),
        {
           name : resident,
           guest : guest,
           time : time,
           entry : time
        }
    );
}

//Function to update entry time
export async function updateEntry(id) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let time = new Date().toLocaleString();
    update(ref(db, `society/${data.apartmentId}/features/visitor-entry/${id}`),
        {
            entry : time,
            status : 'approve'
        }
    );
    readAllGuest();
}

//Function to add event
export async function addEvent(event , dateTime , location) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    await set(ref(db, `society/${data.apartmentId}/features/event-calender/${newId}`),
        {
           event : event,
           dateTime : dateTime,
           location : location
        }
    );
}
//Function to read all events
export async function readAllEvents()
{
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let allEvent = '';
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/event-calender/`))
        .then((snapshot) => {
            
                snapshot.forEach(element => {
                        allEvent += `
                        <div class="event">
                            <p>Name of Event :<span> ${element.val().event}</span></p>
                            <p>Location : <span>${element.val().location}</span></p>
                            <p>Date and Time : <span>${element.val().dateTime}</span></p>
                        </div>
                    `;
                });
                if(allEvent) {
                    document.querySelector('.js-event-list').innerHTML = allEvent;
                }
                else {
                    document.querySelector('.js-event-list').innerHTML = '';
                } 
        });    

}

//Function to add the maintenace amount
export async function addMaintenaceAmt(maintenanceAmt) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    await set(ref(db, `society/${data.apartmentId}/features/expenses/maintenance/maintenance-amount`),
    {
        amount : maintenanceAmt
    }
    );
}
//Function to add all months for maintenace
export async function addMonths(mon){
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    await set(ref(db, `society/${data.apartmentId}/features/expenses/maintenance/months/${data.username}/${mon}`),
    {
      status : "Not-Paid"
    }
    );
};
//Function to add all months for maintenace
export async function updateMonthStatus(mon){
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));

    await set(ref(db, `society/${data.apartmentId}/features/expenses/maintenance/months/${data.username}/${mon}`),
    {
       status : "Paid"
    }
    );
};
export async function readMonths(mon) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${data.apartmentId}/features/expenses/maintenance/months/${data.username}/${mon}`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

//Check if the user has opened the maintenace page first time and if yes then init months data 
export async function checkMonthsAdded() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${data.apartmentId}/features/expenses/maintenance/months/${data.username}`));

    if (snapshot.exists()) {
        return;
    } else {
        for(let i = 0; i<12 ; i++)
            {
                addMonths(i);
            }      
    }
};

//Function to read the maintenance amount
export async function readMaintenanceAmount() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${data.apartmentId}/features/expenses/maintenance/maintenance-amount`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

//Function to add the apex wallet to database
export async function apexWallet(amount) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    await set(ref(db, `society/${data.apartmentId}/features/expenses/maintenance/wallet/${data.username}`),
    {
        amount : amount
    }
    );
}

//Function to read the maintenance amount
export async function readApexWallet() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${data.apartmentId}/features/expenses/maintenance/wallet/${data.username}`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

//Function to add maintenance fund to society fund
export async function addsocietyFund(amount) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    await set(ref(db, `society/${data.apartmentId}/features/expenses/maintenance/society-fund/`),
    {
        amount : amount
    }
    );
}

//Function to read the society fund
export async function readSocietyFund() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `society/${data.apartmentId}/features/expenses/maintenance/society-fund`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

//Function to add complaint 
export async function addAmenity(complaint) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    await set(ref(db, `society/${data.apartmentId}/features/Amenity/${newId}`),
        {
            name: data.firstName,
            date : new Date().toDateString(),
            complaint: complaint,
            status : '🔴 Pending'
        }
    );
}

export async function approveAmm(id) {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    update(ref(db, `society/${data.apartmentId}/features/Amenity/${id}`),
        {
            status : '✅ Approved'
        }
    );
    readAllAmm();
}

//Function to read all complaint
export async function readAllAmm()
{
    let allComplaint = '';
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/Amenity/`))
        .then((snapshot) => {
            if(data.post == 'Chairman')
            {
                snapshot.forEach(element => {
                const status = element.val().status;
                const statusColor = status === '🔴 Pending' ? 'red' : 'green';
                if(status == "✅ Approved")
                {
                    allComplaint += `
                    <div class="complaint-list">
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/booking.png" alt="booking"/>
                    <div class="user-info" style="margin-left: 20px;">
                    <div class="user-complaint">${element.val().complaint}</div>
                    <div class="name-date">
                    <div class="complaint-date">${element.val().date}</div>|
                    <div class="user-name">${element.val().name}</div>
                    <div class="complaint-status" style="color: ${statusColor};">${status} </div>
                    </div>
                    </div>
                    <div class="resolve resolve-show is-resolved js-resolve" data-id="${element.key}" >Approved</div>
                    </div>
                    `
                }
                else{
                    allComplaint += `
                    <div class="complaint-list">
                    <img width="25" height="25" src="https://img.icons8.com/ios/50/booking.png" alt="booking"/>
                    <div class="user-info" style="margin-left: 20px;">
                    <div class="user-complaint">${element.val().complaint}</div>
                    <div class="name-date">
                    <div class="complaint-date">${element.val().date}</div>|
                    <div class="user-name">${element.val().name}</div>
                    <div class="complaint-status" style="color: ${statusColor};">${status} </div>
                    </div>
                    </div>
                    <div class="resolve resolve-show js-resolve" data-id="${element.key}" >Approve</div>
                    </div>
                    `
                }

                   
               });
            }
            else {
                snapshot.forEach(element => {
                    const status = element.val().status;
                    const statusColor = status === '🔴 Pending' ? 'red' : 'green';
                    allComplaint += `
                   <div class="complaint-list">
                   <img width="25" height="25" src="https://img.icons8.com/ios/50/booking.png" alt="booking"/>
                   <div class="user-info" style="margin-left: 20px;">
                   <div class="user-complaint">${element.val().complaint}</div>
                   <div class="name-date">
                   <div class="complaint-date">${element.val().date}</div>|
                   <div class="user-name">${element.val().name}</div>
                   <div class="complaint-status" style="color: ${statusColor};">${status}</div>
                   </div>
                   </div>
                   <div class="resolve">Resolve</div>
                   </div>
                   `
               });
            }
            if(allComplaint)
               { 
                   document.querySelector('.js-display-complaint')
                   .innerHTML = allComplaint;
               }
               else {
                   document.querySelector('.js-display-complaint')
                   .innerHTML = '';
               }

            document.querySelectorAll('.js-resolve')
                .forEach((button) => {
                    button.addEventListener(('click') , () => {
                        const element = button.dataset.id;
                        approveAmm(element);
                    });
                })          
        })
}