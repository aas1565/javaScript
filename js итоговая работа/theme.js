let darkButton= document.querySelector('.theme-button-dark')
let lightButton=document.querySelector('.theme-button-light')

darkButton.onclick= function(){
    document.body.classList.add('dark')
    document.querySelector('.next').classList.add('dark')
    document.querySelector('.prev').classList.add('dark')
    document.querySelector('.food-but-1').classList.add('dark')
    document.querySelector('.food-but-2').classList.add('dark')
    darkButton.classList.add('active')
    lightButton.classList.remove('active')
}

lightButton.onclick=function(){
    document.body.classList.remove('dark')
    document.querySelector('.next').classList.remove('dark')
    document.querySelector('.prev').classList.remove('dark')
    document.querySelector('.food-but-1').classList.remove('dark')
    document.querySelector('.food-but-2').classList.remove('dark')
    lightButton.classList.add('active')
    darkButton.classList.remove('active')
}