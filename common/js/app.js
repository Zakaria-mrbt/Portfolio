const burger = document.querySelector('.burger')
const header_navbar = document.querySelector('.header_navbar')
const main = document.querySelector('main')
burger.addEventListener('click' , () => {
    burger.classList.toggle('active');
    header_navbar.classList.toggle('active');
    main.classList.toggle('active')
});