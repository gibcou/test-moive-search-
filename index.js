const apiKey = "7764f155";

async function searchMovies() {
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  if (!query) return;

  const res = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
  const data = await res.json();

  if (data.Response === "False") {
    resultsDiv.innerHTML = "<p>No movies found</p>";
    return;
  }

  data.Search.forEach(movie => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/180"}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    resultsDiv.appendChild(movieEl);
  });
}
