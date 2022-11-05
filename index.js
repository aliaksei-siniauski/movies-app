const APPLINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f9cb2616c443e8c82e2426c6f5af1e1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=4f9cb2616c443e8c82e2426c6f5af1e1&query=";

const main = document.querySelector(".movies");
const form = document.querySelector("#form");
const search = document.querySelector("#query");
const moviesContainer = document.querySelector(".movies__container");

const returnMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((el) => {
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        const divRow = document.createElement("div");
        divRow.setAttribute("class", "row");

        const divCollumn = document.createElement("div");
        divCollumn.setAttribute("class", "collumn");

        const img = document.createElement("img");
        img.setAttribute("class", "card__img");
        img.setAttribute("id", "image");

        const title = document.createElement("h3");
        title.setAttribute("class", "movie-title");
        title.setAttribute("id", "title");

        title.innerHTML = `${el.title}`;
        img.src = IMG_PATH + el.poster_path;

        const divOverview = document.createElement("div");
        divOverview.setAttribute("class", "overview");
        divOverview.innerHTML = ` ${el.overview}`;

        const divOverlay = document.createElement("div");
        divOverlay.setAttribute("class", "overlay");

        divCard.appendChild(img);
        divCard.appendChild(title);
        divCard.appendChild(divOverview);

        divCollumn.appendChild(divCard);
        divCollumn.appendChild(divOverlay);
        divRow.appendChild(divCollumn);

        moviesContainer.appendChild(divRow);
      });
    });
};

returnMovies(APPLINK);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesContainer.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
