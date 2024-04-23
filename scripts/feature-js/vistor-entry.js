import { addGuest, deleteVisitorEntry, readAllGuest, readmyGuest , addNewGuest} from "../firebase.js";
let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
export function visitorEntry() {
    if(data.post != 'Security Guard')
    {
        //These function will only run if the user is Resident or Chairman
        document.querySelector('.js-features')
            .innerHTML = `
                <div class="visitors">
                        <h1 class="visitor-entry-h1">Visitor Entry</h1>
                        <div class="add-guest-card hidden">
                            <p>Add the guest</p>
                            <input class="name-guest js-name-guest" type="text" placeholder="Enter Name of Guest">
                            <input class="time-guest js-time-guest" type="text" placeholder="Enter time">
                            <button class="notify-guard-button">Notify Security Guard</button>
                        </div>
                        <div class="add-guest">
                            <button>+</button>
                        </div> 
                        <div class="visitor-list js-visitor-list">
                            <div class="loader"></div>
                        </div>
                </div>
            `;
            readmyGuest();
        document.querySelector('.add-guest')
            .addEventListener(('click') , () => {
                document.querySelector('.add-guest-card').classList.toggle('hidden');
            });

        document.querySelector('.notify-guard-button') 
            .addEventListener(('click') , () => {
                const guest = document.querySelector('.js-name-guest');
                const time = document.querySelector('.js-time-guest');
                addGuest(guest.value , time.value);
                guest.value = '';
                time.value = '';
                document.querySelector('.add-guest-card').classList.toggle('hidden');
                readmyGuest();
            });
    }
    else {
        //This will work if the user is Security Guard
        document.querySelector('.js-features')
        .innerHTML = `
            <div class="visitors">
                <button class="js-delete delete">Delete Data</button>
                <h1 class="visitor-entry-h1">Visitor Entry</h1>
                <div class="add-guest-card hidden">
                            <p>Add the guest</p>
                            <input class="resident-name-guest js-resident-name-guest" type="text" placeholder="Enter Name of Resident">
                            <input class="name-guest js-name-guest" type="text" placeholder="Enter Name of Guest">
                            <button class="notify-resident-button">Notify Resident</button>
                        </div>
                        <div class="add-guest">
                            <button>+</button>
                        </div> 
                    <div class="visitor-list js-visitor-list">
                        <div class="loader">
                    </div>
            <div>
        `;
        readAllGuest();
        document.querySelector('.add-guest')
        .addEventListener(('click') , () => {
            document.querySelector('.add-guest-card').classList.toggle('hidden');
        });
        document.querySelector('.notify-resident-button') 
            .addEventListener(('click') , () => {
                const resident = document.querySelector('.js-resident-name-guest');
                const guest = document.querySelector('.js-name-guest');
                let time = new Date().toLocaleString();
                addNewGuest(resident.value ,guest.value , time);
                guest.value = '';
                document.querySelector('.add-guest-card').classList.toggle('hidden');
                readAllGuest();
        });

    document.querySelector('.js-delete')
        .addEventListener(('click') , ()=> {
            deleteVisitorEntry();
            readAllGuest();
        });
       
    }
}