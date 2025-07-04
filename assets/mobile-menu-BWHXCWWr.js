import{a as d}from"./vendor-Gv3iafvG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const k={toggleMenuDropdownBtn:document.querySelector(".js-dropdown-menu-desktop-item"),menuDropdown:document.querySelector(".js-menu-list-dropdown")};var m;(m=k.toggleMenuDropdownBtn)==null||m.addEventListener("click",L);function L(){k.menuDropdown.classList.toggle("is-open")}async function M(){const a="https://drinkify.b.goit.study/api/v1"+"/cocktails/",o={r:8};try{return(await d.get(a,{params:o})).data}catch(e){return console.error("Failed to fetch random cocktails:",e),null}}function O(t){const s="https://drinkify.b.goit.study/api/v1",a="/cocktails/search/",o=new URLSearchParams({f:t}),e=`${s}${a}?${o}`;return fetch(e).then(i=>{if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return i.json()}).then(i=>i)}async function C(t){const o="https://drinkify.b.goit.study/api/v1"+"/cocktails/search/",e={s:t};return(await d.get(o,{params:e})).data}async function F(t){const o="https://drinkify.b.goit.study/api/v1"+"/cocktails/lookup/",e={id:t};return(await d.get(o,{params:e})).data[0]}async function v(t){const s="https://drinkify.b.goit.study/api/v1",a=`/ingredients/${t}`,o=s+a;return(await d.get(o)).data[0]}function S({_id:t,drink:s,drinkThumb:a,description:o}){return` <li class="cocktails-list-item list"  data-id=${t}>
          <img
            class="cocktails-img"
            src="${a}"
            width="307"
            height="257"
            alt="${s}"
          />
          <h3 class="cocktails-subtitel">${s}</h3>
          <p class="cocktails-desc">
           ${o}
          </p>
          <div class="cocktails-btns-wrapper">
            <button class="cocktails-learn-btn" type="button" data-type="learnMore">learn more</button>
            <button class="cocktails-btn-like" type="button" data-type="addLikeToFavorite">
              <svg class="cocktails-icon" data-type="cocktail-icon" width="18" height="18">
                <use href="../icons/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </li>`}function q(t){return t.map(S).join("")}function N(t){return t.map(({_id:s,drink:a,drinkThumb:o,description:e})=>`
      <li class="cocktails-list-item list" data-id=${s}>
        <img
          class="cocktails-img"
          src="${o}"
          width="307"
          height="257"
          alt="${a}"
        />
        <h3 class="cocktails-subtitel">${a}</h3>
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
      `).join("")}function P(t){return t.map(({_id:s,drink:a,title:o,description:e,alcoholic:i,type:c})=>`
      <li class="cocktails-list-item list" data-id=${s}>
        <h3 class="cocktails-subtitel">${o}</h3>
        <h4 class="modal-subtitel-cocktails">${c}</h4>
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
      `).join("")}function E({_id:t,drink:s,drinkThumb:a,description:o,ingredients:e=[]}){const i=e.map(({title:c,measure:r,ingredientId:u})=>`<li class="modal-list-item js-modal-list-item" data-id='${u}'><a class='ingredients-btn link' href="#">${r?`${r} `:""}${c}</a></li>`).join("");return`<div class="modal-ingredients list" data-id="${t}">
    <button class="modal-close-btn" data-type='close-btn'>
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-wrapper">
      <img
        class="modal-image"
        src="${a}"  
        alt="${s}"
      />
      <div>
        <h2 class="modal-main-titel">${s}</h2>
        <h3 class="modal-titel">ingredients</h3>
        <p class="modal-desc-ingredients">Per cocktail</p>
        <ul class="modal-list list js-modal-list">
        ${i}
        </ul>
      </div>
    </div>
    <h4 class="modal-subtitel">Instructions:</h4>
    <p class="modal-description">
    ${o}
    </p>
    <div class="button-wrapper">
      <button class="modal-btn-add js-add-to-favorite-btn" data-type="addToFavorite">add to favorite</button>
      <button class="modal-btn-back" data-type="backBtn">Back</button>
    </div>
  </div>`}function $({_id:t,title:s,type:a,country:o,abv:e,flavour:i}){const r=(JSON.parse(localStorage.getItem("favoriteIngredients"))||[]).some(u=>u._id===t);return` <div class="modal-cocktails">
    <button class="modal-close-btn" data-type="close-btn">
      <svg class="modal-close-icon" width="22" height="22">
        <use href="../icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <h2 class="modal-titel-cocktails">${s}</h2>
    <h3 class="modal-subtitel-cocktails">${a}</h3>
    <p class="modal-desc">
      <span class="modal-accent">${s}</span> is an Italian alcoholic liqueur,
      considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV, depending on
      the country in which it is sold), obtained from the infusion of herbs and
      fruit (including chinotto and cascarilla) in alcohol and water. It is a
      bitters, characterised by its dark red colour.
    </p>
    <ul class="modal-list list">
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#">Type: ${a}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link'  data-id="${t} href="#">Country of origin: ${o}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#">Alcohol by volume: ${e}</a></li>
      <li class="modal-list-item js-modal-list-item"><a class='ingredients-btn link' data-id="${t} href="#"> Flavour: ${i}</a></li>
    </ul>
    <div class="cocktails-wrapper">
      <button class="modal-btn-add js-ingredient-favorite-btn" data-id="${t}">${r?"remove from favorite":"add to favorite"}</button>
      <button class="modal-btn-back" data-type="backBtn">Back</button>
    </div>
  </div>`}const l={backdrop:document.querySelector(".backdrop")};function R(t){const s=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];s.some(o=>o._id===t._id)||(s.push(t),localStorage.setItem("favoriteCocktails",JSON.stringify(s)))}function U(t,s){const a=s.querySelector('[data-type="addToFavorite"]');if(!a)return;let e=(JSON.parse(localStorage.getItem("favoriteCocktails"))||[]).some(c=>c._id===t._id);a.textContent=e?"remove from favorites":"add to favorite";const i=a.cloneNode(!0);a.replaceWith(i),i.addEventListener("click",()=>{let c=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];e?(c=c.filter(r=>r._id!==t._id),i.textContent="add to favorite",e=!1):(c.push(t),i.textContent="remove from favorites",e=!0),localStorage.setItem("favoriteCocktails",JSON.stringify(c))})}l.backdrop.addEventListener("click",I);async function I(t){const a=t.target.closest(".js-modal-list-item").dataset.id;if(!a)return;const o=await v(a);console.log(o),l.backdrop.innerHTML=$(o),l.backdrop.classList.remove("visually-hidden")}l.backdrop.addEventListener("click",w);function w(t){const s=t.target.closest(".js-ingredient-favorite-btn");if(!s)return;const a=s.dataset.id,o=JSON.parse(localStorage.getItem("favoriteIngredients"))||[];if(o.some(i=>i._id===a)){const i=o.filter(c=>c._id!==a);localStorage.setItem("favoriteIngredients",JSON.stringify(i)),s.textContent="add to favorite"}else v(a).then(i=>{o.push(i),localStorage.setItem("favoriteIngredients",JSON.stringify(o)),s.textContent="remove from favorite"})}//! Закриваємо вікно!!!
l.backdrop.addEventListener("click",function(t){const s=t.target.closest('[data-type="close-btn"]'),a=t.target===l.backdrop,o=t.target.closest('[data-type="backBtn"]');(s||a||o)&&l.backdrop.classList.add("visually-hidden")});//! Закриваємо вікно!!!
const n={mobileMenu:document.querySelector(".js-mobile-menu"),openBtn:document.querySelector(".js-mobile-menu-open"),closeBtn:document.querySelector(".js-mobile-menu-close"),openSubmenu:document.querySelector(".js-mobile-menu-open-item"),mobileSubmenu:document.querySelector(".js-mobile-menu-dropdown"),toggleTheme:document.querySelector(".js-toggle-theme"),toggleThemeDesktop:document.querySelector(".js-toggle-theme-desktop"),bodyTheme:document.querySelector("body"),imageWhite:document.querySelector(".js-white-theme"),imageBlack:document.querySelector(".js-black-theme")},y=()=>{n.mobileMenu.classList.toggle("is-open")};var g;(g=n.openBtn)==null||g.addEventListener("click",y);var p;(p=n.closeBtn)==null||p.addEventListener("click",y);var h;(h=n.openSubmenu)==null||h.addEventListener("click",B);function B(){console.log("Open button clicked"),n.mobileSubmenu.classList.toggle("is-open")}const T=localStorage.getItem("theme");T==="dark"&&n.bodyTheme.classList.add("dark-theme");var b;(b=n.toggleThemeDesktop)==null||b.addEventListener("click",()=>{n.bodyTheme.classList.toggle("dark-theme"),n.bodyTheme.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),n.imageWhite.classList.remove("dark-theme"),n.imageBlack.classList.add("dark-theme")):(localStorage.setItem("theme","light"),n.imageWhite.classList.add("dark-theme"),n.imageBlack.classList.remove("dark-theme"))});var f;(f=n.toggleTheme)==null||f.addEventListener("click",()=>{n.bodyTheme.classList.toggle("dark-theme"),n.bodyTheme.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),n.imageWhite.classList.remove("dark-theme"),n.imageBlack.classList.add("dark-theme")):(localStorage.setItem("theme","light"),n.imageWhite.classList.add("dark-theme"),n.imageBlack.classList.remove("dark-theme"))});export{C as a,E as b,q as c,U as d,R as e,P as f,M as g,$ as i,F as l,N as r,O as s};
//# sourceMappingURL=mobile-menu-BWHXCWWr.js.map
