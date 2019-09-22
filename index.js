const btnMobMenu = document.querySelector('.burger-menu');
const desktopMenu = document.querySelector('.site-menu');
let innerMobMenu;

function mobMenu() {
  if (!innerMobMenu) {
    innerMobMenu = desktopMenu.cloneNode(true);
    innerMobMenu.classList.remove('site-menu');
    innerMobMenu.classList.add('site-menu-mob');
    btnMobMenu.appendChild(innerMobMenu);
  }
  innerMobMenu.hidden = false;

  document.body.addEventListener('click', clickOutMenu);
  function clickOutMenu(e) {
    if (e.target != innerMobMenu && e.target != btnMobMenu) {
      innerMobMenu.hidden = true;
      document.body.removeEventListener('click', clickOutMenu);
    }
  }
}

btnMobMenu.addEventListener('click', mobMenu);