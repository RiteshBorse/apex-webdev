import { search } from '../scripts/utlis/fuse.js'
document.querySelector('.js-document-wallet')
    .addEventListener(('click'), () => {
        document.querySelector('.js-content')
            .innerHTML = `
                <p style=" color : red ; font-size : 45px; "> Document Wallet will be loaded Here</p>
            `;
    });
document.querySelector('.js-complaint-track')
    .addEventListener(('click'), () => {
        document.querySelector('.js-content')
            .innerHTML = `
                <p style=" color : green ; font-size : 45px; "> Complaint Tracking will be loaded Here</p>
            `;
    });


document.querySelector('.js-ammenites-booking')
    .addEventListener(('click'), () => {
        document.querySelector('.js-content')
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
    
        document.querySelector('.js-content')
            .innerHTML = `
                <p style=" color : blue ; font-size : 45px; "> ${item} will be loaded Here</p>
            `;
    });
