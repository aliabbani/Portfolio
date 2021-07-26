const menu = document.querySelector('.menu');
const closeItem = document.querySelector('.close-item');
const portfolioMenu = document.querySelector('.portfolio-menu');
const aboutMenu = document.querySelector('.about-menu');
const contactMenu = document.querySelector('.contact-menu');

menu.addEventListener('click', showMenu);
closeItem.addEventListener('click', hideMenu);
portfolioMenu.addEventListener('click', hideMenu);
aboutMenu.addEventListener('click', hideMenu);
contactMenu.addEventListener('click', hideMenu);


function hideMenu(e) {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
}

function showMenu(e) {
  e.preventDefault();
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'flex';
}
