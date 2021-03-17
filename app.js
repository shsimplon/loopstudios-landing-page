const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const liens = document.querySelectorAll('nav a, header > a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    burger.classList.toggle('burger-cross');

});

liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        burger.classList.remove('burger-cross');
    });
});