let stars = document.getElementById('stars');
let Apex = document.getElementById('Apex');
let moon = document.getElementById('moon');
let logo = document.getElementById('logo');
let skyline1 = document.getElementById('skyline1');
let skyline2 = document.getElementById('skyline2');

let building1 = document.getElementById('building1');
let building2 = document.getElementById('building2');
let building3 = document.getElementById('building3');
let building4 = document.getElementById('building4');
let building5 = document.getElementById('building5');
let building6 = document.getElementById('building6');


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.2 + 'px';
    moon.style.top = -value * 0.1 + 'px';
    logo.style.top = value * 0.8 + 'px';
    Apex.style.top = value * 0.8+ 'px';
    skyline1.style.left = value * 0.4 + 'px';
    skyline2.style.left = -value * 0.3 + 'px';

    building1.style.left = value * 1 + 'px';
    building1.style.top = value * 0.35 + 'px';

    building2.style.left = -value * 0.95 + 'px';
    building2.style.top = value * 0.35 + 'px';

    building3.style.left = value * 1 + 'px';
    building3.style.top = value * 0.5 + 'px';

    building4.style.left = -value * 1 + 'px';
    building4.style.top = value * 0.5 + 'px';

    building5.style.top = value * 1 + 'px';
    building5.style.left = value * 0.25 + 'px';

    building6.style.top = value * 1 + 'px';
    building6.style.left = -value * 0.25 + 'px';
    
})