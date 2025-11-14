import { searchIngredientsByID } from '../API/cocktails-api';
import {
  cocktailTemplateModal,
  ingredientsTemplateModal,
} from './render-function';

const refs = {
  backdrop: document.querySelector('.backdrop'),
};

// const previousCocktail = JSON.parse(localStorage.getItem('currentCocktail'));

export function addToFavorites(cocktail) {
  const favorites = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

  const alreadyIn = favorites.some(c => c._id === cocktail._id);
  if (alreadyIn) return;

  favorites.push(cocktail);
  localStorage.setItem('favoriteCocktails', JSON.stringify(favorites));
}

// =============== FAVORITE BUTTON ============================

export function setupModalFavoriteButton(cocktail, backdropElement) {
  const btn = backdropElement.querySelector('[data-type="addToFavorite"]');
  if (!btn) return;

  let favorites = JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
  let isFavorite = favorites.some(c => c._id === cocktail._id);

  // Показати поточний стан
  btn.textContent = isFavorite ? 'remove from favorites' : 'add to favorite';

  // Скинути попередні слухачі (на випадок повторного рендеру)
  const newBtn = btn.cloneNode(true);
  btn.replaceWith(newBtn);

  // Додати слухача
  newBtn.addEventListener('click', () => {
    let updatedFavorites =
      JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter(c => c._id !== cocktail._id);
      newBtn.textContent = 'add to favorite';
      isFavorite = false;
    } else {
      updatedFavorites.push(cocktail);
      newBtn.textContent = 'remove from favorites';
      isFavorite = true;
    }

    localStorage.setItem('favoriteCocktails', JSON.stringify(updatedFavorites));
  });
}

// =============== FAVORITE BUTTON ===================================

// =============== OPEN INGREDIENT BUTTON ============================

refs.backdrop.addEventListener('click', handleIngredientClick);

async function handleIngredientClick(e) {
  const clickedIngredient = e.target.closest('.js-modal-list-item');
  const ingredientId = clickedIngredient.dataset.id;
  if (!ingredientId) return;

  const ingredient = await searchIngredientsByID(ingredientId);

  const modalContainerCocktail = document.querySelector('.modal-ingredients');
  // !! модалка чогось не працює, якщо через refs???

  modalContainerCocktail.classList.add('visually-hidden');

  refs.backdrop.innerHTML = ingredientsTemplateModal(ingredient);
}

// =============== OPEN INGREDIENT BUTTON ============================

// ===============  BUTTON ADD TO FAVORITE ============================

refs.backdrop.addEventListener('click', handleAddToFavoriteBtn);

function handleAddToFavoriteBtn(e) {
  const favBtn = e.target.closest('.js-ingredient-favorite-btn');

  if (!favBtn) return;

  const ingredientId = favBtn.dataset.id;

  const favoriteIngredients =
    JSON.parse(localStorage.getItem('favoriteIngredients')) || [];

  const isAlreadyFavoriteIngr = favoriteIngredients.some(
    item => item._id === ingredientId
  );

  if (isAlreadyFavoriteIngr) {
    const updateLocalStorage = favoriteIngredients.filter(
      item => item._id !== ingredientId
    );
    localStorage.setItem(
      'favoriteIngredients',
      JSON.stringify(updateLocalStorage)
    );
    favBtn.textContent = 'add to favorite';
  } else {
    searchIngredientsByID(ingredientId).then(ingredient => {
      favoriteIngredients.push(ingredient);
      localStorage.setItem(
        'favoriteIngredients',
        JSON.stringify(favoriteIngredients)
      );
      favBtn.textContent = 'remove from favorite';
    });
  }
}
// ===============  BUTTON ADD TO FAVORITE ====================

//! Закриваємо вікно!!!

refs.backdrop.addEventListener('click', function (e) {
  const isCloseBtn = e.target.closest('[data-type="close-btn"]');
  const isOutsideModal = e.target === refs.backdrop;
  const isBackToCocktail = e.target.closest('[data-type="backToCocktail"]');
  const isBackBtn = e.target.closest('[data-type="backBtn"]');

  const previousCocktail = JSON.parse(localStorage.getItem('currentCocktail'));

  if (isCloseBtn || isOutsideModal || isBackBtn) {
    refs.backdrop.classList.add('visually-hidden');
    refs.backdrop.innerHTML = '';
    return;
  }

  // Назад до коктейлю
  if (isBackToCocktail && previousCocktail) {
    refs.backdrop.innerHTML = cocktailTemplateModal(previousCocktail);
    refs.backdrop.classList.remove('visually-hidden');
    setupModalFavoriteButton(previousCocktail, refs.backdrop);
  }
});

//! Закриваємо вікно!!!
