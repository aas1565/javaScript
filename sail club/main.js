let lightbutton= document.querySelector('.theme-button-light')
let darkButton= document.querySelector('.theme-button-dark')
let sanSerifButton=document.querySelector('.font-button-sans-serif')
let serifButton=document.querySelector('.font-button-serif')

lightbutton.onclick= function(){
    document.body.classList.remove('dark')
    lightbutton.classList.add('active')
    darkButton.classList.remove('active')
}

darkButton.onclick= function(){
    document.body.classList.add('dark')
    lightbutton.classList.remove('active')
    darkButton.classList.add('active')
}

sanSerifButton.onclick=function(){
    document.body.classList.remove('serif')
    sanSerifButton.classList.add('active')
    serifButton.classList.remove('active')
}

serifButton.onclick= function(){
    document.body.classList.add('serif')
    sanSerifButton.classList.remove('active')
    serifButton.classList.add('active')
}
