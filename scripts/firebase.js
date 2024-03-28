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
    let data = JSON.parse(localStorage.getItem('loggeduserdata'));
    let newId = generateRandomNumber();
    console.log(newId);
    await set(ref(db, `society/${data.apartmentId}/features/complaints/${newId}`),
        {
            name: data.firstName,
            date : new Date().toDateString(),
            complaint: complaint
        }
    );
}

//Function to read all complaint

export async function readAllComplaint()
{
    let allComplaint = '';
    let data = JSON.parse(localStorage.getItem('loggeduserdata'));
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

/*

const db = getDatabase();
export let allData = '';
let agg = 0;
export async function readAllData() {
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef, "users/"))
        .then((snapshot) => {
            snapshot.forEach(element => {
                allData += `
          <div class="box">   
    <p><span>Apartment Name:</span> ${element.val().apartmentName}</p>
    <p><span>First Name:</span> ${element.val().firstName}</p>
    <p><span>Middle Name:</span> ${element.val().middleName}</p>
    <p><span>Surname:</span> ${element.val().surName}</p>
    <p><span>Street:</span> ${element.val().street}</p>
    <p><span>Pincode:</span> ${element.val().pincode}</p>
    <p><span>Country:</span> ${element.val().country}</p>
    <p><span>State:</span> ${element.val().state}</p>
    <p><span>District:</span> ${element.val().district}</p>
    <p><span>Number of Flats:</span> ${element.val().flats}</p>
    <p><span>Number of Residents:</span> ${element.val().residents}</p>
    <p><span>Number of Shops:</span> ${element.val().shops}</p>
    <p><span>User Name:</span> ${element.val().username}</p>
    <p><span>Password:</span> ${element.val().password}</p>
</div>

            `
            });



            document.querySelector('.js-content').innerHTML = allData;
        })
}
*/


