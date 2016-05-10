document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#dribbble-container');
  fetch('http://feedr.mar.co.de/dribbble')
    .then((res) => res.json())
    .then((shots) => {
      console.log(shots);
      shots.forEach((shot) => {
        let el = document.createElement('li');
        el.innerHTML = `
<a style="display: block;" href="${shot.html_url}">
  <img src="${shot.images.hidpi}">
  <div>${shot.title}</div>
  <div>${shot.user.name}</div>
</a>
`;
        container.appendChild(el);
      });
    });
});
