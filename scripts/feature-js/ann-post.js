import { addAnn, readAllAnn } from "../firebase.js";

export function annPost() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    document.querySelector('.js-features')
        .innerHTML = `
        <h1>Announcement Posts</h1>
        <div class="announcement-create">
        <div class="ann-info">
            <div class="ann-input">
                <input class="input-title js-input-title" type="text" placeholder="Add announcement title here">
                <input class="input-description js-input-description" type="text" placeholder="Add announcements description here">
            </div>
           
       <button class="announcement-button js-create-ann-button">Create New Announcement</button>
        </div>
       
    </div>
    <div class="announcement-list js-ann-list">
    <div class="loader"></div>
    </div>
                
        
        `;


    if(data.post == 'Chairman') {
        document.querySelector('.announcement-create').classList.add('announcement-create-show');

        document.querySelector('.js-create-ann-button')
            .addEventListener(('click') , async () => {
                const title = document.querySelector('.js-input-title').value;
                const description = document.querySelector('.js-input-description').value;
                await addAnn(title , description);
                document.querySelector('.js-input-title').value = '';
                document.querySelector('.js-input-description').value = '';
                readAllAnn();
            })

        
    }
    readAllAnn();
}