const films = [
  { name: "Charm City Kings", link: "film/action/charm city king.html", image: "https://image.tmdb.org/t/p/original/9qp3fOzlUImJevdCJbAfl9A6yFI.jpg", description: "Mouse rêve d'intégrer un club de motos et de trouver sa place dans Baltimore." },
  { name: "After", link: "film/drame/after 1.html", image: "https://fr.web.img3.acsta.net/pictures/19/04/03/17/19/3475089.jpg", description: "L'histoire de Tessa, une jeune étudiante, et Hardin, un étudiant rebelle." },
  { name: "un petit truc en plus", link: "film/comedie/un petit truc en plus.html", image: "https://fr.web.img6.acsta.net/pictures/24/03/01/11/14/2965930.jpg", description: "Un petit truc en plus est une comédie romantique où l'on suit l'histoire de Daniel, un homme ordinaire qui voit sa vie bouleversée lorsqu'il rencontre Lisa" },
  { name: "the farm", link: "film/horeur/the farm.html", image: "https://fr.web.img5.acsta.net/pictures/18/10/24/15/18/1409655.jpg", description: "Dans The Farm, un couple se retrouve pris en otage dans une ferme isolée" }
];

function showSuggestions() {
  let query = document.getElementById('search-input').value.toLowerCase();
  let suggestions = films.filter(film => film.name.toLowerCase().includes(query));
  let suggestionsList = document.getElementById('suggestions-list');
  
  suggestionsList.innerHTML = '';
  
  if (suggestions.length > 0) {
    suggestionsList.style.display = 'block';
    suggestions.forEach(film => {
      let suggestionItem = document.createElement('div');
      suggestionItem.innerHTML = `
        <img src="${film.image}" alt="${film.name}">
        <div>
          <strong>${film.name}</strong>
          <div class="description">${film.description}</div>
        </div>
      `;
      suggestionItem.onclick = function() {
        window.location.href = film.link;
      };
      suggestionsList.appendChild(suggestionItem);
    });
  } else {
    suggestionsList.style.display = 'none';
  }
}

function searchMovie() {
  let query = document.getElementById('search-input').value.toLowerCase();
  let film = films.find(f => f.name.toLowerCase() === query);
  if (film) {
    window.location.href = film.link;
  } else {
    alert("Film non trouvé. Essayez un autre terme.");
  }
}
