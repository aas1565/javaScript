let mainImg= document.querySelector('.active-photo')
let allImg=document.querySelectorAll('.preview-list li a')

for (let activeImage of allImg){
    activeImage.onclick=function(e){
        e.preventDefault()
        mainImg.src=activeImage

        let currentActive= document.querySelector('.preview-list .active-item')
        currentActive.classList.remove('active-item')
        activeImage.classList.add('active-item')
    }
}