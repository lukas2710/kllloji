const films = [
  { name: "Charm City Kings", link: "film/action/charm city king.html", image: "https://image.tmdb.org/t/p/original/9qp3fOzlUImJevdCJbAfl9A6yFI.jpg", description: "Mouse rêve d'intégrer un club de motos et de trouver sa place dans Baltimore." },
  { name: "After", link: "film/drame/after 1.html", image: "https://fr.web.img3.acsta.net/pictures/19/04/03/17/19/3475089.jpg", description: "L'histoire de Tessa, une jeune étudiante, et Hardin, un étudiant rebelle." },
  { name: "un petit truc en plus", link: "film/comedie/un petit truc en plus.html", image: "https://fr.web.img6.acsta.net/pictures/24/03/01/11/14/2965930.jpg", description: "Un petit truc en plus est une comédie romantique où l'on suit l'histoire de Daniel, un homme ordinaire qui voit sa vie bouleversée lorsqu'il rencontre Lisa." },
  { name: "the farm", link: "film/horeur/the farm.html", image: "https://fr.web.img5.acsta.net/pictures/18/10/24/15/18/1409655.jpg", description: "Dans The Farm, un couple se retrouve pris en otage dans une ferme isolée." },
  
  // Films supplémentaires pour atteindre 10 000 films
  { name: "After chapitre 2", link: "film/drame/after 2.html", image: "https://m.media-amazon.com/images/M/MV5BNDhkNzQ1MjgtNWM4MC00MjNjLWEyZmMtMTE3MjU3NTlmMmU1XkEyXkFqcGc@._V1_.jpg", description: "After Chapitre 2 suit Tessa et Hardin alors qu'ils naviguent à travers les turbulences de leur relation amoureuse." },
  { name: "After chapitre 3", link: "film/drame/after 3.html", image: "https://fr.web.img6.acsta.net/pictures/21/09/28/11/52/4645987.jpg", description: "After Chapitre 3 continue de suivre Tessa et Hardin alors qu'ils tentent de trouver un équilibre dans leur relation tumultueuse." },
  { name: "After chapitre 4", link: "film/drame/after 4.html", image: "https://fr.web.img4.acsta.net/pictures/22/09/06/09/09/1009418.jpg", description: "After Chapitre 4 poursuit l’histoire tumultueuse de Tessa et Hardin. " },
  { name: "soda le reve americain", link: "film/comedie/soda le reve americain.html", image: "https://images.justwatch.com/poster/306072882/s718/soda-le-reve-americain.jpg", description: "Tout va mal pour Adam : il vient de rater son baccalauréat, ses amis Slimane et Ludovic s'apprêtent à prendre des routes différentes" },
  
  // Vous pouvez répéter ce format jusqu'à atteindre 10 000 films
  { name: "Zootopie", link: "film/animation/zootopie.html", image: "https://fr.web.img3.acsta.net/pictures/15/12/11/14/34/280851.jpg", description: "Zootopie raconte l'histoire de Judy Hopps, une lapine ambitieuse qui rêve de devenir la première policière de Zootopie." },
  { name: "Very bad trip 2", link: "film/comedie/Very bad trip 2.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/82/09/89/19715770.jpg", description: "Les trois amis se retrouvent une fois de plus dans une situation folle lors d'un voyage à l'étranger." },
  { name: "very bad trip", link: "film/comedie/very bad trip 1.html", image: "https://fr.web.img4.acsta.net/medias/nmedia/18/70/03/08/19109117.jpg", description: "Un groupe d'amis se réveille après une nuit de folie à Las Vegas, mais ils ne se souviennent de rien. Ils partent à la recherche de ce qu'il s'est passé." },
   { name: "toy story", link: "film/animation/toy story.html", image: "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Les jouets prennent vie lorsqu'ils sont laissés seuls. Suivez Woody, Buzz et leurs amis dans cette aventure inoubliable !" },
{ name: "toy story 2", link: "film/animation/toy story 2.html", image: "https://www.ecranlarge.com/content/uploads/2020/08/ldosztevyoudrdo5nvoq4cq28al-131-scaled.jpg", description: "Woody, le cowboy, est volé par un collectionneur, et Buzz, Jessie et les autres amis de Woody se lancent dans une mission de sauvetage pour le ramener chez Andy" },
{ name: "scary movie 5", link: "film/comedie/scary movie 5.html", image: "https://fr.web.img6.acsta.net/pictures/16/05/17/17/25/015640.jpg", description: "Un couple emménage dans une maison hantée, où des événements surnaturels se produisent. Ils doivent faire face à des esprits malveillants tout en essayant de sauver leur famille." },
{ name: "la none 2", link: "film/horeur/la none 2.html", image: "https://img.filmsactu.net/datas/films/l/a/la-nonne/xl/la-nonne-6273e83b2cb69.jpg", description: "En 1956, la malédiction de la nonne Valak reprend vie dans une abbaye isolée en Roumanie. Un groupe de personnes est confronté à une force démoniaque qu'ils ne comprennent pas." },
{ name: "scary movie", link: "film/comedie/scary movie.html", image: "https://fr.web.img2.acsta.net/medias/04/97/17/049717_af.jpg", description: "Un groupe d'adolescents est traqué par un tueur masqué après avoir accidentellement tué un homme dans un accident de voiture. Ils doivent échapper à cette menace tout en faisant face à des événements bizarres et des situations effrayantes." },
{ name: "Film 8", link: "film/comedie/film8.html", image: "https://image.tmdb.org/t/p/original/film8.jpg", description: "Description du film 8." },
{ name: "Film 8", link: "film/comedie/film8.html", image: "https://image.tmdb.org/t/p/original/film8.jpg", description: "Description du film 8." },
{ name: "Film 8", link: "film/comedie/film8.html", image: "https://image.tmdb.org/t/p/original/film8.jpg", description: "Description du film 8." },
{ name: "Film 8", link: "film/comedie/film8.html", image: "https://image.tmdb.org/t/p/original/film8.jpg", description: "Description du film 8." }, { name: "Film 8", link: "film/comedie/film8.html", image: "https://image.tmdb.org/t/p/original/film8.jpg", description: "Description du film 8." },

  // Ajoutez d'autres films ici pour arriver à 10 000
  // ...
  
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
