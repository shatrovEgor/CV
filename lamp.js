const lampBack = document.querySelector('.lamp-back')
const lampBackDark =document.querySelector('.lamp-back-dark')
const body = document.querySelector('body')
const slidePrev = document.querySelector('.slider-prev')
const slideNext = document.querySelector('.slider-next')
const forma = document.querySelector('.forma')

lampBack.addEventListener('click', (event) =>{
    lampBack.style.display = 'none'
    lampBackDark.style.display = 'block'
    body.style.background = '#708090'
    body.style.color = '#FDF5E6'
    slidePrev.style.background = '#FDF5E6'
    slideNext.style.background = '#FDF5E6'
    forma.style.background = '#708090'
    })

lampBackDark.addEventListener('click', (event) =>{
    lampBackDark.style.display = 'none'
    lampBack.style.display = 'block'
    body.style.background = '#f6f6f6'  
    body.style.color = '#0f141e'
    forma.style.background = '#f6f6f6'
})