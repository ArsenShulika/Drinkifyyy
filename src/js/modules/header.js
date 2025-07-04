// ============ MENU DESKTOP ========== //
const refs = {
  toggleMenuDropdownBtn: document.querySelector(
    '.js-dropdown-menu-desktop-item'
  ),
  menuDropdown: document.querySelector('.js-menu-list-dropdown'),
};

refs.toggleMenuDropdownBtn?.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
  refs.menuDropdown.classList.toggle('is-open');
}
