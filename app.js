const btn = document.querySelector('.mail')
const screens = document.querySelectorAll('.screen')
const form = document.querySelector('#form');
const popup = document.querySelector('.popup');
const btnCancel = document.querySelector('.btn-cancel')

btn.addEventListener('click', (event) => {
    form.classList.add('open');
    popup.classList.add('popup_open');
})

btnCancel.addEventListener('click', (event) => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
})