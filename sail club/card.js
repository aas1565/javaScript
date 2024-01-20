let standatButton=document.querySelector('.card-view-button-grid')
let listButton=document.querySelector('.card-view-button-list')
let cards=document.querySelector('.cards')

listButton.onclick=function(){
    cards.classList.add('list')
    standatButton.classList.remove('active')
    listButton.classList.add('active')
}

standatButton.onclick=function(){
    cards.classList.remove('list')
    listButton.classList.remove('active')
    standatButton.classList.add('active')
}