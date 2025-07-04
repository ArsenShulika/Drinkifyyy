const refs = {
  // OPEN & CLOSE MOBILE MENU
  mobileMenu: document.querySelector('.js-mobile-menu'),
  openBtn: document.querySelector('.js-mobile-menu-open'),
  closeBtn: document.querySelector('.js-mobile-menu-close'),
  //   OPEN MOBILE SUBMENU
  openSubmenu: document.querySelector('.js-mobile-menu-open-item'),
  mobileSubmenu: document.querySelector('.js-mobile-menu-dropdown'),
  //   TOGGLE THEME
  toggleTheme: document.querySelector('.js-toggle-theme'),
  toggleThemeDesktop: document.querySelector('.js-toggle-theme-desktop'),
  bodyTheme: document.querySelector('body'),
  imageWhite: document.querySelector('.js-white-theme'),
  imageBlack: document.querySelector('.js-black-theme'),
};

// OPEN & CLOSE MOBILE MENU

const toggleMobileMenu = () => {
  refs.mobileMenu.classList.toggle('is-open');
};

refs.openBtn?.addEventListener('click', toggleMobileMenu);
refs.closeBtn?.addEventListener('click', toggleMobileMenu);

//  OPEN MOBILE SUBMENU

refs.openSubmenu?.addEventListener('click', openMobileSubmenu);

function openMobileSubmenu() {
  console.log('Open button clicked');
  refs.mobileSubmenu.classList.toggle('is-open');
}

//   TOGGLE THEME

// 1. При завантаженні — зчитати тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  refs.bodyTheme.classList.add('dark-theme');
}

// 2. Клік по кнопці на desktopi  — змінити тему

refs.toggleThemeDesktop?.addEventListener('click', () => {
  refs.bodyTheme.classList.toggle('dark-theme');
  // 3. Зберегти нову тему
  if (refs.bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    refs.imageWhite.classList.remove('dark-theme');
    refs.imageBlack.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light');
    refs.imageWhite.classList.add('dark-theme');
    refs.imageBlack.classList.remove('dark-theme');
  }
});

// 2. Клік по кнопці — змінити тему

refs.toggleTheme?.addEventListener('click', () => {
  refs.bodyTheme.classList.toggle('dark-theme');
  // 3. Зберегти нову тему
  if (refs.bodyTheme.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    refs.imageWhite.classList.remove('dark-theme');
    refs.imageBlack.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light');
    refs.imageWhite.classList.add('dark-theme');
    refs.imageBlack.classList.remove('dark-theme');
  }
});
