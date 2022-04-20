let menu = document.querySelector('#menu');
let nav = document.querySelector('.navbar');

menu.addEventListener('click',()=>{;
    menu.classList.toggle('fa-times');
    if(menu.classList.contains('fa-times')){
        nav.style.left = "0"
    }else{
        nav.style.left = "-100%"
    };
});