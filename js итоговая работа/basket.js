const buttonCart= document.querySelector('.corz')
const modalCart= document.querySelector('#modal-cart')
let allGoods=[]
const cartTableGoods=document.querySelector('.cart-table__goods')//переменная для отрисовки тела таблицы с товарами
const cartTableTotal=document.querySelector('.card-table__total')//итоговая цена 
const cartCount=document.querySelector('.cart__num')//количество товаров в корзине


function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart.cartGoods))
}

function loadCart(){
    const savedCart= localStorage.getItem('cart')
    if (savedCart){
        cart.cartGoods = JSON.parse(savedCart)
        cart.cartRender()
    }
}


function getGoods(){//получение из json всех товаров
    fetch('db.json').then(res=> res.json()).then(result => [allGoods = result])
}

const cart= {//объект нашей корзины
    cartGoods:[],//массив объектов товаров
    addCartId(id){//будем смотреть если у нас такой айдишник есть в cartGoods
        const goodItem= this.cartGoods.find(good=>good.id===id)
        if (goodItem){
            this.plusGood(id)
        }else{
            const {id: idx, name, price}=allGoods.find(good=>good.id===id)
            this.cartGoods.push({id: idx, name, price, count:1})
            this.cartRender()
        }
    },
    cartRender(){
        cartTableGoods.textContent=''
        this.cartGoods.forEach(({id, name, price, count}) =>{
            const trGoods=document.createElement('tr')
            trGoods.className='cart-item'
            trGoods.dataset.id=id
            trGoods.innerHTML=`
            <td>${name}</td>
            <td>${price}$</td>
            <td><button class = 'cart-btn-minus' data-id=${id}>-</td>
            <td>${count}</td>
            <td><button class = 'cart-btn-plus' data-id=${id}>+</td>
            <td>${count * price}$</td>
            <td><button class = 'cart-btn-delete' data-id=${id}>x</td>
            `
            cartTableGoods.append(trGoods)
        })
        const totalPrice=this.cartGoods.reduce((sum, item) => sum+ item.price * item.count, 0)
        cartTableTotal.textContent=`${totalPrice}$`
        cartCount.textContent=this.cartGoods.reduce((sum, item) => sum + item.count, 0)

        saveCart()
    },
    plusGood(id){
        const elem= this.cartGoods.find(el => el.id ===id)
        if (elem){
            elem.count++
        }
        this.cartRender()
        saveCart()
    },
    minusGood(id){
        const elem= this.cartGoods.find(el => el.id ===id)
        if (elem.count === 1){
            this.deleteGood(id)
        }else{
            elem.count--
        }
        this.cartRender()
        saveCart()
    },
    deleteGood(id){
        this.cartGoods=this.cartGoods.filter(el => el.id !== id)
        this.cartRender()
        saveCart()
    }
}

cartTableGoods.addEventListener('click', (e) =>{
    const target= e.target
    if (target.tagName === 'BUTTON'){
        const className=target.className
        const id= target.dataset.id
        switch(className){
            case 'cart-btn-delete':
                cart.deleteGood(id)
                break
            case 'cart-btn-minus':
                cart.minusGood(id)
                break
            case 'cart-btn-plus':
                cart.plusGood(id)
                break
        }
    }
})


buttonCart.addEventListener('click', ()=>{
    modalCart.classList.add('show')
})

document.addEventListener('mouseup', (e) =>{//закрываем модальное окно если не кликаем по таблице
    const target= e.target
    if(!target.closest('.modal') || target.classList.contains('modal-close')){
        if (modalCart.classList.contains('show')){
            modalCart.classList.remove('show')
        }

    }
})


document.body.addEventListener('click', (e) => {
    const target=e.target.closest('.price')
    if (target){
        cart.addCartId(target.dataset.id)
    }
})
getGoods()
loadCart()
