var show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
});

const cart = document.getElementById('cart-btn')
cart.addEventListener('click',function(){
    console.log(cart)
})
