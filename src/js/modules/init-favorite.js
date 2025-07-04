import { lookUpCocktails } from '../API/cocktails-api';
import { setupModalFavoriteButton } from './modal';
import { cocktailTemplateModal, renderFavorites } from './render-function';
lookUpCocktails;

let favorites = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

const refs = {
  cocktailList: document.querySelector('.js-cocktails-list'),
  titel: document.querySelector('.js-titel'),
  notFoundContainer: document.querySelector('.js-image-not-found-container'),
  backdrop: document.querySelector('.backdrop'),
};

if (favorites.length === 0) {
  refs.titel.textContent = 'Favorite cocktails';
  refs.notFoundContainer.classList.remove('visually-hidden');
} else {
  const markup = renderFavorites(favorites);

  refs.titel.textContent = 'Favorite cocktails';
  refs.cocktailList.innerHTML = markup;
}

// ! DELETE FROM FAVORITE

refs.cocktailList.addEventListener('click', handleChangeFavoriteStatus);

function handleChangeFavoriteStatus(e) {
  const deleteBtn = e.target.closest('[data-type="addLikeToFavorite"]');
  if (!deleteBtn) return;

  console.log(e.target);
  const card = e.target.closest('.cocktails-list-item');

  if (!card || !favorites?.length) return;

  const cocktailId = card.dataset.id;
  console.log(cocktailId);
  const cocktail = favorites.find(c => c._id === cocktailId);
  if (!cocktail) return;

  card.remove();

  // Видалити з localStorage за допомогою filter
  favorites = favorites.filter(c => c._id !== cocktail._id);
  localStorage.setItem('favoriteCocktails', JSON.stringify(favorites));
  if (favorites.length === 0) {
    refs.titel.textContent = 'Favorite cocktails';
    refs.notFoundContainer.classList.remove('visually-hidden');
  }
}

//! --- OPEN MODAL ---

refs.cocktailList.addEventListener('click', showModalfavorite);

async function showModalfavorite(e) {
  const learnMoreBtn = e.target.closest('[data-type="learnMore"]');

  if (learnMoreBtn) {
    const card = learnMoreBtn.closest('.cocktails-list-item');
    if (!card || !favorites?.length) return;

    const cocktailId = card.dataset.id;
    const cocktail = favorites.find(c => c._id === cocktailId);
    if (!cocktail) return;

    // Рендеримо модалку
    const clickedCocktail = await lookUpCocktails(cocktailId);
    refs.backdrop.innerHTML = cocktailTemplateModal(clickedCocktail);
    refs.backdrop.classList.remove('visually-hidden');

    setupModalFavoriteButton(cocktail, refs.backdrop);
  }
}

//!одинакова модалка init-favorites.js i cocktails.js;

refs.backdrop.addEventListener('click', function (e) {
  const isCloseBtn = e.target.closest('[data-type="close-btn"]');
  const isOutsideModal = e.target === refs.backdrop;
  const isBackBtn = e.target.closest('[data-type="backBtn"]');

  if (isCloseBtn || isOutsideModal || isBackBtn) {
    refs.backdrop.classList.add('visually-hidden');
  }
});
