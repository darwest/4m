const menuBurger = document.querySelector('.burger-menu');
const menuBurgerBlock = document.querySelector('.menu-burger-block');
const menuHeader = document.querySelector('.header-menu');
const Header = document.querySelector('.header');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurgerBlock.classList.toggle('active');
    menuHeader.classList.toggle('active');
    Header.classList.toggle('active');
});