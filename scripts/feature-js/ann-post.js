export function annPost() {
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    document.querySelector('.js-features')
        .innerHTML = `
        <div class="announcement-create">
        <h1>Announcement Posts</h1>
        <div class="ann-info">
            <div class="ann-input">
                <input class="input-title js-input-title" type="text" placeholder="Add announcement title here">
                <input class="input-description js-input-description" type="text" placeholder="Add announcements description here">
            </div>
           
       <button class="announcement-button js-create-ann-button">Create New Announcement</button>
        </div>
       
    </div>
    <div class="announcement-list js-ann-list">
        <div class="banner">
            <div class="heading js-banner-heading">Title Appears Here</div>
            <div class="description js-banner-description">
                Description Appears Here
            </div>
        </div>
    </div>
                
        
        `;
        console.log(data);

    if(data.post == 'Chairman') {
        document.querySelector('.announcement-create').classList.add('announcement-create-show');
        const title = document.querySelector('.js-input-title').value;
        const description = document.querySelector('.js-input-description').value;
        //create ann
    }
}