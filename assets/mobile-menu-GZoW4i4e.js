import{a as d}from"./vendor-Gv3iafvG.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const k={toggleMenuDropdownBtn:document.querySelector(".js-dropdown-menu-desktop-item"),menuDropdown:document.querySelector(".js-menu-list-dropdown")};var m;(m=k.toggleMenuDropdownBtn)==null||m.addEventListener("click",L);function L(){k.menuDropdown.classList.toggle("is-open")}async function O(){const o="https://drinkify.b.goit.study/api/v1"+"/cocktails/",i={r:9};try{return(await d.get(o,{params:i})).data}catch(e){return console.error("Failed to fetch random cocktails:",e),null}}function F(t){const a="https://drinkify.b.goit.study/api/v1",o="/cocktails/search/",i=new URLSearchParams({f:t}),e=`${a}${o}?${i}`;return fetch(e).then(s=>{if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}).then(s=>s)}async function N(t){const i="https://drinkify.b.goit.study/api/v1"+"/cocktails/search/",e={s:t};return(await d.get(i,{params:e})).data}async function q(t){const i="https://drinkify.b.goit.study/api/v1"+"/cocktails/lookup/",e={id:t};return(await d.get(i,{params:e})).data[0]}async function v(t){const a="https://drinkify.b.goit.study/api/v1",o=`/ingredients/${t}`,i=a+o;return(await d.get(i)).data[0]}function S({_id:t,drink:a,drinkThumb:o,description:i}){const c=(JSON.parse(localStorage.getItem("favoriteCocktails"))||[]).some(l=>l._id===t)?"active":"";return` <li class="cocktails-list-item list"  data-id=${t}>
          <img
            class="cocktails-img"
            src="${o}"
            width="307"
            height="257"
            alt="${a}"
          />
          <h3 class="cocktails-subtitel">${a}</h3>
          <p class="cocktails-desc">
           ${i}
          </p>
          <div class="cocktails-btns-wrapper">
            <button class="cocktails-learn-btn " type="button" data-type="learnMore">learn more</button>
            <button class="cocktails-btn-like" type="button" data-type="addLikeToFavorite">
              <svg class="cocktails-heart cocktails-icon ${c}" data-type="cocktail-icon" width="18" height="18">
                <use href="../icons/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </li>`}function P(t){return t.map(S).join("")}function E(t){return t.map(({_id:a,drink:o,drinkThumb:i,description:e})=>`
      <li class="cocktails-list-item list" data-id=${a}>
        <img
          class="cocktails-img"
          src="${i}"
          width="307"
          height="257"
          alt="${o}"
        />
        <h3 class="cocktails-subtitel">${o}</h3>
        <p class="cocktails-desc">
          ${e}
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
      `).join("")}function J(t){return t.map(({_id:a,title:o,description:i,type:e})=>`
      <li class="ingredients-list-item list" data-id="${a}">
        <h3 class="ingredients-subtitel">${o}</h3>
        <h4 class="modal-subtitel-ingredients">${e}</h4>
        <p class="ingredients-desc">
          ${i}
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
      `).join("")}function $({_id:t,drink:a,drinkThumb:o,description:i,ingredients:e=[]}){const s=e.map(({title:c,measure:l,ingredientId:u})=>`<li class="modal-list-item js-modal-list-item" data-id='${u}'><a class='ingredients-btn link' href="#">${l?`${l} `:""}${c}</a></li>`).join("");return`<div class="modal-ingredients list" data-id="${t}">
    
    <button class="modal-close-btn" data-type='close-btn'>
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-wrapper">
      <img
        class="modal-image"
        src="${o}"  
        alt="${a}"
      />
      <div class="modal-wrapper-act">
        <h2 class="modal-main-titel">${a}</h2>
        <h3 class="modal-titel">ingredients</h3>
        <p class="modal-desc-ingredients">Per cocktail</p>
        <ul class="modal-list list js-modal-list">
        ${s}
        </ul>
      </div>
    </div>
    <h4 class="modal-subtitel">Instructions:</h4>
    <p class="modal-description">
    ${i}
    </p>
    <div class="button-wrapper">
      <button class="modal-btn-add js-add-to-favorite-btn" data-type="addToFavorite">add to favorite</button>
      <button class="modal-btn-back" data-type="backBtn">Back</button>
    </div>
    
    
  </div>`}function I({_id:t,title:a,type:o,country:i,abv:e,flavour:s}){const l=(JSON.parse(localStorage.getItem("favoriteIngredients"))||[]).some(u=>u._id===t);return` <div class="modal-cocktails">
    <button class="modal-close-btn" data-type="close-btn">
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <h2 class="modal-titel-cocktails">${a}</h2>
    <h3 class="modal-subtitel-cocktails">${o}</h3>
    <p class="modal-desc">
      <span class="modal-accent">${a}</span> is an Italian alcoholic liqueur,
      considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV, depending on
      the country in which it is sold), obtained from the infusion of herbs and
      fruit (including chinotto and cascarilla) in alcohol and water. It is a
      bitters, characterised by its dark red colour.
    </p>
    <ul class="modal-list list">
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#">Type: ${o}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link'  data-id="${t} href="#">Country of origin: ${i}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#">Alcohol by volume: ${e}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#"> Flavour: ${s}</a></li>
    </ul>
    <div class="cocktails-wrapper">
      <button class="modal-btn-add js-ingredient-favorite-btn" data-id="${t}">${l?"remove from favorite":"add to favorite"}</button>
      <button class="modal-btn-back" data-type="backToCocktail">Back</button>
    </div>
  </div>`}const r={backdrop:document.querySelector(".backdrop")};function R(t){const a=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];a.some(i=>i._id===t._id)||(a.push(t),localStorage.setItem("favoriteCocktails",JSON.stringify(a)))}function w(t,a){const o=a.querySelector('[data-type="addToFavorite"]');if(!o)return;let e=(JSON.parse(localStorage.getItem("favoriteCocktails"))||[]).some(c=>c._id===t._id);o.textContent=e?"remove from favorites":"add to favorite";const s=o.cloneNode(!0);o.replaceWith(s),s.addEventListener("click",()=>{let c=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];e?(c=c.filter(l=>l._id!==t._id),s.textContent="add to favorite",e=!1):(c.push(t),s.textContent="remove from favorites",e=!0),localStorage.setItem("favoriteCocktails",JSON.stringify(c))})}r.backdrop.addEventListener("click",T);async function T(t){const o=t.target.closest(".js-modal-list-item").dataset.id;if(!o)return;const i=await v(o);document.querySelector(".modal-ingredients").classList.add("visually-hidden"),r.backdrop.innerHTML=I(i)}r.backdrop.addEventListener("click",B);function B(t){const a=t.target.closest(".js-ingredient-favorite-btn");if(!a)return;const o=a.dataset.id,i=JSON.parse(localStorage.getItem("favoriteIngredients"))||[];if(i.some(s=>s._id===o)){const s=i.filter(c=>c._id!==o);localStorage.setItem("favoriteIngredients",JSON.stringify(s)),a.textContent="add to favorite"}else v(o).then(s=>{i.push(s),localStorage.setItem("favoriteIngredients",JSON.stringify(i)),a.textContent="remove from favorite"})}//! Закриваємо вікно!!!
r.backdrop.addEventListener("click",function(t){const a=t.target.closest('[data-type="close-btn"]'),o=t.target===r.backdrop,i=t.target.closest('[data-type="backToCocktail"]'),e=t.target.closest('[data-type="backBtn"]'),s=JSON.parse(localStorage.getItem("currentCocktail"));if(a||o||e){r.backdrop.classList.add("visually-hidden"),r.backdrop.innerHTML="";return}i&&s&&(r.backdrop.innerHTML=$(s),r.backdrop.classList.remove("visually-hidden"),w(s,r.backdrop))});//! Закриваємо вікно!!!
const n={mobileMenu:document.querySelector(".js-mobile-menu"),openBtn:document.querySelector(".js-mobile-menu-open"),closeBtn:document.querySelector(".js-mobile-menu-close"),openSubmenu:document.querySelector(".js-mobile-menu-open-item"),mobileSubmenu:document.querySelector(".js-mobile-menu-dropdown"),toggleTheme:document.querySelector(".js-toggle-theme"),toggleThemeDesktop:document.querySelector(".js-toggle-theme-desktop"),bodyTheme:document.querySelector("body"),imageWhite:document.querySelector(".js-white-theme"),imageBlack:document.querySelector(".js-black-theme")},y=()=>{n.mobileMenu.classList.toggle("is-open")};var g;(g=n.openBtn)==null||g.addEventListener("click",y);var p;(p=n.closeBtn)==null||p.addEventListener("click",y);var h;(h=n.openSubmenu)==null||h.addEventListener("click",C);function C(){console.log("Open button clicked"),n.mobileSubmenu.classList.toggle("is-open")}const j=localStorage.getItem("theme");j==="dark"&&n.bodyTheme.classList.add("dark-theme");var b;(b=n.toggleThemeDesktop)==null||b.addEventListener("click",()=>{n.bodyTheme.classList.toggle("dark-theme"),n.bodyTheme.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),n.imageWhite.classList.remove("dark-theme"),n.imageBlack.classList.add("dark-theme")):(localStorage.setItem("theme","light"),n.imageWhite.classList.add("dark-theme"),n.imageBlack.classList.remove("dark-theme"))});var f;(f=n.toggleTheme)==null||f.addEventListener("click",()=>{n.bodyTheme.classList.toggle("dark-theme"),n.bodyTheme.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),n.imageWhite.classList.remove("dark-theme"),n.imageBlack.classList.add("dark-theme")):(localStorage.setItem("theme","light"),n.imageWhite.classList.add("dark-theme"),n.imageBlack.classList.remove("dark-theme"))});export{N as a,$ as b,P as c,w as d,R as e,J as f,O as g,I as i,q as l,E as r,F as s};
//# sourceMappingURL=mobile-menu-GZoW4i4e.js.map
