document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#container');
  fetch('https://feedr.mar.co.de/dribbble')
    .then((res) => res.json())
    .then((shots) => {
      shots.forEach((shot) => {
        let el = document.createElement('div');
        ['hidpi', 'normal', 'teaser'].forEach((size) => {
          if (shot.image[size]]) {
            let image = shot.images[size];
            break;
          }
        });
        el.innerHTML = `
<a style="display: block;" href="${shot.html_url}">
  <img src="${image}">
  <p>${shot.title}<br><span>by ${shot.user.name}</span></p>
</a>
`;
        container.appendChild(el);
      });
    });
});
