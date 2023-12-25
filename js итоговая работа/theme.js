let darkButton= document.querySelector('.theme-button-dark')
let lightButton=document.querySelector('.theme-button-light')

darkButton.onclick= function(){
    document.body.classList.add('dark')
    darkButton.classList.add('active')
    lightButton.classList.remove('active')
    document.querySelector('.main-head').classList.add('active')
}

lightButton.onclick=function(){
    document.body.classList.remove('dark')
    lightButton.classList.add('active')
    darkButton.classList.remove('active')
}