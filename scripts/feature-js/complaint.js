import { addComplaint } from "../firebase.js";

export function complaint() {
    document.querySelector('.js-features')
        .innerHTML = `
<div class="title-complaint">Complaints</div>
<div class="complaint-box">
    <div class="complaint-input">
        <div class="complaint-input-title">New Complaint</div>
        <input type="text" class="complaint-input-data js-complaint-input-data"
            placeholder="Please provide detailed information about the complaint">
        <style>
            input[type="text"]::placeholder {

                color: #c5c3c3;
            }
        </style>

    </div>
    <div class="complaint-button-div">
        <button class="complaint-button js-complaint-button">Create New Complaint</button>
    </div>
</div>
`;
    document.querySelector('.js-complaint-button')
        .addEventListener(('click'), async () => {
            let complaint = document.querySelector('.js-complaint-input-data').value;
            addComplaint(complaint);
        });
}
