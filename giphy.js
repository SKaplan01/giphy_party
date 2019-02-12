//to make the request with Node.js (server side) using axios
//CANNOT do this client side, but can run in console

// const axios = require('axios');
// const { API_SECRET_KEY } = require('./secrets');

const BASE_URL = 'http://api.giphy.com/v1/gifs/search?q=';

// axios
//   .get(`${BASE_URL}dog&api_key=${API_SECRET_KEY}`)
//   .then(function(resp) {
//     console.log(resp.data.data[0].embed_url);
//   })
//   .catch(err => console.log(err));

function getGif(searchString) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      console.log(JSON.parse(XHR.responseText).data[0].images.original.url);
      let img_url = JSON.parse(XHR.responseText).data[0].images.original.url;
      let newGif = document.createElement('img');
      newGif.setAttribute('src', img_url);
      let gifContainer = document.getElementById('div-container');
      gifContainer.appendChild(newGif);
    }
  };
  XHR.open('GET', `${BASE_URL}${searchString}&api_key=${API_SECRET_KEY}`);
  XHR.send();
}

//can't figure out how to XHR with promises
document.addEventListener('DOMContentLoaded', function() {
  let searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let searchString = document.querySelector('input');
    getGif(searchString.value);
    // .then(function(response) {
    //   // img_src = response;
    //   console.log(response);
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
    // console.log(img_src);
    // return img_src;
  });
});
