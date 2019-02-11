import axios from 'axios';
import API_SECRET_KEY from 'secrets';

const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=';

function getGif(searchString) {
  axios.get(`${BASE_URL}${searchString}&api_key=${API_SECRET_KEY}`);
}

document.addEventListener('DOMContentLoaded', function() {});
