const btn = document.querySelector('.mail')
const box = document.querySelector('.box')
const form = document.querySelector('#form');
const popup = document.querySelector('.popup');
const btnCancel = document.querySelector('.btn-cancel')

btn.addEventListener('mouseover', (event) => {
    console.log('go')
    btn.classList.add('hover')
    box.classList.add('hover')
})

btn.addEventListener('mouseleave', (event) => {
    btn.classList.remove('hover')
    box.classList.remove('hover')
})

btn.addEventListener('click', (event) => {
    form.classList.add('open');
    popup.classList.add('popup_open');
})

btnCancel.addEventListener('click', (event) => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
})