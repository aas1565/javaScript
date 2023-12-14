const buttonCard= document.querySelector('.corz')
const modalCard= document.querySelector('#modal-cart')

const cart= {//объект нашей корзины
    cartGoods:[],//массив объектов товаров
    addCartId(id){//будем смотреть если у нас такой айдишник есть в cartGoods

    },
    cartRender(){
        
    }
}

buttonCard.addEventListener('click', () =>{
    modalCard.classList.add('show')
})