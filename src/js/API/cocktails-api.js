import axios from 'axios';

export async function getRandomCocktails() {
  const baseURL = 'https://drinkify.b.goit.study/api/v1';
  const endPoint = '/cocktails/';
  const url = baseURL + endPoint;

  const params = {
    r: 9,
  };

  try {
    const res = await axios.get(url, { params });
    /* console.log(res.data); */
    return res.data;
  } catch (error) {
    console.error('Failed to fetch random cocktails:', error);
    return null;
  }
}

export function searchCocktailsByLetter(queryfirstLetter) {
  const BASE_URL = 'https://drinkify.b.goit.study/api/v1';
  const END_POINT = '/cocktails/search/';
  const params = new URLSearchParams({
    f: queryfirstLetter,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      return data;
    });
}

export async function searchCocktailsByName(queryCocktailName) {
  const baseURL = 'https://drinkify.b.goit.study/api/v1';
  const endPoint = '/cocktails/search/';
  const url = baseURL + endPoint;

  const params = {
    s: queryCocktailName,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

export async function lookUpCocktails(cocktailID) {
  const baseURL = 'https://drinkify.b.goit.study/api/v1';
  const endPoint = '/cocktails/lookup/';
  const url = baseURL + endPoint;

  const params = {
    id: cocktailID,
  };

  const res = await axios.get(url, { params });
  return res.data[0];
}

export async function searchIngredientsByID(ingredientID) {
  const baseURL = 'https://drinkify.b.goit.study/api/v1';
  const endPoint = `/ingredients/${ingredientID}`;
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data[0];
}
