import axios from 'axios';

const API_URL = 'https://api.pokemontcg.io/v1';

export const getPokemonCatalog = () => new Promise((resolve, reject) => {
  axios.get(`${API_URL}/cards?subtype=Basic`)
    .then((response) => {
      const { data } = response;
      const { cards } = data;

      if (cards.length > 0) {
        resolve(cards);
      } else {
        resolve([]);
      }
    })
    .catch((error) => {
      reject(error);
    });
});
