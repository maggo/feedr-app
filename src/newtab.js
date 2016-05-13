document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#container');
  fetch('http://feedr.mar.co.de/dribbble')
    .then((res) => res.json())
    .then((shots) => {
      //console.log(shots);
      shots.forEach((shot) => {
        let el = document.createElement('div');
        el.innerHTML = `
<a style="display: block;" href="${shot.html_url}">
  <img src="${shot.images.hidpi}">
  <p>${shot.title}<br><span>by ${shot.user.name}</span></p>
</a>
`;
        container.appendChild(el);
      });
    });
});
