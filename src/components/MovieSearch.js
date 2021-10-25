import React, { useState } from "react";
import MovieCard from "./MovieCard.js";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const getData = async url => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=03facee7eb2ea26101037c927ac0554f&language=en-US&query=${query}&page=1&include_adult=false`;
    getData(url).then(data => setMovies(data.results));
  };

  const handleChagne = e => setQuery(e.target.value);

  const moviesCardComponents = movies
    .filter(movie => movie.poster_path)
    .map(movie => <MovieCard key={movie.id} data={movie} />);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="query" className="form__label">
          <input
            type="text"
            name="query"
            value={query}
            placeholder="Type in a movie name"
            className="form__text-input"
            onChange={handleChagne}
          />
        </label>
        <button className="form__btn" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">{moviesCardComponents}</div>
    </>
  );
}
