import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
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

//Function to register a user
export async function writeUserData(username, newUser) {
    await set(ref(db, 'users/' + username), newUser);
};

//Funcion to read data of user
export let response = '';
export async function readdata(name) {

    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `users/${name}`));

    if (snapshot.exists()) {
        response = await snapshot.val();
    } else {
        return '';
    }
};

//Function to add complaint 
export async function addComplaint(complaint) {
    let data = JSON.parse(localStorage.getItem('loggeduserdata'));
    console.log(data);
    await set(ref(db , 'complaints/' + data.apartmentName) , 
        {
            complaint : complaint,
            name : data.username
        }
    );
}



