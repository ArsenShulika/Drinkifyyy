// SEARCH COCKTAILS BY LETTER

import {
  lookUpCocktails,
  searchCocktailsByLetter,
  searchCocktailsByName,
} from '../API/cocktails-api';
import { addToFavorites, setupModalFavoriteButton } from './modal';
import { cocktailsTemplate, cocktailTemplateModal } from './render-function';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  sectionTitel: document.querySelector('.js-titel'),
  cocktailsList: document.querySelector('.js-cocktails-list'),
  alphabetList: document.querySelector('.js-alphabet-list'),
  showedletter: document.querySelector('.js-letter'),
  lettersContainer: document.querySelector('.js-letters-list'),
  letterBtn: document.querySelector('.js-searck-btn'),
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-pagination'),
  backdrop: document.querySelector('.backdrop'),
  addToFavoriteBtn: document.querySelector('.modal-btn-add'),
};

const favoriteCocktails =
  JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
console.log(favoriteCocktails);

let queryLetter = '';
let ITEMS_PER_PAGE = 8;
let cocktailsArr;

refs.alphabetList.addEventListener('click', renderCocktailsByLetter);

async function renderCocktailsByLetter(e) {
  refs.sectionTitel.textContent = 'Searching results';
  const item = e.target.closest('.letter-item');
  if (!item) return;

  queryLetter = item.textContent.trim();
  refs.showedletter.textContent = queryLetter;

  try {
    const data = await searchCocktailsByLetter(queryLetter);
    cocktailsArr = data;
    console.log(cocktailsArr);
    instance.setItemsPerPage(8);
    const markup = cocktailsTemplate(data);

    instance.setTotalItems(cocktailsArr.length);
    instance.reset(); // Скидаємо пагінацію на першу сторінку
    displayPageOfCocktails(1); // Відображаємо першу сторінку коктейлів

    refs.cocktailsList.innerHTML = markup;
  } catch (error) {
    console.log('Error fetching cocktails:', error);
    refs.cocktailsList.innerHTML =
      '<p class="error">Failed to load cocktails.</p>';
  }
  refs.container.style.display = 'block';
}

// Функція для відображення коктейлів для поточної сторінки
function displayPageOfCocktails(page) {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const cocktailsToDisplay = cocktailsArr.slice(startIndex, endIndex);
  const markup = cocktailsTemplate(cocktailsToDisplay);
  refs.cocktailsList.innerHTML = markup;
}

refs.letterBtn.addEventListener('click', () => {
  refs.lettersContainer.classList.toggle('is-open');
});

refs.lettersContainer.addEventListener('click', () => {
  refs.lettersContainer.classList.remove('is-open');
});

// SEARCH COCKTAILS BY LETTER

// SEARCH COCKTAILS BY NAME

refs.form.addEventListener('submit', renderCocktailsByName);

async function renderCocktailsByName(e) {
  e.preventDefault();

  refs.sectionTitel.textContent = 'Searching results';
  const formData = new FormData(refs.form);
  const queryCocktailName = formData.get('query');
  if (!queryCocktailName) return;

  try {
    const data = await searchCocktailsByName(queryCocktailName);
    const markup = cocktailsTemplate(data);
    refs.cocktailsList.innerHTML = markup;
  } catch (error) {
    console.log('Error fetching cocktails:', error);
    refs.cocktailsList.innerHTML =
      '<p class="error">Failed to load cocktails.</p>';
  }
}

// SEARCH COCKTAILS BY NAME

// TUI PAGINATION

const instance = new Pagination(refs.container, {
  totalItems: 0,
  itemsPerPage: ITEMS_PER_PAGE,
  visiblePages: 3,
});

instance.on('afterMove', event => {
  const currentPage = event.page;
  displayPageOfCocktails(currentPage);
});

//! --- OPEN MODAL ---
refs.cocktailsList.addEventListener('click', showModalCocktail);

async function showModalCocktail(e) {
  e.preventDefault();
  const learnMoreBtn = e.target.closest('[data-type="learnMore"]');
  const likeBtn = e.target.closest('[data-type="addLikeToFavorite"]');

  if (learnMoreBtn) {
    const card = learnMoreBtn.closest('.cocktails-list-item');
    if (!card || !cocktailsArr?.length) return;

    const cocktailId = card.dataset.id;
    const cocktail = cocktailsArr.find(c => c._id === cocktailId);
    if (!cocktail) return;

    const clickedCocktail = await lookUpCocktails(cocktailId);

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
