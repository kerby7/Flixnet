// Api key to be used in website from TMDB
const api = "api_key=58b69ee92a625c5b7d80d7e05e79cbd9";

// Saving the base url for further use:
const base_url = "https://api.themoviedb.org/3";

//Banner Image (Category wise)
const image_url = "https://image.tmdb.org/t/p/w300";

// Banner url (Fetching movies from url)
const banner_url = "https://image.tmdb.org/t/p/original";

// Fetch quest objects for movies data
const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchScifi: `${base_url}/discover/movie?${api}&with_genres=878`,
  fetchDrama: `${base_url}/discover/movie?${api}&with_genres=18`,
  fetchAnimated: `${base_url}/discover/movie?${api}&with_genres=16`,
};

// Truncating a string to retreive only a certain portion of the movie description:
function truncate(str, n) {
  // Providing length of the string as n, if str is > n, we only return n - 1 + add '...'
  // Else we return string unmodified.
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Banner fetching for Originals:

fetch(requests.fetchNetflixOriginals)
  // Returning the request from url stored in the requests object.
  .then((res) => res.json())

  // The response from the server is noted(i. e, a promise is returned. It returns the resolve in a JSON format)
  // The JSON data is further used to process a random movie on the banner screen. Json data is parsed into data and passed as argument to then method.
  .then((data) => {
    //setMovie selects a random number from the data fetched from the url and sets a random movie evrytime JS runs on the browser.
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner-title");
    var banner_desc = document.getElementById("banner-description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerHTML = truncate(setMovie.overview, 150);
    banner_title.innerHTML = truncate(setMovie.name);
  });

//Fetching movie rows on categories:
fetch(requests.fetchNetflixOriginals)
.then((res) => res.json())

.then((data) => {
  const headRow = document.getElementById("headrows");
  const rows = document.createElement("div");
  rows.className = "row";
  rows.classList.add('netflixrow');
  headRow.appendChild(rows);

  const title = document.createElement("h2");
  title.className =  "row-title";
  title.innerHTML = "NETFLIX ORIGINALS";

  rows.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row-posters";
  rows.appendChild(row_posters);

  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row-poster-large";
    var s = movie.name.replace(/\s+/g, "");
    poster.id = s;
    poster.src = image_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
});

//Trending
fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) =>{

  const headRow = document.getElementById("headrows");
  const rows = document.createElement("div");
  rows.className = "row";
  headRow.appendChild(rows);

  const title = document.createElement("h2");
  title.className =  "row-title";
  title.innerHTML = "Top Rated";
  rows.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row-posters";
  rows.appendChild(row_posters);


  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row-poster-large";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = image_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
  });

// Action Movies
fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) =>{

  const headRow = document.getElementById("headrows");
  const rows = document.createElement("div");
  rows.className = "row";
  headRow.appendChild(rows);

  const title = document.createElement("h2");
  title.className =  "row-title";
  title.innerHTML = "Best in Action";
  rows.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row-posters";
  rows.appendChild(row_posters);


  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row-poster-large";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = image_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
  });

// Comedy Movies
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) =>{

  const headRow = document.getElementById("headrows");
  const rows = document.createElement("div");
  rows.className = "row";
  headRow.appendChild(rows);

  const title = document.createElement("h2");
  title.className =  "row-title";
  title.innerHTML = "Critically Aclaimed Comedy";
  rows.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row-posters";
  rows.appendChild(row_posters);


  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row-poster-large";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = image_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
  });

  // Horror Movies
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) =>{

const headRow = document.getElementById("headrows");
const rows = document.createElement("div");
rows.className = "row";
headRow.appendChild(rows);

const title = document.createElement("h2");
title.className =  "row-title";
title.innerHTML = "Horror Movies";
rows.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row-posters";
rows.appendChild(row_posters);


data.results.forEach((movie) => {
  const poster = document.createElement("img");
  poster.className = "row-poster-large";
  var s2 = movie.id;
  poster.id = s2;
  poster.src = image_url + movie.poster_path;
  row_posters.appendChild(poster);
});
});

// Comedy Movies
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) =>{

  const headRow = document.getElementById("headrows");
  const rows = document.createElement("div");
  rows.className = "row";
  headRow.appendChild(rows);

  const title = document.createElement("h2");
  title.className =  "row-title";
  title.innerHTML = "Best Romance Movies";
  rows.appendChild(title);

  const row_posters = document.createElement("div");
  row_posters.className = "row-posters";
  rows.appendChild(row_posters);


  data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row-poster-large";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = image_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
  });

  // Sci-fi Movies
fetch(requests.fetchScifi)
.then((res) => res.json())

.then((data) =>{

const headRow = document.getElementById("headrows");
const rows = document.createElement("div");
rows.className = "row";
headRow.appendChild(rows);

const title = document.createElement("h2");
title.className =  "row-title";
title.innerHTML = "Best in Sci-fi";
rows.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row-posters";
rows.appendChild(row_posters);


data.results.forEach((movie) => {
  const poster = document.createElement("img");
  poster.className = "row-poster-large";
  var s2 = movie.id;
  poster.id = s2;
  poster.src = image_url + movie.poster_path;
  row_posters.appendChild(poster);
});
});


// Drama movies
fetch(requests.fetchDrama)
.then((res) => res.json())

.then((data) =>{

const headRow = document.getElementById("headrows");
const rows = document.createElement("div");
rows.className = "row";
headRow.appendChild(rows);

const title = document.createElement("h2");
title.className =  "row-title";
title.innerHTML = "Crtitcally Aclaimed Drama";
rows.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row-posters";
rows.appendChild(row_posters);


data.results.forEach((movie) => {
  const poster = document.createElement("img");
  poster.className = "row-poster-large";
  var s2 = movie.id;
  poster.id = s2;
  poster.src = image_url + movie.poster_path;
  row_posters.appendChild(poster);
});
});


// Animation movies
fetch(requests.fetchAnimated)
.then((res) => res.json())

.then((data) =>{

const headRow = document.getElementById("headrows");
const rows = document.createElement("div");
rows.className = "row";
headRow.appendChild(rows);

const title = document.createElement("h2");
title.className =  "row-title";
title.innerHTML = "Animation Superhits";
rows.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row-posters";
rows.appendChild(row_posters);


data.results.forEach((movie) => {
  const poster = document.createElement("img");
  poster.className = "row-poster-large";
  var s2 = movie.id;
  poster.id = s2;
  poster.src = image_url + movie.poster_path;
  row_posters.appendChild(poster);
});
});




