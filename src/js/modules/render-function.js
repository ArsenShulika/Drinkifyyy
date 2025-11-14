// RenderCards

export function cocktailTemplate({ _id, drink, drinkThumb, description }) {
  // ?????????????????????????????????????????????

  const favoriteIngredients =
    JSON.parse(localStorage.getItem('favoriteCocktails')) || [];

  const isFavorite = favoriteIngredients.some(item => item._id === _id);

  const activeClass = isFavorite ? 'active' : '';

  return ` <li class="cocktails-list-item list"  data-id=${_id}>
          <img
            class="cocktails-img"
            src="${drinkThumb}"
            width="307"
            height="257"
            alt="${drink}"
          />
          <h3 class="cocktails-subtitel">${drink}</h3>
          <p class="cocktails-desc">
           ${description}
          </p>
          <div class="cocktails-btns-wrapper">
            <button class="cocktails-learn-btn " type="button" data-type="learnMore">learn more</button>
            <button class="cocktails-btn-like" type="button" data-type="addLikeToFavorite">
              <svg class="cocktails-heart cocktails-icon ${activeClass}" data-type="cocktail-icon" width="18" height="18">
                <use href="../icons/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </li>`;
}

export function cocktailsTemplate(arr) {
  return arr.map(cocktailTemplate).join('');
}

// RenderCards

// RenderFavorites
export function renderFavorites(favorites) {
  return favorites
    .map(({ _id, drink, drinkThumb, description }) => {
      return `
      <li class="cocktails-list-item list" data-id=${_id}>
        <img
          class="cocktails-img"
          src="${drinkThumb}"
          width="307"
          height="257"
          alt="${drink}"
        />
        <h3 class="cocktails-subtitel">${drink}</h3>
        <p class="cocktails-desc">
          ${description}
        </p>
        <div class="cocktails-btns-wrapper">
          <button class="cocktails-learn-btn" type="button" data-type="learnMore">learn more</button>
          <button class="cocktails-btn-like" type="button" data-type="addLikeToFavorite">
            <svg class="cocktails-icon" data-type="cocktail-icon" width="18" height="18">
              <use href="../icons/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
      </li>
      `;
    })
    .join('');
}
// RenderFavorites

// RenderIngredients
export function renderIngredients(favorites) {
  return favorites
    .map(({ _id, title, description, type }) => {
      return `
      <li class="ingredients-list-item list" data-id="${_id}">
        <h3 class="ingredients-subtitel">${title}</h3>
        <h4 class="modal-subtitel-ingredients">${type}</h4>
        <p class="ingredients-desc">
          ${description}
        </p>
        <div class="ingredients-btns-wrapper">
          <button class="cocktails-learn-btn" type="button" data-type="learnMore">learn more</button>
          <button class="cocktails-btn-like" type="button" data-type="addLikeToFavorite">
            <svg class="cocktails-pulse" data-type="cocktail-icon" width="18" height="18">
              <use href="../icons/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
      </li>
      `;
    })
    .join('');
}
// RenderIngredients

// RenderCard

export function cocktailTemplateModal({
  _id,
  drink,
  drinkThumb,
  description,
  ingredients = [],
}) {
  const ingredientsMarkup = ingredients
    .map(
      ({ title, measure, ingredientId }) =>
        `<li class="modal-list-item js-modal-list-item" data-id='${ingredientId}'><a class='ingredients-btn link' href="#">${
          measure ? `${measure} ` : ''
        }${title}</a></li>`
    )
    .join('');

  return `<div class="modal-ingredients list" data-id="${_id}">
    
    <button class="modal-close-btn" data-type='close-btn'>
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-wrapper">
      <img
        class="modal-image"
        src="${drinkThumb}"  
        alt="${drink}"
      />
      <div class="modal-wrapper-act">
        <h2 class="modal-main-titel">${drink}</h2>
        <h3 class="modal-titel">ingredients</h3>
        <p class="modal-desc-ingredients">Per cocktail</p>
        <ul class="modal-list list js-modal-list">
        ${ingredientsMarkup}
        </ul>
      </div>
    </div>
    <h4 class="modal-subtitel">Instructions:</h4>
    <p class="modal-description">
    ${description}
    </p>
    <div class="button-wrapper">
      <button class="modal-btn-add js-add-to-favorite-btn" data-type="addToFavorite">add to favorite</button>
      <button class="modal-btn-back" data-type="backBtn">Back</button>
    </div>
    
    
  </div>`;
}

export function ingredientsTemplateModal({
  _id,
  title,
  type,
  country,
  abv,
  flavour,
}) {
  const favoriteIngredients =
    JSON.parse(localStorage.getItem('favoriteIngredients')) || [];

  const isFavorite = favoriteIngredients.some(item => item._id === _id);
  return ` <div class="modal-cocktails">
    <button class="modal-close-btn" data-type="close-btn">
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <h2 class="modal-titel-cocktails">${title}</h2>
    <h3 class="modal-subtitel-cocktails">${type}</h3>
    <p class="modal-desc">
      <span class="modal-accent">${title}</span> is an Italian alcoholic liqueur,
      considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV, depending on
      the country in which it is sold), obtained from the infusion of herbs and
      fruit (including chinotto and cascarilla) in alcohol and water. It is a
      bitters, characterised by its dark red colour.
    </p>
    <ul class="modal-list list">
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${_id} href="#">Type: ${type}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link'  data-id="${_id} href="#">Country of origin: ${country}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${_id} href="#">Alcohol by volume: ${abv}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${_id} href="#"> Flavour: ${flavour}</a></li>
    </ul>
    <div class="cocktails-wrapper">
      <button class="modal-btn-add js-ingredient-favorite-btn" data-id="${_id}">${
    isFavorite ? 'remove from favorite' : 'add to favorite'
  }</button>
      <button class="modal-btn-back" data-type="backToCocktail">Back</button>
    </div>
  </div>`;
}
