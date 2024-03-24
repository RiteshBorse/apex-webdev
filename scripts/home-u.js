import { search } from '../scripts/utlis/fuse.js'
document.querySelector('.js-document-wallet')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : red ; font-size : 45px; "> Document Wallet will be loaded Here</p>
            `;
    });
document.querySelector('.js-complaint-track')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
            <div class="title-complaint">Complaints</div>
            <div class="complaint-box">
                <div class="complaint-input">
                    <div class="complaint-input-title">New Complaint</div>
                    <input type="text" class="complaint-input-data"
                        placeholder="Please provide detailed information about the complaint">
                    <style>
                        input[type="text"]::placeholder {

                            color: #c5c3c3;
                        }
                    </style>

                </div>
                <div class="complaint-button-div">
                    <button class="complaint-button">Create New Complaint</button>
                </div>
            </div>
            `;
    });


document.querySelector('.js-ammenites-booking')
    .addEventListener(('click'), () => {
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> Ammenites booking will be loaded Here</p>
            `;
    });

document.querySelector('.js-search-icon')
    .addEventListener(('click'), () => {
        const data = search();
        const obj = data[0];
        const item = obj.item.fun;
        console.log(`.js-${item}`);
    
        document.querySelector('.js-features')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> ${item} will be loaded Here</p>
            `;
    });
