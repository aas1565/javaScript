let articles= document.querySelectorAll('.blog-article')

for (let article of articles){
    let more= article.querySelector('.more')
    more.onclick=function(){
        article.classList.remove('short')
    }
}