let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const arr2 = [
    {main:'Project1', link: 'https://silly-leavitt-8c876f.netlify.app'},
    {main:'Project2', link: 'https://hh.ru/applicant/favorite_vacancies?hhtmFrom=resume_list&hhtmFromLabel=header&page=1'},
    {main:'Project3', link: 'https://www.youtube.com/'},
    {main:'Project4', link: 'https://www.twitch.tv/directory'}
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

