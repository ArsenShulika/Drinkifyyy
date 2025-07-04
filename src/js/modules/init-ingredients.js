import { setupModalFavoriteButton } from './modal';
import { ingredientsTemplateModal, renderIngredients } from './render-function';

let favoriteIngredients =
  JSON.parse(localStorage.getItem('favoriteIngredients')) || [];

const refs = {
  cocktailList: document.querySelector('.js-cocktails-list'),
  titel: document.querySelector('.js-titel'),
  notFoundContainer: document.querySelector('.js-image-not-found-container'),
  backdrop: document.querySelector('.backdrop'),
};

if (favoriteIngredients.length === 0) {
  refs.titel.textContent = 'Favorite ingredients';
  refs.notFoundContainer.classList.remove('visually-hidden');
} else {
  const markup = renderIngredients(favoriteIngredients);
  refs.titel.textContent = 'Favorite cocktails';
  refs.cocktailList.innerHTML = markup;
}

// ! DELETE FROM FAVORITE

refs.cocktailList.addEventListener('click', handleChangeFavoriteStatus);

function handleChangeFavoriteStatus(e) {
  const deleteBtn = e.target.closest('[data-type="addLikeToFavorite"]');
  if (!deleteBtn) return;

  const card = e.target.closest('.cocktails-list-item');

  if (!card) return;

  const ingredientId = card.dataset.id;

  card.remove();

  const ingredient = favoriteIngredients.find(i => i._id === ingredientId);
  if (!ingredient) return;

  favoriteIngredients = favoriteIngredients.filter(
    ingr => ingr._id !== ingredientId
  );
  localStorage.setItem(
    'favoriteIngredients',
    JSON.stringify(favoriteIngredients)
  );

  if (favoriteIngredients.length === 0) {
    refs.titel.textContent = 'Favorite ingredients';
    refs.notFoundContainer.classList.remove('visually-hidden');
  }
}

//! --- OPEN MODAL ---

refs.cocktailList.addEventListener('click', showModalIngredients);

function showModalIngredients(e) {
  const learnMoreBtn = e.target.closest('[data-type="learnMore"]');

  if (learnMoreBtn) {
    const card = learnMoreBtn.closest('.cocktails-list-item');
    if (!card || !favoriteIngredients.length) return;

    const ingredientId = card.dataset.id;
    const ingredient = favoriteIngredients.find(
      ingr => ingr._id === ingredientId
    );

    refs.backdrop.innerHTML = ingredientsTemplateModal(ingredient);
    refs.backdrop.classList.remove('visually-hidden');

    setupModalFavoriteButton(ingredient, refs.backdrop);
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
