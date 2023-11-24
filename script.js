var show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
});

const botao = document.querySelector("button.pedir")
const modal = document.querySelector(".abrir")

function pedir() {
    modal.classList.add('active')
}

function finalizar() {
    modal.classList.remove('active')
    window.alert('Seu pedido chegarar em 50 minutos')
}
