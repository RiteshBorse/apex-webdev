import { addGuest } from "../firebase.js";

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
        `;
        let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    document.querySelector('.add-guest')
        .addEventListener(('click') , () => {
            document.querySelector('.add-guest-card').classList.toggle('hidden');
        });

    document.querySelector('.notify-guard-button') 
        .addEventListener(('click') , () => {
            const guest = document.querySelector('.js-name-guest').value;
            const time = document.querySelector('.js-time-guest').value;
            addGuest(data.username ,guest , time);
        });
}