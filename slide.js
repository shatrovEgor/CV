let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const arr2 = [
    {main:'The iconic snake game. Used only html/css/JS', link: 'https://jsfiddle.net/shatrov_egor/4kdbus3v/12/'},
    {main:'A mini game to train your aim. Used only html/css/JS', link: 'https://jsfiddle.net/shatrov_egor/np79xugy/1/'},
    {main:'Posts list on VUE. A training project in which the main cases are implemented', link: 'https://silly-leavitt-8c876f.netlify.app'},
    {main:'A project similar to the previous one implemented on React', link: 'https://blissful-dijkstra-da0e47.netlify.app/login'}
]
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
    document.getElementById('p1').innerHTML = arr2[clicker].main
    document.getElementById('aLink').innerHTML = arr2[clicker].link
    document.getElementById('aLink').href = arr2[clicker].link
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
    document.getElementById('p1').innerHTML = arr2[clicker].main
    document.getElementById('aLink').innerHTML = arr2[clicker].link
    document.getElementById('aLink').href = arr2[clicker].link
});

