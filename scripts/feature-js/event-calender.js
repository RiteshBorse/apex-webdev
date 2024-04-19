import { addEvent, readAllEvents } from "../firebase.js";

export function eventCalender() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    if(data.post == 'Chairman')
    {
        document.querySelector('.js-features')
            .innerHTML = `
                <div class="events">
                    <h1>Event Calender</h1>
                    <div class="event-list js-event-list">
                        <div class="event">
                            <p>Name of Event</p>
                            <p>Location</p>
                            <p>Date and Time</p>
                        </div>
                    </div>
                    <div class="event-card hidden">
                        <input class="event-name" type="text" placeholder="Enter Name of Event">
                        <input class="event-date-time" type="text" placeholder="Enter Date and Time">
                        <input class="event-location" type="text" placeholder="Enter Location">
                        <button class="create-event-button">Create Event</button>
                    </div>
                    <button class="add-event js-add-event">+</button>
                </div>
            `;
            const name = document.querySelector('.event-name');
            const dateTime = document.querySelector('.event-date-time');
            const location = document.querySelector('.event-location');
            readAllEvents();
            document.querySelector('.js-add-event')
                .addEventListener(('click') , ()=> {
                    document.querySelector('.event-card').classList.toggle('hidden');
                });
            document.querySelector('.create-event-button')
                .addEventListener(('click') , ()=>{
                    addEvent(name.value , dateTime.value , location.value);
                    document.querySelector('.event-card').classList.toggle('hidden');
                    readAllEvents();
                });
   } 
   else {
    document.querySelector('.js-features')
    .innerHTML = `
        <div class="events">
            <h1>Event Calender</h1>
            <div class="event-list js-event-list">
                <div class="event">
                    <p>Name of Event</p>
                    <p>Location</p>
                    <p>Date and Time</p>
                </div>
            </div>
        </div>
    `;
    readAllEvents();
   }           
}