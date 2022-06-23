const hamburger = document.querySelector('.nav-hamburger');
const nav_links = document.querySelector('.nav-links');
const closedMenu = document.getElementById('closed-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');
let menuActive = false;
hamburger.addEventListener('click', () => {
  nav_links.classList.toggle('nav-links-shown');
  !menuActive
    ? ((closedMenu.style.display = 'block'),
      (hamburgerMenu.style.display = 'none'),
      (menuActive = true))
    : ((closedMenu.style.display = 'none'),
      (hamburgerMenu.style.display = 'block'),
      (menuActive = false));
});