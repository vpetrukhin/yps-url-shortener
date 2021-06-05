const mobileMenuButton = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.header__nav');
const mobileMenuActiveClass = 'header__nav_active';

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle(mobileMenuActiveClass);
});