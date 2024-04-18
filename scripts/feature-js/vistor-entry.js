import { addGuest, readallGuest } from "../firebase.js";

export function visitorEntry() {
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
            <div>
        `;
        let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
        readallGuest();
    document.querySelector('.add-guest')
        .addEventListener(('click') , () => {
            document.querySelector('.add-guest-card').classList.toggle('hidden');
        });

    document.querySelector('.notify-guard-button') 
        .addEventListener(('click') , () => {
            const guest = document.querySelector('.js-name-guest');
            const time = document.querySelector('.js-time-guest');
            addGuest(data.username ,guest.value , time.value);
            guest.value = '';
            time.value = '';
            document.querySelector('.add-guest-card').classList.toggle('hidden');
            readallGuest();
        });
}