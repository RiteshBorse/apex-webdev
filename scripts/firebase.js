import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get ,push} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { generateRandomNumber } from "./utlis/randomid.js";
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

//Function to read all complaint

export async function readAllComplaint()
{
    let allComplaint = '';
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef,`society/${data.apartmentId}/features/complaints/`))
        .then((snapshot) => {
            snapshot.forEach(element => {
                 allComplaint += `
                <div class="complaint-list">
                <img src="images/complaint.png" class="complaint-img">
                <div class="user-info">
                <div class="user-complaint">${element.val().complaint}</div>
                <div class="name-date">
                <div class="complaint-date">${element.val().date}</div>|
                <div class="user-name">${element.val().name}</div>
                <div class="complaint-status">${element.val().status}</div>
                </div>
                </div>
                </div>
                `
            });
            if(allComplaint)
            {
                document.querySelector('.js-display-complaint')
                .innerHTML = allComplaint;
            }
            else {
                document.querySelector('.js-display-complaint')
                .innerHTML = '';
            }
           
        })
}


