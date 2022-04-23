const menu = document.querySelector('.menu');
const dropdown = document.querySelectorAll('.dropdown');

menu.addEventListener('click',function(){
    menu.parentElement.classList.toggle('open');
    document.body.classList.toggle('nav-open');
})
dropdown.forEach(function(item){
    item.addEventListener('click',function(){
        item.parentElement.classList.toggle('link-open');
    })
})