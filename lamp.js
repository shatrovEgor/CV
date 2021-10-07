const lamp = document.querySelector('.lamp')
const lampOff = document.querySelector('.lamp-off')
const body = document.querySelector('body')

lamp.addEventListener('click', (event) =>{
    lamp.style.display = 'none'
    lampOff.style.display = 'block'
    body.style.background = 'grey'
})

lampOff.addEventListener('click', (event) =>{
    lampOff.style.display = 'none'
    lamp.style.display = 'block'
    body.style.background = '#f6f6f6'    
})