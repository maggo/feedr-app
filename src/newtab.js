/* globals chrome */

function buildItems(shots) {
  const container = document.querySelector('#container');
  shots.forEach((shot) => {
    let el = document.createElement('div');
    let image;

    ['hidpi', 'normal', 'teaser'].some((size) => {
      const imageExists = shot.images[size];
      if (imageExists) {
        image = shot.images[size];
      }
      return imageExists;
    });

    el.innerHTML = `
<a style="display: block;" href="${shot.html_url}">
  <img width="800" height="600" src="${image}">
  <p>${shot.title}<br><span>by ${shot.user.name}</span></p>
</a>
`;
    container.appendChild(el);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(['cache', 'lastUpdated'], (items) => {
    // Cache invalidation
    if (!items.lastUpdated || Date.now() - items.lastUpdated > 5 * 60 * 1000) {
      fetch('https://feedr.mar.co.de/dribbble')
          .then((res) => res.json())
          .then((shots) => {
            buildItems(shots);
            chrome.storage.local.set({cache: shots, lastUpdated: Date.now()});
          });
          document.getElementById('container').className += " fadein";
    } else {
      buildItems(items.cache);
      document.getElementById('container').className += " fadein";
    }
  });

var myArray = ['mei König', 'mei Beschda', 'mei Jung', 'mei Babo', 'Sonnenschein', 'Boss'];  
var rand = myArray[Math.floor(Math.random() * myArray.length)];

var heading = document.getElementById('heading');
heading.innerHTML = heading.innerHTML + rand;
});
