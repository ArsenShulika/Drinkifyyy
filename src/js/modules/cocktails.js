import { getRandomCocktails, lookUpCocktails } from '../API/cocktails-api';
import { addToFavorites, setupModalFavoriteButton } from './modal';
import { cocktailsTemplate, cocktailTemplateModal } from './render-function';

const favoriteCocktails =
  JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
console.log(favoriteCocktails);

const favoriteIngredients =
  JSON.parse(localStorage.getItem('favoriteIngredients')) || [];

let cocktailsArr;

// RANDOM COCKTAILS

const refs = {
  cocktailsList: document.querySelector('.js-cocktails-list'),
  container: document.querySelector('.js-pagination'),
  backdrop: document.querySelector('.backdrop'),
  likeBtn: document.querySelector('.cocktails-btn-like'),
  modalList: document.querySelector('.js-modal-list'),
};

document.addEventListener('DOMContentLoaded', renderCocktails);

async function renderCocktails() {
  const data = await getRandomCocktails();
  cocktailsArr = data;
  /* просто коктелі зберігати в масив треба було в глобальному скоупі */ const markup =
    cocktailsTemplate(data);
  refs.cocktailsList.innerHTML = markup;
  refs.container.style.display = 'none';
}

// RANDOM COCKTAILS

// ! MODAL COCKTAIL

refs.cocktailsList.addEventListener('click', showModalCocktail);

export async function showModalCocktail(e) {
  const learnMoreBtn = e.target.closest('[data-type="learnMore"]');
  const likeBtn = e.target.closest('[data-type="addLikeToFavorite"]');

  //! --- OPEN MODAL ---
  if (learnMoreBtn) {
    const card = learnMoreBtn.closest('.cocktails-list-item');
    if (!card || !cocktailsArr?.length) return;

    const cocktailId = card.dataset.id;
    const cocktail = cocktailsArr.find(c => c._id === cocktailId);
    if (!cocktail) return;

    const clickedCocktail = await lookUpCocktails(cocktailId);
    console.log(clickedCocktail);

    // Рендеримо модалку
    refs.backdrop.innerHTML = cocktailTemplateModal(clickedCocktail);
    refs.backdrop.classList.remove('visually-hidden');

    setupModalFavoriteButton(cocktail, refs.backdrop);
  }

  //! --- TOGGLE FAVORITE ---

  if (likeBtn) {
    const card = likeBtn.closest('.cocktails-list-item');
    if (!card || !cocktailsArr?.length) return;

    const cocktailId = card.dataset.id;
    const cocktail = cocktailsArr.find(c => c._id === cocktailId);
    if (!cocktail) return;

    let favorites = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
    const isFavorite = favorites.some(c => c._id === cocktail._id);
    const icon = likeBtn.querySelector('.cocktails-icon');

    if (isFavorite) {
      // Видалити з localStorage за допомогою filter
      favorites = favorites.filter(c => c._id !== cocktail._id);
      localStorage.setItem('favoriteCocktails', JSON.stringify(favorites));
      icon.style.fill = 'transparent';
    } else {
      addToFavorites(cocktail);
      icon.style.fill = '#ffffff';
    }
  }
}

//! Закриваємо вікно!!!

refs.backdrop.addEventListener('click', function (e) {
  const isCloseBtn = e.target.closest('[data-type="close-btn"]');
  const isOutsideModal = e.target === refs.backdrop;
  const isBackBtn = e.target.closest('[data-type="backBtn"]');

  if (isCloseBtn || isOutsideModal || isBackBtn) {
    refs.backdrop.classList.add('visually-hidden');
  }
});
