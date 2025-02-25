const $ = (selector) => document.querySelector(selector);
const hamburgerMenu = $('.nav__hamburger');
const navSidebar = $('.nav__sidebar');
const closeSidebar = $('.close-btn');

hamburgerMenu.addEventListener('click', () => {
  navSidebar.style.display = 'flex';
})
closeSidebar.addEventListener('click', () => {
  navSidebar.style.display = 'none';
})



