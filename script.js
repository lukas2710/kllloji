const films = [
  { name: "Charm City Kings", link: "../action/charm cityking.html", image: "https://fr.web.img3.acsta.net/pictures/20/06/29/13/00/2524555.jpg", description: "Mouse rêve d'intégrer un club de motos et de trouver sa place dans Baltimore." },
  { name: "After", link: "../drame/after 1.html", image: "https://fr.web.img3.acsta.net/pictures/19/04/03/17/19/3475089.jpg", description: "L'histoire de Tessa, une jeune étudiante, et Hardin, un étudiant rebelle." },
  { name: "The Matrix", link: "the-matrix.html", image: "https://image.tmdb.org/t/p/w500/1bTlYlQLhfFe5F2kxY8Di3UpmlB.jpg", description: "Un hacker découvre la vérité sur la réalité et un monde simulé." },
  { name: "Inception", link: "inception.html", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", description: "Un voleur peut pénétrer dans les rêves des gens pour voler leurs secrets." }
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
