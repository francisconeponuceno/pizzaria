var show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

const cardapio = document.getElementById('itens-cardapio');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
});

const itens_cardapio = ( event) => {
    resp = event.target.id
    alert(resp)
}

cardapio.addEventListener('click', itens_cardapio);