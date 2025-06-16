export async function getRandomCocktails() {
  const baseURL = 'https://drinkify.b.goit.study/api/v1';
  const endPoint = '/cocktails/';
  const url = baseURL + endPoint;

  const params = {
    r: 8,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

export function searchCocktails(query, page) {
  const BASE_URL = 'https://drinkify.b.goit.study/api/v1';
  const END_POINT = '/search/';
  const params = new URLSearchParams({
    s: query,
    page: 1,
  });

  //   const url = `{BASE_URL}{END_POINT}?{params}`;

  const options = {
    headers: {
      header1: 1,
      header2: 2,
      header3: 3,
    },
  };

  return fetch(url /* , options */).then(res => res.json());
}
