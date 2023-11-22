var show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
});

const botao = document.querySelector("button.pedir")
const modal = document.querySelector('dialog')

function pedir() {
    modal.show()
}

function finalizar() {
    modal.close()
    window.alert('Seu pedido chegarar em 50 minutos')
}
