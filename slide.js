let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const arr = ['This project about... Project1','This project about... Project2','This project about... Project3','This project about... Project4']
let clicker = 0

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 800;
    if (offset > 2400) {
        offset = 0;
    }
    if(clicker === 3) {
        clicker = -1
    }
    clicker += 1 
    sliderLine.style.left = -offset + 'px';
    document.getElementById('p1').innerHTML = arr[clicker]
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 800;
    if (offset < 0) {
        offset = 2400;
    }
    if(clicker === 0) {
        clicker = 4
    }
    clicker -= 1
    sliderLine.style.left = -offset + 'px';
    document.getElementById('p1').innerHTML = arr[clicker]
});

